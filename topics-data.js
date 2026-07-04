const TOPICS_DATA = [
  {
    cat: "Temel Yapılar",
    title: "N-Deklination",
    tr: "Almancada çoğu eril isim tüm hallerde aynı kalır; ancak belirli bir grup eril isim nominatif dışındaki hallerde -n veya -en eki alır. Bu isimler genellikle canlı varlıkları, meslekleri veya -e/-ent/-ant/-or ile biten kelimeleri kapsar. Türkçede karşılığı olmayan bu ek, özellikle Akkusativ ve Dativ'de sık görülür ve B1 dinleme/okuma sınavlarında ayırt edici bir konudur.",
    tips: [
      "Nominatif: der Student — Dativ: dem Studenten, Akkusativ: den Studenten",
      "Sık isimler: der Mensch, der Name, der Herr, der Junge, der Nachbar, der Kunde",
      "Genitiv'te de -en alır: des Studenten, des Nachbarn",
      "Kadın isimlerde (die) ve nötr isimlerde (das) N-Deklination yoktur",
      "Fiil + isim birleşimlerinde dikkat: beim Lesen ✓, beim Student ✗ → beim Studenten ✓"
    ],
    table: {
      head: ["Nominativ", "Dativ", "Akkusativ", "Genitiv"],
      rows: [
        ["der Student", "dem Studenten", "den Studenten", "des Studenten"],
        ["der Nachbar", "dem Nachbarn", "den Nachbarn", "des Nachbarn"],
        ["der Junge", "dem Jungen", "den Jungen", "des Jungen"],
        ["der Kunde", "dem Kunden", "den Kunden", "des Kunden"]
      ]
    },
    ex: [
      "Ich helfe dem Kunden bei der Bestellung.",
      "Kennst du den neuen Kollegen aus der Buchhaltung?",
      "Der Arzt untersucht den Patienten.",
      "Wir gratulieren dem Nachbarn zum Geburtstag.",
      "Das ist das Auto des Studenten."
    ],
    quiz: [
      {
        q: "Aşağıdaki cümlelerden hangisi N-Deklination kurallarına uygundur?",
        opts: [
          "Ich kenne den Student.",
          "Ich kenne den Studenten.",
          "Ich kenne dem Studenten.",
          "Ich kenne der Student."
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Temel Yapılar",
    title: '„betragen" fiili',
    tr: "«betragen» fiili miktar, tutar veya mesafe bildirmek için kullanılır; Türkçede genellikle «... tutarında olmak» veya «... kadar etmek» anlamına gelir. Düzenli fiil gibi çekilir: beträgt (Präsens), betrug (Präteritum), hat betragen (Perfekt). Özellikle fatura, ücret, mesafe ve süre ifadelerinde sık rastlanır.",
    tips: [
      "Özne genellikle miktarı belirten nesnedir: Die Rechnung beträgt 150 Euro.",
      "Mesafe için de kullanılır: Die Strecke beträgt 20 Kilometer.",
      "Süre bildirirken: Die Fahrt beträgt zwei Stunden.",
      "Präteritum formu betrug resmi metinlerde yaygındır",
      "«kosten» ile karıştırmayın: kosten = fiyatlandırmak, betragen = tutmak/etmek"
    ],
    ex: [
      "Die Gebühr beträgt 200 Euro pro Monat.",
      "Die Entfernung zwischen den Städten beträgt zehn Kilometer.",
      "Die Gesamtkosten betrugen über 500 Euro.",
      "Wie viel beträgt die Miete inklusive Nebenkosten?",
      "Die Bearbeitungszeit beträgt etwa drei Werktage."
    ],
    quiz: [
      {
        q: "«Die Reparatur ___ 80 Euro» cümlesinde boşluğa hangi fiil gelmelidir?",
        opts: ["kostet", "beträgt", "zahlt", "macht"],
        correct: 1
      }
    ]
  },
  {
    cat: "Temel Yapılar",
    title: "zu + Infinitiv",
    tr: "Almancada iki fiilli cümlelerde ikinci fiil mastar (Infinitiv) olarak cümle sonunda kalır ve önüne zu eklenir. Ayrılabilir (trennbare) fiillerde zu, önek ile kök arasına girer: anrufen → anzurufen. Bu yapı amaç (um...zu), zorunluluk (haben + zu) ve bazı fiil kalıplarında (vergessen zu, versuchen zu) kullanılır.",
    tips: [
      "Ayrılabilir fiil: einladen → einzuladen, mitkommen → mitzukommen",
      "Ayrılmaz fiil: zu + Infinitiv (z.B. zu lernen, zu arbeiten)",
      "Modal fiil + Infinitiv'te zu kullanılmaz: Ich kann schwimmen.",
      "«haben + zu» = yapmak zorunda olmak: Ich habe viel zu tun.",
      "Negatif: nicht vor dem Infinitiv → Ich habe vergessen, dich anzurufen."
    ],
    ex: [
      "Ich habe vergessen, dich anzurufen.",
      "Es ist wichtig, jeden Tag zu üben.",
      "Ich versuche, weniger Zucker zu essen.",
      "Hast du Lust, mit uns mitzukommen?",
      "Er hat keine Zeit, die Wohnung aufzuräumen.",
      "Sie freut sich, dich wiederzusehen."
    ],
    quiz: [
      {
        q: "«Ich habe vergessen, sie ___» — ayrılabilir fiil einladen için doğru form hangisidir?",
        opts: ["zu einladen", "einzuladen", "ein zu laden", "einladen zu"],
        correct: 1
      }
    ]
  },
  {
    cat: "Temel Yapılar",
    title: "passen + zu / Dativ",
    tr: "«passen» fiili iki temel kullanıma sahiptir: passen zu + Dativ «uyum sağlamak, yakışmak» (renk, stil, uyum) ve passen + Dativ «(zaman/beden) uymak, elverişli olmak». Türkçede her iki anlam farklı cümlelerle verilir; edat ve hal seçimi anlamı belirler.",
    tips: [
      "passen zu: Die Schuhe passen zu der Hose.",
      "passen + Dativ (kişi): Der Termin passt mir nicht.",
      "passen + Dativ (beden): Größe 42 passt mir gut.",
      "Olumsuz: passt nicht / passt mir leider nicht",
      "«gefallen» ile karıştırmayın: gefallen = hoşa gitmek"
    ],
    ex: [
      "Die Schuhe passen gut zu der Hose.",
      "Der Termin passt mir leider nicht.",
      "Diese Farbe passt nicht zu deinem Teint.",
      "Passt dir der Pullover in Größe M?",
      "Das Wetter passt perfekt zu unserem Ausflug.",
      "Mir passt der frühe Termin besser."
    ],
    quiz: [
      {
        q: "«Der neue Job ___ mir gut» ifadesinde doğru yapı hangisidir?",
        opts: [
          "passt zu",
          "passt",
          "passt für",
          "passt an"
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Temel Yapılar",
    title: "scheinen + zu + Infinitiv",
    tr: "«scheinen + zu + Infinitiv» yapısı «... gibi görünmek, ... izlenimi vermek» anlamı taşır. Konuşanın kesin bilgisi olmadığı durumlarda gözleme dayalı yorum bildirir. Türkçede «-yor gibi görünüyor» kalıbına karşılık gelir ve B1 seviyesinde günlük iletişimde sık kullanılır.",
    tips: [
      "Yapı: scheinen + zu + Infinitiv (scheint müde zu sein)",
      "Perfekt: hat zu + Infinitiv geschienen (nadir, genelde Präsens)",
      "«aussehen» = dış görünüş; «scheinen» = genel izlenim",
      "Olumsuz: Er scheint nicht krank zu sein.",
      "Sık: scheinen + zu + sein / haben / können"
    ],
    ex: [
      "Er scheint müde zu sein.",
      "Das Problem scheint gelöst zu sein.",
      "Sie scheint die Antwort zu wissen.",
      "Es scheint heute kälter zu werden.",
      "Die Nachbarn scheinen im Urlaub zu sein.",
      "Das scheint mir eine gute Idee zu sein."
    ],
    quiz: [
      {
        q: "«Er ___ krank zu sein» — doğru fiil hangisidir?",
        opts: ["ist", "wird", "scheint", "hat"],
        correct: 2
      }
    ]
  },
  {
    cat: "Temel Yapılar",
    title: "Plusquamperfekt",
    tr: "Plusquamperfekt, geçmişteki bir olaydan daha önce gerçekleşmiş eylemi ifade eder; Türkçede «...mişti» (bir önceki geçmiş) anlamına gelir. Oluşumu: hatte/war + Partizip II. Özellikle «nachdem» (…dikten sonra), «bevor» (…meden önce) ve «als» ile birlikte kullanılır.",
    tips: [
      "Hareketli fiiller: hatte + Partizip II (hatte gegessen)",
      "Hareketsiz/durum fiilleri: war + Partizip II (war angekommen)",
      "nachdem + Plusquamperfekt, sonra Präteritum/Perfekt gelir",
      "Olumsuz: hatte/war + nicht + Partizip II",
      "Konuşmada Perfekt tercih edilebilir; yazıda Plusquamperfekt daha yaygın"
    ],
    table: {
      head: ["Yapı", "Örnek"],
      rows: [
        ["hatte + Partizip II", "Ich hatte schon gegessen."],
        ["war + Partizip II", "Er war schon gegangen."],
        ["nachdem + Plusquamperfekt", "Nachdem ich gegessen hatte, ging ich spazieren."],
        ["bevor + Plusquamperfekt", "Bevor er ankam, hatte ich alles vorbereitet."]
      ]
    },
    ex: [
      "Nachdem ich gegessen hatte, ging ich spazieren.",
      "Er war schon gegangen, als ich ankam.",
      "Bevor sie anrief, hatte ich das Formular ausgefüllt.",
      "Wir hatten uns lange nicht gesehen.",
      "Als er kam, hatten wir schon gewartet.",
      "Sie war noch nie in Berlin gewesen."
    ],
    quiz: [
      {
        q: "Plusquamperfekt hangi zamanı ifade eder?",
        opts: [
          "Gelecekteki bir eylemi",
          "Geçmişteki bir olaydan daha önceki eylemi",
          "Şu an devam eden eylemi",
          "Her zaman tekrarlanan eylemi"
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Temel Yapılar",
    title: "Präteritum (sık fiiller)",
    tr: "Präteritum, geçmiş zamanın yazı dili formudur; haber, hikâye ve resmi metinlerde yaygındır. Konuşmada genellikle Perfekt kullanılsa da B1 okuma sınavlarında Präteritum fiilleri sık çıkar. sein, haben ve modal fiillerin Präteritum formlarını ezberlemek kritiktir.",
    tips: [
      "sein: war · waren | haben: hatte · hatten",
      "können: konnte | müssen: musste | wollen: wollte",
      "kommen: kam | gehen: ging | sehen: sah | nehmen: nahm",
      "Konuşmada: Ich habe gegessen; Yazıda: Ich aß / Ich aß zu viel (nadir)",
      "Yardımcı fiiller + mastar yapısı Präteritum'da da geçerli: wollte gehen"
    ],
    table: {
      head: ["Infinitiv", "Präteritum", "Anlam"],
      rows: [
        ["sein", "war / waren", "olmak"],
        ["haben", "hatte / hatten", "sahip olmak"],
        ["kommen", "kam / kamen", "gelmek"],
        ["gehen", "ging / gingen", "gitmek"],
        ["wissen", "wusste / wussten", "bilmek"],
        ["denken", "dachte / dachten", "düşünmek"],
        ["finden", "fand / fanden", "bulmak"],
        ["geben", "gab / gaben", "vermek"]
      ]
    },
    ex: [
      "Er kam gestern spät nach Hause.",
      "Ich wusste nichts davon.",
      "Sie dachte lange nach und antwortete dann.",
      "Wir gingen früher jeden Sommer ans Meer.",
      "Er nahm den Zug um acht Uhr.",
      "Als Kind war ich oft krank."
    ],
    quiz: [
      {
        q: "«wissen» fiilinin Präteritum 3. tekil formu hangisidir?",
        opts: ["wisst", "wusste", "gewusst", "wissen"],
        correct: 1
      }
    ]
  },
  {
    cat: "Temel Yapılar",
    title: "Futur I (werden)",
    tr: "Futur I, gelecek zamanı ve tahminleri ifade eder: werden + Infinitiv. Resmi sözleşmelerde ve plan bildirirken kullanılır; konuşmada genellikle Präsens + zaman zarfı (morgen, nächstes Jahr) tercih edilir. Tahmin cümlelerinde «wahrscheinlich, vielleicht» ile birlikte sık görülür.",
    tips: [
      "Gelecek: Ich werde nächstes Jahr nach Berlin ziehen.",
      "Tahmin: Es wird morgen regnen.",
      "Söz/vaad: Ich werde pünktlich sein.",
      "Olumsuz: werde nicht + Infinitiv",
      "Konuşmada: Morgen fahre ich nach Hamburg (Präsens) daha doğal"
    ],
    table: {
      head: ["Kişi", "werden", "Örnek"],
      rows: [
        ["ich", "werde", "Ich werde lernen."],
        ["du", "wirst", "Du wirst kommen."],
        ["er/sie/es", "wird", "Er wird arbeiten."],
        ["wir", "werden", "Wir werden reisen."],
        ["ihr", "werdet", "Ihr werdet gewinnen."],
        ["sie/Sie", "werden", "Sie werden helfen."]
      ]
    },
    ex: [
      "Ich werde nächstes Jahr nach Deutschland fahren.",
      "Es wird morgen wahrscheinlich regnen.",
      "Wir werden uns am Wochenende treffen.",
      "Das wird bestimmt teuer werden.",
      "Sie werden die Prüfung bestehen.",
      "Wirst du heute Abend zu Hause bleiben?"
    ],
    quiz: [
      {
        q: "Futur I yapısı nasıl oluşturulur?",
        opts: [
          "haben + Partizip II",
          "werden + Infinitiv",
          "würde + Infinitiv",
          "sein + am + Infinitiv"
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Temel Yapılar",
    title: "Passiv ⭐",
    tr: "Passiv (edilgen çatı), eylemi yapan kişiden çok eylemin kendisine odaklanır. Yapı: werden + Partizip II. Modal fiillerle birlikte: müssen/können + Partizip II + werden. Türkçede «-il/-ın» eki veya edilgen cümle yapılarıyla karşılanır. B1 sınavlarında özellikle resmi duyuru ve talimat metinlerinde sık çıkar.",
    tips: [
      "Präsens Passiv: Das Haus wird renoviert.",
      "Modal + Passiv: Die Rechnung muss bezahlt werden.",
      "Agent (yapan kişi) von + Dativ ile belirtilir: von dem Arzt",
      "Zustandspassiv: sein + Partizip II (Die Tür ist geöffnet.)",
      "Vorgangspassiv: werden + Partizip II (Die Tür wird geöffnet.)"
    ],
    table: {
      head: ["Zaman", "Passiv formu", "Örnek"],
      rows: [
        ["Präsens", "wird + Partizip II", "Das Auto wird repariert."],
        ["Präteritum", "wurde + Partizip II", "Das Haus wurde gebaut."],
        ["Perfekt", "ist + Partizip II + worden", "Es ist repariert worden."],
        ["Futur I", "wird + Partizip II + werden", "Es wird gemacht werden."],
        ["Modal + Passiv", "muss/kann + Partizip II + werden", "Es muss bezahlt werden."]
      ]
    },
    ex: [
      "Das Haus wird renoviert.",
      "Die Rechnung muss bis Freitag bezahlt werden.",
      "Hier wird nicht geraucht.",
      "Der Brief wurde gestern geschickt.",
      "Das Problem kann schnell gelöst werden.",
      "In Deutschland wird viel Bier getrunken."
    ],
    quiz: [
      {
        q: "«Die Tür ___ geöffnet» — şu an açılıyor anlamında hangi form doğrudur?",
        opts: [
          "ist",
          "wird",
          "wurde",
          "hat"
        ],
        correct: 1
      },
      {
        q: "Modal fiil + Passiv yapısında doğru sıralama hangisidir?",
        opts: [
          "werden + müssen + Partizip II",
          "muss + Partizip II + werden",
          "muss + werden + Partizip II",
          "Partizip II + muss + werden"
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Temel Yapılar",
    title: "lassen ⭐",
    tr: "«lassen + Infinitiv» bir işi başkasına yaptırmak anlamına gelir; Türkçede «...tirmek / ...ettirmek» kalıplarına karşılık gelir. Reflexiv kullanımda (sich die Haare schneiden lassen) kişi bir hizmet alır. Ayrıca «birakmak, izin vermek» anlamında da kullanılır: Lass mich in Ruhe!",
    tips: [
      "Yaptırma: Ich lasse mein Auto reparieren.",
      "Reflexiv: Sie lässt sich die Haare schneiden.",
      "Bırakmak: Lass das! / Lass mich schlafen!",
      "lassen + sich + Infinitiv = mümkün olmak: Das lässt sich machen.",
      "Perfekt: hat reparieren lassen (yaptırdı)"
    ],
    table: {
      head: ["Anlam", "Yapı", "Örnek"],
      rows: [
        ["Yaptırma", "lassen + Inf.", "Ich lasse die Wohnung putzen."],
        ["Hizmet alma", "sich ... lassen", "Er lässt sich massieren."],
        ["İzin verme", "lassen + Inf.", "Lass mich nachdenken."],
        ["Mümkünlük", "sich lassen + Inf.", "Das lässt sich erklären."]
      ]
    },
    ex: [
      "Ich lasse mein Auto reparieren.",
      "Sie lässt sich die Haare schneiden.",
      "Wir lassen uns ein Eis schmecken.",
      "Kannst du mich bitte in Ruhe lassen?",
      "Das lässt sich leicht erklären.",
      "Er hat sich operieren lassen."
    ],
    quiz: [
      {
        q: "«Ich ___ mein Fahrrad reparieren» — başkasına tamir ettirmek için hangi fiil kullanılır?",
        opts: ["mache", "lasse", "werde", "kann"],
        correct: 1
      }
    ]
  },
  {
    cat: "Temel Yapılar",
    title: "nicht müssen = nicht brauchen zu",
    tr: "Almancada «nicht müssen» ifadesi «yapmak zorunda değilsin» anlamına gelir ve «nicht brauchen zu + Infinitiv» ile eş anlamlıdır. Türkçede «...mek zorunda değilsin / ...mana gerek yok» şeklinde çevrilir. Bu yapı B1'de sık karıştırılır; «müssen» olumsuzu «yasak» değil «zorunlu değil» demektir.",
    tips: [
      "Du musst nicht kommen. = Du brauchst nicht zu kommen.",
      "brauchen + zu + Infinitiv: Sie braucht nicht zu arbeiten.",
      "«nicht dürfen» = yasak; «nicht müssen» = zorunlu değil",
      "Olumlu zorunluluk: Du musst pünktlich sein.",
      "brauchen + nur + Infinitiv: Du brauchst nur zu fragen."
    ],
    ex: [
      "Du brauchst morgen nicht zu arbeiten.",
      "Sie braucht sich keine Sorgen zu machen.",
      "Du musst nicht alles alleine machen.",
      "Ihr braucht nicht so früh zu kommen.",
      "Er braucht das Formular nicht auszufüllen.",
      "Du brauchst nur zu klingeln."
    ],
    quiz: [
      {
        q: "«Du ___ nicht zu warten» — «beklemen gerek yok» anlamında doğru fiil hangisidir?",
        opts: ["darfst", "musst", "brauchst", "sollst"],
        correct: 2
      }
    ]
  },
  {
    cat: "Temel Yapılar",
    title: "Modalverben (Özet)",
    tr: "Modal fiiller (können, müssen, dürfen, sollen, wollen, mögen/möchten) mastar fiille birlikte kullanılır ve cümle sonundaki fiil mastar kalır. Anlam taşıyan fiil modal fiildir; asıl eylem sonda Infinitiv olarak gelir. Präsens'te modal fiil çekilir, Infinitiv değişmez. Perfekt'te çoğu modal fiil için çift mastar kuralı geçerlidir.",
    tips: [
      "können = -ebilmek | müssen = -mek zorunda | dürfen = -ebilmek (izin)",
      "sollen = -meli (tavsiye/görev) | wollen = istemek | möchten = istemek (kibar)",
      "Modal + Infinitiv: Ich kann Deutsch sprechen.",
      "Perfekt: Ich habe arbeiten müssen (çift mastar)",
      "Konjunktiv II: könnte, müsste, dürfte, sollte, würde"
    ],
    table: {
      head: ["Modal fiil", "Anlam", "Örnek"],
      rows: [
        ["können", "yapabilmek", "Ich kann schwimmen."],
        ["müssen", "zorunda olmak", "Ich muss arbeiten."],
        ["dürfen", "izinli olmak", "Darf ich hereinkommen?"],
        ["sollen", "gerekmek/tavsiye", "Du sollst mehr lernen."],
        ["wollen", "istemek", "Ich will nach Hause."],
        ["möchten", "istemek (kibar)", "Ich möchte einen Kaffee."]
      ]
    },
    ex: [
      "Ich kann gut Deutsch sprechen.",
      "Du musst morgen früh aufstehen.",
      "Darf ich das Fenster öffnen?",
      "Was soll ich mitbringen?",
      "Er will Arzt werden.",
      "Wir möchten gern bestellen."
    ],
    quiz: [
      {
        q: "Modal fiilli cümlede asıl eylem nerede ve hangi formda bulunur?",
        opts: [
          "Cümle başında, Partizip II",
          "Cümle sonunda, Infinitiv",
          "Modal fiilden önce, Infinitiv",
          "Cümle ortasında, Präteritum"
        ],
        correct: 1
      },
      {
        q: "«Ich ___ gestern lange arbeiten ___» — Perfekt'te doğru yapı hangisidir?",
        opts: [
          "habe ... gemusst",
          "habe ... müssen",
          "musste ... haben",
          "bin ... gemusst"
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Kalıplar & Tabirler",
    title: "Otel Tabirleri",
    tr: "Otel konaklamasında rezervasyon, check-in/check-out, oda talepleri ve şikayet ifadeleri B1 sınavlarında dinleme bölümünde sık çıkar. Bu kalıpları ezberlemek hem sınav hem de gerçek seyahat durumlarında işinize yarar. Resmi ama kibar bir dil kullanılır; «Ich hätte gern...» ve «Könnten Sie...» yapıları çok yaygındır.",
    tips: [
      "Rezervasyon: ein Zimmer reservieren/buchen",
      "Check-in: einchecken | Check-out: auschecken",
      "im Preis inbegriffen = fiyata dahil",
      "Beschwerde: Das Zimmer ist zu laut / Die Heizung funktioniert nicht.",
      "Kibar istek: Könnten Sie mir ein ruhigeres Zimmer geben?"
    ],
    ex: [
      "Ich habe ein Doppelzimmer für zwei Nächte reserviert.",
      "Ist das Frühstück im Preis inbegriffen?",
      "Können wir bitte einchecken? Wir haben eine Reservierung.",
      "Das Zimmer ist zu laut. Gibt es ein ruhigeres Zimmer?",
      "Um wie viel Uhr muss ich auschecken?",
      "Könnten Sie bitte die Rechnung bringen?"
    ],
    quiz: [
      {
        q: "«Kahvaltı fiyata dahil mi?» Almancada nasıl sorulur?",
        opts: [
          "Ist das Frühstück kostenlos?",
          "Ist das Frühstück im Preis inbegriffen?",
          "Gibt es Frühstück im Hotel?",
          "Muss ich Frühstück extra bezahlen?"
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Kalıplar & Tabirler",
    title: "Telefon Kalıpları",
    tr: "Telefonda Almanca konuşmak birçok öğrenci için zordur çünkü beden dili ve bağlam eksiktir. Arama başlatma, kendini tanıtma, mesaj bırakma ve bağlantı isteme kalıplarını bilmek B1 seviyesinde önemlidir. Resmi aramalarda «Sie», günlük aramalarda «du» kullanılır.",
    tips: [
      "Açma: Hier ist ... / Mein Name ist ... / ... am Apparat.",
      "Arama: Ich rufe an, weil ... / Könnten Sie mich mit ... verbinden?",
      "Mesaj: Kann ich eine Nachricht hinterlassen?",
      "Meşgul: Die Leitung ist besetzt. / Er ist gerade nicht erreichbar.",
      "Kapanış: Vielen Dank für Ihren Anruf. / Auf Wiederhören!"
    ],
    ex: [
      "Guten Tag, hier spricht Ayşe Yılmaz. Ist Herr Müller da?",
      "Könnten Sie mich bitte mit der Personalabteilung verbinden?",
      "Ich rufe an, weil ich einen Termin vereinbaren möchte.",
      "Kann er mich bitte zurückrufen? Meine Nummer ist ...",
      "Einen Moment bitte, ich verbinde Sie.",
      "Entschuldigung, Sie sind falsch verbunden."
    ],
    quiz: [
      {
        q: "Telefonda «Beni ... departmanına bağlar mısınız?» ifadesi hangisidir?",
        opts: [
          "Können Sie mich hören?",
          "Könnten Sie mich mit der Personalabteilung verbinden?",
          "Ich habe eine Frage.",
          "Wer spricht bitte?"
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Kalıplar & Tabirler",
    title: "İş & Başvuru Kalıpları",
    tr: "İş başvurusu, özgeçmiş (Lebenslauf), ön yazı (Anschreiben) ve mülakat ifadeleri B1+ seviyesinde önemli bir pratik alandır. Bu kalıplar resmi dil gerektirir ve «Ich bewerbe mich um...» gibi sabit yapılar ezberlenmelidir. Türkiye'den Almanya'ya iş arayanlar için özellikle faydalıdır.",
    tips: [
      "Başvuru: Ich bewerbe mich um die Stelle als ...",
      "Deneyim: Ich habe drei Jahre Erfahrung in ...",
      "Özgeçmiş: Meine Unterlagen finden Sie im Anhang.",
      "Mülakat: Ich bin teamfähig und zuverlässig.",
      "Kapanış: Ich freue mich auf Ihre Antwort."
    ],
    table: {
      head: ["Durum", "Kalıp", "Anlam"],
      rows: [
        ["Başvuru", "Ich bewerbe mich um ...", "… için başvuruyorum"],
        ["Deneyim", "Ich habe Erfahrung in ...", "… alanında deneyimim var"],
        ["Müsaitlik", "Ich stehe ab sofort zur Verfügung", "Hemen başlayabilirim"],
        ["Maaş", "Meine Gehaltsvorstellung beträgt ...", "Maaş beklentim …"],
        ["Referans", "Referenzen auf Anfrage", "Referanslar talep üzerine"]
      ]
    },
    ex: [
      "Ich bewerbe mich um die ausgeschriebene Stelle als Bürokraft.",
      "Ich habe zwei Jahre Erfahrung im Kundenservice.",
      "Meine Bewerbungsunterlagen finden Sie im Anhang.",
      "Ich bin flexibel, zuverlässig und teamfähig.",
      "Ich freue mich auf ein persönliches Gespräch.",
      "Könnten Sie mir bitte mehr über die Stelle erzählen?"
    ],
    quiz: [
      {
        q: "«Bu ilan için başvuruyorum» ifadesinin doğru Almancası hangisidir?",
        opts: [
          "Ich suche die Stelle.",
          "Ich bewerbe mich um die Stelle.",
          "Ich arbeite für die Stelle.",
          "Ich interessiere die Stelle."
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Kalıplar & Tabirler",
    title: "Günlük İfadeler",
    tr: "Günlük iletişimde küçük konuşmalar (Smalltalk), özür dileme, kibar rica ve selamlaşma kalıpları sosyal entegrasyon için vazgeçilmezdir. B1 seviyesinde bu ifadeleri doğal kullanmak akıcılığı artırır. «Entschuldigung», «Könnten Sie bitte...» ve hava durumu/ne haletsiniz gibi giriş cümleleri en sık kullanılanlardır.",
    tips: [
      "Smalltalk: Wie geht's? / Schönes Wetter heute, nicht wahr?",
      "Özür: Entschuldigung! / Es tut mir leid. / Entschuldigen Sie bitte.",
      "Kibar rica: Könnten Sie mir bitte helfen? / Würden Sie so freundlich sein ...?",
      "Teşekkür: Danke schön / Vielen Dank / Bitte schön (cevap)",
      "Tanışma: Freut mich! / Herzlich willkommen!"
    ],
    ex: [
      "Entschuldigung, könnten Sie mir bitte sagen, wo die Toilette ist?",
      "Es tut mir leid, ich bin zu spät.",
      "Schönes Wetter heute, nicht wahr?",
      "Könnten Sie bitte langsamer sprechen?",
      "Freut mich, Sie kennenzulernen!",
      "Kein Problem, das kann jedem passieren."
    ],
    quiz: [
      {
        q: "Resmi ortamda «Affedersiniz, bana yardımcı olabilir misiniz?» ifadesi hangisidir?",
        opts: [
          "Hilf mir bitte!",
          "Entschuldigung, könnten Sie mir bitte helfen?",
          "Ich brauche Hilfe sofort.",
          "Warum helfen Sie mir nicht?"
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Konjunktiv II",
    title: "Konjunktiv II mit Modalverben",
    tr: "Modal fiillerin Konjunktiv II formları (könnte, müsste, dürfte, sollte, wollte, möchte) kibar öneri, tavsiye ve varsayımsal durumlar ifade eder. Präsens'teki «solltest», «könntest» formları konuşmada yaygındır. Resmi dilde «Könnten Sie...» yapısı çok sık kullanılır.",
    tips: [
      "könnte = -ebilirdim (kibar olasılık)",
      "sollte = -melisin (tavsiye): Du solltest mehr schlafen.",
      "müsste = -mek zorunda olurdu",
      "dürfte = -ebilir (formal izin/olasılık)",
      "Resmi rica: Könnten Sie mir bitte helfen?"
    ],
    table: {
      head: ["Präsens", "Konjunktiv II", "Anlam"],
      rows: [
        ["kann", "könnte", "yapabilirdi / -ebilir mi"],
        ["muss", "müsste", "zorunda olurdu"],
        ["darf", "dürfte", "izinli olurdu / muhtemelen"],
        ["soll", "sollte", "tavsiye edilir / -meli"],
        ["will", "wollte", "isterdi"],
        ["mag/möchte", "möchte", "isterim (kibar)"]
      ]
    },
    ex: [
      "Du solltest mehr schlafen.",
      "Könnten Sie mir bitte helfen?",
      "Ich könnte morgen früher kommen.",
      "Du dürftest recht haben.",
      "Man sollte regelmäßig Sport treiben.",
      "Wir müssten uns beeilen."
    ],
    quiz: [
      {
        q: "«Daha fazla uyumalısın» cümlesi hangisidir?",
        opts: [
          "Du musst mehr schlafen.",
          "Du solltest mehr schlafen.",
          "Du wirst mehr schlafen.",
          "Du schläfst mehr."
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Konjunktiv II",
    title: "wäre / hätte / würde ⭐",
    tr: "Konjunktiv II'nin temel formları: sein → wäre, haben → hätte, diğer fiiller → würde + Infinitiv. Kibar rica (Ich hätte gern...), hayali durum (Das wäre schön) ve varsayımsal cümlelerde kullanılır. «würde» yapısı en düzenli ve en güvenli Konjunktiv II formudur.",
    tips: [
      "Kibar sipariş: Ich hätte gern einen Kaffee.",
      "Hayali durum: Das wäre schön / toll / eine gute Idee.",
      "würde + Infinitiv: Ich würde gern mitkommen.",
      "wäre/hätte olumsuz: wäre nicht, hätte nicht",
      "Konuşmada «würde» en sık kullanılan Konjunktiv II formudur"
    ],
    table: {
      head: ["Fiil", "Konjunktiv II", "Örnek"],
      rows: [
        ["sein", "wäre", "Das wäre schön."],
        ["haben", "hätte", "Ich hätte gern Wasser."],
        ["machen", "würde machen", "Ich würde das gern machen."],
        ["kommen", "würde kommen", "Er würde morgen kommen."],
        ["können", "könnte", "Das könnte klappen."]
      ]
    },
    ex: [
      "Ich hätte gern einen Kaffee, bitte.",
      "Das wäre eine gute Idee.",
      "Ich würde gern mit Ihnen sprechen.",
      "Wäre es möglich, den Termin zu verschieben?",
      "Wir hätten gern zwei Tickets.",
      "Er würde das nie machen."
    ],
    quiz: [
      {
        q: "Restoranda «Bir kahve alabilir miyim?» (kibar) ifadesi hangisidir?",
        opts: [
          "Ich will einen Kaffee.",
          "Ich hätte gern einen Kaffee.",
          "Ich habe einen Kaffee.",
          "Ich trinke einen Kaffee."
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Konjunktiv II",
    title: "Irreale Bedingungssätze ⭐",
    tr: "Irreale (gerçek olmayan) koşul cümleleri, gerçekleşmemiş veya gerçekleşmesi mümkün olmayan durumları ifade eder. Yapı: Wenn + Konjunktiv II (yan cümle) + Konjunktiv II (ana cümle). Günümüz için «hätte/wäre + würde + Infinitiv», geçmiş için «hätte/wäre + Partizip II» kullanılır.",
    tips: [
      "Günümüz: Wenn ich Zeit hätte, würde ich dir helfen.",
      "Geçmiş: Wenn ich das gewusst hätte, wäre ich gekommen.",
      "Ana cümlede fiil başta: Hätte ich Zeit, würde ich kommen.",
      "wäre = sein | hätte = haben | diğer = würde + Inf.",
      "Türkçe: «Zamanım olsaydı sana yardım ederdim.»"
    ],
    ex: [
      "Wenn ich Zeit hätte, würde ich dir helfen.",
      "Wenn ich reich wäre, würde ich viel reisen.",
      "Wenn es nicht regnen würde, würden wir spazieren gehen.",
      "Wenn ich das gewusst hätte, hätte ich früher angerufen.",
      "An deiner Stelle würde ich das nicht machen.",
      "Wäre ich du, würde ich den Job annehmen."
    ],
    quiz: [
      {
        q: "«Zengin olsaydım çok seyahat ederdim» cümlesi hangisidir?",
        opts: [
          "Wenn ich reich bin, reise ich viel.",
          "Wenn ich reich wäre, würde ich viel reisen.",
          "Wenn ich reich war, reiste ich viel.",
          "Als ich reich war, reiste ich viel."
        ],
        correct: 1
      },
      {
        q: "Irrealer Konditionalsatz'ta ana cümlede hangi yapı kullanılır?",
        opts: [
          "Präsens + Präsens",
          "Konjunktiv II + Konjunktiv II",
          "Perfekt + Präteritum",
          "Futur I + Infinitiv"
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Konjunktiv II",
    title: "Konjunktiv I – Indirekte Rede",
    tr: "Konjunktiv I, dolaylı anlatımda (indirekte Rede) başkasının sözünü aktarmak için kullanılır; özellikle haber metinlerinde görülür. Fiil formu genellikle 3. tekil şahıs ile ayırt edilir: er sei, er habe, er komme. Konjunktiv I ile Präsens aynı olduğunda Konjunktiv II'ye geçilir.",
    tips: [
      "er sei = olduğunu söylüyor (er ist → er sei)",
      "er habe = sahip olduğunu söylüyor",
      "er komme = geldiğini söylüyor",
      "Aktarma fiili: sagen, erzählen, berichten, meinen",
      "Karışıklıkta Konjunktiv II: er wäre, er hätte"
    ],
    table: {
      head: ["Direkt", "Indirekt (Konjunktiv I)"],
      rows: [
        ["Er ist krank.", "Er sagt, er sei krank."],
        ["Ich habe keine Zeit.", "Er sagt, er habe keine Zeit."],
        ["Sie kommt morgen.", "Sie sagt, sie komme morgen."],
        ["Wir fahren nach Berlin.", "Sie sagen, sie fahren nach Berlin."],
        ["Das ist teuer.", "Er meint, das sei teuer."]
      ]
    },
    ex: [
      "Er sagt, er sei krank und komme morgen nicht.",
      "Die Zeitung berichtet, der Minister habe zurückgetreten.",
      "Sie erzählt, sie habe die Prüfung bestanden.",
      "Er meint, das sei keine gute Idee.",
      "Man sagt, die Preise würden steigen.",
      "Der Arzt erklärt, der Patient müsse im Bett bleiben."
    ],
    quiz: [
      {
        q: "«Er diyor ki hasta» — doğru dolaylı anlatım hangisidir?",
        opts: [
          "Er sagt, er ist krank.",
          "Er sagt, er sei krank.",
          "Er sagt, er war krank.",
          "Er sagt, er wäre krank."
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Bağlaçlar & Yan Cümleler",
    title: "trotzdem / obwohl",
    tr: "Her iki yapı da «rağmen» anlamı taşır ancak cümle yapıları farklıdır. «obwohl» yan cümle bağlacıdır; fiil yan cümlenin sonuna gider. «trotzdem» ana cümle bağlacıdır; ana cümlede fiil hemen sonra gelir. Türkçede ikisi de «-e rağmen» ile çevrilebilir ama Almanca yapı farklıdır.",
    tips: [
      "obwohl + yan cümle (fiil sonda): Obwohl es regnet, gehen wir raus.",
      "trotzdem + ana cümle (fiil 2.): Es regnet. Trotzdem gehen wir raus.",
      "obwohl = -e rağmen (yan cümle)",
      "trotzdem = yine de, buna rağmen (ana cümle)",
      "despite = trotz (+ Genitiv) — farklı yapı!"
    ],
    ex: [
      "Es regnet. Trotzdem gehen wir spazieren.",
      "Obwohl es regnet, gehen wir spazieren.",
      "Er war müde. Trotzdem hat er weitergearbeitet.",
      "Obwohl er müde war, hat er weitergearbeitet.",
      "Obwohl ich wenig Zeit habe, helfe ich dir gern.",
      "Das Essen war teuer. Trotzdem hat es nicht gut geschmeckt."
    ],
    quiz: [
      {
        q: "«Yağmura rağmen dışarı çıkıyoruz» — obwohl ile doğru cümle hangisidir?",
        opts: [
          "Obwohl es regnet, gehen wir raus.",
          "Trotzdem es regnet, gehen wir raus.",
          "Obwohl gehen wir raus, es regnet.",
          "Es regnet obwohl, gehen wir raus."
        ],
        correct: 0
      }
    ]
  },
  {
    cat: "Bağlaçlar & Yan Cümleler",
    title: "İkili bağlaçlar",
    tr: "İkili bağlaçlar (doppelte Konjunktionen) iki eşit öğeyi birbirine bağlar ve fiil konumunu değiştirmez. «nicht nur...sondern auch», «sowohl...als auch», «weder...noch», «entweder...oder» en sık kullanılanlardır. B1 yazma sınavlarında cümle çeşitliliği için önemlidir.",
    tips: [
      "nicht nur...sondern auch = sadece ... değil, aynı zamanda ...",
      "sowohl...als auch = hem ... hem ...",
      "weder...noch = ne ... ne ...",
      "entweder...oder = ya ... ya ...",
      "İkili bağlaç fiili yerinden oynatmaz"
    ],
    table: {
      head: ["Bağlaç", "Anlam", "Örnek"],
      rows: [
        ["nicht nur...sondern auch", "sadece ... değil, aynı zamanda", "Er spricht nicht nur Deutsch, sondern auch Englisch."],
        ["sowohl...als auch", "hem ... hem", "Sie isst sowohl Fleisch als auch Gemüse."],
        ["weder...noch", "ne ... ne", "Ich habe weder Zeit noch Geld."],
        ["entweder...oder", "ya ... ya", "Entweder du oder ich muss gehen."]
      ]
    },
    ex: [
      "Er spricht nicht nur Deutsch, sondern auch Englisch.",
      "Ich habe weder Zeit noch Geld.",
      "Entweder kommst du mit, oder du bleibst zu Hause.",
      "Sie mag sowohl Kaffee als auch Tee.",
      "Das ist nicht nur teuer, sondern auch schlecht.",
      "Weder er noch sie wussten davon."
    ],
    quiz: [
      {
        q: "«Ne zamanım ne param var» cümlesi hangisidir?",
        opts: [
          "Ich habe nicht Zeit und nicht Geld.",
          "Ich habe weder Zeit noch Geld.",
          "Ich habe entweder Zeit oder Geld.",
          "Ich habe sowohl Zeit als auch Geld."
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Bağlaçlar & Yan Cümleler",
    title: "während (3 anlam)",
    tr: "«während» üç farklı anlamda kullanılır: (1) yan cümle bağlacı «-iken», (2) Genitiv edatı «... sırasında», (3) karşıtlık bağlacı «... oysa/... halde». Anlam bağlama göre belirlenir; B1'de en sık zaman anlamı (1 ve 2) görülür.",
    tips: [
      "Yan cümle (-iken): Während ich koche, hört er Musik.",
      "Edat + Genitiv: während des Essens = yemek sırasında",
      "Karşıtlık: Er arbeitet viel, während sie viel frei hat.",
      "währenddessen = bu arada, o sırada",
      "Edat formu resmi dilde daha yaygın"
    ],
    ex: [
      "Während ich koche, hört er Musik.",
      "Während des Essens sprach niemand.",
      "Er lernt Deutsch, während seine Schwester Englisch lernt.",
      "Während der Pause trinke ich Kaffee.",
      "Währenddessen wartete ich vor der Tür.",
      "Während er reich ist, ist er nicht glücklich."
    ],
    quiz: [
      {
        q: "«Yemek sırasında kimse konuşmadı» — während + Genitiv ile hangisidir?",
        opts: [
          "Während essen sprach niemand.",
          "Während des Essens sprach niemand.",
          "Während ich esse, spricht niemand.",
          "Während dem Essen sprach niemand."
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Bağlaçlar & Yan Cümleler",
    title: "als / wenn / wann",
    tr: "Bu üç kelime Türkçede karıştırılır. «als» geçmişte tek seferlik olaylar için; «wenn» tekrarlayan, şimdiki ve gelecekteki koşullar için; «wann» ise soru kelimesi olarak «ne zaman» anlamına gelir. Fiil konumu kuralları als/wenn'de aynıdır (yan cümlede fiil sonda).",
    tips: [
      "als = -dığında (geçmiş, tek olay): Als ich Kind war...",
      "wenn = -dığında/-ince (tekrar, şimdi, gelecek): Wenn ich Zeit habe...",
      "wann = ne zaman? (soru): Wann kommst du?",
      "als sadece geçmiş zamanla kullanılır",
      "wenn = if/when; wann = when (question)"
    ],
    table: {
      head: ["Kelime", "Kullanım", "Örnek"],
      rows: [
        ["als", "Geçmiş, tek olay", "Als ich jung war, wohnte ich in Izmir."],
        ["wenn", "Tekrar, şimdi, gelecek", "Wenn ich Zeit habe, lese ich gern."],
        ["wann", "Soru kelimesi", "Wann beginnt der Kurs?"],
        ["wenn", "Koşul (if)", "Wenn es regnet, bleibe ich zu Hause."]
      ]
    },
    ex: [
      "Als ich Kind war, wohnte ich in Izmir.",
      "Wenn ich Zeit habe, lese ich gern.",
      "Wann beginnt der Deutschkurs?",
      "Als er ankam, war ich schon da.",
      "Wenn es regnet, nehme ich einen Schirm mit.",
      "Weißt du, wann der Zug kommt?"
    ],
    quiz: [
      {
        q: "Geçmişte bir kez olan olay için hangi bağlaç kullanılır?",
        opts: ["wenn", "als", "wann", "seit"],
        correct: 1
      }
    ]
  },
  {
    cat: "Bağlaçlar & Yan Cümleler",
    title: "seit / seitdem",
    tr: "«seit» edat olarak «-den beri» anlamında Dativ alır ve genellikle Präsens ile kullanılır (eylem hâlâ devam ediyor). «seitdem» ise yan cümle bağlacı olarak aynı anlamı taşır. Türkçede ikisi de «-den beri» ile çevrilir.",
    tips: [
      "seit + Dativ + Präsens: Seit zwei Jahren lerne ich Deutsch.",
      "seitdem + yan cümle: Seitdem er hier wohnt, ist er glücklich.",
      "Devam eden eylem → Präsens (Perfekt değil!)",
      "seitdem = o zamandan beri (bağlaç)",
      "Seit wann? = Ne zamandan beri?"
    ],
    ex: [
      "Seit zwei Jahren lerne ich Deutsch.",
      "Seitdem er hier wohnt, ist er glücklich.",
      "Seit dem Unfall kann er nicht mehr laufen.",
      "Seit wann lernst du Deutsch?",
      "Seitdem ich in Berlin bin, fühle ich mich wohl.",
      "Seit einem Monat arbeite ich in dieser Firma."
    ],
    quiz: [
      {
        q: "«İki yıldır Almanca öğreniyorum» cümlesi hangisidir?",
        opts: [
          "Ich lerne Deutsch vor zwei Jahren.",
          "Ich habe Deutsch seit zwei Jahren gelernt.",
          "Ich lerne Deutsch seit zwei Jahren.",
          "Ich lernte Deutsch seit zwei Jahren."
        ],
        correct: 2
      }
    ]
  },
  {
    cat: "Bağlaçlar & Yan Cümleler",
    title: "Wozu? → um...zu / damit / weil",
    tr: "Amaç bildirmek için «um...zu» (aynı özne) veya «damit» (farklı özne) kullanılır. «weil» ise sebep bildirir, amaç değil. Türkçede um...zu = «-mek için», damit = «...sin diye/-sın diye», weil = «-dığı için».",
    tips: [
      "Aynı özne → um...zu: Ich lerne, um zu arbeiten.",
      "Farklı özne → damit: Ich erkläre es, damit du es verstehst.",
      "weil = çünkü (sebep, amaç değil!)",
      "um...zu arasında mastar fiil: um Deutsch zu lernen",
      "damit + yan cümle (fiil sonda)"
    ],
    ex: [
      "Ich lerne Deutsch, um in Deutschland zu arbeiten.",
      "Ich spreche laut, damit alle mich verstehen.",
      "Ich bin früh aufgestanden, weil ich einen Termin habe.",
      "Er nimmt den Bus, um Geld zu sparen.",
      "Sie hat alles erklärt, damit wir es verstehen.",
      "Wozu lernst du so viel? — Um die Prüfung zu bestehen."
    ],
    quiz: [
      {
        q: "Özne aynı olduğunda amaç bildirmek için hangi yapı kullanılır?",
        opts: ["damit", "weil", "um...zu", "dass"],
        correct: 2
      }
    ]
  },
  {
    cat: "Bağlaçlar & Yan Cümleler",
    title: "bevor / nachdem / bis / sobald ⭐",
    tr: "Zaman yan cümleleri eylemlerin sırasını belirtir. «bevor» = -meden önce, «nachdem» = -dikten sonra, «bis» = -e kadar, «sobald» = -er -mez. «nachdem» ile Plusquamperfekt kombinasyonu B1'de kritik bir konudur: önce olan eylem Plusquamperfekt alır.",
    tips: [
      "bevor = -meden önce (fiil sonda)",
      "nachdem + Plusquamperfekt: Nachdem er gegessen hatte, ging er ins Bett.",
      "bis = -e kadar: Warte, bis ich komme.",
      "sobald = -er -mez: Sobald er kommt, fangen wir an.",
      "nachdem → önceki eylem Plusquamperfekt, sonraki Präteritum/Perfekt"
    ],
    table: {
      head: ["Bağlaç", "Anlam", "Zaman"],
      rows: [
        ["bevor", "-meden önce", "Gelecek veya genel"],
        ["nachdem", "-dikten sonra", "Önceki: Plusquamperfekt"],
        ["bis", "-e kadar", "Bitene kadar"],
        ["sobald", "-er -mez", "Hemen ...ince"]
      ]
    },
    ex: [
      "Bevor ich schlafe, lese ich noch etwas.",
      "Nachdem er gegessen hatte, ging er ins Bett.",
      "Warte bitte, bis ich fertig bin.",
      "Sobald er ankommt, rufe ich dich an.",
      "Bevor du gehst, räum bitte auf.",
      "Nachdem wir uns verabredet hatten, trafen wir uns im Café."
    ],
    quiz: [
      {
        q: "nachdem ile önce gerçekleşen eylem hangi zamanda olmalıdır?",
        opts: [
          "Präsens",
          "Plusquamperfekt",
          "Futur I",
          "Präteritum"
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Bağlaçlar & Yan Cümleler",
    title: "Indirekte Fragen / ob ⭐",
    tr: "Dolaylı sorular, bir soruyu başka bir cümle içinde aktarmak için kullanılır. Wh-sorular (wer, was, wo, wann...) soru kelimesiyle; evet/hayır soruları «ob» ile aktarılır. Fiil yan cümlenin sonuna gider. Türkçede «...ip ...mediğini» kalıplarıyla çevrilir.",
    tips: [
      "Wh-soru: Ich weiß nicht, wo er wohnt.",
      "Evet/hayır: Ich weiß nicht, ob er kommt.",
      "ob = ...-ip ...-mediği / ...-up ...-madığı",
      "Soru kelimesi yerinde kalır, fiil sonda",
      "Kannst du mir sagen, ...? = ... söyler misin?"
    ],
    ex: [
      "Ich weiß nicht, ob er heute kommt.",
      "Können Sie mir sagen, wo der Bahnhof ist?",
      "Frag ihn, ob er Zeit hat.",
      "Ich habe vergessen, wann der Termin ist.",
      "Er fragt, ob wir mitkommen wollen.",
      "Weißt du, wie viel das kostet?"
    ],
    quiz: [
      {
        q: "«Gelip gelmeyeceğini bilmiyorum» cümlesi hangisidir?",
        opts: [
          "Ich weiß nicht, wann er kommt.",
          "Ich weiß nicht, ob er kommt.",
          "Ich weiß nicht, wo er kommt.",
          "Ich weiß nicht, warum er kommt."
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Bağlaçlar & Yan Cümleler",
    title: "je... desto ⭐",
    tr: "«je... desto» yapısı «ne kadar ... o kadar ...» anlamı taşır. «je» ile başlayan yan cümlede Komparativ kullanılır; «desto» ile başlayan ana cümlede de Komparativ gelir. Fiil ana cümlede ikinci pozisyondadır.",
    tips: [
      "je + Komparativ (yan cümle), desto + Komparativ (ana cümle)",
      "Je mehr ich lerne, desto besser spreche ich.",
      "Je früher, desto besser. (kısa form)",
      "desto = umso (aynı anlam)",
      "Her iki bölümde de Komparativ (-er) kullanılır"
    ],
    ex: [
      "Je mehr ich lerne, desto besser spreche ich.",
      "Je früher, desto besser.",
      "Je älter man wird, desto weiser wird man.",
      "Je schneller du fährst, desto gefährlicher ist es.",
      "Je länger ich warte, desto ungeduldiger werde ich.",
      "Je weniger du isst, desto hungriger wirst du."
    ],
    quiz: [
      {
        q: "«Ne kadar çok öğrenirsem, o kadar iyi konuşurum» cümlesi hangisidir?",
        opts: [
          "Wenn ich mehr lerne, spreche ich besser.",
          "Je mehr ich lerne, desto besser spreche ich.",
          "Als ich mehr lernte, sprach ich besser.",
          "Seit ich mehr lerne, spreche ich besser."
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Bağlaçlar & Yan Cümleler",
    title: "zu Ende / fertig",
    tr: "Bitme ve tamamlanma ifadeleri günlük Almancada çok sık kullanılır. «zu Ende sein/gehen» bir şeyin sona erdiğini; «fertig sein/machen» bir işin tamamlandığını ifade eder. Türkçede «bitti», «tamamlandı», «hazır» gibi karşılıkları vardır.",
    tips: [
      "zu Ende sein = sona ermek, bitmek",
      "fertig sein = bitmiş olmak, hazır olmak",
      "fertig machen = bitirmek, tamamlamak",
      "Ich bin mit der Arbeit fertig. = İşim bitti.",
      "Der Film ist zu Ende. = Film bitti."
    ],
    ex: [
      "Der Film ist zu Ende.",
      "Ich bin mit der Arbeit fertig.",
      "Bist du schon fertig mit dem Essen?",
      "Kannst du das bitte fertig machen?",
      "Das Konzert geht gleich zu Ende.",
      "Wir sind fast fertig mit den Vorbereitungen."
    ],
    quiz: [
      {
        q: "«İşim bitti» ifadesi hangisidir?",
        opts: [
          "Meine Arbeit ist zu Ende.",
          "Ich bin mit der Arbeit fertig.",
          "Ich habe die Arbeit.",
          "Die Arbeit geht weiter."
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Sıfatlar & Relativsätze",
    title: "Adjektivendungen (sıfat çekimi)",
    tr: "Almancada sıfat, isimden önce geldiğinde artikel türüne (bestimmt/unbestimmt/yok) ve ismin haline göre ek alır. Bu ekler Türkçede karşılığı olmayan bir gramer konusudur. Üç tip çekim vardır: güçlü (artikel yok), zayıf (bestimmter Artikel), karma (unbestimmter Artikel). B1 seviyesinde en azından zayıf çekimi bilmek şarttır.",
    tips: [
      "der + sıfat + isim: der rote Apfel (Nom.) → den roten Apfel (Akk.)",
      "ein + sıfat: ein roter Apfel → einen roten Apfel",
      "Artikel yoksa sıfat güçlü çekim alır: rote Äpfel",
      "Dativ eril: dem roten Apfel | Dativ dişi: der roten Birne",
      "Genitiv eril: des roten Apfels"
    ],
    table: {
      head: ["Hal", "der (m)", "die (f)", "das (n)", "pl"],
      rows: [
        ["Nom.", "der rote Apfel", "die rote Birne", "das rote Haus", "die roten Äpfel"],
        ["Akk.", "den roten Apfel", "die rote Birne", "das rote Haus", "die roten Äpfel"],
        ["Dat.", "dem roten Apfel", "der roten Birne", "dem roten Haus", "den roten Äpfeln"],
        ["Gen.", "des roten Apfels", "der roten Birne", "des roten Hauses", "der roten Äpfel"]
      ]
    },
    ex: [
      "Der rote Apfel schmeckt gut.",
      "Ich habe einen roten Apfel gekauft.",
      "Ich gebe dem kleinen Kind ein Spielzeug.",
      "Das ist das Haus meiner alten Nachbarin.",
      "Mit frischem Brot schmeckt die Suppe besser.",
      "Er trägt einen blauen Pullover."
    ],
    quiz: [
      {
        q: "Akkusativ eril: «Kırmızı elmayı aldım» — doğru form hangisidir?",
        opts: [
          "Ich habe der rote Apfel gekauft.",
          "Ich habe den roten Apfel gekauft.",
          "Ich habe dem roten Apfel gekauft.",
          "Ich habe einen rote Apfel gekauft."
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Sıfatlar & Relativsätze",
    title: "Relativsätze (Präposition dahil)",
    tr: "Relativ cümleler (Relativsätze) bir ismi tanımlamak veya ek bilgi vermek için kullanılır. Relativ zamirler: der (m), die (f/pl), das (n). Edatlı isimlerde edat relativ zamirden önce gelir: mit dem, für die, an den. Fiil relativ cümlenin sonundadır.",
    tips: [
      "der/die/das + yan cümle: Der Mann, der dort steht, ist mein Chef.",
      "Edat + Relativpronomen: Die Frau, mit der ich arbeite, ...",
      "Akkusativ/Dativ edat halini belirler",
      "was = tüm cümle veya nötr isimsiz: Das, was du sagst, ...",
      "wo = yer bildiren isimler: Die Stadt, wo ich wohne, ..."
    ],
    ex: [
      "Das ist der Mann, der nebenan wohnt.",
      "Die Frau, mit der ich arbeite, kommt aus Wien.",
      "Das Buch, das ich lese, ist sehr interessant.",
      "Der Freund, dem ich vertraue, wohnt in Berlin.",
      "Das ist alles, was ich weiß.",
      "Die Stadt, in der ich aufgewachsen bin, ist Izmir."
    ],
    quiz: [
      {
        q: "«Benimle çalıştığı kadın» — edatlı relativ cümle hangisidir?",
        opts: [
          "Die Frau, die ich arbeite mit, ...",
          "Die Frau, mit der ich arbeite, ...",
          "Die Frau, der ich arbeite, ...",
          "Die Frau, die mit ich arbeite, ..."
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Sıfatlar & Relativsätze",
    title: "Relativsätze mit Partizip I",
    tr: "Partizip I (fiil + -d) sıfat gibi kullanılarak aktif ve devam eden eylemi ifade eder. Relativ cümle yerine kısa sıfat tamlaması oluşturur: «das Kind, das weint» → «das weinende Kind». B1 seviyesinde okuma metinlerinde sık görülür.",
    tips: [
      "Partizip I = fiil + d: weinen → weinend",
      "das weinende Kind = ağlayan çocuk",
      "der laufende Mann = koşan adam",
      "Aktif anlam taşır (eylemi yapan belli)",
      "Sıfat çekimi kuralları geçerlidir: der laufende Mann"
    ],
    ex: [
      "Das weinende Kind sucht seine Mutter.",
      "Der laufende Motor macht Lärm.",
      "Die arbeitenden Menschen brauchen Pause.",
      "Das brennende Haus wurde gelöscht.",
      "Ein ziemlich anstrengender Tag liegt hinter mir.",
      "Die in der Sonne liegenden Touristen bräunen sich."
    ],
    quiz: [
      {
        q: "«Ağlayan çocuk» ifadesi hangisidir?",
        opts: [
          "das geweinte Kind",
          "das weinende Kind",
          "das weint Kind",
          "das Kind weinend"
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Sıfatlar & Relativsätze",
    title: "Partizip II als Adjektiv",
    tr: "Partizip II (Geçmiş zaman ortacı) sıfat olarak kullanıldığında edilgen veya tamamlanmış anlam taşır. «die geöffnete Tür» = açılmış/açık kapı. Sıfat çekimi kuralları burada da geçerlidir. Okuma metinlerinde Partizip I ve II sıfat kullanımları sık karşılaşılır.",
    tips: [
      "Partizip II + sıfat çekimi: die geöffnete Tür, das geschlossene Fenster",
      "Edilgen anlam: die reparierte Maschine = tamir edilmiş makine",
      "gekochtes Gemüse = pişmiş sebze",
      "Sıfat çekimi: der geöffnete Laden (Nom.), den geöffneten Laden (Akk.)",
      "Relativ cümle alternatifi: die Tür, die geöffnet ist → die geöffnete Tür"
    ],
    ex: [
      "Die geschlossene Tür lässt sich nicht öffnen.",
      "Ich esse gern gekochtes Gemüse.",
      "Das renovierte Haus sieht schön aus.",
      "Er kaufte ein gebrauchtes Auto.",
      "Die verlorene Tasche wurde gefunden.",
      "Wir wohnen in einem sanierten Altbau."
    ],
    quiz: [
      {
        q: "«Açık kapı» — Partizip II sıfat olarak hangisidir?",
        opts: [
          "die öffnende Tür",
          "die geöffnete Tür",
          "die öffnet Tür",
          "die Tür geöffnet"
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Sıfatlar & Relativsätze",
    title: "Substantivierte Verben",
    tr: "Almancada fiiller isimleştirilebilir: das + Infinitiv (das Lernen, das Rauchen, das Schwimmen). «beim/zum/zur» ile sık kullanılır. Türkçede «-mak/-me» mastar isim karşılığı vardır. B1'de günlük ifadelerde çok yaygındır.",
    tips: [
      "das + Infinitiv (nötr): das Lernen, das Kochen, das Reisen",
      "beim + Infinitiv (Dativ): beim Lernen, beim Essen",
      "zum + Infinitiv: zum Lernen, zum Schlafen",
      "Artikel ve hal çekimi isim gibi: beim Lesen, des Lernens",
      "Fiil isimleşince nötr (das) olur"
    ],
    ex: [
      "Das Rauchen ist hier verboten.",
      "Beim Lernen höre ich keine Musik.",
      "Zum Frühstücken gehen wir ins Café.",
      "Das Schwimmen im Meer macht Spaß.",
      "Er hat Angst vor dem Fliegen.",
      "Beim Kochen brauche ich Ruhe."
    ],
    quiz: [
      {
        q: "«Öğrenirken müzik dinlemem» cümlesi hangisidir?",
        opts: [
          "Beim Lernen höre ich keine Musik.",
          "Zum Lernen höre ich keine Musik.",
          "Das Lernen höre ich keine Musik.",
          "Bei lernen höre ich keine Musik."
        ],
        correct: 0
      }
    ]
  },
  {
    cat: "Sıfatlar & Relativsätze",
    title: "Komparativ & Superlativ",
    tr: "Sıfatların karşılaştırma (Komparativ: -er) ve en üstünlük (Superlativ: am ...-sten) dereceleri B1'de temel bir konudur. «als» karşılaştırma bağlacıdır. Superlativ'de «am» + -sten veya artikel + -ste kullanılır. Düzensiz formlar (gut→besser→am besten) ezberlenmelidir.",
    tips: [
      "Komparativ: groß → größer | mit als: größer als",
      "Superlativ: am größten / der größte",
      "gut → besser → am besten | viel → mehr → am meisten",
      "gern → lieber → am liebsten",
      "Umlaut: alt → älter, jung → jünger, groß → größer"
    ],
    table: {
      head: ["Positiv", "Komparativ", "Superlativ"],
      rows: [
        ["groß", "größer", "am größten / der größte"],
        ["gut", "besser", "am besten / der beste"],
        ["viel", "mehr", "am meisten / der meiste"],
        ["gern", "lieber", "am liebsten"],
        ["hoch", "höher", "am höchsten / der höchste"],
        ["nah", "näher", "am nächsten / der nächste"]
      ]
    },
    ex: [
      "Berlin ist größer als München.",
      "Das ist das beste Restaurant in der Stadt.",
      "Je mehr, desto besser.",
      "Ich trinke lieber Tee als Kaffee.",
      "Am liebsten esse ich türkisches Essen.",
      "Er ist der älteste Sohn der Familie."
    ],
    quiz: [
      {
        q: "«gut» sıfatının Komparativ formu hangisidir?",
        opts: ["guter", "gutest", "besser", "mehr gut"],
        correct: 2
      },
      {
        q: "Superlativ yapısında «en büyük» ifadesi hangisidir?",
        opts: [
          "am groß",
          "am größer",
          "am größten",
          "der groß"
        ],
        correct: 2
      }
    ]
  },
  {
    cat: "Haller & Edatlar",
    title: "Genitiv",
    tr: "Genitiv (-in hali) aitlik bildirir: des Mannes, der Frau, des Kindes. Eril isimler -s/-es, dişi isimler -er, nötr isimler -s alır. Konuşmada Genitiv yerine «von + Dativ» kullanımı yaygındır, ancak yazı dilinde ve bazı kalıplarda Genitiv zorunludur.",
    tips: [
      "Eril: des Mann(es), des Kind(es) | Dişi: der Frau | Nötr: des Haus(es)",
      "Aitlik: das Auto meines Vaters = babamın arabası",
      "Konuşmada: das Auto von meinem Vater (daha yaygın)",
      "Tarih: Montag, der 5. Juli / im Jahr 2024",
      "N-Deklination Genitiv: des Studenten"
    ],
    table: {
      head: ["Cinsiyet", "Artikel", "Örnek"],
      rows: [
        ["Eril", "des ... -s/-es", "des Mannes, des Kindes"],
        ["Dişi", "der ...", "der Frau, der Tür"],
        ["Nötr", "des ... -s/-es", "des Hauses, des Buches"],
        ["Çoğul", "der ...", "der Kinder, der Eltern"]
      ]
    },
    ex: [
      "Das ist das Auto meines Vaters.",
      "Die Farbe der Wand gefällt mir.",
      "Wegen des Regens bleiben wir zu Hause.",
      "Das ist das Zimmer meiner Schwester.",
      "Die Entscheidung des Chefs war endgültig.",
      "Trotz des schlechten Wetters gehen wir raus."
    ],
    quiz: [
      {
        q: "«Babamın arabası» — Genitiv ile hangisidir?",
        opts: [
          "das Auto von mein Vater",
          "das Auto meines Vaters",
          "das Auto meinem Vater",
          "das Auto meinen Vaters"
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Haller & Edatlar",
    title: "Genitiv-Präpositionen: trotz / wegen / innerhalb / außerhalb",
    tr: "Bu edatlar her zaman Genitiv alır. «trotz» = -e rağmen, «wegen» = -den dolayı, «innerhalb» = ... içinde (zaman/mekân), «außerhalb» = ... dışında. Resmi ve yazılı dilde sık kullanılırlar; konuşmada wegen/trotz + Dativ (özellikle Almanya'da) kabul edilebilir.",
    tips: [
      "trotz + Genitiv: trotz des Regens = yağmura rağmen",
      "wegen + Genitiv: wegen der Arbeit = iş yüzünden",
      "innerhalb + Genitiv: innerhalb einer Woche = bir hafta içinde",
      "außerhalb + Genitiv: außerhalb der Stadt = şehrin dışında",
      "Konuşmada: wegen dem Wetter (Dativ, yaygın ama resmi değil)"
    ],
    table: {
      head: ["Edat", "Anlam", "Örnek"],
      rows: [
        ["trotz", "-e rağmen", "trotz des Regens"],
        ["wegen", "-den dolayı", "wegen der Krankheit"],
        ["innerhalb", "içinde (süre/mekân)", "innerhalb einer Stunde"],
        ["außerhalb", "dışında", "außerhalb der Öffnungszeiten"],
        ["während", "sırasında", "während des Unterrichts"]
      ]
    },
    ex: [
      "Trotz des Regens gehen wir raus.",
      "Wegen der Arbeit habe ich keine Zeit.",
      "Innerhalb einer Woche muss ich antworten.",
      "Außerhalb der Stadt ist es ruhiger.",
      "Wegen des Staus kam ich zu spät.",
      "Trotz der Kälte trägt er keinen Mantel."
    ],
    quiz: [
      {
        q: "«Yağmura rağmen dışarı çıkıyoruz» — trotz ile hangisidir?",
        opts: [
          "Trotz dem Regen gehen wir raus.",
          "Trotz des Regens gehen wir raus.",
          "Trotz der Regen gehen wir raus.",
          "Trotz den Regen gehen wir raus."
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Haller & Edatlar",
    title: "vorher / währenddessen / nachher-danach",
    tr: "Bu zaman zarfları bir olayın öncesini, sırasını ve sonrasını ifade eder. «vorher» = önce, «währenddessen» = bu arada/o sırada, «nachher/danach» = sonra. Genitiv edatlı ifadelerin zarf karşılıklarıdır: vor dem Essen → vorher.",
    tips: [
      "vorher = önce (zarf) | vor + Dativ = -den önce (edat)",
      "währenddessen = bu arada, o sırada",
      "danach / nachher = sonra, ondan sonra",
      "Önce X, danach Y: Vorher esse ich, danach gehe ich spazieren.",
      "Paralel eylemler: Er las, währenddessen kochte sie."
    ],
    ex: [
      "Vorher gehe ich einkaufen, danach koche ich.",
      "Er telefonierte, währenddessen kochte sie.",
      "Erst essen wir, danach sehen wir einen Film.",
      "Vorher musste ich viel lernen, jetzt ist die Prüfung vorbei.",
      "Ich mache erst die Hausaufgaben, nachher spiele ich.",
      "Währenddessen wartete der Kunde vor der Tür."
    ],
    quiz: [
      {
        q: "«Önce alışveriş yapacağım, sonra yemek pişireceğim» hangisidir?",
        opts: [
          "Vorher kaufe ich ein, danach koche ich.",
          "Währenddessen kaufe ich ein, vorher koche ich.",
          "Nachher kaufe ich ein, vorher koche ich.",
          "Danach kaufe ich ein, währenddessen koche ich."
        ],
        correct: 0
      }
    ]
  },
  {
    cat: "Haller & Edatlar",
    title: "Akkusativ / Dativ sıralaması",
    tr: "Cümlede hem Dativ (dolaylı nesne/kişi) hem Akkusativ (belirtili nesne) varsa sıralama kuralı: önce Dativ, sonra Akkusativ. Ancak Akkusativ zamir ise (ihn, sie, es, sie) zamir öne geçer. Türkçede bu ayrım farklı cümle yapılarıyla verilir.",
    tips: [
      "Dativ + Akkusativ: Ich gebe dem Kind einen Apfel.",
      "Akkusativ zamir önde: Ich gebe ihn dem Kind.",
      "Dativ zamir önde: Ich gebe ihm den Apfel.",
      "İki zamir: Ich gebe es ihm.",
      "Dativ genellikle kişi, Akkusativ nesne"
    ],
    ex: [
      "Ich gebe dem Kind einen Apfel.",
      "Ich gebe ihn dem Kind.",
      "Ich gebe ihm den Apfel.",
      "Er erklärt der Klasse die Regel.",
      "Er erklärt sie der Klasse.",
      "Kannst du mir das Salz geben?"
    ],
    quiz: [
      {
        q: "«Çocuğa elma veriyorum» — doğru sıralama hangisidir?",
        opts: [
          "Ich gebe einen Apfel dem Kind.",
          "Ich gebe dem Kind einen Apfel.",
          "Ich gebe den Kind ein Apfel.",
          "Ich gebe ein Apfel dem Kind."
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Haller & Edatlar",
    title: "Reflexive Verben: sich → Dativ dönüşümü",
    tr: "Reflexif fiillerde «sich» genellikle Akkusativ'tir (Ich wasche mich). Ancak cümlede ayrıca bir Akkusativ nesne varsa, «sich» Dativ'e dönüşür: Ich wasche mir die Hände. Türkçede bu ayrım genelde aynı cümleyle çevrilir ama Almanca'da hal değişimi zorunludur.",
    tips: [
      "sich + Akk. (nesne yok): Ich wasche mich. / Ich setze mich.",
      "sich + Dat. + Akk. (nesne var): Ich wasche mir die Hände.",
      "Kural: Akkusativ nesne varsa sich → Dativ",
      "Sık: sich die Hände waschen, sich die Zähne putzen",
      "sich anziehen (Akk.) vs. sich den Mantel anziehen (Dat.)"
    ],
    ex: [
      "Ich wasche mir die Hände.",
      "Sie putzt sich die Zähne.",
      "Er kämmt sich die Haare.",
      "Ich wasche mich. (nesne yok → Akkusativ)",
      "Kannst du dir bitte die Schuhe anziehen?",
      "Sie kauft sich ein neues Kleid."
    ],
    quiz: [
      {
        q: "«Ellerimi yıkıyorum» — sich Dativ ile hangisidir?",
        opts: [
          "Ich wasche mich die Hände.",
          "Ich wasche mir die Hände.",
          "Ich wasche meine Hände mich.",
          "Ich wasche die Hände sich."
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Haller & Edatlar",
    title: '„zum" + substantiviertes Verb',
    tr: "«zum» (= zu + dem) isimleşmiş fiillerle birlikte amaç veya uygunluk bildirir: zum Lernen, zum Essen, zum Schlafen. Türkçede «-mek için» veya «-meye uygun» anlamı taşır. «zur» (= zu + der) dişi isimlerle kullanılır.",
    tips: [
      "zum + Infinitiv (isimleşmiş): zum Lernen, zum Kochen",
      "zur + Infinitiv (dişi): zur Erholung",
      "Amaç: Ich habe keine Zeit zum Kochen.",
      "Uygunluk: Das ist gut zum Lesen.",
      "beim = -erken, zum = -mek için"
    ],
    ex: [
      "Zum Lernen brauche ich Ruhe.",
      "Ich habe keine Zeit zum Kochen.",
      "Das ist ein guter Ort zum Entspannen.",
      "Zum Frühstücken gehen wir ins Café.",
      "Diese App ist praktisch zum Vokabellernen.",
      "Zur Beruhigung trinkt er einen Tee."
    ],
    quiz: [
      {
        q: "«Yemek yapmak için zamanım yok» hangisidir?",
        opts: [
          "Ich habe keine Zeit beim Kochen.",
          "Ich habe keine Zeit zum Kochen.",
          "Ich habe keine Zeit das Kochen.",
          "Ich habe keine Zeit zu kochen dem."
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Haller & Edatlar",
    title: "Verben mit Präpositionen ⭐",
    tr: "Birçok Almanca fiil belirli bir edat ve hal ile kullanılır. Edatın aldığı hal (Akkusativ/Dativ) ezberlenmelidir. Yanlış edat veya hal anlamı tamamen değiştirir. B1 sınavlarında hem okuma hem dinlemede bu fiiller sık test edilir.",
    tips: [
      "Edat + hal ezberle: warten auf + Akk., helfen + Dat.",
      "sich freuen über (Akk.) = -den sevinmek | sich freuen auf (Akk.) = -i dört gözle beklemek",
      "denken an + Akk. = -i düşünmek",
      "sich interessieren für + Akk. = -le ilgilenmek",
      "Soru: Worauf? Worüber? Wofür? (Pronominaladverbien)"
    ],
    table: {
      head: ["Fiil", "Edat + Hal", "Anlam"],
      rows: [
        ["warten", "auf + Akk.", "beklemek"],
        ["sich freuen", "über + Akk.", "…den sevinmek"],
        ["sich freuen", "auf + Akk.", "…i dört gözle beklemek"],
        ["denken", "an + Akk.", "…i düşünmek"],
        ["sich interessieren", "für + Akk.", "…le ilgilenmek"],
        ["helfen", "+ Dat.", "yardım etmek"],
        ["gehören", "+ Dat.", "ait olmak"],
        ["sprechen", "über + Akk.", "…hakkında konuşmak"],
        ["sich kümmern", "um + Akk.", "…le ilgilenmek/bakmak"],
        ["träumen", "von + Dat.", "…i hayal etmek"]
      ]
    },
    ex: [
      "Ich warte auf den Bus.",
      "Sie interessiert sich für Musik.",
      "Denkst du noch an mich?",
      "Ich freue mich auf das Wochenende.",
      "Er spricht oft über seine Reisen.",
      "Kannst du mir bei den Hausaufgaben helfen?"
    ],
    quiz: [
      {
        q: "«Otobüsü bekliyorum» — doğru edat ve hal hangisidir?",
        opts: [
          "Ich warte für den Bus.",
          "Ich warte auf den Bus.",
          "Ich warte an den Bus.",
          "Ich warte um den Bus."
        ],
        correct: 1
      },
      {
        q: "«Müzikle ilgileniyor» ifadesi hangisidir?",
        opts: [
          "Sie interessiert sich über Musik.",
          "Sie interessiert sich für Musik.",
          "Sie interessiert sich an Musik.",
          "Sie interessiert sich mit Musik."
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Haller & Edatlar",
    title: "Pronominaladverbien: darauf, darüber, damit...",
    tr: "Cansız nesnelere atıfta «da(r) + edat» yapısı kullanılır: darauf (onu, bunu — auf için), darüber (hakkında), damit (bununla). Kişiler için edat + zamir kullanılır: an ihn, mit ihr. Bu yapı Almancaya özgüdür ve Türkçede tek kelimeyle karşılanmaz.",
    tips: [
      "Cansız nesne: da(r) + edat → darauf, darüber, damit, dafür",
      "r sadece a/o/u edatlarından önce: darauf (auf), darüber (über)",
      "Kişi: edat + zamir → an ihn, mit ihr, für sie",
      "Ich warte auf den Bus. → Ich warte darauf.",
      "Worauf? = Ne(yi) bekliyorsun?"
    ],
    table: {
      head: ["Edat", "Pronominaladverb", "Örnek"],
      rows: [
        ["auf", "darauf", "Ich freue mich darauf."],
        ["über", "darüber", "Wir sprechen darüber."],
        ["mit", "damit", "Damit kann ich nichts anfangen."],
        ["für", "dafür", "Ich bin dafür."],
        ["an", "daran", "Denkst du daran?"],
        ["von", "davon", "Ich habe davon gehört."]
      ]
    },
    ex: [
      "Ich freue mich darauf.",
      "Denkst du noch daran?",
      "Darüber müssen wir noch sprechen.",
      "Damit kann ich leider nicht helfen.",
      "Ich bin dafür, dass wir früher anfangen.",
      "Hast du schon davon gehört?"
    ],
    quiz: [
      {
        q: "«Bunu dört gözle bekliyorum» — darauf ile hangisidir?",
        opts: [
          "Ich freue mich dafür.",
          "Ich freue mich darauf.",
          "Ich freue mich darüber.",
          "Ich freue mich damit."
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Haller & Edatlar",
    title: "Worauf, Worüber, Womit...",
    tr: "Cansız nesneler hakkında edatlı soru sormak için «wo(r) + edat» yapısı kullanılır. «r» a/o/u edatlarından önce gelir. Kişiler için edat + soru kelimesi: «Mit wem?» Cevap olarak Pronominaladverbien kullanılır.",
    tips: [
      "Worauf? = Ne(yi) bekliyorsun? (auf)",
      "Worüber? = Ne hakkında? (über)",
      "Womit? = Ne ile? (mit)",
      "Wofür? = Ne için? (für)",
      "Kişi: Mit wem? Auf wen? Über wen?"
    ],
    ex: [
      "Worauf wartest du?",
      "Womit fährst du zur Arbeit?",
      "Worüber habt ihr gesprochen?",
      "Wofür brauchst du das Geld?",
      "Woran denkst du?",
      "Mit wem gehst du ins Kino?"
    ],
    quiz: [
      {
        q: "«Ne ile işe gidiyorsun?» sorusu hangisidir?",
        opts: [
          "Wo fährst du zur Arbeit?",
          "Womit fährst du zur Arbeit?",
          "Worauf fährst du zur Arbeit?",
          "Wofür fährst du zur Arbeit?"
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Haller & Edatlar",
    title: "Was ist mit ___?",
    tr: "«Was ist mit + Dativ?» kalıbı «... ne olacak?», «...den ne haber?», «...e ne dersin?» gibi anlamlar taşır. Bir konuyu, kişiyi veya planı gündeme getirmek için kullanılır. Günlük konuşmada çok yaygındır.",
    tips: [
      "Was ist mit + Dativ: Was ist mit dem Termin?",
      "Öneri/tavsiye: Was ist mit einem Kaffee?",
      "Endişe/soru: Was ist mit dir? Alles in Ordnung?",
      "Plan: Was ist mit morgen? = Yarın ne olacak?",
      "mit + Dativ unutma!"
    ],
    ex: [
      "Was ist mit dem Termin am Freitag?",
      "Und was ist mit dir?",
      "Was ist mit dem Essen? Ist es fertig?",
      "Was ist mit einem Spaziergang?",
      "Was ist mit deiner Bewerbung?",
      "Was ist mit dem Bus? Kommt er noch?"
    ],
    quiz: [
      {
        q: "«Cuma günkü randevuya ne olacak?» ifadesi hangisidir?",
        opts: [
          "Was ist der Termin am Freitag?",
          "Was ist mit dem Termin am Freitag?",
          "Was ist auf dem Termin am Freitag?",
          "Was ist für dem Termin am Freitag?"
        ],
        correct: 1
      }
    ]
  },
  {
    cat: "Haller & Edatlar",
    title: "Herkunft (köken ifadeleri)",
    tr: "Nereli olduğunu ve nereden geldiğini ifade etmek için «kommen aus» ve «stammen aus» kullanılır. «aus + Dativ» ülke/şehir belirtir. Milliyet için «-er» sıfatı veya «deutsch/türkisch» kullanılır. B1 sınavlarında tanışma ve biyografi metinlerinde sık çıkar.",
    tips: [
      "kommen aus + Dativ: Ich komme aus der Türkei.",
      "stammen aus = kökeni ... olmak (daha resmi)",
      "Milliyet: Ich bin Türke/Türkin. / Ich bin türkisch.",
      "Şehir: aus Istanbul, aus Berlin, aus der Türkei",
      "Woher kommst du? = Nerelisin?"
    ],
    ex: [
      "Ich komme aus der Türkei.",
      "Meine Familie stammt aus Izmir.",
      "Er kommt aus der Türkei, aber er wohnt in Berlin.",
      "Woher kommst du? — Aus Ankara.",
      "Sie ist Deutscherin und er ist Türke.",
      "Viele meiner Freunde kommen aus verschiedenen Ländern."
    ],
    quiz: [
      {
        q: "«Türkiye'den geliyorum» ifadesi hangisidir?",
        opts: [
          "Ich komme von der Türkei.",
          "Ich komme aus der Türkei.",
          "Ich komme in der Türkei.",
          "Ich komme bei der Türkei."
        ],
        correct: 1
      }
    ]
  }
];
