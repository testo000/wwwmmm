/**
 * Sample content for every section of the site.
 *
 * Everything the pages render comes from this file, so a later milestone can
 * replace these arrays with database queries without touching the UI.
 * Text uses `Localized`: Spanish is required, other locales fall back to it.
 */
import type { Locale, Localized } from '@/lib/i18n'

export const SITE = {
  name: 'wm',
  handle: '@widostorm',
  email: 'www@tsuteji.com',
  since: 2015,
}

export type ImageAsset = {
  id: string
  src: string
  width: number
  height: number
  /** Filename shown in the viewer title bar, macOS Preview style. */
  filename: string
}

export type ImageId = keyof typeof IMAGES

const img = (
  id: string,
  width: number,
  height: number,
  src: string,
  dir = '',
  filename = src,
): ImageAsset => ({
  id,
  src: (`/img/${dir ? `${dir}/` : ''}${src}`),
  width,
  height,
  filename,
})




export const IMAGES = {
  // works
  'cover-01': img('cover-01', 3000, 3000, 'str.jpg', '/works'),
  'cover-02': img('cover-02', 3000, 3000, 'stlt.jpg', 'works'),
  'cover-03': img('cover-03', 3000, 3000, '26.jpg', '/works'),
  'cover-04': img('cover-04', 3000, 3000, 'the_forbidden_tapes_front.jpg', '/works'),
  'cover-04.5': img('cover-04.5', 3000, 3000, 'the_forbidden_tapes_back.jpg', '/works'),
  'cover-05': img('cover-05', 3000, 3000, 'le_ciel_m_accable.jpg', '/works'),
  'cover-06': img('cover-06', 3000, 3000, 'lush_mud.jpg', '/works'),
  'cover-20': img('cover-20', 3000, 3000, 'steel.jpg', '/works'),
  'cover-34': img('cover-34', 3000, 3000, 'mar80.jpg', '/works'),
  'cover-35': img('cover-35', 3000, 3000, 'polar.jpg', '/works'),


//gallery
  'cover-07': img('cover-07', 3000, 3000, 'castle.jpg', '/gallery'),
  'cover-08': img('cover-08', 3000, 3000, 'm_irl.jpg', '/gallery'),
  'cover-09': img('cover-09', 3000, 3000, 'eternalhell.jpg', '/gallery'),
  'cover-10': img('cover-10', 3000, 3000, 'dont_betray_yourself.jpg', '/gallery'),
  'cover-21': img('cover-21', 3000, 3000, 'go.jpg', '/gallery'),
  'cover-22': img('cover-22', 3000, 3000, 'lost_title1.jpg', '/gallery'),
  'cover-23': img('cover-23', 3000, 3000, 'celestia_decay.jpg', '/gallery'),
  'cover-24': img('cover-24', 3000, 3000, 'del_vacio_destino1.jpg', '/gallery'),
  'cover-25': img('cover-25', 3000, 3000, 'del_vacio_destino2.jpg', '/gallery'),
  'cover-26': img('cover-26', 3000, 3000, '4am.jpg', '/gallery'),
  'cover-27': img('cover-27', 3000, 3000, 'lost_title2.jpg', '/gallery'),
  'cover-28': img('cover-28', 3000, 3000, 'lost_title3.jpg', '/gallery'),


  'header-05': img('header-05', 1500, 500, 'kiru_biru.jpg', '/gallery'),
  'header-06': img('header-06', 1500, 500, 'jujutsu.jpg', '/gallery'),
  'header-07': img('header-07', 1500, 500, 'eternalhell2.jpg', '/gallery'),
  'header-08': img('header-08', 1500, 500, 'trigun.jpg', '/gallery'),
  'header-09': img('header-09', 1500, 500, 'clan_entry.jpg', '/gallery'),
  'header-10': img('header-10', 1500, 500, 'kisstar.jpg', '/gallery'),
  'header-11': img('header-11', 1500, 500, 'rigel.jpg', '/gallery'),
  'header-12': img('header-12', 1500, 500, 'always_forever.jpg', '/gallery'),
  'header-13': img('header-13', 1500, 500, 'the_deadman_in_the_wonderland.jpg', '/gallery'),
  'header-14': img('header-14', 1500, 500, 'if_heaven_had_feelings.jpg', '/gallery'),




// archive

  'cover-11': img('cover-11', 3000, 3000, 'morning_star_front.jpg', '/archive'),
  'cover-12': img('cover-12', 3000, 3000, 'morning_star_back.jpg', '/archive'),
  'cover-13': img('cover-13', 3000, 3000, 'morning_star_casette.jpg', '/archive'),
  'cover-14': img('cover-14', 3000, 3000, 'morning_star_vinyl.jpg', '/archive'),
  'cover-15': img('cover-15', 3000, 3000, 'steel_1.jpg', '/archive'),
  'cover-16': img('cover-16', 3000, 3000, 'steel_2.jpg', '/archive'),
  'cover-17': img('cover-17', 3000, 3000, 'steel_3.jpg', '/archive'),
  'cover-18': img('cover-18', 1280, 720, 'steel_refs.jpg', '/archive'),
  'cover-19': img('cover-19', 3000, 3000, 'steel_lost_draft.jpg', '/archive'),

  'cover-29': img('cover-29', 1280, 720, 'mar80_drafts1.jpg', '/archive'),
  'cover-30': img('cover-30', 1280, 720, 'mar80_drafts2.jpg', '/archive'),
  'cover-31': img('cover-31', 1280, 720, 'mar80_drafts3.jpg', '/archive'),
  'cover-32': img('cover-32', 1280, 720, 'mar80_drafts4.jpg', '/archive'),
  'cover-33': img('cover-33', 1280, 720, 'mar80_refs.jpg', '/archive'),



  
  'header-01': img('header-01', 1500, 500, 'alonzo.jpg', '/archive'),
  'header-02': img('header-02', 1500, 500, 'iron.jpg', '/archive'),
  'header-03': img('header-03', 1500, 500, 'lilpinga.jpg', '/archive'),
  'header-04': img('header-04', 1500, 500, 'sebas.jpg', '/archive'),
  
  'sp-01': img('sp-01', 1200, 674, 'streampack_1.jpg', '/archive'),
  'sp-02': img('sp-02', 1200, 674, 'streampack_2.jpg', '/archive'),
  'sp-03': img('sp-03', 1200, 674, 'streampack_3.jpg', '/archive'),
  'sp-04': img('sp-04', 1200, 674, 'streampack_4.jpg', '/archive'),

  //refs 
  'ref-01': img('ref-01', 1023, 1280, 'ref-01.jpg', 'refs/revenge-x-aeri'),
  'screenshot1': img('screenshot1', 1002, 634, 'screenshot1.jpg', 'refs/revenge-x-aeri'),
  
} satisfies Record<string, ImageAsset>

