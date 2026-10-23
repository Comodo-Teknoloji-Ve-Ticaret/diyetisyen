import type { 
  MoodNutriItem, 
  ServiceItem, 
  TestimonialItem, 
  FAQItem,
  CalorieCalculatorInput,
  CalorieCalculatorResult
} from '../types';


export const CLINIC_INFO = {
  name: 'Dyt. Sena Alkan',
  title: 'Uzman Klinik Diyetisyen & Bütünsel Beslenme Stratejisti',
  clinicName: 'Sena Alkan Bütünsel Beslenme & Wellness Kliniği',
  motto: 'Kısıtlayıcı diyetlere mahkum olmadan, bedeninle barışık, kalıcı ve şefkatli bir beslenme dönüşümü.',
  phone: '+90 (216) 450 88 90',
  whatsapp: '+90 532 100 20 30',
  email: 'iletisim@senaalkan.com.tr',
  address: 'Bağdat Caddesi No: 342 Kat: 4 Daire: 8, Suadiye / Kadıköy, İstanbul',
  workingHours: 'Pazartesi - Cumartesi: 09:00 - 19:00',
  instagram: '@dytsenaalkan',
};

export const MOOD_NUTRI_DATA: MoodNutriItem[] = [
  {
    id: 'stressed',
    title: 'Stresli & Gergin',
    subtitle: 'Kortizol Seviyen Yükselmiş Olabilir',
    emoji: '🧘‍♀️',
    badge: 'Kortizol & Sinir Sistemi Dengesi',
    color: '#E07A5F',
    biochemistryReason: 'Yüksek stres anında böbrek üstü bezleri kortizol salgılar. Bu durum kan şekerinde ani dalgalanmalara yol açarak vücudun hızlı karbonhidrat arayışına girmesine sebep olur. Amacımız sinir sistemini yatıştıran magnezyum ve GABA öncülerini devreye sokmaktır.',
    recommendedFoods: [
      'Kabak çekirdeği & çiğ badem (Yüksek magnezyum)',
      'Bitter çikolata (%70+ polifenol desteği)',
      'Papatya, melisa veya yeşil çay (L-theanine içeriğiyle sakinleştirir)',
      'Yaban mersini & böğürtlen (Antioksidan kalkanı)',
      'Fesleğenli ılık kemik suyu veya miso çorbası'
    ],
    foodsToAvoid: [
      'Aşırı kafein & enerji içecekleri (Kortizolü daha çok tetikler)',
      'Rafine şekerli hazır hamur işleri',
      'Aşırı tuzlu işlenmiş atıştırmalıklar'
    ],
    quickRecipe: {
      name: 'Anti-Stres Magnezyum Smoothie',
      prepTime: '4 Dakika',
      ingredients: [
        '1 bardak ılık badem sütü',
        '1 tatlı kaşığı çiğ kakao tozu',
        '1 yemek kaşığı kabak çekirdeği içi',
        'Yarım olgun muz (potasyum desteği)',
        'Bir çimdik tarçın ve 1 çay kaşığı organik chia tohumu'
      ],
      instructions: 'Tüm malzemeleri blenderdan geçirin. Ilık veya oda sıcaklığında, acele etmeden, küçük yudumlarla için.'
    },
    mindfulPractice: '4-7-8 Nefes Egzersizi: 4 saniyede burnundan derin nefes al, 7 saniye tut, 8 saniyede dudaklarını büzerek yavaşça bırak. Bu döngüyü 4 kez tekrarla; vagus sinirin yatışacaktır.'
  },
  {
    id: 'fatigued',
    title: 'Yorgun & Enerjisiz',
    subtitle: 'Hücresel Enerjin ve Mitokondrin Destek Bekliyor',
    emoji: '⚡',
    badge: 'Mitokondri & B-Kompleks Aktivasyonu',
    color: '#F4A261',
    biochemistryReason: 'Sürekli yorgunluk hissi çoğunlukla dehidrasyon, B vitamini yetersizliği veya hızlı karbonhidrat tüketiminin ardından gelen reaktif hipoglisemiden (kan şekeri çöküşü) kaynaklanır.',
    recommendedFoods: [
      'Haşlanmış yumurta & avokado (Kolin ve sağlıklı yağlar)',
      'Kinoa, karabuğday ve yulaf ezmesi (Yavaş salınımlı glikoz)',
      'Ispanak & pazı gibi koyu yeşil yapraklılar (Demir ve folat)',
      'Limonlu & taze zencefilli alkali su',
      'Ceviz içi & chia tohumu (Omega-3 enerji desteği)'
    ],
    foodsToAvoid: [
      'Beyaz unlu açma/poğaça (1 saat sonra derin uyku hali getirir)',
      'Şekerli kahveler ve şuruplar',
      'Ağır kızartmalar'
    ],
    quickRecipe: {
      name: 'Hücresel Yenilenme Güç Kasesi',
      prepTime: '5 Dakika',
      ingredients: [
        '3 yemek kaşığı yoğurt (probiyotik maya)',
        '2 yemek kaşığı ince öğütülmüş yulaf',
        '3 adet kırılmış ceviz içi',
        'Yarım çay kaşığı toz zencefil & zerdeçal',
        '1 tatlı kaşığı nar tanesi veya yaban mersini'
      ],
      instructions: 'Kasenin içinde karıştırın. Çiğneme refleksinizi hissederek, her lokmanın dokusuna odaklanarak tüketin.'
    },
    mindfulPractice: 'Beden Taraması & Su Molası: Gözlerini 60 saniye kapat. Omuzlarını indir, çeneni gevşet. Ardından oda sıcaklığında büyük bir bardak suyu yudum yudum iç.'
  },
  {
    id: 'sugar_craving',
    title: 'Tatlı Krizinde',
    subtitle: 'Dopamin Arayışı ve Kan Şekeri Dengesizliği',
    emoji: '🍩',
    badge: 'Dopamin & İnsülin Dengesi',
    color: '#E76F51',
    biochemistryReason: 'Tatlı isteği aslında iradesizlik değil; beyindeki ödül merkezinin dopamin sinyali veya kan şekerindeki ani düşüşün yardım çağrısıdır. Tatlıyı yasaklamak yerine, glisemik yükü düşük doğal liflerle denge kuruyoruz.',
    recommendedFoods: [
      'Seylan tarçını (İnsülin duyarlılığını artırır)',
      'Fıstık ezmeli elma dilimleri (Lif + protein bariyeri)',
      'Karanfilli ılık rezene veya rooibos çayı',
      'Medjool hurma içine 1 adet çiğ ceviz',
      'Süzme yoğurt + vanilya özütü'
    ],
    foodsToAvoid: [
      'Boş kalorili şekerlemeler ve çikolatalar',
      'Yapay tatlandırıcılı diyet gazlı içecekler (İştahı daha çok tetikler)'
    ],
    quickRecipe: {
      name: 'Fırınsız Tarçınlı Elma Lokması',
      prepTime: '3 Dakika',
      ingredients: [
        '1 adet küçük boy tatlı kırmızı elma (halka dilimlenmiş)',
        '1 tatlı kaşığı şekersiz fıstık veya badem ezmesi',
        'Bolca toz Seylan tarçını',
        '1 tatlı kaşığı rendelenmiş hindistan cevizi'
      ],
      instructions: 'Elma dilimlerinin üzerine fıstık ezmesini sürün, bol tarçın serpin. Lif ve yağ dengesi tatlı krizini 7 dakikada sonlandırır.'
    },
    mindfulPractice: '10 Dakika Kuralı: Kendine şunu söyle: "Bu isteği yasaklamıyorum, sadece 10 dakika erteleyip 1 bardak tarçınlı su içiyorum. 10 dakika sonra hala canım çekerse bilinçli bir seçim yapacağım."'
  },
  {
    id: 'emotional_hunger',
    title: 'Duygusal Açlık',
    subtitle: 'Miden mi Aç, Yoksa Ruhun mu?',
    emoji: '🌀',
    badge: 'Açlık Skalası & Farkındalıkla Beslenme',
    color: '#2A9D8F',
    biochemistryReason: 'Fiziksel açlık yavaş yavaş gelir, her sağlıklı yiyecekle tatmin olur. Duygusal açlık ise aniden gelir; spesifik bir gıdayı ister ve yendikten sonra suçluluk hissettirir. Bedenin burada yiyeceğe değil, şefkate ve ilgiye ihtiyaç duyuyor.',
    recommendedFoods: [
      'Ilık nane-ıhlamur infüzyonu (Mideyi sıcaklıkla sarar)',
      'Çıtır havuç, salatalık & ev yapımı humus (Çiğneme ihtiyacını doyurur)',
      'Mevsim meyveleri ile yapılmış ferahlatıcı komposto (şekersiz)',
      'Fırınlanmış nohut krakeri'
    ],
    foodsToAvoid: [
      'Paketli cips ve bisküviler (Farkında olmadan paket bitirilir)',
      'Ekran karşısında şuursuzca tüketilen atıştırmalıklar'
    ],
    quickRecipe: {
      name: 'Sıcak Ruh Kasesi: Zencefilli Sebze Çorbası',
      prepTime: '6 Dakika',
      ingredients: [
        '1 kase sıcak sebze veya mercimek püresi çorbası',
        'Yarım limon suyu',
        '1 tatlı kaşığı zeytinyağı',
        'Bir tutam taze nane veya dereotu'
      ],
      instructions: 'Çorbanı güzel bir seramik kaseye koy. İki elinle kaseyi kavrayıp sıcaklığını hisset. Kokla ve her kaşığı şükranla yut.'
    },
    mindfulPractice: 'H.A.L.T. Kontrolü: Aç mısın? Yoksa Hungry (Aç), Angry (Öfkeli), Lonely (Yalnız) veya Tired (Yorgun) musun? Adını koyduğun duygu gücünü kaybeder.'
  },
  {
    id: 'brain_fog',
    title: 'Zihinsel Sis & Odaklanma',
    subtitle: 'Nöronlarını ve Beyin Bariyerini Besle',
    emoji: '🧠',
    badge: 'Nöro-Beslenme & Odaklanma Artışı',
    color: '#457B9D',
    biochemistryReason: 'Zihinsel yorgunluk ve odaklanamama çoğunlukla hücresel enflamasyon, omega-3 düşüklüğü ve mikrobiyota dengesizliğiyle ilişkilidir. Beynin %60’ı yağdan oluşur; doğru yağlarla beslemek bilişsel netliği anında artırır.',
    recommendedFoods: [
      'Ceviz, keten tohumu ve chia (Bitkisel Omega-3)',
      'Yeşil çay / Matcha (L-theanine ve kafein sinerjisi)',
      'Yaban mersini & böğürtlen (Flavonoid deposu)',
      'Biberiye ve adaçayı infüzyonu (Hafıza destekçisi)',
      'Zeytinyağlı avokado salatası'
    ],
    foodsToAvoid: [
      'Yüksek fruktozlu mısır şurubu içeren gıdalar',
      'Trans yağlar ve margarin türevleri',
      'Yetersiz su tüketimi'
    ],
    quickRecipe: {
      name: 'Nöro-Netlik Matcha İksiri',
      prepTime: '3 Dakika',
      ingredients: [
        '1 çay kaşığı seremoniyal matcha tozu',
        'Yarım fincan 80 derece sıcak su',
        'Yarım fincan ılık yulaf veya badem sütü',
        '1 çay kaşığı soğuk sıkım hindistan cevizi yağı (MCT yağ asitleri)'
      ],
      instructions: 'Matchayı sıcak suda bambu çırpıcı veya süt köpürtücü ile çırpın. Süt ve hindistan cevizi yağını ekleyerek köpürtün.'
    },
    mindfulPractice: '2 Dakikalık Duruş Düzeltme & Gökyüzü Molası: Sandalyeden kalk, pencereden en uzak noktaya bak. Göz kaslarını dinlendirirken 5 derin nefes al.'
  },
  {
    id: 'bloated',
    title: 'Şişkinlik & Gaz',
    subtitle: 'Sindirim Ateşini ve Mikrobiyotayı Rahatlat',
    emoji: '🌱',
    badge: 'Bağırsak-Mikrobiyota İyileşmesi',
    color: '#52B788',
    biochemistryReason: 'Şişkinlik; sindirim enzimlerinin yetersizliği, hızlı yemek yeme sebebiyle hava yutulması veya FODMAP grubu gıdaların kolonda aşırı fermente olması sonucu meydana gelir.',
    recommendedFoods: [
      'Taze zencefil & taze nane çayı',
      'Rezene tohumu çiğnemek veya çayını demlemek',
      'Kombucha veya ev yapımı kefir (Düşük laktozlu probiyotik)',
      'Haşlanmış kabak, havuç ve ıspanak',
      'Elma sirkesi ile asitliği dengelenmiş ılık su (yemeklerden 15 dk önce)'
    ],
    foodsToAvoid: [
      'Gazlı içecekler ve maden suyu (ani şişkinlikte)',
      'Çiğ brokoli, karnabahar ve lahana (buharda pişirilmemişse)',
      'Yapay sakızlar (hava yutturur ve şeker alkolleri şişirir)'
    ],
    quickRecipe: {
      name: 'Sindirim Kurtarıcısı Sıcak İnfüzyon',
      prepTime: '5 Dakika',
      ingredients: [
        '1 tatlı kaşığı rezene tohumu (hafif havanda ezilmiş)',
        '3 dilim taze zencefil',
        '3 yaprak taze nane',
        '250 ml kaynar su',
        '1 ince dilim limon'
      ],
      instructions: 'Malzemelerin üzerine kaynar suyu dökün. Üzerini kapatarak 7 dakika demlendirin. Yemekten sonra ılık olarak yavaşça için.'
    },
    mindfulPractice: 'Yemek Sonrası 100 Adım & Karın Masajı: Yemek bittikten sonra saat yönünde göbek deliği çevresine yumuşak dairesel masaj yapın ve 5 dakika sakin bir yürüyüşe çıkın.'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'surdurulebilir-kilo',
    title: 'Sürdürülebilir Kilo Yönetimi & Sezgisel Beslenme',
    tagline: 'Yasaklar olmadan, bedeninin doğal açlık ve tokluk ritmini keşfet.',
    duration: '3 - 6 Aylık Bireysel Danışmanlık',
    badge: 'En Popüler Program',
    description: 'Kalori sayma takıntısından ve şok diyet döngüsünden kurtulmanızı sağlayan bilimsel ve psikolojik temelli beslenme rehberliği. Yaşam tarzınıza, sosyal hayatınıza ve damak zevkinize özel esnek planlama.',
    features: [
      'Detaylı Vücut Kompozisyon & Yaşam Tarzı Analizi',
      'Haftalık Birebir Görüntülü Seanslar (45 Dk)',
      'Kişiselleştirilmiş, Yasaksız Beslenme Haritası',
      '7/24 WhatsApp Soru & Acil Destek Hattı',
      'Özel Danışan Paneli & Mobil Menü Takibi',
      'Duygusal Yeme ve Tetikleyici Atölyesi'
    ],
    idealFor: 'Sürekli kilo verip geri alanlar, diyet yapmaktan yorulanlar ve yiyeceklerle barışmak isteyenler.'
  },
  {
    id: 'fonksiyonel-tip',
    title: 'Fonksiyonel Beslenme & Bağırsak Sağlığı',
    tagline: 'Kök nedeni keşfedin: İBS, otoimmünite, insülin direnci ve hormonal denge.',
    duration: '4 Aylık Kapsamlı İyileşme Protokolü',
    badge: 'Klinik & Fonksiyonel',
    description: 'Sadece kaloriye değil; hücresel biyokimyaya odaklanan yaklaşım. Bağırsak mikrobiyotası, geçirgen bağırsak sendromu, Haşimato, PCOS ve insülin direnci için kanıtlanmış eliminasyon ve onarım protokolleri.',
    features: [
      'Kapsamlı Kan Tahlili & Fonksiyonel Biyobelirteç İncelemesi',
      'Mikrobiyota & Eliminasyon Diyeti Yol Haritası',
      'Kişiselleştirilmiş Takviye & Fitoterapi Protokolü',
      'Gıda İntoleransı ve Tetikleyici Besin Günlüğü',
      '2 Haftada Bir Detaylı Klinik Değerlendirme',
      'Bağırsak-Beyin Aksı Yaşam Tarzı Rehberi'
    ],
    idealFor: 'Sürekli şişkinlik, kronik yorgunluk, PCOS, insülin direnci veya tiroid problemi yaşayanlar.'
  },
  {
    id: 'sporcu-performans',
    title: 'Sporcu Beslenmesi & Vücut Kompozisyonu',
    tagline: 'Antrenman verimini maksimize et, yağsız kas kütleni artır ve hızlı toparlan.',
    duration: 'Aylık Performans Takibi',
    badge: 'Performans Odaklı',
    description: 'Dayanıklılık sporcuları, fitness meraklıları ve profesyonel atletler için antrenman periyodizasyonuna göre uyarlanmış makro zamanlaması (nutrient timing), hidrasyon ve toparlanma protokolü.',
    features: [
      'Antrenman Günü vs. Dinlenme Günü Özel Makro Planları',
      'Antrenman Öncesi, Sırası ve Sonrası Besin Zamanlaması',
      'Yağ Yakımı ve Hipertrofi Hedefli Biyo-Ritim Çizelgesi',
      'Kanıta Dayalı Ergojenik Destek & Supplement Rehberi',
      'Müsabaka / Yarışma Öncesi Yükleme Stratejileri',
      'Performans ve Dayanıklılık İlerleme Raporları'
    ],
    idealFor: 'Maraton koşanlar, CrossFit/fitness yapanlar ve kas kütlesi kazanmak isteyen sporcular.'
  },
  {
    id: 'moodnutri-vip',
    title: 'MoodNutri™ Duygu & Zihin Odaklı Beslenme',
    tagline: 'Stres, duygusal yeme ve tükenmişliği nöro-beslenme ile iyileştir.',
    duration: '2 Aylık Bütünsel Dönüşüm Programı',
    badge: 'Özel USP Programı',
    description: 'Yeme davranışının ardındaki psikolojik ve biyokimyasal tetikleyicileri dönüştüren özel program. Dopamin, serotonin ve kortizol dengesini gözeten besin seçimleri ile zihinsel berraklık.',
    features: [
      'Duygu Durum ve Beslenme Tetikleyici Envanteri',
      'Nörotransmitter Dengeleyici Öğün Planları',
      'Mindful Eating (Bilinçli Farkındalıkla Yeme) Pratikleri',
      'Gece Tatlı Krizlerini Sonlandıran Acil Eylem Kiti',
      'Uyku Kalitesi & Sirkadiyen Ritim Optimizasyonu',
      'Dyt. Sena Alkan ile Haftalık Birebir Koçluk'
    ],
    idealFor: 'Stres anında dolabın önünde kendini bulanlar, gece yemeleri yaşayanlar ve zihinsel sis hissedenler.'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '1',
    clientName: 'Burcu Yılmaz',
    age: 34,
    occupation: 'Yazılım Mühendisi',
    achievement: '-14 kg & İnsülin Direncini Yendi',
    quote: 'Sena Hanım ile tanışmadan önce hayatım pazartesi başlayıp çarşamba biten açlık diyetleriyle doluydu. İlk defa ekmek yerken suçluluk hissetmedim ve kan tahlillerimde HOMA-IR değerim 4.2’den 1.4’e geriledi!',
    timeframe: '5 Aylık Süreç',
    tags: ['Sürdürülebilir Kilo', 'İnsülin Direnci', 'Özşefkat'],
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '2',
    clientName: 'Emre Çetinkaya',
    age: 29,
    occupation: 'Finans Yöneticisi',
    achievement: 'Kronik Şişkinlik & İBS Son Buldu',
    quote: 'MoodNutri yaklaşımı sayesinde iş stresimin bağırsaklarımı nasıl kilitlediğini anladım. Eliminasyon protokolüyle enerjim iki katına çıktı, artık toplantılarda rahatsız edici gaz krampları yaşamıyorum.',
    timeframe: '3 Aylık Süreç',
    tags: ['Bağırsak Sağlığı', 'İBS Tedavisi', 'MoodNutri'],
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '3',
    clientName: 'Deniz Aktaş',
    age: 41,
    occupation: 'Mimar & Anne',
    achievement: 'Duygusal Yeme Bağımlılığını Çözdü',
    quote: 'Çocuklar uyuduktan sonra mutfağa gidip gizlice tatlı yeme nöbetlerim vardı. Sena Hanım bana bedenimi yargılamadan dinlemeyi öğretti. Artık yemek bir kaçış değil, bedenime sunduğum bir şükran.',
    timeframe: '4 Aylık Süreç',
    tags: ['Duygusal Açlık', 'Sezgisel Beslenme', 'Kalıcı Dönüşüm'],
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'genel',
    question: 'Online diyet seansları yüz yüze seanslar kadar etkili mi?',
    answer: 'Kesinlikle evet! Danışanlarımızın %70’i yurt içi ve yurt dışından online olarak hizmet alıyor. Görüntülü görüşmelerimiz, özel mobil danışan panelimiz ve 7/24 WhatsApp iletişimimiz sayesinde yüz yüze seanslardan çok daha dinamik ve anlık bir takip ortamı sağlıyoruz.'
  },
  {
    id: 'faq-2',
    category: 'yontem',
    question: 'Diyet listelerinde katı yasaklar veya bulunması zor gıdalar var mı?',
    answer: 'Asla! Bizim felsefemiz kısıtlayıcı yasaklar üzerine değil, sürdürülebilir alışkanlıklar üzerine kuruludur. Evinizde pişen tencere yemekleri, gittiğiniz restorandaki alternatifler ve sevdiğiniz lezzetler listenizde yer alır. Bulunması zor pahalı süper besinlere ihtiyacınız yok.'
  },
  {
    id: 'faq-3',
    category: 'yontem',
    question: 'MoodNutri (Duygu Durumuna Göre Beslenme) nedir, nasıl uygulanır?',
    answer: 'MoodNutri kliniğimize özgü, nöro-beslenme temelli bir yaklaşımdır. Yemek seçimlerimizin %80’i duygularımızla yönetilir. Stres, üzüntü, yorgunluk veya ödül arayışı anlarında biyokimyanızın neye ihtiyaç duyduğunu tespit eder; kortizol ve insülini yatıştıracak pratik çözümler sunarız.'
  },
  {
    id: 'faq-4',
    category: 'genel',
    question: 'Başlamadan önce kan tahlili yaptırmam gerekiyor mu?',
    answer: 'Evet, sağlığınız bizim için çok kıymetli. Son 6 ay içerisinde yapılmış tam kan sayımı, biyokimya, tiroid ve insülin değerlerinizi içeren tahlillerinizi inceliyoruz. Eğer yakın zamanda tahliliniz yoksa, hekiminize danışarak yaptırabileceğiniz tahlil listesini size iletiyoruz.'
  },
  {
    id: 'faq-5',
    category: 'online',
    question: 'Randevu aldığımda süreç nasıl başlıyor?',
    answer: 'Randevu formunuzu onayladıktan sonra size 15 dakikalık kapsamlı bir Beslenme & Yaşam Tarzı Anamnez Formu gönderilir. İlk seansımızda bu formu, sağlık geçmişinizi ve hedeflerinizi konuşarak ilk haftalık yol haritanızı birlikte oluştururuz.'
  }
];

