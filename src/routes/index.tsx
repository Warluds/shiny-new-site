import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUp, Phone, Mail, MapPin, Check, Sparkles, Shield, Truck, UserCheck, ChevronDown, X } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import brandImg from "@/assets/brand.jpg";
import catInterior from "@/assets/cat-interior.jpg";
import catFacade from "@/assets/cat-facade.jpg";
import catWood from "@/assets/cat-wood.jpg";
import catPrep from "@/assets/cat-prep.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luxium — Профессиональные лакокрасочные решения" },
      { name: "description", content: "Luxium — новый стандарт качества для профессиональных решений. Интерьерные, фасадные краски, эмали и подготовка поверхности." },
      { property: "og:title", content: "Luxium — Профессиональные лакокрасочные решения" },
      { property: "og:description", content: "Обновлённый бренд, пришедший на смену Dulux. Профессиональная краска, созданная с учётом условий работы мастеров." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const audiences = [
  { title: "Малярам", desc: "Стабильный результат, удобство нанесения, экономия рабочего времени." },
  { title: "Архитекторам", desc: "Палитра, текстуры и сертификация под смелые проектные задачи." },
  { title: "Дизайнерам", desc: "Тонкая колеровка и матовые финиши для авторских интерьеров." },
  { title: "Строителям", desc: "Объёмные поставки в срок и стабильное качество от партии к партии." },
];

const categories = [
  { title: "Интерьерные краски", desc: "Для стен и потолков любых помещений.", img: catInterior, href: "#products" },
  { title: "Фасадные", desc: "Защита от климата на годы вперёд.", img: catFacade, href: "#products" },
  { title: "Под дерево", desc: "Эмали для мебели, дверей и окон.", img: catWood, href: "#products" },
  { title: "Подготовка поверхности", desc: "Шпатлёвки и грунты — идеальная основа.", img: catPrep, href: "#products" },
];

const advantages = [
  { icon: Truck, title: "Отгрузки в срок", desc: "Стабильные поставки с выгодными условиями для постоянных партнёров." },
  { icon: Shield, title: "Сертификация под ТЗ", desc: "Полный комплект документов: СГР, MSDS, СС, ПИ под ваш проект." },
  { icon: UserCheck, title: "Выделенный менеджер", desc: "Персональное сопровождение от расчёта до отгрузки и пост-сервиса." },
];

type Product = { name: string; img: string; features: string[]; tag?: string };

const products: Product[] = [
  { name: "Luxium Professional Diamond Matt", tag: "Интерьерная", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/fa1/fa11516c78789da245a0939099a9f2ff/65011162_jpg_1x.webp", features: ["В 10 раз прочнее, чем обычные интерьерные краски", "Гарантия срока службы до 25 лет", "Экологичная и безопасная"] },
  { name: "Luxium Professional Diamond Extra Matt", tag: "Интерьерная", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/129/1295384960d34129ba8ef60e0fd90682/84898608_jpg_1x.webp", features: ["В 10 раз прочнее, чем обычные интерьерные краски", "Гарантия срока службы до 25 лет", "Экологичная и безопасная"] },
  { name: "Luxium Professional Vinyl Extra Matt", tag: "Интерьерная", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/f3e/f3eeca00b2473bcdedc28883f97aa0b2/93478895_jpg_1x.webp", features: ["Особо гладкое покрытие", "Укрывистая и экологичная", "Маскирует небольшие дефекты поверхности"] },
  { name: "Luxium Ultra Resist Кухня и ванная полуматовая", tag: "Кухня и ванная", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/67e/67ed56b494ae296cbb207f728ad2551e/25193767_jpg_1x.webp", features: ["Улучшенные грязе- и водоотталкивающие свойства", "Создаёт «эффект лотоса»", "Устойчива к многократному мытью"] },
  { name: "Luxium Ultra Resist Гостиные и Офисы", tag: "Гостиные и офисы", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/7cc/7cc202f234d68d7dd82220b9a165010b/69229481_jpg_1x.webp", features: ["Улучшенные грязе- и водоотталкивающие свойства", "Содержит воск", "Не содержит летучих органических веществ"] },
  { name: "Luxium Ultra Resist Кухня и ванная матовая", tag: "Кухня и ванная", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/b69/b6991ac1c4f619ee3178bbaffcae31cd/52289516_jpg_1x.webp", features: ["Защита от пятен жира", "Содержит воск", "Устойчива к образованию плесени"] },
  { name: "Luxium Легко Обновить — Окна и двери", tag: "Эмаль", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/4e8/4e807dd02965a2e897ec719925488a9a/76817616_jpg_1x.webp", features: ["На водной основе", "Высокая устойчивость цвета", "Не требуется грунтование"] },
  { name: "Luxium Легко Обновить — Мебель и дерево", tag: "Эмаль", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/8ee/8eedcd682f8a1f2d9010df932230f8f6/17973574_jpg_1x.webp", features: ["Устойчива к образованию пятен", "Устойчива к мытью", "На водной основе"] },
  { name: "Luxium Легко Обновить — Полы и лестницы", tag: "Эмаль", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/d70/d70d17a5dd9e90245da94c05462a29b7/58706875_jpg_1x.webp", features: ["На водной основе", "Устойчива к мытью", "Не требуется грунтование"] },
  { name: "Luxium Bindo 2", tag: "Потолки", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/943/94313c9fedfaf033b450971858528704/52755942_jpg_1x.webp", features: ["Высокая степень белизны", "Скрывает дефекты поверхности", "Тиксотропная"] },
  { name: "Luxium Bindo 3", tag: "Интерьерная", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/290/290d38e941c3caa4d4f12b6cfe0569e6/33365807_jpg_1x.webp", features: ["Минимальное время сушки между слоями (1 час)", "Без разбрызгиваний и потёков", "Антибликовая"] },
  { name: "Luxium Bindo 7", tag: "Интерьерная", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/34c/34cffb1fdcaac7eed0dd5f35ffa9da4e/43239895_jpg_1x.webp", features: ["Устойчива к мытью", "Минимальное время сушки между слоями (1 час)", "Срок службы покрытия до 15 лет"] },
  { name: "Luxium Bindo 20", tag: "Влажные помещения", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/b12/b12e99d42d7c596abc89b96677aaac4a/72178213_jpg_1x.webp", features: ["Минимальное время сушки между слоями (1 час)", "Уничтожает споры грибка и плесени", "Устойчива к конденсату"] },
  { name: "Luxium Bindo 40", tag: "Влажные помещения", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/694/694e2ed263b8b032928a5e07a280ec6a/40247138_jpg_1x.webp", features: ["Устойчива к образованию плесени", "Устойчива к конденсату", "Минимальное время сушки между слоями (1 час)"] },
  { name: "Luxium Bindo Expert", tag: "Интерьерная", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/fa5/fa5b02c8d98f69ee2bb60d238e144b58/31515441_jpg_1x.webp", features: ["Срок службы покрытия до 15 лет", "Минимальное время сушки между слоями (1 час)", "Легко наносится и шлифуется"] },
  { name: "Luxium Ослепительно Белая Матовая", tag: "Интерьерная", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/48d/48d2a732763825b0bec76a0db85fa5c5/76125466_jpg_1x.webp", features: ["Содержит частицы мрамора, визуально увеличивает пространство", "Гладкое и белоснежное покрытие", "Выдерживает мытьё с мылом и гелем"] },
  { name: "Luxium Обои", tag: "Обои", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/a6a/a6a7738b2da987c8acea6346310a4d14/23498814_jpg_1x.webp", features: ["Для обоев любого типа", "Почти без запаха", "Быстрое высыхание"] },
  { name: "Luxium Classic Colour для обоев", tag: "Обои", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/a3e/a3e62a6e32338d6c5af4f84301235359/96923087_jpg_1x.webp", features: ["Надолго сохраняет цвет", "Подчёркивает рельеф обоев", "Обладает отличной укрывистостью"] },
  { name: "Luxium Acryl Matt", tag: "Интерьерная", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/67c/67c062e7cd73493c1c19894a242e2ce9/36908488_jpg_1x.webp", features: ["Эластичное покрытие", "Скрывает дефекты поверхности", "Высокая устойчивость цвета"] },
  { name: "Luxium Family Zone", tag: "Интерьерная", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/181/18135f6b922b24b3480b4db3291dd5ad/10547253_jpg_1x.webp", features: ["Экологичная", "Влажная уборка", "Скрывает дефекты поверхности"] },
  { name: "Luxium Super Strong", tag: "Интерьерная", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/f71/f710fac6b9517b4f8f2004fbda50fe25/83302707_jpg_1x.webp", features: ["Экономный расход", "Устойчива к многократному мытью", "Минимальное время сушки между слоями (1 час)"] },
  { name: "Luxium 3D White", tag: "Интерьерная", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/304/304528a97fbaf54e4b6b1c874753f7e8/86982730_jpg_1x.webp", features: ["Оптический отбеливатель и частицы мрамора — непревзойдённая белизна интерьера", "Визуально расширяет пространство (3D-эффект)", "Колеруется в пастельные оттенки"] },
  { name: "Luxium Classic Colour — Краска для стен", tag: "Интерьерная", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/f4d/f4d58847b0daa364832b3b2a9ed3d2f2/39590990_jpg_1x.webp", features: ["Надолго сохраняет цвет", "Выдерживает мытьё с мылом и гелем", "Укрывает в 2 слоя"] },
  { name: "Luxium Bindo Filler", tag: "Подготовка", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/a6a/a6a918b545e91f16e2498ceafc64b39c/53512040_jpg_1x.webp", features: ["Легко наносится и шлифуется", "Экологичная", "Высокая степень белизны"] },
  { name: "Luxium Bindo Primer", tag: "Грунтовка", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/5d4/5d41dd6a37b4cf8362aa44fd457ca838/55229002_jpg_1x.webp", features: ["Улучшает адгезию", "Обеспечивает равномерность нанесения краски", "Сокращает расход финишного материала"] },
  { name: "Luxium Maxi", tag: "Подготовка", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/76f/76f6c8dc49558a904b949a8d4b442104/52032558_jpg_1x.webp", features: ["Почти без запаха", "Надёжное и долговечное сцепление", "Легко наносится и шлифуется"] },
  { name: "Luxium Classic Colour Для пола", tag: "Эмаль", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/9f2/9f2173795e7d4ba7d88cb9496dd4b5a4/29329560_jpg_1x.webp", features: ["Быстрое высыхание", "Выдерживает мытьё с мылом и гелем"] },
  { name: "Luxium Better Living", tag: "Антибактериальная", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/755/7559893462e4dd2c0afe116196786855/81956355_jpg_1x.webp", features: ["Содержит ионы серебра, препятствующие размножению бактерий", "Устойчива к многократному мытью"] },
  { name: "Luxium Classic Colour Для мебели и дерева", tag: "Эмаль", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/538/5389d6c11c0dc8d488fcf88dcf731fec/99042964_jpg_1x.webp", features: ["Выдерживает мытьё с мылом и гелем", "Быстрое высыхание"] },
  { name: "Luxium Weathershield Extraflex", tag: "Фасадная", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/612/6129d2ca9cd22c66524d675c23f4b1f8/55357585_jpg_1x.webp", features: ["Срок службы покрытия до 15 лет", "Эластичное покрытие", "Устойчива к УФ-излучению"] },
  { name: "Luxium Max Protect", tag: "Интерьерная", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/a8e/a8e2d51e507192c24348b81b9900a2ee/63122123_jpg_1x.webp", features: ["В 10 раз прочнее, чем обычные интерьерные краски", "Защищает от чёрных следов резины и пластика", "Для помещений с максимальной нагрузкой"] },
  { name: "Luxium Фасадная Гладкая", tag: "Фасадная", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/2e8/2e8a85ee4d71e62eb4d176235c978ece/94995033_jpg_1x.webp", features: ["Срок службы покрытия до 25 лет", "Экономный расход", "Сверхадгезивная"] },
  { name: "Luxium Classic Colour Фасадная", tag: "Фасадная", img: "https://cdn-ru.bitrix24.kz/b7517553/landing/0aa/0aae0b796e4fdd0f8393e6e61a9b7bcf/75606075_jpg_1x.webp", features: ["Срок службы покрытия до 12 лет", "Устойчива к образованию плесени", "Устойчива к воздействию атмосферных явлений"] },
];

function Index() {
  return (
    <div className="min-h-screen text-foreground">
      <Header />
      <Hero />
      <Audiences />
      <About />
      <Categories />
      <Advantages />
      <ProductsCatalog />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-2xl tracking-tight text-gold-gradient">Luxium</span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm text-muted-foreground">
          <a href="#brand" className="hover:text-gold-soft transition">О бренде</a>
          <a href="#categories" className="hover:text-gold-soft transition">Продукция</a>
          <a href="#advantages" className="hover:text-gold-soft transition">Преимущества</a>
          <a href="#products" className="hover:text-gold-soft transition">Каталог</a>
          <a href="#contact" className="hover:text-gold-soft transition">Контакты</a>
        </nav>
        <a href="#contact" className="hidden md:inline-flex btn-gold btn-gold-hover text-sm py-2.5 px-5">
          Оставить заявку
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-gold-soft" aria-label="Меню">
          <ChevronDown className={`w-6 h-6 transition ${open ? "rotate-180" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/40 px-6 py-4 flex flex-col gap-3 text-sm">
          {[["О бренде","#brand"],["Продукция","#categories"],["Преимущества","#advantages"],["Каталог","#products"],["Контакты","#contact"]].map(([l,h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="text-muted-foreground py-1">{l}</a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 relative z-10">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-gold-soft mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            Новый стандарт качества
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
            Ваш надёжный <span className="text-gold-gradient italic">поставщик</span> лакокрасочных решений
          </h1>
          <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Luxium — обновлённый бренд, пришедший на смену Dulux. Профессиональные покрытия для проектов любого масштаба.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="btn-gold btn-gold-hover">
              Рассчитать цену <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#categories" className="btn-ghost-gold btn-ghost-gold-hover">
              Смотреть продукцию
            </a>
          </div>
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            {[["60+","SKU в линейке"],["10+","лет технологий"],["24/7","сопровождение"]].map(([n,t]) => (
              <div key={t}>
                <div className="font-display text-3xl text-gold-gradient">{n}</div>
                <div className="text-xs text-muted-foreground mt-1 leading-tight">{t}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6 relative">
          <div className="absolute -inset-8 rounded-3xl bg-gradient-to-tr from-gold/20 via-transparent to-transparent blur-2xl" />
          <div className="relative rounded-2xl overflow-hidden border border-border/60 shadow-2xl">
            <img src={heroImg} alt="Профессиональная краска Luxium" width={1600} height={1104} className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Audiences() {
  return (
    <section className="py-20 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <h2 className="font-display text-4xl md:text-5xl max-w-2xl">Для тех, кто <em className="text-gold-gradient not-italic">делает качественно</em></h2>
          <div className="hairline w-32" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {audiences.map((a, i) => (
            <div key={a.title} className="group relative p-7 rounded-xl bg-card/40 border border-border/50 hover:border-gold/60 transition-all hover:-translate-y-1">
              <div className="text-xs text-gold-soft mb-4 font-mono">0{i+1}</div>
              <h3 className="font-display text-2xl mb-3">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="brand" className="py-24 lg:py-32 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="rounded-2xl overflow-hidden border border-border/60">
            <img src={brandImg} alt="О бренде Luxium" width={1200} height={900} loading="lazy" className="w-full h-auto" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-background border border-gold/40 rounded-xl p-6 max-w-xs">
            <div className="text-gold-soft text-xs tracking-widest uppercase mb-2">Преемственность</div>
            <div className="font-display text-2xl">Dulux → Luxium</div>
          </div>
        </div>
        <div>
          <div className="text-xs tracking-[0.25em] uppercase text-gold-soft mb-6">О бренде</div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Luxium — новый стандарт <span className="text-gold-gradient italic">качества</span> для профессиональных решений
          </h2>
          <div className="hairline w-24 my-8" />
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>Luxium — это обновлённый бренд, пришедший на смену Dulux. Мы сохранили все ключевые технологии и усилили фокус на локальные потребности рынка.</p>
            <p>Это профессиональная краска, созданная с учётом условий работы мастеров. Luxium — выбор тех, кто делает качественно с первого раза.</p>
          </div>
          <ul className="mt-8 space-y-3">
            {["Проверенные технологии Dulux","Адаптация под локальный климат","Полная сертификация ЕАЭС"].map(t => (
              <li key={t} className="flex items-center gap-3 text-sm">
                <Check className="w-4 h-4 text-gold" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section id="categories" className="py-24 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[0.25em] uppercase text-gold-soft mb-4">Наша продукция</div>
          <h2 className="font-display text-4xl md:text-5xl">Четыре направления — <em className="text-gold-gradient not-italic">одно качество</em></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map(c => (
            <a key={c.title} href={c.href} className="group relative overflow-hidden rounded-xl border border-border/50 hover:border-gold/70 transition-all">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={c.img} alt={c.title} width={900} height={1100} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <h3 className="font-display text-2xl text-foreground mb-1">{c.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{c.desc}</p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-soft">
                  Подробнее <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Advantages() {
  return (
    <section id="advantages" className="py-24 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:sticky lg:top-24">
            <div className="text-xs tracking-[0.25em] uppercase text-gold-soft mb-4">Преимущества</div>
            <h2 className="font-display text-4xl md:text-5xl">Для каждого <em className="text-gold-gradient not-italic">партнёра</em></h2>
            <p className="mt-6 text-muted-foreground">Системный подход к поставкам, документообороту и сопровождению — без сюрпризов.</p>
          </div>
          <div className="lg:col-span-2 space-y-4">
            {advantages.map((a, i) => (
              <div key={a.title} className="flex gap-6 p-7 rounded-xl bg-card/30 border border-border/40 hover:border-gold/50 transition">
                <div className="shrink-0 w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                  <a.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <div className="text-xs text-gold-soft mb-1 font-mono">0{i+1}</div>
                  <h3 className="font-display text-2xl mb-2">{a.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsCatalog() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string>("Все");
  const [active, setActive] = useState<Product | null>(null);

  const tags = ["Все", ...Array.from(new Set(products.map(p => p.tag).filter(Boolean) as string[]))];
  const filtered = products.filter(p =>
    (tag === "Все" || p.tag === tag) &&
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [active]);

  return (
    <section id="products" className="py-20 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 mb-8 sm:flex sm:flex-wrap sm:justify-between">
          <div className="min-w-0">
            <div className="text-xs tracking-[0.25em] uppercase text-gold-soft mb-3">Каталог</div>
            <h2 className="font-display text-3xl md:text-4xl">Линейка <em className="text-gold-gradient not-italic">Luxium</em></h2>
            <p className="mt-2 text-sm text-muted-foreground">{products.length} продуктов · нажмите карточку для описания</p>
          </div>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Поиск…"
            className="bg-card/40 border border-border/50 rounded-full px-4 py-2.5 text-sm w-full sm:w-64 focus:outline-none focus:border-gold/60 transition"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map(t => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full border transition ${
                tag === t
                  ? "bg-gold text-ink border-gold"
                  : "border-border/60 text-muted-foreground hover:border-gold/60 hover:text-gold-soft"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filtered.map((p) => (
            <button
              key={p.name}
              onClick={() => setActive(p)}
              className="group text-left bg-white border border-border/40 rounded-lg overflow-hidden hover:border-gold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/10 transition-all"
            >
              <div className="aspect-square bg-white flex items-center justify-center p-1.5 overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-2.5 bg-card border-t border-border/30">
                {p.tag && <div className="text-[9px] tracking-widest uppercase text-gold-soft/80 mb-1">{p.tag}</div>}
                <div className="text-xs leading-snug line-clamp-2 group-hover:text-gold-soft transition">{p.name}</div>
              </div>
            </button>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full p-10 text-center text-muted-foreground text-sm">Ничего не найдено.</div>
          )}
        </div>

        <p className="mt-6 text-xs text-muted-foreground">СГР, MSDS, СС, ПИ — по запросу для каждого артикула.</p>
      </div>

      {active && <ProductModal product={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-ink/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[92vh] overflow-auto bg-card border border-gold/30 rounded-2xl shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-background/80 border border-border/60 flex items-center justify-center hover:bg-gold hover:text-ink transition"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="bg-white flex items-center justify-center p-6 min-h-[280px]">
            <img src={product.img} alt={product.name} className="max-h-[360px] max-w-full object-contain" />
          </div>
          <div className="p-7 lg:p-9">
            {product.tag && <div className="text-xs tracking-[0.25em] uppercase text-gold-soft mb-3">{product.tag}</div>}
            <h3 className="font-display text-2xl lg:text-3xl leading-tight mb-2">{product.name}</h3>
            <div className="hairline w-16 my-5" />
            <p className="text-sm text-muted-foreground mb-5">Профессиональное покрытие линейки Luxium. Сертифицировано для применения на территории ЕАЭС.</p>
            <ul className="space-y-3 mb-7">
              {product.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm leading-relaxed">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" onClick={onClose} className="btn-gold btn-gold-hover w-full justify-center">
              Запросить цену <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


function Contact() {
  const contacts = [
    { icon: Phone, label: "Телефон", value: "+7 (727) 347-55-55", href: "tel:+77273475555" },
    { icon: Mail, label: "Email", value: "info@an-d.asia", href: "mailto:info@an-d.asia" },
    { icon: MapPin, label: "Адрес", value: "г. Алматы, ул. Рымжанова, 35", href: "https://maps.google.com/?q=Алматы+Рымжанова+35" },
  ];
  return (
    <section id="contact" className="py-24 lg:py-32 border-t border-border/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.03] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs tracking-[0.25em] uppercase text-gold-soft mb-4">Контакты</div>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Свяжитесь с <em className="text-gold-gradient not-italic">выделенным менеджером</em>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Подготовим коммерческое предложение под ваш проект в течение рабочего дня.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 lg:gap-6 mb-12">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.label === "Адрес" ? "_blank" : undefined}
              rel={c.label === "Адрес" ? "noreferrer" : undefined}
              className="group relative p-8 lg:p-10 rounded-2xl bg-card/40 border border-border/50 hover:border-gold/60 hover:bg-card/70 transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition">
                <c.icon className="w-5 h-5 text-gold" />
              </div>
              <div className="text-xs tracking-widest uppercase text-gold-soft mb-2">{c.label}</div>
              <div className="font-display text-2xl lg:text-3xl leading-tight">{c.value}</div>
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:+77273475555" className="btn-gold btn-gold-hover">
            Позвонить сейчас <Phone className="w-4 h-4" />
          </a>
          <a href="mailto:info@an-d.asia" className="btn-ghost-gold btn-ghost-gold-hover">
            Написать на email <Mail className="w-4 h-4" />
          </a>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-12">
          Пн–Пт 09:00–18:00 · Выделенный менеджер для каждого партнёра
        </p>
      </div>
    </section>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      setVisible(scrollHeight > 0 && scrolled / scrollHeight > 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Наверх"
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-gold text-ink shadow-lg shadow-gold/30 flex items-center justify-center hover:scale-110 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap items-center justify-between gap-6">
        <div>
          <div className="font-display text-2xl text-gold-gradient">Luxium</div>
          <p className="text-xs text-muted-foreground mt-2">Профессиональные покрытия для профессионалов.</p>
        </div>
        <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Luxium. Все права защищены.</div>
      </div>
    </footer>
  );
}