// export type ImageId = keyof typeof IMAGES

/* ------------------------------------------------------------------ */
/* Galería                                                             */
/* ------------------------------------------------------------------ */

export const ART_TYPES = ['cover', 'header', 'illustration', 'visual', 'poster'] as const
export type ArtType = (typeof ART_TYPES)[number]

export type GalleryItem = {
  id: string
  code: string
  title: Localized
  type: ArtType
  year: number
  image: ImageId
  medium: Localized
}

export const GALLERY: GalleryItem[] = [
  { id: 'c01', code: 'c-001', title: { es: 'title_4_this', ja: 'title_4_this', ko: 'title_4_this', zh: 'title_4_this' }, type: 'cover', year: 2023, image: 'cover-07', medium: { es: 'manipulación fotográfica', en: 'photo manipulation', ja: 'フォトマニピュレーション', ko: '포토 매니퓰레이션', zh: '图像合成（照片合成）' } },
  { id: 'c02', code: 'c-002', title: { es: 'm_irl', ja: 'm_irl', ko: 'm_irl', zh: 'm_irl' }, type: 'cover', year: 2023, image: 'cover-08', medium: { es: 'manipulación fotográfica', en: 'photo manipulation', ja: 'フォトマニピュレーション', ko: '포토 매니퓰레이션', zh: '图像合成（照片合成）' } },
  { id: 'c03', code: 'c-003', title: { es: 'eternalhell', ja: 'eternalhell', ko: 'eternalhell', zh: 'eternalhell' }, type: 'cover', year: 2023, image: 'cover-09', medium: { es: 'manipulación fotográfica', en: 'photo manipulation', ja: 'フォトマニピュレーション', ko: '포토 매니퓰레이션', zh: '图像合成（照片合成）' } },
  { id: 'c04', code: 'c-004', title: { es: 'dont_betray_yourself', ja: 'dont_betray_yourself', ko: 'dont_betray_yourself', zh: 'dont_betray_yourself' }, type: 'cover', year: 2025, image: 'cover-10', medium: { es: 'manipulación fotográfica', en: 'photo manipulation', ja: 'フォトマニピュレーション', ko: '포토 매니퓰레이션', zh: '图像合成（照片合成）' } },
  { id: 'h01', code: 'h-001', title: { es: 'kiru_biru', ja: 'kiru_biru', ko: 'kiru_biru', zh: 'kiru_biru' }, type: 'header', year: 2024, image: 'header-05', medium: { es: 'manipulación fotográfica', en: 'photo manipulation', ja: 'フォトマニピュレーション', ko: '포토 매니퓰레이션', zh: '图像合成（照片合成）' } },
  { id: 'h02', code: 'h-002', title: { es: 'jujutsu', ja: 'jujutsu', ko: 'jujutsu', zh: 'jujutsu' }, type: 'header', year: 2024, image: 'header-06', medium: { es: 'manipulación fotográfica', en: 'photo manipulation', ja: 'フォトマニピュレーション', ko: '포토 매니퓰레이션', zh: '图像合成（照片合成）' } },
  { id: 'h03', code: 'h-003', title: { es: 'eternalhell2', ja: 'eternalhell2', ko: 'eternalhell2', zh: 'eternalhell2' }, type: 'header', year: 2024, image: 'header-07', medium: { es: 'manipulación fotográfica', en: 'photo manipulation', ja: 'フォトマニピュレーション', ko: '포토 매니퓰레이션', zh: '图像合成（照片合成）' } },
  { id: 'h04', code: 'h-004', title: { es: 'trigun', ja: 'trigun', ko: 'trigun', zh: 'trigun' }, type: 'header', year: 2024, image:'header-08', medium: { es:'manipulación fotográfica', en:'photo manipulation', ja:'フォトマニピュレーション', ko:'포토 매니퓰레이션', zh:'图像合成（照片合成）' } },
  { id: 'h05', code: 'h-005', title: { es: 'clan_entry', ja: 'clan_entry', ko: 'clan_entry', zh: 'clan_entry' }, type: 'header', year: 2024, image: 'header-09', medium: { es: 'manipulación fotográfica', en: 'photo manipulation', ja: 'フォトマニピュレーション', ko: '포토 매니퓰레이션', zh: '图像合成（照片合成）' } },
  { id: 'h06', code: 'h-006', title: { es: 'kisstar', ja: 'kisstar', ko: 'kisstar', zh: 'kisstar' }, type: 'header', year: 2024, image: 'header-10', medium: { es: 'manipulación fotográfica', en: 'photo manipulation', ja: 'フォトマニピュレーション', ko: '포토 매니퓰레이션', zh: '图像合成（照片合成）' } },
  { id: 'c05', code: 'c-005', title: { es: 'go', ja: 'go', ko: 'go', zh: 'go' }, type: 'cover', year: 2025, image: 'cover-21', medium: { es: 'manipulación fotográfica', en: 'photo manipulation', ja: 'フォトマニピュレーション', ko: '포토 매니퓰레이션', zh: '图像合成（照片合成）' } },
  { id: 'c06', code: 'c-006', title: { es: 'lost_title', ja: 'lost_title', ko: 'lost_title', zh: 'lost_title' }, type: 'cover', year: 2024, image: 'cover-22', medium: { es: 'manipulación fotográfica', en: 'photo manipulation', ja: 'フォトマニピュレーション', ko: '포토 매니퓰레이션', zh: '图像合成（照片合成）' } },
  { id: 'c07', code: 'c-007', title: { es: 'celestia_decay', ja: 'celestia_decay', ko: 'celestia_decay', zh: 'celestia_decay' }, type: 'cover', year: 2025, image: 'cover-23', medium: { es: 'manipulación fotográfica', en: 'photo manipulation', ja: 'フォトマニピュレーション', ko: '포토 매니퓰레이션', zh: '图像合成（照片合成）' } },
  { id: 'c08', code: 'c-008', title: { es: 'del_vacio_destino1', ja: 'del_vacio_destino1', ko: 'del_vacio_destino1', zh: 'del_vacio_destino1' }, type: 'cover', year: 2025, image: 'cover-24', medium: { es: 'manipulación fotográfica', en: 'photo manipulation', ja: 'フォトマニピュレーション', ko: '포토 매니퓰레이션', zh: '图像合成（照片合成）' } },
  { id: 'c09', code: 'c-009', title: { es: 'del_vacio_destino2', ja: 'del_vacio_destino2', ko: 'del_vacio_destino2', zh: 'del_vacio_destino2' }, type: 'cover', year: 2025, image: 'cover-25', medium: { es: 'manipulación fotográfica', en: 'photo manipulation', ja: 'フォトマニピュレーション', ko: '포토 매니퓰레이션', zh: '图像合成（照片合成）' } },
  { id: 'c10', code: 'c-010', title: { es: '4am', ja: '4am', ko: '4am', zh: '4am' }, type: 'cover', year: 2023, image: 'cover-26', medium: { es: 'manipulación fotográfica', en: 'photo manipulation', ja: 'フォトマニピュレーション', ko: '포토 매니퓰레이션', zh: '图像合成（照片合成）' } },
  { id: 'c11', code: 'c-011', title: { es: 'lost_title2', ja: 'lost_title2', ko: 'lost_title2', zh: 'lost_title2' }, type: 'cover', year: 2023, image: 'cover-27', medium: { es: 'manipulación fotográfica', en: 'photo manipulation', ja: 'フォトマニピュレーション', ko: '포토 매니퓰레이션', zh: '图像合成（照片合成）' } },
  { id: 'c12', code: 'c-012', title: { es: 'lost_title3', ja: 'lost_title3', ko: 'lost_title3', zh: 'lost_title3' }, type: 'cover', year: 2023, image: 'cover-28', medium: { es: 'manipulación fotográfica', en: 'photo manipulation', ja: 'フォトマニピュレーション', ko: '포토 매니퓰레이션', zh: '图像合成（照片合成）' } },
  { id: 'h07', code: 'h-007', title: { es: 'rigel', ja: 'rigel', ko: 'rigel', zh: 'rigel' }, type: 'header', year: 2025, image: 'header-11', medium: { es: 'manipulación fotográfica', en: 'photo manipulation', ja: 'フォトマニピュレーション', ko: '포토 매니퓰레이션', zh: '图像合成（照片合成）' } },
  { id: 'h08', code: 'h-008', title: { es: 'always_forever', ja: 'always_forever', ko: 'always_forever', zh: 'always_forever' }, type: 'header', year: 2025, image: 'header-12', medium: { es: 'manipulación fotográfica', en: 'photo manipulation', ja: 'フォトマニピュレーション', ko: '포토 매니퓰레이션', zh: '图像合成（照片合成）' } },
  { id: 'h09', code: 'h-009', title: { es: 'the_deadman_in_the_wonderland', ja: 'the_deadman_in_the_wonderland', ko: 'the_deadman_in_the_wonderland', zh: 'the_deadman_in_the_wonderland' }, type: 'header', year: 2025, image: 'header-13', medium: { es: 'manipulación fotográfica', en: 'photo manipulation', ja: 'フォトマニピュレーション', ko: '포토 매니퓰레이션', zh: '图像合成（照片合成）' } },
  { id: 'h10', code: 'h-010', title: { es: 'if_heaven_had_feelings', ja: 'if_heaven_had_feelings', ko: 'if_heaven_had_feelings', zh: 'if_heaven_had_feelings' }, type: 'header', year: 2025, image: 'header-14', medium: { es: 'manipulación fotográfica', en: 'photo manipulation', ja: 'フォトマニピュレーション', ko: '포토 매니퓰레이션', zh: '图像合成（照片合成）' } },

]

