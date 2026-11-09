import { createFileRoute } from '@tanstack/react-router'
import { products } from '../lib/products'
import { useI18n } from '@/lib/i18n'

export const Route = createFileRoute('/store')({
  component: Store,
})

function Store() {
const { t, pick } = useI18n()

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-[clamp(2rem,5vw,3rem)] font-medium tracking-tight">{t('store.title')}</h1>
        <p className="mt-3 text-[13px] text-black/55">{t('store.intro')}</p>
      </header>

      {products.length === 0 ? (
        <p className="text-[13px] text-black/55">{t('store.empty')}</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.slug} className="group border border-black/10">
              <div className="aspect-square border-b border-black/10 bg-black/[0.03]">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col gap-3 p-4">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-[15px] font-medium tracking-tight">{p.title}</h3>
                  <span className="text-[15px] font-medium tabular-nums">{p.price} EUR</span>
                </div>
                <div className="space-y-1">
                  <p className="label text-black/50">
                    {p.code} · {pick(p.type)}
                  </p>
                  <p className="label text-black/50">
                    {p.resolution} · {p.formats.join(' / ')}
                  </p>
                </div>
                <a
                  href={p.payhipUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 border border-black/25 px-4 py-2 text-center text-[13px] transition-colors hover:bg-black hover:text-white"
                >
                  {t('store.buy')}
                </a>
              </div>
            </article>
          ))}
        </div>
      )}

      <p className="mt-10 text-center text-xs text-neutral-500">{t('store.redirect')}</p>
    </main>
  )
}
