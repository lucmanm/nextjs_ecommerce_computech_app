import { prisma } from "@/lib/db";

import ClientSliderTable from "./components/client";
import { z } from "zod";
import { sliderSchema } from "@/types/validation";
import { TSlider } from "@/types/type";

const SliderPage = async () => {

  const sliders = await prisma.slider.findMany();


  const formattedSlider: TSlider[] = sliders.map((item) =>
    sliderSchema.parse(item)
  );

  return (
    <div>
      <ClientSliderTable data={formattedSlider} />
    </div>
  );
};

export default SliderPage;