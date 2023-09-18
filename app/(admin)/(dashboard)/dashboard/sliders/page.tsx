import { prisma } from "@/lib/db";

import ClientSliderTable from "./components/client";
import { SliderColumnProps } from "./components/columns";
import { z } from "zod";

const SliderPage = async () => {
  const sliders = await prisma.slider.findMany();

  const sliderSchema = z.object({
    id: z.string(),
    label: z.string(),
    imageUrl: z.string(),
    createdAt: z.date().transform((date) => date.toLocaleDateString()),
  });

  const formattedSlider: SliderColumnProps[] = sliders.map((item) =>
    sliderSchema.parse(item)
  );

  return (
    <div>
      <ClientSliderTable data={formattedSlider} />
    </div>
  );
};

export default SliderPage;
