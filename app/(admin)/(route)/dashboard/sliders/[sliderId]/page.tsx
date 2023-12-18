import { prisma } from "@/lib/db";
import { SliderForm } from "./_components/slider-form";

import { notFound } from "next/navigation";

interface SliderProps {
  params: {
    sliderId: string;
  };
}
const CreateSliderPage: React.FC<SliderProps> = async ({ params }) => {

  
  if (params.sliderId === "create") {
    return <SliderForm initialData={null} />;
  }
  
  const sliders = await prisma.slider.findFirst({
    where: {
      id: params.sliderId,
    },
  });

  if (!sliders) {
    notFound();
  }
  
  
  return <SliderForm initialData={sliders} />;
};

export default CreateSliderPage;
