export interface LanguageDataPackageProps {
  [key: string]: {
    HeroSection: {
      title: string;
      subtitle: string;
    };

    productListSection: {
      title: () => JSX.Element;
      subtitle: string;
    };

    callToActionSection: {
      title: string;
      subtitle: string;
      callToActionText: string;
    };
  };
}

export const languageDataPackage: LanguageDataPackageProps = {
  id: {
    HeroSection: {
      title: "Pilih dan langganan paket katering",
      subtitle:
        "Ratusan menu makanan yang bebas Kamu pilih untuk menemani makan Kamu setiap harinya",
    },
    productListSection: {
      title: () => {
        return (
          <>
            <h2 className="text-2xl text-gray-950 font-bold mb-2">
              Eksplor Paket makanan Kami, harga mulai dari{" "}
              <span className="text-green-600">Rp239.000</span>
            </h2>
          </>
        );
      },
      subtitle: "Cari yang paling sesuai dan kebuthan Kamu",
    },
    callToActionSection: {
      title: "Bingung harus pilih pake yang mana?",
      subtitle:
        "Langsung aja hubungi Kami untuk konsultasi, supaya asupan Kamu sepenuhnya terpenuhi",
      callToActionText: "Konsultasi Sekarang",
    },
  },
  en: {
    HeroSection: {
      title: "Choose and Subscribe to Our Catering Plans",
      subtitle:
        "Hundreds of meal options for you to choose from, to accompany your daily meals.",
    },
    productListSection: {
      title: () => {
        return (
          <>
            <h2 className="text-2xl text-gray-950 font-bold mb-2">
              Explore Our Meal Plans, starting from{" "}
              <span className="text-green-600">Rp239.000</span>
            </h2>
          </>
        );
      },
      subtitle: "Find the perfect plan to suit your needs.",
    },
    callToActionSection: {
      title: "Confused about which plan to choose?",
      subtitle:
        "Contact us directly for a consultation to ensure your nutritional needs are fully met.",
      callToActionText: "Consult Now",
    },
  },
};
