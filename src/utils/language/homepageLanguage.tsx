import { TestimonialProps, SocialProofProps } from "@/utils/interface";

export interface LanguageDataHomepage {
  [key: string]: {
    HeroSection: {
      title: () => JSX.Element;
      subtitle: string;
      buttonPrimary: string;
      buttonSecondary: string;
    };
    socialProofSection: SocialProofProps[];

    productListSection: {
      title: string;
      description: string;
    };

    listPackageSection: {
      title: string;
      description: string;
    };

    testimonialSection: {
      title: string;
      listTestimonial: TestimonialProps[];
    };
  };
}

export const languageData: LanguageDataHomepage = {
  id: {
    HeroSection: {
      title: () => {
        return (
          <>
            <span className="text-lime-400">4 sehat 5 sempurna</span> untuk
            pejuang rupiah
          </>
        );
      },
      subtitle:
        "Ratusan menu makanan yang bebas Kamu pilih untuk menemani makan Kamu setiap harinya",
      buttonPrimary: "Langganan Katering",
      buttonSecondary: "Lihat Paket Menu",
    },

    socialProofSection: [
      {
        image: "/Pekerja.svg",
        title: "5000+ Pekerja",
        description: "Mempercayai Kami memenuhi asupan harian Mereka",
      },
      {
        image: "/bowl-fill-white.svg",
        title: "10.000+ Masakan sudah dibuat",
        description:
          "Para koki Kami siap tempur buat makanan yang sehat untuk pejuang rupiah",
      },
      {
        image: "/Restoran.svg",
        title: "Tersedia di 15 Lokasi",
        description: "Menjangkau lebih banyak pekerja agar lebih sehat sentosa",
      },
    ],
    productListSection: {
      title: "Paket Menu Makanan Kami",
      description: "Harga mulai dari Rp 339.000 per bulan",
    },
    listPackageSection: {
      title: "Paket Menu Makanan Kami",
      description: "Harga mulai dari Rp 339.000 per bulan",
    },
    testimonialSection: {
      title: "Pejuang rupiah yang puas dengan katering Kami",
      listTestimonial: [
        {
          name: "Farel Darari Deksano",
          description:
            "Super duper puas ama kateringRupiah, mesen paket yang tinggi protein udah jalan 3 bulan. Gak pernah gagal dari rasa dan porsinya.",
          detailProfile: "Perjuang rupiah daerah Jakarta Selatan",
        },
        {
          name: "Ayu Kinasih",
          description:
            "Aku suka banget sama menu-menu vegetarian di kateringRupiah. Rasanya bener-bener bikin nagih dan bikin aku makin semangat menjalani pola hidup sehat.",
          detailProfile: "Ibu rumah tangga yang peduli kesehatan keluarga",
        },
        {
          name: "Budi Santoso",
          description:
            "Sebagai pekerja kantoran yang sibuk, kateringRupiah jadi penyelamat banget. Makanannya praktis, enak, dan harganya terjangkau.",
          detailProfile: "Karyawan swasta di kawasan CBD",
        },
        {
          name: "Sari Dewi",
          description:
            "Aku pernah nyoba beberapa katering, tapi kateringRupiah yang paling cocok sama lidahku. Bumbunya pas banget dan gak bikin eneg.",
          detailProfile: "Mahasiswi yang hobi kuliner",
        },
        {
          name: "Andi Wijaya",
          description:
            "KateringRupiah bener-bener ngebantu aku untuk mencapai target penurunan berat badan. Makanannya enak dan bikin kenyang.",
          detailProfile: "Pengusaha muda yang peduli kesehatan",
        },
        {
          name: "Alia Rahmawati",
          description:
            "Sebagai ibu bekerja, kateringRupiah jadi penyelamat banget. Makanannya bergizi, enak, dan gak bikin repot. Aku bisa fokus kerja tanpa khawatir soal makanan anak-anak.",
          detailProfile:
            "Ibu rumah tangga yang juga bekerja kantoran di Jakarta Timur",
        },
      ],
    },
  },

  // English Section
  en: {
    HeroSection: {
      title: () => {
        return <>Nourish yourself on a budget</>;
      },
      subtitle: "Choose from hundreds of delicious meals to fuel your day",
      buttonPrimary: "Subscribe Now",
      buttonSecondary: "View Meal Plans",
    },
    productListSection: {
      title: "Our Meal Plan Packages",
      description: "Starting from Rp 339.000 per month",
    },
    listPackageSection: {
      title: "Our Meal Plans",
      description: "Starting from Rp 339,000 per month",
    },
    testimonialSection: {
      title: "Our customers, the everyday hustlers, love our catering!",
      listTestimonial: [
        {
          name: "Farel Darari Deksano",
          description:
            "I'm super happy with kateringRupiah! I've been ordering their high-protein package for 3 months now and I've never been disappointed with the taste or portions.",
          detailProfile: "Hardworking individual from South Jakarta",
        },
        {
          name: "Ayu Kinasih",
          description:
            "I absolutely love the vegetarian options at kateringRupiah. The flavors are so addictive and motivate me to stay healthy.",
          detailProfile: "Homemaker who cares about family health",
        },
        {
          name: "Budi Santoso",
          description:
            "As a busy office worker, kateringRupiah has been a lifesaver. The food is convenient, delicious, and affordable.",
          detailProfile: "Private employee in the CBD area",
        },
        {
          name: "Sari Dewi",
          description:
            "I've tried several catering services, but kateringRupiah is the best fit for my taste. The seasonings are just right and it doesn't make me feel sick.",
          detailProfile: "Culinary-loving student",
        },
        {
          name: "Andi Wijaya",
          description:
            "kateringRupiah has really helped me reach my weight loss goals. The food is tasty and satisfying.",
          detailProfile: "Young entrepreneur who cares about health",
        },
        {
          name: "Alia Rahmawati",
          description:
            "As a working mom, kateringRupiah is a lifesaver. The food is nutritious, delicious, and hassle-free. I can focus on work without worrying about my kids' meals.",
          detailProfile:
            "Homemaker who also works in an office in East Jakarta",
        },
      ],
    },
    socialProofSection: [
      {
        image: "/Pekerja.svg",
        title: "Trusted by 5,000+ Workers",
        description: "They trust us to fuel their day.",
      },
      {
        image: "/bowl-fill-white.svg",
        title: "10,000+ Meals Prepared",
        description:
          "Our chefs are ready to cook up healthy meals for hardworking individuals.",
      },
      {
        image: "/Restoran.svg",
        title: "Available in 15+ Locations",
        description: "Reaching more workers to help them live healthier lives.",
      },
    ],
  },
};
