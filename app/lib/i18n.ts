export type Lang = 'tr' | 'en'

export const i18n = {
  tr: {
    nav: {
      earlyAccess: 'erken erişim',
      pagesLabel: 'Sayfalar',
      followLabel: 'Bizi takip edin',
    },
    hero: {
      badge: 'ERKEN ERİŞİM AÇILDI',
      headline1: 'Fikrin kafanda',
      headline2: 'kalmasın.',
      sub: 'Side Quest, fikir sahiplerinin yalnız kalmadığı yer. Gerçek insanlar, gerçek projeler, gerçek ilerleme.',
      ctaLabel: "Questa Katıl",
      ctaNote: 'Ücretsiz. Spam yok. Asla.',
    },
    stats: {
      questers: 'quester katıldı',
      ideas: 'fikir devam ediyor',
      collabs: 'iş birliği kuruldu',
    },
    manifesto: {
      badge: 'MANİFESTO',
      title: 'Bir yerde durduğumuzu fark ettik.',
      body: `Okulda başarılı olduk. Doğru üniversiteye gittik. Hayalini kurduğumuz şirkette işe başladık.

Sonra bir gün, pazartesi sabahı ofise girerken fark ettik: İçimizdeki o yaratıcı kıvılcım sönüyordu.

Kafamızda dolaşan fikirler vardı. Başlatamadığımız projeler. Paylaşamadığımız düşünceler. Çünkü etrafımızdakiler anlamıyordu. Çünkü nereden başlayacağımızı bilmiyorduk. Çünkü bunu yapan başka kimseyi tanımıyorduk.

Yalnızdık.

Side Quest tam burada başlıyor.

Side Quest, "içimde bir şey var ama ne?" diyenler için. Fikrinin peşinden gitmek isteyip cesareti bulamayanlar için. Yalnız olmadığını hissetmesi gerekenler için.

Buraya gelen her quester üç şeyle ayrılır: bir crew, bir cesaret ve bir başlangıç.`,
    },
    personas: {
      badge: 'TOPLULUK',
      title: 'Side Quest kimler için?',
      items: [
        {
          num: '01',
          label: 'The Dreamer',
          labelTr: 'Hayalperest',
          quote: '"Kafamda yüzlerce fikir var. Hangisini seçsem?"',
          desc: 'Yaratıcısın, ama seçim yapmak zor. Side Quest sana hangi fikrin peşinden gitmeye değer olduğunu gösterir.',
          accent: '#7f77dd',
          accentBg: 'rgba(127,119,221,0.06)',
          accentBorder: 'rgba(127,119,221,0.2)',
        },
        {
          num: '02',
          label: 'The Starter',
          labelTr: 'Başlatıcı',
          quote: '"Başladım ama yarıda bıraktım. Bir daha denemek istiyorum."',
          desc: 'Motivasyon dalgalanır, momentum değişmez. Side Quest\'te seni hesapta tutan bir crew bulursun.',
          accent: '#d4a843',
          accentBg: 'rgba(212,168,67,0.06)',
          accentBorder: 'rgba(212,168,67,0.2)',
        },
        {
          num: '03',
          label: 'The Builder',
          labelTr: 'İnşaatçı',
          quote: '"Küçük bir şey inşa ettim. Şimdi büyütme zamanı."',
          desc: 'Yolun başında değilsin, ama hâlâ yolda. Doğru insanlarla bir sonraki seviyeye çıkarsın.',
          accent: '#34c785',
          accentBg: 'rgba(52,199,133,0.06)',
          accentBorder: 'rgba(52,199,133,0.2)',
        },
      ],
    },
    platform: {
      badge: 'PLATFORM',
      title: 'İçeride seni ne bekliyor?',
      features: [
        {
          name: 'Quest Feed',
          desc: 'Fikirlerini paylaş, gerçek insanlardan gerçek tepkiler al. Yorum, geri bildirim, destek.',
        },
        {
          name: 'Link Up',
          desc: 'Senin eksiğin bir başkasının uzmanlığı. Tamamlayıcı yetenekler bul, ortak inşa et.',
        },
        {
          name: 'Quest Groups',
          desc: '5-10 kişilik küçük gruplar, benzer hedeflere birlikte ilerler. Haftalık check-in\'ler, ortak ivme.',
        },
      ],
    },
    faq: {
      badge: 'SSS',
      title: 'Aklındakileri yanıtlıyoruz.',
      items: [
        {
          q: 'Side Quest tamamen ücretsiz mi?',
          a: 'Temel özellikler her zaman ücretsiz kalacak. İlerleyen dönemde premium özellikler isteğe bağlı olarak gelecek — ama topluluk, profiller, fikir paylaşımı her zaman ücretsiz.',
        },
        {
          q: 'Ne zaman açılıyor?',
          a: 'Şu an early access listesi oluşturuyoruz. İlk questerlar birkaç hafta içinde erken davetlerle giriş yapacak. Liste sırasına göre kademeli açılacak.',
        },
        {
          q: 'Teknik bilgim yok, katılabilir miyim?',
          a: 'Side Quest kod yazan için de, yazmayan için de. Pazarlamacı, tasarımcı, öğretmen, doktor — fikri olan herkes için yer var.',
        },
        {
          q: 'Hangi projeler için uygun?',
          a: 'Kısıtlama yok. Uygulama, bülten, YouTube kanalı, fiziksel ürün, küçük işletme, içerik platformu — aklındaki her şey bir side quest olabilir.',
        },
      ],
    },
    cta: {
      title: 'Yola çıkmaya hazır mısın?',
      sub: 'Erkenden katıl. Topluluğu şekillendir. Crew\'unu bul.',
      label: 'Questa Katıl',
    },
    footer: {
      tagline: 'Yalnız kalmadan inşa etmek için kurulmuş bir topluluk.',
      nav: ['Manifesto', 'Kimler için', 'SSS'],
      copy: '© 2025 Side Quest',
      madeWith: 'Made with ☕ in Istanbul',
    },
  },
  en: {
    nav: {
      earlyAccess: 'early access',
      pagesLabel: 'Pages',
      followLabel: 'Follow us',
    },
    hero: {
      badge: 'EARLY ACCESS IS OPEN',
      headline1: "Don't let your idea",
      headline2: 'stay in your head.',
      sub: 'Side Quest is where ideas find their people. Real builders. Real projects. Real momentum.',
      ctaLabel: 'Join the quest',
      ctaNote: 'Free to join. No spam. Ever.',
    },
    stats: {
      questers: 'questers joined',
      ideas: 'ideas in progress',
      collabs: 'collabs formed',
    },
    manifesto: {
      badge: 'MANIFESTO',
      title: 'We realized we had stopped moving.',
      body: `We did everything right. The right school. The right grades. The right job.

Then one Monday morning, walking into the office, we noticed something: that creative spark inside us was fading.

We had ideas spinning in our heads. Projects we couldn't start. Thoughts we couldn't share. Because the people around us didn't get it. Because we didn't know where to begin. Because we didn't know anyone else doing this.

We were alone.

Side Quest starts right here.

Side Quest is for the ones who say "there's something inside me, but what?" For the ones who want to chase their ideas but can't find the courage. For the ones who need to feel they're not alone.

Every quester leaves with three things: a crew, courage, and a starting point.`,
    },
    personas: {
      badge: 'COMMUNITY',
      title: 'Who is Side Quest for?',
      items: [
        {
          num: '01',
          label: 'The Dreamer',
          labelTr: 'Hayalperest',
          quote: '"I have a hundred ideas. Which one should I pick?"',
          desc: "You're creative, but choosing is hard. Side Quest helps you find which idea is worth chasing.",
          accent: '#7f77dd',
          accentBg: 'rgba(127,119,221,0.06)',
          accentBorder: 'rgba(127,119,221,0.2)',
        },
        {
          num: '02',
          label: 'The Starter',
          labelTr: 'Başlatıcı',
          quote: '"I started, then I stopped. I want to try again."',
          desc: "Motivation fluctuates, momentum doesn't. At Side Quest you find a crew that keeps you on track.",
          accent: '#d4a843',
          accentBg: 'rgba(212,168,67,0.06)',
          accentBorder: 'rgba(212,168,67,0.2)',
        },
        {
          num: '03',
          label: 'The Builder',
          labelTr: 'İnşaatçı',
          quote: '"I built something small. Time to grow it."',
          desc: "You're not at the beginning, but you're still on the way. Level up with the right people.",
          accent: '#34c785',
          accentBg: 'rgba(52,199,133,0.06)',
          accentBorder: 'rgba(52,199,133,0.2)',
        },
      ],
    },
    platform: {
      badge: 'PLATFORM',
      title: 'What awaits you inside',
      features: [
        {
          name: 'Quest Feed',
          desc: 'Share your ideas, get real reactions from real people. Comments, feedback, support.',
        },
        {
          name: 'Link Up',
          desc: "Your weakness is someone's strength. Find complementary skills, build together.",
        },
        {
          name: 'Quest Groups',
          desc: 'Small groups of 5-10 people moving toward similar goals. Weekly check-ins, shared momentum.',
        },
      ],
    },
    faq: {
      badge: 'FAQ',
      title: "Answering what's on your mind.",
      items: [
        {
          q: 'Is Side Quest completely free?',
          a: "Core features will always be free. Premium features will come later as an option — but community, profiles, and idea sharing will always be free.",
        },
        {
          q: 'When does it launch?',
          a: "We're building the early access list now. First questers will get invited within a few weeks, rolling out gradually.",
        },
        {
          q: "I don't have technical skills, can I join?",
          a: 'Side Quest is for coders and non-coders alike. Marketers, designers, teachers, doctors — there\'s room for anyone with an idea.',
        },
        {
          q: 'What kind of projects is it for?',
          a: 'No limits. Apps, newsletters, YouTube channels, physical products, small businesses, content platforms — anything in your head can be a side quest.',
        },
      ],
    },
    cta: {
      title: 'Ready to set out?',
      sub: 'Join early. Shape the community. Find your crew.',
      label: 'Join now',
    },
    footer: {
      tagline: 'A community built for creating without being alone.',
      nav: ['Manifesto', 'For Who', 'FAQ'],
      copy: '© 2025 Side Quest',
      madeWith: 'Made with ☕ in Istanbul',
    },
  },
} as const
