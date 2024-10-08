export interface LanguageDataAboutUsProps {
  [key: string]: {
    HeroSection: {
      title: string;
      subtitle: string;
    };

    sinceSection: {
      title: string;
      subtitle: () => JSX.Element;
    };

    visionMisionSection: {
      title: string;
      subtitle: string;
    };

    locationSection: {
      title: () => JSX.Element;
      subtitle: string;
      mapButtonText: string;
      contactButtonText: string;
    };

    callToActionSection: {
      title: string;
      subtitle: string;
      callToActionText: string;
    };
  };
}

export const languageDataAboutUs: LanguageDataAboutUsProps = {
  id: {
    HeroSection: {
      title: "Menjadi katering yang dipercayakan oleh para pekerja",
      subtitle:
        "Kami percaya makanan sehat harus bisa diakses oleh siapa saja dengan mudah, terutama diluar sana orang yang berjuang dan berkja",
    },
    sinceSection: {
      title: "Berdiri sejak tahun 2004",
      subtitle: () => {
        return (
          <p className="text-gray-600 md:text-lg">
            Sudah melayani lebih dari{" "}
            <strong className="text-green-600">500.000+</strong> pelanggan dan{" "}
            <strong className="text-green-600">1.5 juta+</strong> masakan sudah
            telah keluar dari dapur Kami.
          </p>
        );
      },
    },
    visionMisionSection: {
      title: "Dibangun katering ini karena kami percaya...",
      subtitle:
        "Untuk mencapai tujuan sekecil apapun, kita membutuhkan dukungan yang optimal. Salah satunya adalah tubuh yang sehat yang didukung oleh asupan nutrisi yang cukup. Walaupun ada anggapan bahwa makanan sehat itu mahal, kami hadir untuk membuktikan bahwa semua orang berhak mendapatkan makanan bergizi dengan harga terjangkau.",
    },
    locationSection: {
      title: () => {
        return (
          <h2 className="text-2xl font-bold mb-4 text-gray-950 md:text-3xl">
            Tersebar di <span className="text-green-600">5 lokasi</span>
          </h2>
        );
      },
      subtitle:
        "Saat ini kami berfokus di wilayah Jakarta, Kami beruhasa untuk menjangkau lebih banyak tempat lagi",
      mapButtonText: "Lihat Map",
      contactButtonText: "Hubungi Kami",
    },
    callToActionSection: {
      title: "Yuk daftar langganan di katering Kami",
      subtitle:
        "Daftar sekarang dan dapatkan promo untuk pendaftaran pertama kali.",
      callToActionText: "Daftar Langganan",
    },
  },
  en: {
    HeroSection: {
      title: "The Catering Trusted by Workers",
      subtitle:
        "We believe healthy food should be accessible to everyone, especially those who work hard every day.",
    },
    sinceSection: {
      title: "Established Since 2004",
      subtitle: () => {
        return (
          <p className="text-gray-600 md:text-lg">
            We've served over{" "}
            <strong className="text-green-600">500,000+</strong> customers and
            cooked over
            <strong className="text-green-600">1.5 million+</strong> meals from
            our kitchen.
          </p>
        );
      },
    },
    visionMisionSection: {
      title: "Why We Started This Catering...",
      subtitle:
        "To achieve even the smallest goals, we need optimal support. One of them is a healthy body supported by adequate nutrition. Even though there is a perception that healthy food is expensive, we are here to prove that everyone deserves nutritious food at an affordable price.",
    },
    locationSection: {
      title: () => {
        return (
          <h2 className="text-2xl font-bold mb-4 text-gray-950 md:text-3xl">
            Spread across <span className="text-green-600">5 locations</span>
          </h2>
        );
      },
      subtitle:
        "We are currently focused on the Jakarta area, but we strive to reach more places.",
      mapButtonText: "See Map",
      contactButtonText: "Contact Us",
    },
    callToActionSection: {
      title: "Sign up for our catering subscription",
      subtitle:
        "Sign up now and get a special promo for your first subscription.",
      callToActionText: "Subscribe Now",
    },
  },
};
