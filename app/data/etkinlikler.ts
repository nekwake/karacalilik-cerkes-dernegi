export interface Etkinlik {
  id: number;
  title: string;
  slug: string;
  img: string;
  text: string;
  date: string;
  keywords?: string[];
  additionalImages?: string[];
}

// Slug oluşturma fonksiyonu
function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/ş/g, "s")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/ı/g, "i")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const etkinliklerList: Etkinlik[] = [
  {
    id: 1,
    title: "Yücel Yılmaz Karaçalılık Mahallesi Ziyareti",
    slug: createSlug("Yücel Yılmaz Karaçalılık Mahallesi Ziyareti"),
    img: "/images/etkinlikpics/yucelyilmaz.jpg",
    text: "Balıkesir Büyükşehir Belediye Başkanı Yücel Yılmaz, 13 yıl aradan sonra yeniden mahalle statüsüne kavuşarak Bandırma'nın 55'nci mahallesi olan Karaçalılık'ı ziyaret etti. Cuma namazını Karaçalılık Camisi'nde kılan Başkan Yılmaz'a daha sonra Çerkez yemeklerinden oluşan ikramlarda bulunuldu. Yapılan kısa konuşmaların ardından Başkan Yücel Yılmaz, Balıkesir Büyükşehir Belediyesi Başdanışmanı Cemal Öztaylan ve AK Parti Bandırma İlçe Başkanı Mehmet Doğan'a günün anısına kalpak hediye edildi.",
    date: "01.10.2021",
    keywords: ["Yücel Yılmaz", "Balıkesir Büyükşehir Belediyesi", "Ziyaret", "Karaçalılık"],
  },
  {
    id: 2,
    title: "Bandırma AKP İlçe Başkanlığı Karaçalılık Ziyareti",
    slug: createSlug("Bandırma AKP İlçe Başkanlığı Karaçalılık Ziyareti"),
    img: "/images/galeripics/ilce-bsk-6.jpg",
    text: "Önceki Dönem Milletvekili  Cemal Öztaylan, AKP İlçe Başkanımız Mehmet Doğan ile birlikte yeniden mahalle statüsü kazanma yolunda gerekli girişimleri  başlatan Karaçalılık Mahallesi sakinleri ile bir araya gelerek taleplerini dinledi. Mahalle sakinlerinin ilettiği su problemi ile ilgili çalışma başlatıldı.",
    date: "12.03.2021",
    keywords: ["AKP", "Bandırma", "Cemal Öztaylan", "Mahalle Statüsü"],
  },
  {
    id: 3,
    title: "Tolga Tosun Ziyareti",
    slug: createSlug("Tolga Tosun Ziyareti"),
    img: "/images/etkinlikpics/tolgatosun.jpg",
    text: "Bandırma Belediyesi Mart ayı Meclisinde oy birliğiyle onaylanan madde Büyükşehir meclisinde alınacak kabul'ün ardından Karaçalılık mahalle statüsüne kavuşacak. Karaçallık mahallesi ziyaret gerçekleştiren Başkan Tolga Tosun mahalle'yi ziyaret ederek müjdeli haberi verdi kendisi verdi. Uzun yıllardır bekledikleri haberi alan mahalle sakinleri Başkan Tolga Tosun'a teşekkür etti.",
    date: "05.03.2021",
    keywords: ["Tolga Tosun", "Bandırma Belediyesi", "Mahalle Statüsü", "Ziyaret"],
  },
  {
    id: 4,
    title: "Karaçalılık Seçime Gidiyor",
    slug: createSlug("Karaçalılık Seçime Gidiyor"),
    img: "/images/etkinlikpics/secim.jpg",
    text: "Balıkesir Valisi Hasan SILDAK'ın 24.06.2021 tarihli kararından sonra Mahalle statüsü kazanan Karaçalılık için seçim tarihi belli oldu. Bandırma İlçe Seçim Müdürlüğünün kararı sonrası 6 Mart 2022 Pazar günü seçim sandığı kurulacak.",
    date: "01.09.2021",
    keywords: ["Seçim", "Mahalle Statüsü", "Balıkesir Valiliği", "Hasan SILDAK"],
  },
  {
    id: 5,
    title: "Muhtarlık Seçimi Kararı",
    slug: createSlug("Muhtarlık Seçimi Kararı"),
    img: "/images/etkinlikpics/muhtarlik-secim-karari.jpg",
    text: "23 Eylül 2021'de Balıkesir Valiliğinin kararı ile Bandırma'nın 55. Mahallesi olan Karaçalılık Mahallesinde muhtarlık seçimi 6 Mart Pazar günü yapılacak. 570 nüfusu, 360 seçmeni bulunan mahallede 08:00 - 17:00 arasında oy kullanma işlemi muhtarlık binasında gerçekleşecek.",
    date: "05.03.2022",
    keywords: ["Muhtarlık Seçimi", "Karaçalılık Mahallesi", "Seçim", "Balıkesir Valiliği"],
  },
  {
    id: 6,
    title: "Muhtarlık Seçimi Tamamlandı",
    slug: createSlug("Muhtarlık Seçimi Tamamlandı"),
    img: "/images/etkinlikpics/muhtarlik-secimi.jpg",
    text: "Mahalle olma sürecinin son adımı olan mahalle muhtarlığı seçimleri 6 Mart 2022 Pazar günü Karaçalılık Mahalle muhtarlığında yapıldı. 360 seçmenin bulunduğu mahallede 162 oy kullanıldı. Mahalle halkının ortak adayı Mehmet EVRE 155 oy ile muhtar olurken Şenol TANIŞ, Önal EVGİN, Doğan İÇÖZ ve Nusret TANIŞ azaları oldu. Seçim günü mahalle halkına tebriklerini iletmek için Ak Parti Bandırma ilçe başkanı Mehmet DOĞAN, Orhanlı Köyü Çerkes Kültür Derneğinden Mehmet AYDEMİR ve beraberindeki heyet, Yeni Ziraatlı Mahalle Muhtarı Murat ÖZHAN ve Aksakal Mahalle Muhtarı Metin ATICI ziyarette bulundu. Yeni seçilen muhtar ve heyetine görev süreleri boyunca başarılar diler, güzel günlerde beraber olmayı temenni ederiz.",
    date: "06.03.2022",
    keywords: ["Muhtarlık Seçimi", "Mehmet EVRE", "Seçim", "Karaçalılık Mahallesi"],
  },
  {
    id: 7,
    title: "Karaçalılık Köyü Çerkes Kültür Derneği Genel Kurul Bildirimi",
    slug: createSlug("Karaçalılık Köyü Çerkes Kültür Derneği Genel Kurul Bildirimi"),
    img: "/images/etkinlikpics/genel-kurul-bildirimi.jpg",
    text: "Karaçalılık Köyü Çerkes Kültür Derneği Yönetim Kurulunun 12.03.2022 tarihi 08 nolu kararı gereği 1. Olağan Genel Kurulu 28.03.2022 saat 12:00'da, gerekli çoğunluğun sağlanamaması durumunda 11.04.2022 saat 12:00'da dernek binasında yapılmasına karar verilmiştir. Genel Kurul aşağıdaki gündem ile toplanacak olup, tüm üyelerimiz davetlidir. Gündem Maddeleri: Madde 1- Açılış ve yoklama. Madde 2- Şehitlerimiz için Saygı duruşu ve istiklal marşı. Madde 3- Divan oluşturulması. Madde 4- Yeni yönetim ve denetim kurulları seçimi. Madde 5- Derneğin Genel Kurulun Kapanışı.",
    date: "12.03.2022",
    keywords: ["Genel Kurul", "Çerkes Kültür Derneği", "Dernek", "Karaçalılık"],
  },
  {
    id: 8,
    title: "Cumhuriyet Halk Partisi Bandırma İlçe Başkanlığından Ziyaret",
    slug: createSlug("Cumhuriyet Halk Partisi Bandırma İlçe Başkanlığından Ziyaret"),
    img: "/images/etkinlikpics/chp-ziyaret.jpg",
    text: "Cumhuriyet Halk Partisi Bandırma İlçe Başkanı Selim PANÇ ve beraberindeki heyet mahalle olma sürecinin ve muhtarlık seçiminin tamamlanmasından dolayı tebriklerini iletmek için ziyarette bulundu. Mahalle sakinlerinin sorunları ve talepleri ile ilgili bilgi alan Panç, çözüm konusunda destek olacaklarını iletti.",
    date: "26.03.2022",
    keywords: ["CHP", "Selim PANÇ", "Ziyaret", "Bandırma"],
  },
  {
    id: 9,
    title: "Balıkesir Büyükşehir Belediye Başkanı Yücel Yılmaz ve Balıkesir Milletvekili Yavuz Subaşı Ziyaret Edildi",
    slug: createSlug("Balıkesir Büyükşehir Belediye Başkanı Yücel Yılmaz ve Balıkesir Milletvekili Yavuz Subaşı Ziyaret Edildi"),
    img: "/images/etkinlikpics/yucel-yilmaz-yavuz-subasi-ziyaret.jpg",
    text: "İlçemizde gerçekleştireceği ziyaretler kapsamında Bandırma'da bulunan Balıkesir Büyükşehir Belediye Başkanı Yücel YILMAZ ve Balıkesir Milletvekili Yavuz SUBAŞI Bandırma irtibat bürosunda Ak Parti Bandırma İlçe Başkanı Mehmet DOĞAN'ın katılımıyla görüşme yapıldı. Ziyarete Karaçalılık Mahalle muhtarı Mehmet EVRE, Azalar Doğan İÇÖZ, Önal EVGİN ve Hayri TANIŞ katıldı. Mahalle alt ve üst yapı çalışmalarının konuşulduğu ziyarette, mahalle sakinlerinin talepleri aktarıldı.",
    date: "01.04.2022",
    keywords: ["Yücel YILMAZ", "Yavuz SUBAŞI", "Balıkesir Büyükşehir Belediyesi", "Ziyaret"],
  },
  {
    id: 10,
    title: "Alt Yapı Çalışmaları Tamamlandı",
    slug: createSlug("Alt Yapı Çalışmaları Tamamlandı"),
    img: "/images/etkinlikpics/alt-yapi-calismalari.jpg",
    text: "Mahalle sakinlerinin talepleri doğrultusunda, alt yapı çalışmalarına hız veren Balıkesir Büyükşehir Belediye Ekipleri kalan 2 sokağın kanalizasyon çalışmalarını tamamladı.",
    date: "06.04.2022",
    keywords: ["Alt Yapı", "Kanalizasyon", "Belediye", "Altyapı Çalışmaları"],
  },
  {
    id: 11,
    title: "Bandırmaspor'a Destek",
    slug: createSlug("Bandırmaspor'a Destek"),
    img: "/images/etkinlikpics/bandirmaspor-destegi.jpg",
    text: "Şehrimizin gururu Bandırmaspor'a destekte bulunmak için katıldığımız kampanya kapsamında, derneğimiz adına bayrağımız Cumhuriyet Meydanı'na çıkan yolda dalgalanmaya başladı. Bandırmaspor'a süper lig yolunda başarılar diler, her zaman destekçisi olduğumuzu bir kez daha hatırlatırız!",
    date: "18.04.2022",
    keywords: ["Bandırmaspor", "Destek", "Spor", "Bayrak"],
  },
  {
    id: 12,
    title: "Ramazan Ayı Paylaşmaktır",
    slug: createSlug("Ramazan Ayı Paylaşmaktır"),
    img: "/images/etkinlikpics/ramazan-iftari.jpg",
    text: "Dün akşam, Bandırma Belediyesi tarafından Cumhuriyet Meydanı'nda kurulan iftar çadırında ramazanın bereketini hemşehrilerimiz ile paylaştık. Bu vesile ile İslam aleminin ramazan ayını bir kez daha kutlar, bayram sevincini hep birlikte yaşamayı temenni ederiz.",
    date: "23.04.2022",
    keywords: ["Ramazan", "İftar", "Paylaşım", "Bandırma Belediyesi"],
  },
  {
    id: 13,
    title: "Çerkes Sürgünü Anması",
    slug: createSlug("Çerkes Sürgünü Anması"),
    img: "/images/etkinlikpics/cerkes-surgunu-anmasi.jpg",
    text: "158 yıl önce yaşanan büyük acının ve trajedinin yıl dönümünde bizimle beraber olan, acımızı paylaşan Ak Parti Bandırma İlçe Başkanı Sayın Mehmet Doğan ve beraberindeki heyete ince düşüncelerinden dolayı teşekkür ederiz.",
    date: "24.05.2022",
    keywords: ["Çerkes Sürgünü", "Anma", "21 Mayıs", "Tarih"],
  },
  {
    id: 14,
    title: "Büyük Komutan Hacı Giranduk Berzek Mezarı Başında Anıldı",
    slug: createSlug("Büyük Komutan Hacı Giranduk Berzek Mezarı Başında Anıldı"),
    img: "/images/etkinlikpics/haci-giranduk-berzek.jpg",
    text: "Hacı Giranduk Berzek'in Manyas Dümbe (Tepecik) köyünde bulunan mezarı, Balıkesir Büyükşehir Belediyesi, Manyas Kaymakamlığı ve Manyas belediyesinin katkıları, Orhanlı Çerkes Kültür Derneği ve Manyas Kafkas Kültür Derneğinin önderliğinde yapılan düzenleme çalışmaları sonucunda anıt mezar haline getirildi.",
    date: "12.06.2022",
    keywords: ["Hacı Giranduk Berzek", "Anıt Mezar", "Manyas", "Tarih"],
  },
  {
    id: 15,
    title: "Milliyetçi Hareket Partisi Bandırma İlçe Başkanlığından Ziyaret",
    slug: createSlug("Milliyetçi Hareket Partisi Bandırma İlçe Başkanlığından Ziyaret"),
    img: "/images/etkinlikpics/mhp-ziyaret.jpg",
    text: "Milliyetçi Hareket Partisi Bandırma İlçe Başkanı Sayın Bekir Bozkurt ve beraberindeki heyet genel değerlendirmelerini paylaşmak için ziyarette bulundu.",
    date: "29.10.2022",
    keywords: ["MHP", "Bekir Bozkurt", "Ziyaret", "Bandırma"],
  },
  {
    id: 16,
    title: "Köy Meydanı Düzenleme Çalışmaları Başladı",
    slug: createSlug("Köy Meydanı Düzenleme Çalışmaları Başladı"),
    img: "/images/etkinlikpics/koy-meydani-duzenleme.jpg",
    text: "Balıkesir Büyükşehir Belediyesi'nin yapımını üstlendiği, çocuk oyun alanı, yeşil alan, köy meydanı ve yürüyüş alanı içeren köy meydanı projesinin yeni yıldan önce tamamlanması planlanıyor.",
    date: "05.11.2022",
    keywords: ["Köy Meydanı", "Düzenleme", "Belediye", "Proje"],
  },
  {
    id: 17,
    title: "Köy Yollarının Yapım Çalışması Başladı",
    slug: createSlug("Köy Yollarının Yapım Çalışması Başladı"),
    img: "/images/etkinlikpics/koy-yollari-calismasi.jpg",
    text: "Bandırma Belediye Başkanımız Sayın Tolga Tosun'un yönlendirmeleri ile köy yollarına taş döşenmesi ile ilgili çalışmalar başladı. Destekleri için Bandırma Belediye Başkanımız Sayın Tolga Tosun'a teşekkür ediyoruz.",
    date: "05.05.2023",
    keywords: ["Köy Yolları", "Tolga Tosun", "Bandırma Belediyesi", "Yol Çalışması"],
  },
  {
    id: 18,
    title: "Bandırma Belediye Başkanı Sayın Tolga Tosun Karaçalılık Mahallesini Ziyaret Etti",
    slug: createSlug("Bandırma Belediye Başkanı Sayın Tolga Tosun Karaçalılık Mahallesini Ziyaret Etti"),
    img: "/images/etkinlikpics/tolga-tosun-ziyaret-2023.jpg",
    text: "Karaçalılık Mahallesinde devam eden alt yapı ve çevre düzenleme çalışmalarını yerinde görmek için Bandırma Belediye Başkanı Sayın Tolga Tosun ve beraberindeki heyet ziyaret gerçekleştirdi. Tamamlanan çalışmalar ve gelecek projeler üzerine görüş alışverişinde bulunularak, mahalle halkının talepleri iletildi. Mahalle olma sürecinin başından beri desteklerini esirgemeyen Sayın Tolga Tosun'a teşekkür ederiz. Ayrıca mahalle olma sürecinden itibaren özveri ile hizmet etmeye devam eden Mahalle Muhtarımız Mehmet Evre ve Aza heyetine yaptıkları çalışmalardan dolayı şükranlarımızı sunarız.",
    date: "21.06.2023",
    keywords: ["Tolga Tosun", "Bandırma Belediyesi", "Ziyaret", "Karaçalılık"],
  },
  {
    id: 19,
    title: "AK Parti Balıkesir İl Başkanlığına Atanan Hemşerimiz Mehmet Aydemir Ziyaret Edildi",
    slug: createSlug("AK Parti Balıkesir İl Başkanlığına Atanan Hemşerimiz Mehmet Aydemir Ziyaret Edildi"),
    img: "/images/etkinlikpics/mehmet-aydemir-ziyaret.jpg",
    text: "Karaçalılık Mahallesi Muhtarı Mehmet Evre ve Azaları Doğan İçöz, Önal Evgin ve Şenol Tanış tarafından AK Parti Balıkesir İl Başkanlığına atanan Hemşerimiz Mehmet Aydemir'e hayırlı olsun ziyaretinde bulunuldu. Kendisine yeni görevinde başarıları diliyoruz.",
    date: "03.12.2023",
    keywords: ["Mehmet Aydemir", "AK Parti", "Balıkesir", "Ziyaret"],
  },
  {
    id: 20,
    title: "Bandırma Kent Konseyi Seçimine Katılım Sağlandı",
    slug: createSlug("Bandırma Kent Konseyi Seçimine Katılım Sağlandı"),
    img: "/images/etkinlikpics/bandirma-kent-konseyi-secimi.jpg",
    text: "19 Ağustos 2024 tarihinde Barış Manço Kültür Merkezinde yapılan Bandırma Kent Konseyi Seçimine katılım sağlandık. Seçimin tüm paydaşlar ve Bandırma halkına hayırlı olmasını diliyoruz.",
    date: "22.06.2024",
    keywords: ["Bandırma Kent Konseyi", "Seçim", "Barış Manço Kültür Merkezi", "Katılım"],
    additionalImages: [
      "/images/galeripics/ilce-bsk-1.jpg",
      "/images/galeripics/ilce-bsk-2.jpg",
      "/images/galeripics/ilce-bsk-3.jpg",
      "/images/galeripics/yucelyilmaz-1.jpg",
      "/images/galeripics/yucelyilmaz-2.jpg",
    ],
  },
  {
    id: 21,
    title: "Karaçalılık Köyü İlkokulu Yıkımı Başladı",
    slug: createSlug("Karaçalılık Köyü İlkokulu Yıkımı Başladı"),
    img: "/images/etkinlikpics/karacalilik-koyu-ilkokulu-yikimi.jpg",
    text: "Mahalle merkezinde bulunan Karaçalılık köyü ilkokulu ve yan hizmet binalarının yıkımı başlandı. Uzun süredir kullanılmayan okul binası ve yan hizmet binaları belediye ekiplerinin kontrolleri sonunda kullanılmaz hale geldiği için yıkılması kararı çıktı. Okul alanının ilerleyen dönemde köy meydanı olması için çalışmalara başlandı.",
    date: "21.02.2022",
    keywords: ["İlkokul", "Yıkım", "Köy Meydanı", "Belediye"],
  },
];

// Slug'a göre etkinlik bulma fonksiyonu
export function getEtkinlikBySlug(slug: string): Etkinlik | undefined {
  return etkinliklerList.find((etkinlik) => etkinlik.slug === slug);
}

// Tarih parse fonksiyonu (DD.MM.YYYY formatından Date objesine)
function parseDate(dateStr: string): Date {
  const [day, month, year] = dateStr.split(".").map(Number);
  return new Date(year, month - 1, day); // month 0-indexed
}

// Tüm etkinlikleri getirme (tarihe göre sıralı, en yeni önce)
export function getAllEtkinlikler(): Etkinlik[] {
  return [...etkinliklerList].sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    // Azalan sıralama: en yeni tarih önce
    return dateB.getTime() - dateA.getTime();
  });
}

