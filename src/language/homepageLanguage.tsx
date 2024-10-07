export const languageData: any = {
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

    socialProofSection: {
      proof_1: {
        title: "5000+ Pekerja",
        description: "Mempercayai Kami memenuhi asupan harian Mereka",
      },
      proof_2: {
        title: "10.000+ Masakan sudah dibuat",
        description:
          "Para koki Kami siap tempur buat makanan yang sehat untuk pejuang rupiah",
      },
      proof_3: {
        title: "Tersedia di 15 Lokasi",
        description: "Menjangkau lebih banyak pekerja agar lebih sehat sentosa",
      },
    },
    listPackageSection: {
      title: "Paket Menu Makanan Kami",
      description: "Harga mulai dari Rp 339.000 per bulan",
    },
  },
  en: {
    HeroSection: {
      title: () => {
        return <>Nourish yourself on a budget</>;
      },
      subtitle: "Choose from hundreds of delicious meals to fuel your day",
      buttonPrimary: "Subscribe Now",
      buttonSecondary: "View Meal Plans",
    },
  },
};
