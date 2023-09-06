import Container from "@/app/(admin)/components/Container";
import { SliderForm } from "./components/add-slider-form";
import { prisma } from "@/lib/db";

const CreateSliderPage = async () => {

const sliders = await prisma.slider.findMany()

  return (
    <Container title="Create Slider" description="Add new slider">
      <SliderForm initialData={sliders} />
    </Container>
  );
};

export default CreateSliderPage;