/* ------------------------------------------------------------------ */
/* Works — piezas usadas de verdad                                     */
/* ------------------------------------------------------------------ */

export type UsedOn = { label: string; url?: string }

export type Work = {
  id: string
  code: string
  title: Localized
  client: string
  role: Localized
  usedOn: UsedOn[]
  year: number
  image: ImageId
  images?: ImageId[]   // ← agrega esta línea
  note: Localized
}


export const WORKS: Work[] = [
  {
    id: 'w01',
    code: 'W-001',
    title: { es: 'Star Engine' },
    client: 'Unisixn',
    role: { es: 'Portada', en: 'Cover', ja: 'ジャケット', ko: '커버', zh: '封面' },
    usedOn: [
      { label: 'Spotify', url: 'https://open.spotify.com/album/0qjy7COQFI5d7QxzWJQSQF' },
      { label: 'Apple Music', url: 'https://music.apple.com/us/album/star-engine-single/6790467786?uo=4' },
      { label: 'Deezer', url: 'https://www.deezer.com/album/1028173302' },
      { label: 'Soundcloud', url: 'https://soundcloud.com/unisixn/unisixn-star-engine-final-1' },
    ],
    year: 2026,
    image: 'cover-01',
    note: { es: ' ' },
  },
  {
    id: 'w02',
    code: 'W-002',
    title: { es: 'stiletto' },
    client: 'Omar1',
    role: { es: 'Portada', en: 'Cover', ja: 'ジャケット', ko: '커버', zh: '封面' },
    usedOn: [{ label: 'Spotify', url: 'https://open.spotify.com/track/3bTfiLhxbnZYwDyGNOdbNh' }],
    year: 2026,
    image: 'cover-02',
    note: { es: ' ' },
  },
  {
    id: 'w03',
    code: 'W-003',
    title: { es: '26' },
    client: 'альтлот!',
    role: { es: 'Portada', en: 'Cover', ja: 'ジャケット', ko: '커버', zh: '封面' },
    usedOn: [
      { label: 'VK Music', url: 'https://music.vk.com/link/KdfaJ' },
      { label: 'KION Music', url: 'https://music.mts.ru/album/43512904' },
      { label: 'Yandex Music', url: 'https://music.yandex.ru/album/43512904' },
      { label: 'Spotify', url: 'https://open.spotify.com/album/07NFsAqUziKFDfTXHFYmUx' },
      { label: 'Apple Music', url: 'https://music.apple.com/ru/album/6800705712?mt=1&at=1000lqjf&ct=bq&app=music' },
    ],
    year: 2026,
    image: 'cover-03',
    note: { es: ' ' },
  },
  {
    id: 'w04',
    code: 'W-004',
    title: { es: '禁断のテープ [THE FORBIDDEN TAPES]' },
    client: 'SC@R',
    role: { es: 'Portada + header de lanzamiento', en: 'Cover, front and back', ja: 'カバー、表と裏', ko: '커버, 앞면과 뒷면', zh: '封面，正面与背面' },
    usedOn: [{ label: 'Bandcamp', url: 'https://scatteredscars.bandcamp.com/album/the-forbidden-tapes' }],
    year: 2026,
    image: 'cover-04',
    images: ['cover-04', 'cover-04.5'],  // ← agrega esta línea
    note: { es: ' ' },
  },
  {
    id: 'w05',
    code: 'W-005',
    title: { es: "Le Ciel M'Accable" },
    client: 'HADA',
    role: { es: 'Portada', en: 'Cover', ja: 'カバー', ko: '커버', zh: '封面' },
    usedOn: [
      { label: 'Spotify', url: 'https://open.spotify.com/intl-ja/album/0tltPIw9X9FWE7pj6Dbek8' },
      { label: 'Apple Music', url: 'https://music.apple.com/us/album/le-ciel-maccable-single/6807506832' },
      { label: 'Deezer', url: 'https://www.deezer.com/us/album/1068231901?host=6908338083&deferredFl=1' },
    ],
    year: 2026,
    image: 'cover-05',
    note: { es: ' ' },
  },
  {
    id: 'w06',
    code: 'W-006',
    title: { es: 'LUSH MUD' },
    client: 'GRAVEPILL',
    role: { es: 'Portada', en: 'Cover', ja: 'カバー', ko: '커버', zh: '封面' },
    usedOn: [
      { label: 'Spotify', url: 'https://distrokid.com/hyperfollow/gravepill/lush-mud/' },
      { label: 'Apple Music', url: 'https://music.apple.com/us/artist/gravepill/6823781372' },
      { label: 'Bandcamp', url: 'https://gravepill.bandcamp.com/track/lush-mud' },
      { label: 'Amazon Music', url: 'http://www.amazon.com/gp/product/B0HNC3K31W' },
      { label: 'YouTube Music', url: 'https://www.youtube.com/watch?v=TLKVsGA3JXI' },
    ],
    year: 2026,
    image: 'cover-06',
    note: { es: ' ' },
  },

    {
    id: 'w07',
    code: 'W-007',
    title: { es: 'Mar80' },
    client: 'Josefina Amado',
    role: { es: 'Portada', en: 'Cover', ja: 'カバー', ko: '커버', zh: '封面' },
    usedOn: [
      { label: 'Spotify', url: 'https://open.spotify.com/album/6Xresz12ufcuFzPRM4p3Ki' },
    ],
    year: 2026,
    image: 'cover-34',
    note: { es: ' ' },
  },

   {
    id: 'w08',
    code: 'W-008',
    title: { es: 'Steel' },
    client: 'Speed Blacer & BLACEWAN',
    role: { es: 'Portada', en: 'Cover', ja: 'カバー', ko: '커버', zh: '封面' },
    usedOn: [
      { label: 'Spotify', url: 'https://open.spotify.com/album/57wSQ2aD8YZiPmlWLrktec' },
      { label: 'Apple Music', url: 'https://music.apple.com/us/album/steel-single/6825650330' },
      { label: 'YouTube Music', url: 'https://www.youtube.com/watch?v=sfSJOSOL8Ls&list=OLAK5uy_nlHR6k_9tfL5dWDHeDkPP91SSo9b4Txxk&index=1' },
      { label: 'Deezer', url: 'https://www.deezer.com/es/album/1127740351' },
      { label: 'Soundcloud', url: 'https://soundcloud.com/speedblacer/steel' },
    ],
    year: 2026,
    image: 'cover-20',
    note: { es: ' ' },
  },

    {
    id: 'w09',
    code: 'W-009',
    title: { es: 'Polar' },
    client: 'HADA',
    role: { es: 'Portada', en: 'Cover', ja: 'カバー', ko: '커버', zh: '封面' },
    usedOn: [
      { label: 'Spotify', url: 'https://open.spotify.com/album/6b1lzTD1tHWkYhbPiWdhuK' },
      { label: 'Apple Music', url: 'https://music.apple.com/us/album/polar-single/6807531593' },
      { label: 'Deezer', url: 'https://www.deezer.com/us/album/10682939311' },
    ],
    year: 2026,
    image: 'cover-35',
    note: { es: ' ' },
  },
]


