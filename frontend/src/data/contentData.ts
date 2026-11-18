import type { 
  MoodNutriItem, 
  ServiceItem, 
  TestimonialItem, 
  FAQItem,
  CalorieCalculatorInput,
  CalorieCalculatorResult
} from '../types';


export const CLINIC_INFO = {
  name: 'Dyt. Emir Yontar',
  title: 'Diyetisyen',
  clinicName: 'Emir Yontar Beslenme Danışmanlığı',
  motto: 'Yasak listeleriyle değil, gündelik hayatınıza uyan bir planla. Online ve yüz yüze beslenme danışmanlığı.',
  phone: '+90 (216) 450 88 90',
  whatsapp: '+90 532 100 20 30',
  email: 'iletisim@emiryontar.com',
  address: 'Bağdat Caddesi No: 342 Kat: 4 Daire: 8, Suadiye / Kadıköy, İstanbul',
  workingHours: 'Pazartesi - Cumartesi: 09:00 - 19:00',
  instagram: '@dytemiryontar',
};

export const MOOD_NUTRI_DATA: MoodNutriItem[] = [
  {
    id: 'stressed',
    title: 'Stresli & Gergin',
    subtitle: 'Kortizol Seviyen Yükselmiş Olabilir',
    emoji: '',
    badge: 'Stres Anında Beslenme',
    color: '#E07A5F',
    biochemistryReason: 'Yüksek stres anında böbrek üstü bezleri kortizol salgılar. Bu durum kan şekerinde ani dalgalanmalara yol açarak vücudun hızlı karbonhidrat arayışına girmesine sebep olur. Bu anlarda düzenli öğünler, magnezyumdan zengin besinler ve kafeini azaltmak işe yarar.',
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
    mindfulPractice: '4-7-8 Nefes Egzersizi: 4 saniyede burnundan derin nefes al, 7 saniye tut, 8 saniyede dudaklarını büzerek yavaşça bırak. Bu döngüyü 4 kez tekrarla; bedenin sakinleşmeye başlar.'
  },
  {
    id: 'fatigued',
    title: 'Yorgun & Enerjisiz',
    subtitle: 'Öğleden Sonra Enerjin Düşüyorsa',
    emoji: '',
    badge: 'Kan Şekeri & Su Dengesi',
    color: '#F4A261',
    biochemistryReason: 'Sürekli yorgunluk hissi çoğunlukla dehidrasyon, B vitamini yetersizliği veya hızlı karbonhidrat tüketiminin ardından gelen reaktif hipoglisemiden (kan şekeri çöküşü) kaynaklanır.',
    recommendedFoods: [
      'Haşlanmış yumurta & avokado (Kolin ve sağlıklı yağlar)',
      'Kinoa, karabuğday ve yulaf ezmesi (Yavaş salınımlı glikoz)',
      'Ispanak & pazı gibi koyu yeşil yapraklılar (Demir ve folat)',
      'Bol su (isteğe göre limon veya zencefil ile)',
      'Ceviz içi & chia tohumu (Omega-3 enerji desteği)'
    ],
    foodsToAvoid: [
      'Beyaz unlu açma/poğaça (1 saat sonra derin uyku hali getirir)',
      'Şekerli kahveler ve şuruplar',
      'Ağır kızartmalar'
    ],
    quickRecipe: {
      name: 'Yoğurtlu Yulaf Kasesi',
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
    emoji: '',
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
      instructions: 'Elma dilimlerinin üzerine fıstık ezmesini sürün, bol tarçın serpin. Lif ve yağ birlikte tatlı isteğini daha uzun süre bastırır.'
    },
    mindfulPractice: '10 Dakika Kuralı: Kendine şunu söyle: "Bu isteği yasaklamıyorum, sadece 10 dakika erteleyip 1 bardak tarçınlı su içiyorum. 10 dakika sonra hala canım çekerse bilinçli bir seçim yapacağım."'
  },
  {
    id: 'emotional_hunger',
    title: 'Duygusal Açlık',
    subtitle: 'Miden mi Aç, Yoksa Ruhun mu?',
    emoji: '',
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
      name: 'Limonlu Sebze Çorbası',
      prepTime: '6 Dakika',
      ingredients: [
        '1 kase sıcak sebze veya mercimek püresi çorbası',
        'Yarım limon suyu',
        '1 tatlı kaşığı zeytinyağı',
        'Bir tutam taze nane veya dereotu'
      ],
      instructions: 'Çorbayı ısıtın, limon ve zeytinyağını ekleyin. Masaya oturup, ekrandan uzak ve yavaş için.'
    },
    mindfulPractice: 'H.A.L.T. Kontrolü: Aç mısın? Yoksa Hungry (Aç), Angry (Öfkeli), Lonely (Yalnız) veya Tired (Yorgun) musun? Adını koyduğun duygu gücünü kaybeder.'
  },
  {
    id: 'brain_fog',
    title: 'Zihinsel Sis & Odaklanma',
    subtitle: 'Gün İçinde Dağınık Hissediyorsan',
    emoji: '',
    badge: 'Uyku, Su & Öğün Düzeni',
    color: '#457B9D',
    biochemistryReason: 'Odaklanma güçlüğü çoğu zaman uykusuzluk, susuzluk ve uzun süre aç kalmayla ilişkilidir. Düzenli uyku, yeterli su ve omega-3 kaynaklarını içeren bir beslenme düzeni odaklanmayı destekler.',
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
      name: 'Sütlü Matcha',
      prepTime: '3 Dakika',
      ingredients: [
        '1 çay kaşığı matcha tozu',
        'Yarım fincan 80 derece sıcak su',
        'Yarım fincan ılık yulaf veya badem sütü',
        'İsteğe göre bir çimdik tarçın'
      ],
      instructions: 'Matchayı sıcak suda çırpın, ılık sütü ekleyip karıştırın.'
    },
    mindfulPractice: '2 Dakikalık Duruş Düzeltme & Gökyüzü Molası: Sandalyeden kalk, pencereden en uzak noktaya bak. Göz kaslarını dinlendirirken 5 derin nefes al.'
  },
  {
    id: 'bloated',
    title: 'Şişkinlik & Gaz',
    subtitle: 'Sindirimi Rahatlatmak İçin',
    emoji: '',
    badge: 'Sindirim Dostu Seçimler',
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
      name: 'Rezeneli Zencefil Çayı',
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
    description: 'Şok diyetlerle verip geri alma döngüsünden çıkmak isteyenler için. İş temponuza, sosyal hayatınıza ve sevdiğiniz yemeklere göre hazırlanan esnek bir plan.',
    features: [
      'Detaylı Vücut Kompozisyon & Yaşam Tarzı Analizi',
      'Haftalık Birebir Görüntülü Seanslar (45 Dk)',
      'Kişiselleştirilmiş, Yasaksız Beslenme Haritası',
      'Hafta İçi WhatsApp Üzerinden Soru-Cevap',
      'Özel Danışan Paneli & Mobil Menü Takibi',
      'Duygusal Yeme Üzerine Ek Seans'
    ],
    idealFor: 'Sürekli kilo verip geri alanlar, diyet yapmaktan yorulanlar ve yiyeceklerle barışmak isteyenler.'
  },
  {
    id: 'fonksiyonel-tip',
    title: 'Fonksiyonel Beslenme & Bağırsak Sağlığı',
    tagline: 'İBS, insülin direnci, PCOS ve tiroid sorunlarında beslenme desteği.',
    duration: '4 Aylık Kapsamlı İyileşme Protokolü',
    badge: 'Klinik & Fonksiyonel',
    description: 'Kan tahlillerinizi ve şikayetlerinizi birlikte değerlendirip, hekiminizin tedavisiyle uyumlu bir beslenme planı hazırlıyoruz. İBS, Haşimato, PCOS ve insülin direnci en sık çalıştığımız konular.',
    features: [
      'Kapsamlı Kan Tahlili & Fonksiyonel Biyobelirteç İncelemesi',
      'Mikrobiyota & Eliminasyon Diyeti Yol Haritası',
      'Gerekirse Takviye Önerisi (Hekim Onayıyla)',
      'Gıda İntoleransı ve Tetikleyici Besin Günlüğü',
      '2 Haftada Bir Detaylı Klinik Değerlendirme',
      'Uyku ve Stres İçin Pratik Öneriler'
    ],
    idealFor: 'Sürekli şişkinlik, kronik yorgunluk, PCOS, insülin direnci veya tiroid problemi yaşayanlar.'
  },
  {
    id: 'sporcu-performans',
    title: 'Sporcu Beslenmesi & Vücut Kompozisyonu',
    tagline: 'Antrenmanınıza göre ayarlanmış öğün ve makro planı.',
    duration: 'Aylık Performans Takibi',
    badge: 'Performans Odaklı',
    description: 'Dayanıklılık sporcuları, fitness meraklıları ve profesyonel atletler için antrenman periyodizasyonuna göre uyarlanmış makro zamanlaması (nutrient timing), hidrasyon ve toparlanma protokolü.',
    features: [
      'Antrenman Günü vs. Dinlenme Günü Özel Makro Planları',
      'Antrenman Öncesi, Sırası ve Sonrası Besin Zamanlaması',
      'Yağ Kaybı veya Kas Kazanımı Hedefli Haftalık Plan',
      'Supplement Kullanımı Hakkında Danışmanlık',
      'Müsabaka / Yarışma Öncesi Yükleme Stratejileri',
      'Performans ve Dayanıklılık İlerleme Raporları'
    ],
    idealFor: 'Maraton koşanlar, CrossFit/fitness yapanlar ve kas kütlesi kazanmak isteyen sporcular.'
  },
  {
    id: 'moodnutri-vip',
    title: 'Duygusal Yeme Danışmanlığı',
    tagline: 'Stres yemeleri, gece atıştırmaları ve tatlı krizleri için.',
    duration: '2 Aylık Bütünsel Dönüşüm Programı',
    badge: 'Yeni Program',
    description: 'Ne yediğinizden çok neden ve ne zaman yediğinize odaklanan bir program. Tetikleyicileri birlikte buluyor, kriz anları için uygulanabilir bir plan hazırlıyoruz.',
    features: [
      'Duygu Durum ve Beslenme Tetikleyici Envanteri',
      'Düzenli Öğün Planı ve Ara Öğün Stratejisi',
      'Mindful Eating (Bilinçli Farkındalıkla Yeme) Pratikleri',
      'Gece Atıştırmaları İçin Pratik Alternatifler',
      'Uyku Düzeni Üzerine Öneriler',
      'Haftalık Birebir Görüşme'
    ],
    idealFor: 'Stres anında dolabın önünde kendini bulanlar, gece yemeleri yaşayanlar ve zihinsel sis hissedenler.'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '1',
    clientName: 'Burcu Y.',
    age: 34,
    occupation: 'Yazılım Mühendisi',
    achievement: '5 ayda -14 kg',
    quote: 'Emir Bey ile çalışmadan önce hayatım pazartesi başlayıp çarşamba biten açlık diyetleriyle doluydu. İlk defa ekmek yerken suçluluk hissetmedim, kontrol tahlilimde insülin direncim de belirgin şekilde düzeldi.',
    timeframe: '5 Aylık Süreç',
    tags: ['Sürdürülebilir Kilo', 'İnsülin Direnci']
  },
  {
    id: '2',
    clientName: 'Emre Ç.',
    age: 29,
    occupation: 'Finans Yöneticisi',
    achievement: 'Şişkinlik şikayeti azaldı',
    quote: 'Yıllardır şişkinlikle uğraşıyordum. Hangi besinlerin dokunduğunu adım adım bulduk, artık iş yerinde gün boyu rahatım.',
    timeframe: '3 Aylık Süreç',
    tags: ['Bağırsak Sağlığı', 'İBS']
  },
  {
    id: '3',
    clientName: 'Deniz A.',
    age: 41,
    occupation: 'Mimar',
    achievement: 'Gece yemeleri bitti',
    quote: 'Çocuklar uyuduktan sonra mutfağa gidip gizlice tatlı yeme nöbetlerim vardı. Emir Bey bunu yasaklarla değil, akşam öğününü düzenleyerek çözdü. Artık geceleri mutfağa gitme ihtiyacı hissetmiyorum.',
    timeframe: '4 Aylık Süreç',
    tags: ['Duygusal Açlık', 'Gece Yemeleri']
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'genel',
    question: 'Online diyet seansları yüz yüze seanslar kadar etkili mi?',
    answer: 'Evet. Danışanlarımın büyük kısmı online görüşüyor. Görüntülü görüşmede tartı ve ölçüm sonuçlarınızı birlikte değerlendiriyoruz; hafta içi WhatsApp üzerinden de sorularınızı yanıtlıyorum.'
  },
  {
    id: 'faq-2',
    category: 'yontem',
    question: 'Diyet listelerinde katı yasaklar veya bulunması zor gıdalar var mı?',
    answer: 'Hayır. Evde pişen tencere yemekleri, dışarıda yemek yediğiniz günler ve sevdiğiniz yiyecekler planın içinde yer alır. Pahalı ya da bulunması zor ürünlere ihtiyacınız yok.'
  },
  {
    id: 'faq-3',
    category: 'yontem',
    question: 'Duygusal yeme danışmanlığı nasıl ilerliyor?',
    answer: 'İlk görüşmede hangi durumlarda yemeğe yöneldiğinizi konuşuyoruz. Ardından kısa bir yeme günlüğü tutuyorsunuz ve kriz anları için uygulanabilir alternatifler belirliyoruz. Gerekli görürsem bir psikologla birlikte çalışmanızı da öneririm.'
  },
  {
    id: 'faq-4',
    category: 'genel',
    question: 'Başlamadan önce kan tahlili yaptırmam gerekiyor mu?',
    answer: 'Önerilir. Son 6 ay içerisinde yapılmış tam kan sayımı, biyokimya, tiroid ve insülin değerlerinizi içeren tahlillerinizi inceliyoruz. Eğer yakın zamanda tahliliniz yoksa, hekiminize danışarak yaptırabileceğiniz tahlil listesini size iletiyoruz.'
  },
  {
    id: 'faq-5',
    category: 'online',
    question: 'Randevu aldığımda süreç nasıl başlıyor?',
    answer: 'Randevunuz onaylandıktan sonra size kısa bir ön bilgi formu gönderilir. İlk seansımızda bu formu, sağlık geçmişinizi ve hedeflerinizi konuşarak ilk haftalık yol haritanızı birlikte oluştururuz.'
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
    tip = 'Haftada ortalama 0,5–1 kg kayıp için ılımlı bir kalori açığı hesaplandı.';
  } else if (goal === 'gain_muscle') {
    // Lean surplus of 15%
    targetCalories = Math.round(tdee * 1.15);
    tip = 'Kas kazanımı için hafif bir kalori fazlası ve yüksek protein hedeflendi.';
  } else {
    tip = 'Mevcut kilonuzu korumanız için gereken yaklaşık enerji miktarı.';
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
