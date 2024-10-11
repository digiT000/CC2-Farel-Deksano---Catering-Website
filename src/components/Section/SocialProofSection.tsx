import { SocialProofProps } from "@/utils/interface";
import SocialProofItem from "../SocialProofItem";

interface SocialProofSectionProps {
  socialProofList: SocialProofProps[]; // list of social proof item props
}

function SocialProofSection({ socialProofList }: SocialProofSectionProps) {
  return (
    <section className="px-4 bg-green-800 mb-[80px] lg:mb-[120px]">
      <div className="max-w-screen-xl mx-auto">
        <div className="py-10 md:py-12 grid grid-cols-1 gap-8 md:grid-cols-3 ">
          {socialProofList.map((item: SocialProofProps, key: number) => {
            return (
              <SocialProofItem
                key={key}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SocialProofSection;
