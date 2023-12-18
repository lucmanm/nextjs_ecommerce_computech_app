"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useParams, useRouter } from "next/navigation";

import { Loader } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import ImageUpload from "@/components/ui/image-upload";
import Container from "@/app/(admin)/(route)/dashboard/_components/Container";
import { sliderSchema } from "@/types/validation";
import { TSlider } from "@/types/type";


interface SliderFormProps {
  initialData: TSlider | null;
}

export const SliderForm: React.FC<SliderFormProps> = ({ initialData }) => {
  const params = useParams();
  const router = useRouter();

  const { toast } = useToast();

  const [loading, setLoading] = useState(false);

  const title = initialData ? "Edit TSlider" : "Create Slider";
  const description = initialData ? "Edit a Slider" : "Create a new Slider";
  const toastMessage = initialData
    ? "Slider updated successfully?"
    : "Created successfully Slider";
  const action = initialData ? "Save Changes" : "Create";

  const form = useForm<TSlider>({
    resolver: zodResolver(sliderSchema),
    defaultValues: initialData || {
      label: "",
      imageUrl: "",
    },
  });

  const onSubmit = async (values: TSlider) => {
    try {
      setLoading(true);
      if (initialData) {
        const response = await fetch(`/api/sliders/${params.sliderId}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            label: values.label,
            imageUrl: values.imageUrl,
          }),
        });
        if (response.ok) {
          toast({
            description: toastMessage,
            variant: "success",
          });
          router.refresh();
          router.push("/dashboard/sliders");
        }
      } else {
        const response = await fetch(`/api/sliders`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            label: values.label,
            imageUrl: values.imageUrl,
          }),
        });
        if (response.ok) {
          toast({
            description: toastMessage,
            variant: "success",
          });
          router.refresh();
          router.push("/dashboard/sliders");
        }
      }
    } catch (error) {
      toast({
        description: `[ERROR_SLIDER], Something Went Wong: ${error}`,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container title={title} description={description}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="my-2 w-1/2 space-y-2 rounded-md border-black bg-white p-4 capitalize "
          >
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slider Image</FormLabel>
                  <FormControl>
                    <ImageUpload
                      value={field.value ? [field.value] : []}
                      disabled={loading}
                      onChange={(url) => field.onChange(url)}
                      onRemove={() => field.onChange("")}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="label"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slider Label</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Slider label"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              size={"sm"}
              variant="default"
              className="w-full"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Please Wait....
                </>
              ) : (
                action
              )}
            </Button>
          </form>
        </Form>
      </Container>
    </>
  );
};
