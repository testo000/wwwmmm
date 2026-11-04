import { useState } from 'react'
import { Thumb } from '@/components/site/ui'
import type { ImageId } from '@/content/fixtures'
import { cn } from '@/lib/utils'

export function Carousel({ images, caption, width = 800 }: { images: ImageId[]; caption: string; width?: number }) {
  const [i, setI] = useState(0)
  const go = (n: number) => setI((i + n + images.length) % images.length)

  return (
    <div className="relative">
      <Thumb image={images[i]} caption={`${caption} (${i + 1}/${images.length})`} width={width} />

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 px-2 py-1 text-[13px] hover:bg-white"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 px-2 py-1 text-[13px] hover:bg-white"
          >
            →
          </button>
          <div className="mt-2 flex gap-1">
            {images.map((img, n) => (
              <button
                key={img}
                type="button"
                onClick={() => setI(n)}
                aria-label={`Image ${n + 1}`}
                className={cn('h-1 flex-1 transition-colors', n === i ? 'bg-black' : 'bg-black/15')}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
