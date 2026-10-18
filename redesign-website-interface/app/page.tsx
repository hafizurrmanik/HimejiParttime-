'use client'

import { useMemo, useState } from 'react'
import placeData from '@/data/places.json'
import {
  ArrowLeft,
  ChevronRight,
  Heart,
  Languages,
  MapPin,
  Phone,
  Search,
  SlidersHorizontal,
  Sparkles,
  Star,
} from 'lucide-react'

type Lang = 'bn' | 'en' | 'ja'
type Category = { id: string; icon: string; color: string; name: Record<Lang, string>; count: number }
type Place = { id: number; name: string; category: string; area: string; distance: string; phone?: string; rating: string; open: string }

const categories: Category[] = [
  ['convenience','🏪','কনভিনিয়েন্স স্টোর','Convenience stores','コンビニ',18], ['food','🍔','ফাস্ট ফুড ও গিউদোন','Fast food & gyudon','ファストフード・牛丼',11], ['family','🍣','ফ্যামিলি রেস্টুরেন্ট ও সুশি','Family restaurants & sushi','ファミレス・回転寿司',13], ['japanese','🍱','জাপানি ও স্থানীয় খাবার','Japanese & Himeji food','和食・姫路グルメ',32], ['noodles','🍜','রামেন ও নুডলস','Ramen & noodles','ラーメン・麺',11], ['western','🥩','ইয়াকিনিকু ও ওয়েস্টার্ন','Yakiniku & western','焼肉・洋食',9], ['world','🍛','চাইনিজ, কোরিয়ান, ইন্ডিয়ান ও ইতালিয়ান','World cuisine','中華・韓国・インド・イタリアン',24], ['izakaya','🍢','ইজাকায়া ও ইয়াকিতরি','Izakaya & yakitori','居酒屋・焼き鳥',21], ['bars','🍸','বার ও স্ন্যাক বার','Bars & snack bars','バー・スナック',21], ['cafe','☕','ক্যাফে, মিষ্টি ও বেকারি','Cafes, sweets & bakeries','カフェ・スイーツ・ベーカリー',24], ['super','🛒','সুপারমার্কেট ও ড্রাগস্টোর','Supermarkets & drugstores','スーパー・ドラッグストア',11], ['retail','🛍️','দোকান ও শপিং মল','Retail & shopping','小売・ショッピング',14], ['leisure','🎤','কারাওকে ও বিনোদন','Karaoke & leisure','カラオケ・娯楽',9], ['hotel','🏨','হোটেল ও লজিং','Hotels & lodging','ホテル・宿泊',9], ['factory','🏭','কোম্পানি, কারখানা ও লজিস্টিকস','Companies & logistics','会社・工場・物流',4], ['gas','⛽','গ্যাস স্টেশন','Gas stations','ガソリンスタンド',4], ['care','🩺','কেয়ার ফ্যাসিলিটি','Care facilities','介護施設',4],
].map(([id, icon, bn, en, ja, count], index) => ({ id: id as string, icon: icon as string, color: ['amber','coral','peach','lavender','mint','blue'][index % 6], name: { bn: bn as string, en: en as string, ja: ja as string }, count: count as number }))

const legacyPlaces: Place[] = [
    { id: 1, name: 'PRONTO Piole Himeji', category: 'cafe', area: 'Piole Himeji 1F', distance: '0.3 km', phone: '079-288-9064', rating: '4.1', open: 'Open until 22:00' },
  { id: 2, name: 'Yoshinoya JR Himeji', category: 'food', area: 'Inside JR Himeji Station', distance: '0.0 km', phone: '079-286-9570', rating: '3.8', open: 'Open 24 hours' },
  { id: 3, name: '7-Eleven Heart-In', category: 'convenience', area: 'Inside JR ticket gate', distance: '0.0 km', phone: '079-287-1925', rating: '4.0', open: 'Open 24 hours' },
  { id: 4, name: 'Starbucks Coffee Piole Himeji 4F', category: 'cafe', area: 'Piole Himeji 4F', distance: '0.1 km', phone: '079-223-4010', rating: '4.2', open: 'Open until 21:00' },
  { id: 5, name: 'UNIQLO Piole Himeji', category: 'retail', area: 'Piole Himeji', distance: '0.1 km', phone: '050-3098-0081', rating: '4.1', open: 'Open until 20:00' },
  { id: 6, name: 'Himeji Sake & Oden', category: 'japanese', area: 'Piole Himeji', distance: '0.0 km', phone: '079-284-6677', rating: '4.0', open: 'Open until 22:00' },
  { id: 7, name: 'Ramen Kintora Himeji', category: 'noodles', area: 'Viera Himeji', distance: '0.1 km', phone: '079-226-3111', rating: '4.1', open: 'Open until 23:00' },
  { id: 8, name: 'Karaoke Manekineko Himeji Ekimae', category: 'leisure', area: 'Himeji Ekimae', distance: '0.2 km', phone: '079-280-6980', rating: '3.9', open: 'Open late' },
  { id: 9, name: 'Hotel Nikko Himeji', category: 'hotel', area: 'Himeji Station south exit', distance: '0.2 km', phone: '079-222-2231', rating: '4.2', open: 'Open 24 hours' },
  { id: 10, name: 'Gozasoro Head Office & Factory', category: 'factory', area: 'Abo, Himeji', distance: '1.0 km', phone: '079-282-2311', rating: '4.0', open: 'Call for recruitment' },
  { id: 11, name: 'Medical Home Grand Harima Himeji', category: 'care', area: 'Near JR Himeji Station', distance: '0.5 km', phone: '0120-171-165', rating: '4.0', open: 'Call for recruitment' },
]

