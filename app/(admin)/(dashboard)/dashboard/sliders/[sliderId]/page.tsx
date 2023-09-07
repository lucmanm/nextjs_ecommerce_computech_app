import Container from "@/app/(admin)/components/Container";
import { SliderForm } from "./components/add-slider-form";
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
    <Container title="Create Slider" description="Add new slider">
      <SliderForm initialData={sliders} />
    </Container>
  );
};

export default CreateSliderPage;
