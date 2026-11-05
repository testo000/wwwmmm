import { createFileRoute, Link, notFound } from '@tanstack/react-router'

import { useViewer } from '@/components/site/viewer'
import { IMAGES, REFS } from '@/content/fixtures'
import { parseBody } from '@/lib/citations'
import { useI18n } from '@/lib/i18n'
import { Reveal, Thumb } from '@/components/site/ui'

export const Route = createFileRoute('/refs/$slug')({
  loader: ({ params }) => {
    const post = REFS.find((r) => r.slug === params.slug)
    if (!post) throw notFound()
    return { slug: post.slug }
  },
  head: ({ loaderData }) => {
    const post = REFS.find((r) => r.slug === loaderData?.slug)
    return { meta: [{ title: post ? `${post.title.es} — Refs` : 'Refs' }] }
  },
  component: RefPostPage,
})

const pad = (n: number) => String(n).padStart(2, '0')

function RefPostPage() {
  const { slug } = Route.useLoaderData()
  const post = REFS.find((r) => r.slug === slug)!
  const { t, pick, locale } = useI18n()
  const { openImage } = useViewer()

  const translated = locale !== 'es' ? post.body[locale] : undefined
  const paragraphs = parseBody(translated ?? post.body.es)
  const cited = paragraphs.flat().filter((s) => s.kind === 'cite')
const total = new Set([...cited.map((s) => s.image), ...(post.gallery?.map((g) => g.image) ?? [])]).size
  const idx = REFS.indexOf(post)
  const next = REFS[(idx + 1) % REFS.length]

  return (
    <article className="mx-auto max-w-[1440px] px-4 md:px-6">
      {/* Title block */}
      <header className="grid gap-6 border-b border-black/10 pt-12 pb-8 md:grid-cols-12 md:pt-16">
        <div className="label md:col-span-2">
          <Link to="/refs" className="hover:text-black">
            ← {t('nav.refs')}
          </Link>
        </div>
        <div className="md:col-span-7">
          <p className="label mb-4">
            {post.code} — {post.date.replaceAll('-', '.')}
          </p>
          <h1 className="max-w-4xl text-5xl leading-[0.95] font-medium tracking-tighter uppercase md:text-7xl">
            {pick(post.title)}
          </h1>

          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-black/60">{pick(post.excerpt)}</p>
        </div>
        <dl className="label grid h-fit grid-cols-[auto_1fr] gap-x-4 gap-y-1 md:col-span-3">
          <dt>title:</dt>
          <dd className="text-black">{post.slug}</dd>
          <dt>tags:</dt>
          <dd className="text-black">{post.tags.join(', ')}</dd>
          <dt>fig:</dt>
          <dd className="text-black">{pad(total)}</dd>
          <dt>lang:</dt>
          <dd className="text-black">{translated ? locale : 'es'}</dd>
        </dl>
      </header>

      {!translated && locale !== 'es' && (
        <p className="label border-b border-black/[0.06] py-2 md:pl-[16.66%]">{t('refs.translationNote')}</p>
      )}

      <div className="mx-auto max-w-[68ch] py-8">
        {paragraphs.map((segments, pi) => (
          <p key={pi} className="mb-5 text-[16px] leading-[1.7]">
            {segments.map((s, si) =>
              s.kind === 'text' ? (
                <span key={si}>{s.text}</span>
              ) : (
                <Reveal key={si} as="span" fade className="inline">
                  <button
                    type="button"
                    className="cite inline text-left"
                    onClick={(e) => openImage(s.image, e, `fig. ${pad(s.index)} — ${s.text}`)}
                  >
                    {s.text}
                    <sup className="ml-0.5 font-mono text-[10px] text-black/50">{pad(s.index)}</sup>
                  </button>
                </Reveal>
              ),
            )}
          </p>
        ))}
      </div>

      {post.gallery && post.gallery.length > 0 && (
        <section className="mx-auto max-w-[1440px] px-4 pt-4 pb-10 md:px-6">
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            {post.gallery.map((g, i) => (
              <Reveal key={g.image} fade delay={(i % 4) * 60}>
                <figure>
                  <Thumb image={g.image} caption={`${g.code} — ${pick(g.title)}`} width={600} />
                  <figcaption className="mt-2 grid grid-cols-[1fr_auto] gap-x-2 text-[12px]">
                    <span className="truncate">{pick(g.title)}</span>
                    <span className="label">
                      {IMAGES[g.image].width}×{IMAGES[g.image].height}
                    </span>
                    <span className="label truncate">{g.code}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Spec card */}
      <footer className="grid gap-6 border-t border-black/10 pt-8 md:grid-cols-12">
        <div className="label md:col-span-2">end</div>
        <dl className="label grid grid-cols-[8rem_1fr] gap-y-1 md:col-span-6">
          <dt>archive id</dt>
          <dd className="text-black">{post.code}</dd>
          <dt>{t('refs.figures')}</dt>
          <dd className="text-black">{pad(total)}</dd>
          <dt>date</dt>
          <dd className="text-black">{post.date}</dd>
        </dl>
        {next && next.slug !== post.slug && (
          <div className="md:col-span-4 md:text-right">
            <Link to="/refs/$slug" params={{ slug: next.slug }} className="group">
              <span className="label">{next.code} →</span>
              <span className="mt-1 block text-[15px] group-hover:underline">{pick(next.title)}</span>
            </Link>
          </div>
        )}
      </footer>
    </article>
  )
}
