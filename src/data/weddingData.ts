export interface BrideGroomInfo {
  name: string;
  fullName: string;
  fatherName: string;
  motherName: string;
  isDeceasedFather?: boolean;
  isDeceasedMother?: boolean;
  photoUrl: string;
  instagram?: string;
  gender: "male" | "female";
}

export interface EventDetail {
  title: string;
  dateStr: string; // e.g., "Senin, 22 Juni 2026"
  timeStr: string; // e.g., "12:00 WIB - Selesai"
  locationName: string;
  address: string;
  mapLink: string;
}

export interface BankAccount {
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  qrCodeUrl?: string;
}

export interface SystemWish {
  id: string;
  name: string;
  status: "Hadir" | "Tidak Hadir" | "Tentatif";
  message: string;
  createdAt: string;
}

export const weddingInfo = {
  brideName: "Afni",
  groomName: "Zidny",
  weddingDate: "2026-06-22T10:00:00+07:00", // ISO wedding date for countdown
  
  bride: {
    name: "Afni",
    fullName: "Sri Nur'Afni",
    fatherName: "Bpk. Itang",
    motherName: "Ibu Euis",
    gender: "female" as const,
    photoUrl: "/images/pengantin-wanita.jpg" // Local image for better performance
  },
  
  groom: {
    name: "Zidny",
    fullName: "Zidny Fahma Ilmy Gorby",
    fatherName: "Bpk. Slamet Saadi",
    motherName: "Ibu Wiwi Handayani",
    isDeceasedFather: true,
    isDeceasedMother: true,
    gender: "male" as const,
    photoUrl: "/images/pengantin-pria.jpg" // Local image for better performance
  },

  ayat: {
    arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ",
    translation: "Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri supaya kamu dapat ketenangan hati dan dijadikannya kasih sayang di antara kamu. Sesungguhnya yang demikian menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang berpikir.",
    reference: "Q.S. Ar-Rum: 21"
  },

  events: {
    akad: {
      title: "Akad Nikah",
      dateStr: "Senin, 22 Juni 2026",
      timeStr: "12:00 WIB - Selesai",
      locationName: "Kediaman Mempelai Wanita",
      address: "Kp. Kondang RT 002/RW 019, Desa Leuwigoong, Kecamatan Leuwigoong, Garut, Jawa Barat",
      mapLink: "https://maps.app.goo.gl/nFRzaFrg7mLnb6nL9"
    },
    resepsi: {
      title: "Resepsi Nikah",
      dateStr: "Senin, 22 Juni 2026",
      timeStr: "12:00 WIB - Selesai",
      locationName: "Kediaman Mempelai Wanita",
      address: "Kp. Kondang RT 002/RW 019, Desa Leuwigoong, Kecamatan Leuwigoong, Garut, Jawa Barat",
      mapLink: "https://maps.app.goo.gl/nFRzaFrg7mLnb6nL9"
    }
  },

  venue: {
    name: "Kediaman Mempelai Wanita",
    address: "Kp. Kondang RT 002/RW 019, Desa Leuwigoong, Kecamatan Leuwigoong, Garut",
    mapLink: "https://maps.app.goo.gl/nFRzaFrg7mLnb6nL9"
  },

  adab: [
    {
      title: "Semata mata niat karena Allah",
      description: "Dalam menghadiri undangan walimah dengan niat tulus beribadah dan menyambung silaturahmi."
    },
    {
      title: "Mendo'akan keberkahan",
      description: "Mendo'akan keberkahan untuk kedua pengantin & keluarga besar mereka."
    },
    {
      title: "Berpakaian dengan Rapih & Sopan",
      description: "Menjaga sopan santun dalam berpakaian yang menutup aurat dan menghormati majelis."
    },
    {
      title: "Memperhatikan Adab Makan & Minum",
      description: "Makan dan minum sambil duduk, menggunakan tangan kanan, serta tidak berlebihan."
    }
  ],

  doaPengantin: {
    arabic: "بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِيْ خَيْرٍ",
    transliteration: "Barakallahu laka wa baraka 'alaika wa jama'a bainakuma fii khoir",
    translation: "Mudah-mudahan Allah memberkahimu dalam segala hal (yang baik) dan mempersatukan kamu berdua dalam kebaikan"
  },

  digitalGift: {
    accounts: [
      {
        bankName: "Bank Rakyat Indonesia (BRI)",
        accountNumber: "002501181373506",
        accountHolder: "Zidny Fahma Ilmy Gorby"
      },
      {
        bankName: "Bank Rakyat Indonesia (BRI)",
        accountNumber: "002501130482506",
        accountHolder: "Sri Nur'Afni"
      }
    ],
    qrisUrl: "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=081914106395"
  },

  turutMengundang: [
    "Keluarga Besar Bapak Ili (Alm)",
    "Keluarga Besar Bapak Aman",
    "Keluarga Besar Bapak Rohman (Alm)",
    "Keluarga Besar Bapak Saadi (Alm)"
  ],

  defaultWishes: [
    {
      id: "1",
      name: "Ustadz Hilman Fawzi",
      status: "Hadir",
      message: "Barakallahu lakum wa baraka alaikum. Semoga pernikahan Kang Zidny dan Teh Afni dilimpahi berkah sakinah mawaddah warahmah, menjadi wasilah ketakwaan kepada Allah SWT. Aamiin.",
      createdAt: "2026-06-01T08:00:00Z"
    },
    {
      id: "2",
      name: "Soleh & Keluarga",
      status: "Hadir",
      message: "Selamat menempuh hidup baru Akhi Zidny dan Afni! Semoga senantiasa bersama dalam suka dan duka, mengarungi samudera pernikahan mendulang rida Allah.",
      createdAt: "2026-06-01T10:30:00Z"
    },
    {
      id: "3",
      name: "Rina Kartika",
      status: "Hadir",
      message: "Teh Afni cantik sekali pasti pas akad! Bahagia selalu bersama suaminya yaa Teh, maaf belum bisa hadir langsung tapi doa terbaik selalu mengiringi dari jauh.",
      createdAt: "2026-06-02T02:15:00Z"
    }
  ] as SystemWish[]
};