/* ------------------------------------------------------------------ */
/* Archivo — procesos                                                   */
/* ------------------------------------------------------------------ */

export const ARCHIVE_STATUSES = ['published', 'unpublished', 'archived'] as const
export type ArchiveStatus = (typeof ARCHIVE_STATUSES)[number]

export type ArchiveEntry = {
  id: string
  code: string
  title: Localized
  date: string
  status: ArchiveStatus
  images: ImageId[]
  note: Localized
  tags: string[]
}

export const ARCHIVE: ArchiveEntry[] = [
  {
    id: 'a01',
    code: 'A-001',
    title: { es: '14 y/o headers', en: '14 y/o headers', ja: '14歳のヘッダ', ko: '14살 헤더 ', zh: ' 14岁时的头图' },
    date: '19-04-2018',
    status: 'archived',
    images: ['header-01', 'header-02', 'header-03', 'header-04'],
    note: {
      es: 'Los encontré en un borrador de mi cuenta de Behance con esa fecha de subida. También solía hacer cosas de Minecraft, pero tristemente no las subí y borré todas las cuentas de Twitter donde las publicaba. Fun fact: me acordé de que vendí mi cuenta con 2k de seguidores por 20$, de más está decir que me estafaron Dx',
      en: 'Found them in a draft on my Behance account with that upload date. I also used to make Minecraft stuff, but sadly I never uploaded it and deleted all the Twitter accounts where I posted it. Fun fact: I remembered I sold my account with 2k followers for $20, needless to say, I got scammed XD ',
      ja: 'Behanceのアカウントの下書きに、そのアップロード日付で見つけました。マイクラのやつもよく作ってたんだけど、残念ながら上げてなくて、投稿してたTwitterのアカウントは全部消しちゃいました。ファンファクト：フォロワー2kのアカウントを20ドルで売ったの思い出しました。言うまでもなく詐欺られましたWW。',
      ko: 'Behance 계정 임시저장에 그 업로드 날짜로 있더라고요. 마인크래프트 것도 자주 만들었는데 아쉽게도 안 올렸고, 올리던 트위터 계정은 다 지워버렸어요. Fun fact: 팔로워 2천 있던 계정을 20달러에 팔았던 게 기억났는데, 말할 것도 없이 사기당했네요.',
      zh: '我在 Behance 账号的草稿里找到的，上传日期就是那天。我以前也常做 Minecraft 的东西，可惜没上传，还把发它的 Twitter 账号全删了。Fun fact：想起来我那个 2k 粉丝的账号卖了 20 刀，不用说，被坑了。',
    },
    tags: ['header'],
  },

  {
    id: 'a02',
    code: 'A-002',
    title: { es: 'morning star', en: 'morning star', ja: 'morning star', ko: 'morning star', zh: 'morning star' },
    date: '18-08-2025',
    status: 'published',
    images: ['cover-11', 'cover-12', 'cover-13', 'cover-14'],
    note: {
      es: 'No hay ninguna historia mamadora detrás de esto, más que fueron los primeros diseños que hice en el teléfono y me quería cortar los cocos en el proceso, pero salió piola si o que',
      en: "There's no a deep backstory behind this, they were just the first designs I made on my phone and I wanted to cut my balls off in the process, but it turned out alright",
      ja: 'これといったカッコいい裏話はなくて、ただスマホで初めて作ったデザインってだけ。途中で玉を切りたくなったけど、まあまあ良い感じに仕上がった。',
      ko: '별 대단한 사연은 없고, 그냥 폰으로 처음 만든 디자인이에요. 중간에 불알 자르고 싶었지만 나름 괜찮게 나왔네요.',
      zh: '没啥牛逼的故事，就是我在手机上做的第一批设计，过程中想把自己蛋割了，但结果还行',
    },
    tags: ['cover'],
  },

  {
    id: 'a03',
    code: 'A-003',
    title: { es: 'Stream Packs', en: 'Stream Packs', ja: 'Stream Packs', ko: 'Stream Packs', zh: 'Stream Packs' },
    date: '01-12-2024',
    status: 'archived',
    images: ['sp-01', 'sp-02', 'sp-03', 'sp-04'],
    note: {
      es: 'En un momento en que no me daba ni el sol, hacía cualquier cosa por ganarme dos monedas; entre eso hice stream packs. Todos estos son solo pruebas, solo me comisionaron dos personas pero fueron stream packs animados Dx, cuando descubra cómo descargar los videos de Behance, los subo acá',
      en: "Back when nobody gave me the time of day, when I was invisible to everyone, I'd do anything to make a couple of bucks; among other things, I made stream packs. All of these are just tests; only two people commissioned me, but they were animated stream packs. Once I figure out how to download the videos from Behance I'll upload them here",
      ja: '誰にも相手にされず、みんなから見えない存在だった頃、二束三文のために何でもやってた。その一つがストリームパック。これらは全部ただのテストで、依頼してくれたのは二人だけだったけど、アニメーションのストリームパックだった。Behanceから動画をダウンロードする方法がわかったら、ここに上げます。',
      ko: '아무도 나한테 관심을 안 주고, 모두에게 투명인간이었던 시절에 돈 몇 푼 벌려고 뭐든 했는데, 그중 하나가 스트림 팩이었어요. 이건 전부 그냥 테스트고, 의뢰는 두 명만 받았지만 애니메이션 스트림 팩이었어요. Behance에서 영상 다운로드하는 법 알게 되면 여기 올릴게요.',
      zh: '那会儿没人搭理我，在所有人眼里都是透明的，为了挣两个钱什么都干，其中就做了 stream pack。这些都只是测试，只有两个人找我约稿，不过是动态的 stream pack。等我搞明白怎么从 Behance 下载视频，就传到这儿来。，但结果还行',
    },
    tags: ['cover'],
  },

    {
    id: 'a04',
    code: 'A-004',
    title: { es: ' Borradores de Steel  ', en: 'Steel draft versions', ja: 'STEELのドラフト版', ko: ' 스틸 초안 버전', zh: '钢铁草稿版本' },
    date: '03-11-2026',
    status: 'published', 
    images: ['cover-15', 'cover-16', 'cover-17', 'cover-18', 'cover-19'],
    note: {
      es: 'En un momento en que no me daba ni el sol, hacía cualquier cosa por ganarme dos monedas; entre eso hice stream packs. Todos estos son solo pruebas, solo me comisionaron dos personas pero fueron stream packs animados Dx, cuando descubra cómo descargar los videos de Behance, los subo acá',
      en: "Back when nobody gave me the time of day, when I was invisible to everyone, I'd do anything to make a couple of bucks; among other things, I made stream packs. All of these are just tests; only two people commissioned me, but they were animated stream packs. Once I figure out how to download the videos from Behance I'll upload them here",
      ja: '誰にも相手にされず、みんなから見えない存在だった頃、二束三文のために何でもやってた。その一つがストリームパック。これらは全部ただのテストで、依頼してくれたのは二人だけだったけど、アニメーションのストリームパックだった。Behanceから動画をダウンロードする方法がわかったら、ここに上げます。',
      ko: '아무도 나한테 관심을 안 주고, 모두에게 투명인간이었던 시절에 돈 몇 푼 벌려고 뭐든 했는데, 그중 하나가 스트림 팩이었어요. 이건 전부 그냥 테스트고, 의뢰는 두 명만 받았지만 애니메이션 스트림 팩이었어요. Behance에서 영상 다운로드하는 법 알게 되면 여기 올릴게요.',
      zh: '那会儿没人搭理我，在所有人眼里都是透明的，为了挣两个钱什么都干，其中就做了 stream pack。这些都只是测试，只有两个人找我约稿，不过是动态的 stream pack。等我搞明白怎么从 Behance 下载视频，就传到这儿来。，但结果还行',
    },
    tags: ['cover'],
  },

    {
    id: 'a05',
    code: 'A-005',
    title: { es: ' Borradores de Mar80 ', en: 'Mar80 draft versions', ja: 'MAR80のドラフト版', ko: ' MAR80 초안 버전', zh: '钢铁草稿版本' },
    date: '04-11-2026',
    status: 'published', 
    images: ['cover-29', 'cover-30', 'cover-31', 'cover-32', 'cover-33', ],
    note: {
      es: 'Recuerdo que el dibujante del manga de One Punch Man Yusuke Murata (村田雄介), dijo que lo más difícil de dibujar era la cara simple de Saitama por lo simple que era, ya que los errores se notan mucho más en siluetas simples. Algo así me pasa a mí, cosas simples como esta portada y la de Steel me costaron un huevo porque no hay tanto margen para esconder los errores ni para que todo se vea complejo desde lejos, aunque por lo general todo se resuelve cuando uso texturas, lit una buena textura puede hacer que una cagada se vea como oro',
      en: " I remember Yusuke Murata (村田雄介), the artist behind the One Punch Man manga, saying that the hardest thing to draw was Saitama's simple face precisely because it's so simple , mistakes show up way more. Something like that happens to me is that simple stuff like this cover and the Steel one was a pain in the ass, because there's not much room to hide mistakes or make everything look complex from a distance, tho usually it all works out once I use textures, a good texture can make a piece of shit look like gold",
      ja: 'ワンパンマンの漫画を描いてる村田雄介さんが、一番難しいのはサイタマのシンプルな顔だって言ってたのを覚えてる。シンプルだからこそミスが目立つから、って。俺にも似たようなことが起きる。このジャケットとかSTEELのやつみたいなシンプルなやつはめちゃくちゃ難しかった。ミスを隠す余地も、遠目に複雑に見せる余裕もないから。でもだいたいはテクスチャで解決する。いいテクスチャがあれば、クソみたいなのも金に見えるから',
      ko: '원펀맨 만화 작가인 무라타 유스케(村田雄介)가 제일 그리기 어려운 게 사이타마의 단순한 얼굴이라고 했던 게 기억나요. 단순해서 실수가 더 잘 보이니까요. 저도 비슷한 것 같아요. 이 커버나 Steel 커버 같은 단순한 작업이 힘들었어요. 실수를 숨길 여지도, 멀리서 봤을 때 복잡해 보이게 할 여유도 없으니까요. 그래도 보통은 텍스처로 다 해결돼요. 좋은 텍스처 하나면 똥도 금처럼 보이니까요',
      zh: '我记得《一拳超人》漫画的作画村田雄介说过，最难画的是埼玉那张简单的脸，正因为太简单，错误才特别明显。我也有点类似的感觉。像这张封面和 Steel 那张这种简单的东西反而特别难搞，因为没多少空间去藏错误，也没法让它在远处看起来复杂。不过一般来说用纹理就都解决了，一块好纹理能让一坨屎看起来像金子',
    },
    tags: ['cover'],
  },

]

