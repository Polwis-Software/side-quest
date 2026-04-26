export type Lang = 'tr' | 'en'

export const i18n = {
  tr: {
    nav: {
      earlyAccess: 'erken erişim',
      pagesLabel: 'Sayfalar',
      followLabel: 'Bizi takip edin',
      signIn: 'Giriş yap',
      signUp: 'Yola Çık',
      profile: 'Profil',
      signOut: 'Çıkış yap',
    },
    hero: {
      badge: 'ERKEN ERİŞİM AÇILDI',
      headline1: 'Fikrin kafanda',
      headline2: 'kalmasın.',
      sub: 'Side Quest, quester\'ların yalnız kalmadığı yer. Gerçek crew\'lar, gerçek quest\'ler, gerçek yol taşları.',
      ctaLabel: 'Yola Çık',
      ctaNote: 'Ücretsiz. Spam yok. Asla.',
    },
    stats: {
      questers: 'quester katıldı',
      ideas: 'kıvılcım atıldı',
      collabs: 'crew kuruldu',
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

Buraya gelen her quester üç şeyle ayrılır: bir crew, bir cesaret, ve atılacak ilk yol taşı.`,
    },
    personas: {
      badge: 'TOPLULUK',
      title: 'Side Quest kimler için?',
      items: [
        {
          num: '01',
          label: 'Vizyoner',
          labelTr: 'Vizyoner',
          quote: '"Aklımda bir fikir var, henüz yola çıkmadım."',
          desc: 'İçinde bir kıvılcım var. Side Quest\'te onu yalnız taşımayacaksın — fikrini olgunlaştıracak insanlar burada.',
          accent: '#7f77dd',
          accentBg: 'rgba(127,119,221,0.06)',
          accentBorder: 'rgba(127,119,221,0.2)',
        },
        {
          num: '02',
          label: 'İnşacı',
          labelTr: 'İnşacı',
          quote: '"Quest\'imi başlattım, yol taşları koyuyorum."',
          desc: 'Yola çıktın. Şimdi crew\'unu bulmak, fikirlerine destek olacak insanları toplamak zamanı.',
          accent: '#d4a843',
          accentBg: 'rgba(212,168,67,0.06)',
          accentBorder: 'rgba(212,168,67,0.2)',
        },
        {
          num: '03',
          label: 'Destekçi',
          labelTr: 'Destekçi',
          quote: '"Başkalarının quest\'lerine eşlik etmek istiyorum."',
          desc: 'Kendi quest\'inde değilsin — başkalarının yolculuğuna katkı vermek istiyorsun. Burada doğru quester\'larla buluşacaksın.',
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
          name: 'Kıvılcım Akışı',
          desc: 'Fikirlerini paylaş, gerçek quester\'lardan gerçek tepkiler al. Yorum, geri bildirim, eşlik.',
        },
        {
          name: 'Crew Bul',
          desc: 'Senin eksiğin başkasının uzmanlığı. Tamamlayıcı yetenekleri olan quester\'larla buluş, birlikte inşa et.',
        },
        {
          name: 'Yol Taşları',
          desc: 'Quest\'inde attığın her adımı paylaş. Crew\'un seni hesapta tutar, ilerleme görünür olur.',
        },
      ],
    },
    faq: {
      badge: 'SSS',
      title: 'Aklındakileri yanıtlıyoruz.',
      items: [
        {
          q: 'Side Quest tamamen ücretsiz mi?',
          a: 'Temel özellikler her zaman ücretsiz kalacak. Quester olmak, crew kurmak, kıvılcım atmak — hep ücretsiz.',
        },
        {
          q: 'Ne zaman açılıyor?',
          a: 'Şu an erken erişim listesi oluşturuyoruz. İlk quester\'lar birkaç hafta içinde davetlerle giriş yapacak.',
        },
        {
          q: 'Teknik bilgim yok, katılabilir miyim?',
          a: 'Side Quest her quester için. Pazarlamacı, tasarımcı, öğretmen, doktor — quest\'i olan herkese açık.',
        },
        {
          q: 'Hangi quest\'ler için uygun?',
          a: 'Sınır yok. Uygulama, bülten, YouTube kanalı, fiziksel ürün, küçük işletme — kafanda dönen her şey bir quest olabilir.',
        },
      ],
    },
    cta: {
      title: 'Yola çıkmaya hazır mısın?',
      sub: 'Erken katıl. Topluluğu şekillendir. Crew\'unu bul.',
      label: 'Questa Katıl',
    },
    footer: {
      tagline: 'Yalnız kalmadan inşa etmek için kurulmuş bir quester topluluğu.',
      nav: ['Manifesto', 'Kimler için', 'SSS'],
      copy: '© 2025 Side Quest',
      madeWith: 'Made with ☕ in Istanbul',
    },
    auth: {
      signIn: {
        title: 'Quester Girişi',
        subtitle: 'Tekrar hoş geldin.',
        emailLabel: 'Email',
        passwordLabel: 'Şifre',
        submitLabel: 'Giriş Yap',
        noAccount: 'Hesabın yok mu?',
        signUpLink: "Quester'lığa katıl",
        googleLabel: 'Google ile giriş yap',
        or: 'veya',
      },
      signUp: {
        title: "Quester'lığa Katıl",
        subtitle: 'Yolculuğuna başlamak için bir adım kaldı.',
        nameLabel: 'İsim',
        emailLabel: 'Email',
        passwordLabel: 'Şifre (en az 6 karakter)',
        submitLabel: 'Yola Çık',
        hasAccount: 'Hesabın var mı?',
        signInLink: 'Giriş yap',
        googleLabel: 'Google ile kayıt ol',
        or: 'veya',
      },
      profile: {
        editBtn: 'Profili Düzenle',
        noStory: 'Bu quester henüz hikayesini yazmadı.',
        saveBtn: 'Kaydet',
        storyLabel: 'Hikaye',
        nameLabel: 'İsim',
        storyPlaceholder: 'Kendi yolculuğunu anlat... (maks. 280 karakter)',
        personaLabel: 'Persona',
        personaPlaceholder: 'Seç',
        successMsg: 'Profil güncellendi.',
      },
      onboarding: {
        title: 'Hoş geldin, Quester!',
        subtitle: 'Onboarding yakında burada olacak.',
        backHome: 'Ana sayfaya dön',
      },
      signOut: {
        message: 'Çıkış yapılıyor...',
      },
      errors: {
        generic: 'Bir hata oluştu, tekrar dene.',
      },
    },
  },
  en: {
    nav: {
      earlyAccess: 'early access',
      pagesLabel: 'Pages',
      followLabel: 'Follow us',
      signIn: 'Sign in',
      signUp: 'Begin the Journey',
      profile: 'Profile',
      signOut: 'Sign out',
    },
    hero: {
      badge: 'EARLY ACCESS IS OPEN',
      headline1: "Don't let your idea",
      headline2: 'stay in your head.',
      sub: "Side Quest is where questers don't walk alone. Real crews, real quests, real milestones.",
      ctaLabel: 'Begin the Journey',
      ctaNote: 'Free to join. No spam. Ever.',
    },
    stats: {
      questers: 'questers joined',
      ideas: 'sparks shared',
      collabs: 'crews formed',
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

Every quester leaves with three things: a crew, courage, and the first milestone to lay.`,
    },
    personas: {
      badge: 'COMMUNITY',
      title: 'Who is Side Quest for?',
      items: [
        {
          num: '01',
          label: 'Visionary',
          labelTr: 'Vizyoner',
          quote: '"I have an idea, haven\'t taken the first step yet."',
          desc: "There's a spark inside you. At Side Quest you won't carry it alone — the people who will help shape your idea are here.",
          accent: '#7f77dd',
          accentBg: 'rgba(127,119,221,0.06)',
          accentBorder: 'rgba(127,119,221,0.2)',
        },
        {
          num: '02',
          label: 'Builder',
          labelTr: 'İnşacı',
          quote: '"My quest has begun, laying milestones now."',
          desc: "You've started the journey. Time to find your crew, gather the people who'll support your ideas.",
          accent: '#d4a843',
          accentBg: 'rgba(212,168,67,0.06)',
          accentBorder: 'rgba(212,168,67,0.2)',
        },
        {
          num: '03',
          label: 'Companion',
          labelTr: 'Destekçi',
          quote: '"I want to walk with others on their quests."',
          desc: "You're not on your own quest — you want to support others' journeys. You'll find the right questers here.",
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
          name: 'Spark Feed',
          desc: 'Share your ideas, get real reactions from real questers. Comments, feedback, companionship.',
        },
        {
          name: 'Find Your Crew',
          desc: "Your weakness is someone's strength. Meet questers with complementary skills, build together.",
        },
        {
          name: 'Milestones',
          desc: 'Share every step you take on your quest. Your crew keeps you on track, progress becomes visible.',
        },
      ],
    },
    faq: {
      badge: 'FAQ',
      title: "Answering what's on your mind.",
      items: [
        {
          q: 'Is Side Quest completely free?',
          a: 'Core features will always stay free. Being a quester, forming a crew, sharing sparks — all free.',
        },
        {
          q: 'When does it launch?',
          a: "We're building the early access list now. First questers will get invites in a few weeks.",
        },
        {
          q: "I don't have technical skills, can I join?",
          a: "Side Quest is for every quester. Marketer, designer, teacher, doctor — open to anyone with a quest.",
        },
        {
          q: 'What kind of quests is it for?',
          a: 'No limits. Apps, newsletters, YouTube channels, physical products, small businesses — anything in your head can be a quest.',
        },
      ],
    },
    cta: {
      title: 'Ready to begin the journey?',
      sub: 'Join early. Shape the community. Find your crew.',
      label: 'Join the Quest',
    },
    footer: {
      tagline: 'A quester community built for creating without being alone.',
      nav: ['Manifesto', 'For Who', 'FAQ'],
      copy: '© 2025 Side Quest',
      madeWith: 'Made with ☕ in Istanbul',
    },
    auth: {
      signIn: {
        title: 'Quester Sign In',
        subtitle: 'Welcome back.',
        emailLabel: 'Email',
        passwordLabel: 'Password',
        submitLabel: 'Sign In',
        noAccount: "Don't have an account?",
        signUpLink: 'Join the Quest',
        googleLabel: 'Continue with Google',
        or: 'or',
      },
      signUp: {
        title: 'Join the Quest',
        subtitle: "One step away from beginning your journey.",
        nameLabel: 'Name',
        emailLabel: 'Email',
        passwordLabel: 'Password (min. 6 characters)',
        submitLabel: 'Begin the Journey',
        hasAccount: 'Already have an account?',
        signInLink: 'Sign in',
        googleLabel: 'Continue with Google',
        or: 'or',
      },
      profile: {
        editBtn: 'Edit Profile',
        noStory: "This quester hasn't written their story yet.",
        saveBtn: 'Save',
        storyLabel: 'Story',
        nameLabel: 'Name',
        storyPlaceholder: 'Tell your journey... (max 280 characters)',
        personaLabel: 'Persona',
        personaPlaceholder: 'Select',
        successMsg: 'Profile updated.',
      },
      onboarding: {
        title: 'Welcome, Quester!',
        subtitle: 'Onboarding is coming soon.',
        backHome: 'Back to home',
      },
      signOut: {
        message: 'Signing out...',
      },
      errors: {
        generic: 'Something went wrong, please try again.',
      },
    },
  },
} as const
