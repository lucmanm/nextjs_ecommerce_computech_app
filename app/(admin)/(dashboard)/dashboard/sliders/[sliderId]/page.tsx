import { SliderForm } from "./components/slider-form";
import { prisma } from "@/lib/db";
interface SliderProps {
  params: {
    sliderId: string;
  };
}
const CreateSliderPage: React.FC<SliderProps> = async ({ params }) => {

  
  
  const sliders = await prisma.slider.findFirst({
    where: {
      id: params.sliderId,
    },
  });

  return (
    <div>
      <SliderForm initialData={sliders} />
    </div>
  );
};

export default CreateSliderPage;