/* ------------------------------------------------------------------ */
/* Refs — publicaciones                                                 */
/* ------------------------------------------------------------------ */

/**
 * Post bodies are an array of paragraphs. Inside a paragraph, `[[image-id|text]]`
 * marks a citation: the text becomes clickable and opens that image in the viewer.
 */
export type RefPost = {
  slug: string
  code: string
  title: Localized
  date: string
  tags: string[]
  cover: ImageId
  excerpt: Localized
  body: { es: string[] } & Partial<Record<Exclude<Locale, 'es'>, string[]>>
}

export const REFS: RefPost[] = [
  {
    slug: 'REVENGE x AERI',
    code: 'R-01',
    title: {
      es: 'REVENGE x AERI',
      en: 'REVENGE x AERI',
      ja: 'REVENGE x AERI',
      ko: 'REVENGE x AERI',
      zh: 'REVENGE x AERI',
    },
    date: '31-10-2026',
    tags: ['fashion', 'merch'],
    cover: 'ref-01',
    excerpt: {
      es: 'esto más que un articulo es un test para probar la visualización de la página, tengo bastante tiempo que no escribo artículos, así que si sueno medio aweonao, ya saben',
      en: 'Why power lines show up in so many summer scenes, and what they do with empty space.',
      ja: 'なぜ電線は多くの夏の情景に現れるのか、そして余白に何をもたらすのか。',
      ko: '왜 전선은 수많은 여름 장면에 등장하는지, 그리고 빈 공간에 무엇을 하는지.',
      zh: '为什么电线出现在那么多夏日场景中，它们又如何处理空白。',
    },
    body: {
      es: [
        'No soy alguien que esté metido en la moda / ropa porque tampoco es que me interese estarlo, pero, por joyas como esta lo recapacito',
        'Lo primero que me salió [[screenshot1|en mi feed de ig fue la collab de REVENGE x AERI,]] y ya era hora, desde hace bastante se le veía utilizando prendas de REVENGE y me extrañaba que no se llegasen a cruzar',
        'Cómo dije, no soy un experto mamador en la materia para dar una opinión de no mames, simplemente me gusta la collab y cómo se Aeri en las fotos, oficialmente es una modelo emo🗣, personalmente mi prenda favorita es PHOTOBOOTH ZIP WHITE aunque ni en pedo me gasto 118 cucufloros por una chaqueta no mamen, además, quién su sano juicio compraría una prenda por cuotas?😭',

      ],
      en: [
        'For weeks I’ve been noticing the [[header-01|power lines]] in summer scenes. They slice the sky into strips; without them, the sky would just be a color.',
        'Same thing in the [[cover-03|rooftop at dusk]]: the antennas are what make the sky feel huge. One thin line is enough to give scale.',
        'Note for the next header: less painted sky, more lines that measure it.',
      ],
    },
  },
]