const places: Place[] = placeData as Place[]

const copy = {
  bn: { eyebrow: 'হিমেজি · পার্ট-টাইম কাজ', title: 'আপনার কাজের জায়গা খুঁজুন', sub: 'JR হিমেজি স্টেশনের আশেপাশে কাজের সুযোগ দেখুন।', categories: 'ক্যাটাগরি বেছে নিন', all: 'সব জায়গা', nearby: 'কাছেরটা আগে', search: 'দোকান, খাবার বা ফোন নম্বর খুঁজুন…', places: 'টি জায়গা', saved: 'সেভ করা', home: 'হোম', info: 'তথ্য', near: 'স্টেশনের কাছে', save: 'সেভ', call: 'কল করুন', map: 'ম্যাপ', tip: 'টিপস', tipText: 'কাজের লোক নেওয়া হচ্ছে কি না ফোন করে জিজ্ঞেস করুন। সহজ জাপানিই যথেষ্ট।' },
  en: { eyebrow: 'HIMEJI · PART-TIME WORK', title: 'Find your next shift', sub: 'Explore places hiring around JR Himeji Station.', categories: 'Browse by category', all: 'All places', nearby: 'Nearest first', search: 'Search shops, food, or phone…', places: 'places', saved: 'Saved', home: 'Home', info: 'Info', near: 'Near station', save: 'Save', call: 'Call', map: 'Map', tip: 'Quick tip', tipText: 'Call ahead to ask if they are hiring. Simple Japanese is usually enough.' },
  ja: { eyebrow: '姫路 · アルバイト', title: '働く場所を見つけよう', sub: 'JR姫路駅周辺のアルバイト先を探せます。', categories: 'カテゴリーから探す', all: 'すべて', nearby: '近い順', search: '店名・料理・電話番号で検索…', places: '件', saved: '保存', home: 'ホーム', info: '情報', near: '駅の近く', save: '保存', call: '電話', map: '地図', tip: 'ヒント', tipText: '募集しているかは電話で確認しましょう。' },
}

