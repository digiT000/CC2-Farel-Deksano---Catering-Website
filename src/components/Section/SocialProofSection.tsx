import SocialProofItem from "../SocialProofItem";

function SocialProofSection() {
  return (
    <section className="px-4 bg-green-800 mb-[80px] lg:mb-[120px]">
      <div className="max-w-screen-xl mx-auto">
        <div className="py-10 md:py-12 grid grid-cols-1 gap-8 md:grid-cols-3 ">
          <SocialProofItem
            image="/Pekerja.svg"
            title="5000+ Pekerja"
            description="Mempercayai Kami memenuhi asupan harian Mereka"
          />
          <SocialProofItem
            image="/bowl-fill-white.svg"
            title="10.000+ Masakan sudah dibuat"
            description="Para koki Kami siap tempur buat makanan yang sehat untuk pejuang rupiah"
          />
          <SocialProofItem
            image="/Restoran.svg"
            title="Tersedia di 15 Lokasi"
            description="Menjangkau lebih banyak pekerja agar lebih sehat sentosa"
          />
        </div>
      </div>
    </section>
  );
}

export default SocialProofSection;
