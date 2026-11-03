import { createContext, useCallback, useContext, useEffect, useState } from 'react'

export const LOCALES = ['es', 'en', 'ja', 'ko', 'zh'] as const
export type Locale = (typeof LOCALES)[number]

/** Short label shown in the switcher + native name for tooltips. */
export const LOCALE_META: Record<Locale, { short: string; native: string; html: string }> = {
  es: { short: 'ES', native: 'Español', html: 'es' },
  en: { short: 'EN', native: 'English', html: 'en' },
  ja: { short: '日', native: '日本語', html: 'ja' },
  ko: { short: '한', native: '한국어', html: 'ko' },
  zh: { short: '中', native: '中文', html: 'zh-Hans' },
}

/** A piece of content written in Spanish, optionally translated. Missing locales fall back to Spanish. */
export type Localized = { es: string } & Partial<Record<Locale, string>>

const dict = {
  'nav.index': { es: 'Índice', en: 'Index', ja: '目次', ko: '목차', zh: '目录' },
  'nav.gallery': { es: 'Galería', en: 'Gallery', ja: 'ギャラリー', ko: '갤러리', zh: '画廊' },
  'nav.works': { es: 'Works', en: 'Works', ja: 'ワークス', ko: '작업', zh: '作品' },
  'nav.archive': { es: 'Archivo', en: 'Archive', ja: 'アーカイブ', ko: '아카이브', zh: '档案' },
  'nav.refs': { es: 'Refs', en: 'Refs', ja: '参照', ko: '레퍼런스', zh: '参考' },

  'home.statement': {
    es: ' "Colocar texto de mamador" ',
    en: ' "Add some pretentious text" ',
    ja: ' "知ったかぶりのテキストを入れる" ',
    ko: ' "아는 척하는 텍스트 넣기" ',
    zh: ' "加一段装逼的文案" ',
  },
  'home.gallery': {
    es: 'Todo mi arte, clasificado por tipo',
    en: 'All of my art, sorted by type',
    ja: 'すべての作品を種類別に',
    ko: '모든 작업을 유형별로',
    zh: '全部作品，按类型分类',
  },
  'home.works': {
    es: 'Trabajos que sí fueron usados',
    en: 'Works that actually got used',
    ja: '実際に使われた仕事',
    ko: '실제로 쓰인 작업들',
    zh: '真正被采用的作品',
  },
  'home.archive': {
    es: 'Todo lo que pasó sin pena ni gloria',
    en: 'Everything that came and went without fanfare',
    ja: 'ぱっとしないまま過ぎたすべて',
    ko: '아무 성과도 없이 지나가 버린 모든 것',
    zh: '那些悄无声息地过去的一切。',
  },
  'home.refs': {
    es: 'Notas sobre cosas que me llamaron la atención',
    en: 'Notes on things that caught my eye',
    ja: '目に留まったものについてのメモ',
    ko: '눈길을 끈 것들에 대한 기록',
    zh: '关于那些引起我注意之物的笔记',
  },
  'home.latest': { es: 'Últimas entradas', en: 'Latest entries', ja: '最新', ko: '최근 항목', zh: '最新条目' },
  'home.entries': { es: 'entradas', en: 'entries', ja: '件', ko: '개', zh: '条' },
  'common.viewAll': { es: 'Ver todo', en: 'View all', ja: 'すべて見る', ko: '전체 보기', zh: '查看全部' },
  'common.year': { es: 'Año', en: 'Year', ja: '年', ko: '연도', zh: '年份' },
  'common.type': { es: 'Tipo', en: 'Type', ja: '種類', ko: '유형', zh: '类型' },
  'common.title': { es: 'Título', en: 'Title', ja: 'タイトル', ko: '제목', zh: '标题' },
  'common.size': { es: 'Tamaño', en: 'Size', ja: 'サイズ', ko: '크기', zh: '尺寸' },
  'common.status': { es: 'Estado', en: 'Status', ja: '状態', ko: '상태', zh: '状态' },
  'common.all': { es: 'Todo', en: 'All', ja: 'すべて', ko: '전체', zh: '全部' },
  'common.grid': { es: 'Cuadrícula', en: 'Grid', ja: 'グリッド', ko: '그리드', zh: '网格' },
  'common.list': { es: 'Lista', en: 'List', ja: 'リスト', ko: '리스트', zh: '列表' },
  'common.close': { es: 'Cerrar', en: 'Close', ja: '閉じる', ko: '닫기', zh: '关闭' },
  'common.open': { es: 'Abrir', en: 'Open', ja: '開く', ko: '열기', zh: '打开' },
  'common.back': { es: 'Volver', en: 'Back', ja: '戻る', ko: '뒤로', zh: '返回' },
  'common.empty': { es: 'Nada por aquí todavía', en: 'Nothing here yet', ja: 'まだ何もありません', ko: '아직 아무것도 없습니다', zh: '这里还什么都没有' },

  'type.cover': { es: 'Portadas', en: 'Covers', ja: 'カバー', ko: '커버', zh: '封面' },
  'type.header': { es: 'Headers', en: 'Headers', ja: 'ヘッダー', ko: '헤더', zh: '头图' },
  'type.illustration': { es: 'Ilustración', en: 'Illustration', ja: 'イラスト', ko: '일러스트', zh: '插画' },
  'type.visual': { es: 'Visuales', en: 'Visuals', ja: '映像', ko: '비주얼', zh: '视觉' },
  'type.poster': { es: 'Pósters', en: 'Posters', ja: 'ポスター', ko: '포스터', zh: '海报' },

  'gallery.desc': {
    es: 'Haz clic en cualquier pieza para abrirla en el visor, se ve chido',
    en: 'Click any piece to open it in the viewer,it looks cool',
    ja: 'どれでもクリックするとビューアで開きます。かっこいいですよ',
    ko: '아무 작품이나 클릭하면 뷰어로 열려요. 꽤 멋있어요',
    zh: '点任意一件作品就能在查看器里打开，挺酷的',
  },

  'works.desc': {
    es: 'Piezas que salieron al mundo: portadas en plataformas, visuales proyectados en directo, material de campaña.',
    en: 'Pieces that went out into the world: covers on streaming platforms, visuals projected live, campaign material.',
    ja: '世に出た作品：配信のジャケット、ライブで投影された映像、キャンペーン素材。',
    ko: '세상에 나간 작업들: 스트리밍 커버, 라이브에서 상영된 비주얼, 캠페인 자료.',
    zh: '走向世界的作品：流媒体封面、现场投影视觉、宣传物料。',
  },
  'works.client': { es: 'Artista', en: 'Artist', ja: 'アーティスト', ko: '아티스트', zh: '艺人' },
  'works.role': { es: 'Rol', en: 'Role', ja: '担当', ko: '역할', zh: '职责' },
  'works.usedOn': { es: 'Usado en', en: 'Used on', ja: '使用先', ko: '사용처', zh: '使用于' },

  'archive.desc': {
    es: 'Diseños o procesos, algunos se publicaron otros todavía no, y otros simplemente se quedan aquí.',
    en: 'Designs or processes, some have been published, others not yet, and others just stay here',
    ja: ' デザインやプロセス。公開されたものもあれば、まだのものもあり、ただここに残るだけのものもある',
    ko: ' 디자인이나 과정들. 어떤 건 공개됐고, 어떤 건 아직이고, 어떤 건 그냥 여기 남아 있어요',
    zh: '设计或过程，有些已经发布，有些还没有，还有些就留在这里',
  },
  'status.published': { es: 'Publicado', en: 'Published', ja: '公開済み', ko: '공개됨', zh: '已发布' },
  'status.unpublished': { es: 'Sin publicar', en: 'Unpublished', ja: '未公開', ko: '미공개', zh: '未发布' },
  'status.archived': { es: 'Solo archivo', en: 'Archive only', ja: 'アーカイブのみ', ko: '보관 전용', zh: '仅存档' },
  'archive.files': { es: 'archivos', en: 'files', ja: 'ファイル', ko: '파일', zh: '文件' },

  'refs.desc': {
    es: 'Publicaciones cortas sobre cosas que me llamaron la atención. Las palabras marcadas abren su imagen.',
    en: 'Short posts on things that caught my eye. Marked words open their image.',
    ja: '目に留まったものについての短い記事。印のついた言葉をクリックすると画像が開きます。',
    ko: '눈길을 끈 것들에 대한 짧은 글. 표시된 단어를 누르면 이미지가 열립니다.',
    zh: '关于引起我注意之物的短文。点击标记的词语即可打开对应图像。',
  },
  'refs.read': { es: 'Leer', en: 'Read', ja: '読む', ko: '읽기', zh: '阅读' },
  'refs.figures': { es: 'figuras', en: 'figures', ja: '図版', ko: '도판', zh: '图' },
  'refs.translationNote': {
    es: '',
    en: 'Originally written in Spanish.',
    ja: '原文はスペイン語です。',
    ko: '원문은 스페인어입니다.',
    zh: '原文为西班牙语。',
  },

  'footer.contact': { es: 'Encargos / colaboraciones', en: 'Commissions / collaborations', ja: '依頼／コラボレーション', ko: '의뢰 / 협업', zh: '委托 / 合作' },
  'footer.note': {
    es: '',
    en: ' ',
    ja: '',
    ko: ' ',
    zh: ' ',
  },
} satisfies Record<string, Record<Locale, string>>

export type DictKey = keyof typeof dict

type I18nValue = {
  locale: Locale
  setLocale: (l: Locale) => void
  t: (key: DictKey) => string
  pick: (value: Localized) => string
  /** True when `value` has no translation for the current locale and is showing Spanish. */
  isFallback: (value: Localized) => boolean
}

const I18nContext = createContext<I18nValue | null>(null)
const STORAGE_KEY = 'locale'

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('es')

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null
    if (saved && LOCALES.includes(saved)) setLocaleState(saved)
  }, [])

  useEffect(() => {
    document.documentElement.lang = LOCALE_META[locale].html
  }, [locale])

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
    localStorage.setItem(STORAGE_KEY, l)
  }, [])

  const value: I18nValue = {
    locale,
    setLocale,
    t: (key) => dict[key][locale],
    pick: (v) => v[locale] ?? v.es,
    isFallback: (v) => locale !== 'es' && !v[locale],
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider')
  return ctx
}
