import type { Localized } from './i18n'

export type Product = {
  slug: string
  title: string
  price: number
  image: string
  payhipUrl: string
  code: string
  type: Localized
  resolution: string
  formats: string[]
}


export const products: Product[] = [
  {
    slug: 'NNN1',
    title: 'NNN1',
    price: 25,
    image: '/img/store/nnn9.webp',
    payhipUrl: 'https://payhip.com/b/5h8vr',
    code: 'C-001',
    type: { es: 'Portadas', en: 'Covers', ja: 'カバー', ko: '커버', zh: '封面' },
    resolution: '3000×3000',
    formats: ['PSD', 'PNG'],
  },
    {
    slug: 'NNN2',
    title: 'NNN2',
    price: 25,
    image: '/img/store/nnn8.webp',
    payhipUrl: 'https://payhip.com/b/42pqW',
    code: 'C-002',
    type: { es: 'Portadas', en: 'Covers', ja: 'カバー', ko: '커버', zh: '封面' },
    resolution: '3000×3000',
    formats: ['PSD', 'PNG'],
  },
      {
    slug: 'NNN3',
    title: 'NNN3',
    price: 25,
    image: '/img/store/nnn7.webp',
    payhipUrl: 'https://payhip.com/b/JKYBc',
    code: 'C-003',
    type: { es: 'Portadas', en: 'Covers', ja: 'カバー', ko: '커버', zh: '封面' },
    resolution: '3000×3000',
    formats: ['PSD', 'PNG'],
  },
        {
    slug: 'NNN6',
    title: 'NNN6',
    price: 25,
    image: '/img/store/nnn6.webp',
    payhipUrl: 'https://payhip.com/b/NTXjv',
    code: 'C-004',
    type: { es: 'Portadas', en: 'Covers', ja: 'カバー', ko: '커버', zh: '封面' },
    resolution: '3000×3000',
    formats: ['PSD', 'PNG'],
  },
        {
    slug: 'FFF1',
    title: 'FFF1',
    price: 25,
    image: '/img/store/fff1.webp',
    payhipUrl: 'https://payhip.com/b/yF5Zx',
    code: 'C-005',
    type: { es: 'Portadas', en: 'Covers', ja: 'カバー', ko: '커버', zh: '封面' },
    resolution: '3000×3000',
    formats: ['PSD', 'PNG'],
  },
          {
    slug: 'FFF2',
    title: 'FFF2',
    price: 25,
    image: '/img/store/fff2.webp',
    payhipUrl: 'https://payhip.com/b/yCmIr',
    code: 'C-006',
    type: { es: 'Portadas', en: 'Covers', ja: 'カバー', ko: '커버', zh: '封面' },
    resolution: '3000×3000',
    formats: ['PSD', 'PNG'],
  },
            {
    slug: 'FFF3',
    title: 'FFF3',
    price: 25,
    image: '/img/store/fff3.webp',
    payhipUrl: 'https://payhip.com/b/t0UkR',
    code: 'C-007',
    type: { es: 'Portadas', en: 'Covers', ja: 'カバー', ko: '커버', zh: '封面' },
    resolution: '3000×3000',
    formats: ['PSD', 'PNG'],
  },
              {
    slug: 'FFF4',
    title: 'FFF4',
    price: 25,
    image: '/img/store/fff4.webp',
    payhipUrl: 'https://payhip.com/b/UVmAh',
    code: 'C-008',
    type: { es: 'Portadas', en: 'Covers', ja: 'カバー', ko: '커버', zh: '封面' },
    resolution: '3000×3000',
    formats: ['PSD', 'PNG'],
  },
                {
    slug: 'FFF6',
    title: 'FFF6',
    price: 25,
    image: '/img/store/fff6.webp',
    payhipUrl: 'https://payhip.com/b/PcKeo',
    code: 'C-009',
    type: { es: 'Portadas', en: 'Covers', ja: 'カバー', ko: '커버', zh: '封面' },
    resolution: '3000×3000',
    formats: ['PSD', 'PNG'],
  },
                  {
    slug: 'FFF7',
    title: 'FFF7',
    price: 25,
    image: '/img/store/fff7.webp',
    payhipUrl: 'https://payhip.com/b/SxpZj',
    code: 'C-010',
    type: { es: 'Portadas', en: 'Covers', ja: 'カバー', ko: '커버', zh: '封面' },
    resolution: '3000×3000',
    formats: ['PSD', 'PNG'],
  },
                    {
    slug: 'FFF8',
    title: 'FFF8',
    price: 25,
    image: '/img/store/fff8.webp',
    payhipUrl: 'https://payhip.com/b/iVAIl',
    code: 'C-011',
    type: { es: 'Portadas', en: 'Covers', ja: 'カバー', ko: '커버', zh: '封面' },
    resolution: '3000×3000',
    formats: ['PSD', 'PNG'],
  },
                      {
    slug: 'FFF9',
    title: 'FFF9',
    price: 25,
    image: '/img/store/fff9.webp',
    payhipUrl: 'https://payhip.com/b/kFe7I',
    code: 'C-012',
    type: { es: 'Portadas', en: 'Covers', ja: 'カバー', ko: '커버', zh: '封面' },
    resolution: '3000×3000',
    formats: ['PSD', 'PNG'],
  },
  

  
]