export default function Page() {
  const [lang, setLang] = useState<Lang>('bn')
  const [selected, setSelected] = useState<string | null>(null)
  const [query, setQuery] = useState('')
  const [saved, setSaved] = useState<number[]>([])
  const [marked, setMarked] = useState<number[]>([])
  const [tab, setTab] = useState<'home' | 'saved' | 'info'>('home')
  const t = copy[lang]
  const selectedCategory = categories.find((item) => item.id === selected)
  const visible = useMemo(() => places.filter((place) => (selected ? place.category === selected : true)).filter((place) => `${place.name} ${place.area} ${place.phone}`.toLowerCase().includes(query.toLowerCase())), [query, selected])

  const toggleLang = () => setLang((current) => current === 'bn' ? 'en' : current === 'en' ? 'ja' : 'bn')

  return (
    <main className="finder-shell">
      <header className="topbar">
        <button className="brand-home" onClick={() => { setTab('home'); setSelected(null); setQuery('') }} aria-label="Arubaito home">
          <span className="brand-mark">あ</span>
          <span className="brand-copy"><strong>Arubaito</strong><small>姫路で見つける</small></span>
        </button>
        <div className="header-actions">
          <button className={`saved-header-button ${tab === 'saved' ? 'active' : ''}`} onClick={() => setTab(tab === 'saved' ? 'home' : 'saved')} aria-label={t.saved}>
            <Heart size={17} fill={saved.length > 0 ? 'currentColor' : 'none'} />
            {saved.length > 0 && <b>{saved.length}</b>}
          </button>
          <button className="language-button" onClick={toggleLang} aria-label="Change language"><Languages size={17} /> {lang.toUpperCase()}</button>
        </div>
      </header>

      <div className="content">
        {tab === 'home' && <>
          <section className="hero">
            <div className="eyebrow"><Sparkles size={14} /> {t.eyebrow}</div>
            <h1>{selectedCategory ? selectedCategory.name[lang] : t.title}</h1>
            <p>{selectedCategory ? `${selectedCategory.count}${t.places} · JR Himeji Station` : t.sub}</p>
          </section>

          {!selected && <section className="category-section"><div className="section-heading"><h2>{t.categories}</h2><span>01 — 06</span></div><div className="category-grid">{categories.map((category) => <button key={category.id} className={`category-card ${category.color}`} onClick={() => setSelected(category.id)}><span className="category-icon">{category.icon}</span><span className="category-name">{category.name[lang]}</span><span className="category-count">{category.count} {t.places}</span><ChevronRight size={16} /></button>)}</div></section>}

          {selected && <><button className="back-button" onClick={() => { setSelected(null); setQuery('') }}><ArrowLeft size={17} /> {t.categories}</button><div className="search-row"><div className="search-box"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t.search} aria-label={t.search} /></div><button className="filter-button" aria-label="Filter"><SlidersHorizontal size={19} /></button></div><div className="results-heading"><strong>{visible.length} {t.places}</strong><button>{t.nearby}</button></div><div className="place-list">{visible.map((place) => <PlaceCard key={place.id} place={place} lang={lang} saved={saved.includes(place.id)} marked={marked.includes(place.id)} onSave={() => setSaved((current) => current.includes(place.id) ? current.filter((id) => id !== place.id) : [...current, place.id])} onMark={() => setMarked((current) => current.includes(place.id) ? current.filter((id) => id !== place.id) : [...current, place.id])} t={t} />)}</div></>}

          {!selected && <section className="nearby-card"><div><span className="mini-label">{t.near}</span><h2>Start close to home.</h2><p>Most popular places are less than 10 minutes away.</p></div><div className="compass"><MapPin size={22} /></div></section>}
        </>}
        {tab === 'saved' && <section className="simple-page"><div className="eyebrow">♡ {t.saved}</div><h1>{t.saved}</h1><p>{saved.length ? `${saved.length} ${t.places}` : 'আপনার পছন্দের জায়গাগুলো এখানে রাখুন।'}</p>{saved.length > 0 ? <div className="place-list">{places.filter((place) => saved.includes(place.id)).map((place) => <PlaceCard key={place.id} place={place} lang={lang} saved marked={marked.includes(place.id)} onSave={() => setSaved((current) => current.filter((id) => id !== place.id))} onMark={() => setMarked((current) => current.includes(place.id) ? current.filter((id) => id !== place.id) : [...current, place.id])} t={t} />)}</div> : <div className="empty-state"><Heart size={28} /><strong>এখনও কিছু সেভ করা নেই</strong><span>কোনো জায়গার ♡ চাপলে সেটা এখানে থাকবে।</span></div>}</section>}
      </div>
    </main>
  )
}

function PlaceCard({ place, saved, marked, onSave, onMark, t }: { place: Place; lang: Lang; saved: boolean; marked: boolean; onSave: () => void; onMark: () => void; t: typeof copy.bn }) {
  const category = categories.find((item) => item.id === place.category)
  return <article className={`place-card ${marked ? 'marked' : ''}`}><div className="marked-hint">{marked ? 'Marked' : ''}</div><div className={`place-icon ${category?.color}`}>{category?.icon}</div><div className="place-main"><div className="place-top"><h3>{place.name}</h3><div className="card-options"><button className={`mark-button ${marked ? 'active' : ''}`} onClick={onMark} aria-label={marked ? 'Unmark' : 'Mark'}>{marked ? 'Unmark' : 'Mark'}</button><button className={`save-button ${saved ? 'saved' : ''}`} onClick={onSave} aria-label={saved ? 'Remove from saved' : 'Save'}><Heart size={18} fill={saved ? 'currentColor' : 'none'} /></button></div></div><p>{place.area} · {place.distance}</p><div className="place-meta"><span><Star size={13} fill="currentColor" /> {place.rating}</span><span>{place.open}</span></div><div className="place-actions"><a href={place.phone ? `tel:${place.phone}` : undefined} className="call-action"><Phone size={14} /> {place.phone ? t.call : 'No phone'}</a><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name + ' Himeji')}`} target="_blank" rel="noreferrer" className="map-action"><MapPin size={14} /> {t.map}</a></div></div></article>
}