// Mifflin-St Jeor Formula calculation engine
export function calculateNutrition(input: CalorieCalculatorInput): CalorieCalculatorResult {
  const { age, gender, height, weight, activityLevel, goal } = input;

  // Mifflin - St Jeor BMR Formula
  // Men: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
  // Women: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161
  let bmr = (10 * weight) + (6.25 * height) - (5 * age);
  if (gender === 'male') {
    bmr += 5;
  } else {
    bmr -= 161;
  }

  // Activity Multipliers
  const activityMultipliers: Record<string, number> = {
    sedentary: 1.2,       // Masa başı, hareketsiz
    light: 1.375,         // Haftada 1-3 gün hafif egzersiz
    moderate: 1.55,       // Haftada 3-5 gün orta düzey spor
    active: 1.725,        // Haftada 6-7 gün yoğun spor
    very_active: 1.9      // Günde çift antrenman veya fiziksel ağır iş
  };

  const tdee = Math.round(bmr * (activityMultipliers[activityLevel] || 1.375));

  // Goal adjustment
  let targetCalories = tdee;
  let tip = '';

  if (goal === 'lose_weight') {
    // Healthy 20% deficit (around 400-500 kcal)
    targetCalories = Math.max(Math.round(tdee * 0.8), gender === 'male' ? 1500 : 1200);
    tip = 'Sürdürülebilir kilo kaybı için kas kütlenizi korurken haftada ortalama 0.5 - 1 kg hedefleyen dengeli bir kalori açığı oluşturuldu.';
  } else if (goal === 'gain_muscle') {
    // Lean surplus of 15%
    targetCalories = Math.round(tdee * 1.15);
    tip = 'Hücresel toparlanmayı ve yağsız kas dokusu gelişimini destekleyecek temiz bir kalori fazlası ve yüksek protein dengesi kurgulandı.';
  } else {
    tip = 'Metabolik hızınızı koruyan, kan şekerinizi sabit tutan ve gün boyu enerjinizi yüksek tutacak koruma dengesi.';
  }

  // Macro Distribution: Protein: 25-30%, Fat: 25-30%, Carbs: 45-50%
  // 1g Protein = 4 kcal, 1g Carb = 4 kcal, 1g Fat = 9 kcal
  let proteinRatio = 0.28;
  let fatRatio = 0.27;
  let carbRatio = 0.45;

  if (goal === 'gain_muscle') {
    proteinRatio = 0.30;
    fatRatio = 0.25;
    carbRatio = 0.45;
  } else if (goal === 'lose_weight') {
    proteinRatio = 0.32;
    fatRatio = 0.28;
    carbRatio = 0.40;
  }

  const proteinKcal = Math.round(targetCalories * proteinRatio);
  const fatKcal = Math.round(targetCalories * fatRatio);
  const carbKcal = targetCalories - proteinKcal - fatKcal;

  const proteinGrams = Math.round(proteinKcal / 4);
  const fatGrams = Math.round(fatKcal / 9);
  const carbGrams = Math.round(carbKcal / 4);

  // Water need: approx 35ml per kg body weight + activity bonus
  const waterNeedLiters = Number(((weight * 0.035) + (activityLevel === 'active' || activityLevel === 'very_active' ? 0.6 : 0.3)).toFixed(1));

  return {
    bmr: Math.round(bmr),
    tdee,
    targetCalories,
    waterNeedLiters,
    macros: {
      proteinGrams,
      proteinKcal,
      proteinPercent: Math.round(proteinRatio * 100),
      carbGrams,
      carbKcal,
      carbPercent: Math.round(carbRatio * 100),
      fatGrams,
      fatKcal,
      fatPercent: Math.round(fatRatio * 100)
    },
    tip
  };
}
