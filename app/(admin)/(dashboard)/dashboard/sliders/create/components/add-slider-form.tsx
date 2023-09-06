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
import { useRouter } from "next/navigation";

import { Loader } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  label: z
    .string()
    .min(1, "Please enter label")
});

export const SliderForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      label: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);

  
    const response = await fetch("/api/category", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        label: values.label,
      }),
    });

    if (response.ok) {
      setLoading(false);
      toast({
        description: "Slider Successfully Created",
        variant: "success",
      });
    } else {
      toast({
        description: "Slider label exist",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="my-2 w-1/2 space-y-2 rounded-md border-black bg-white p-4 capitalize "
      >
        <FormField
          control={form.control}
          name="label"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slider Label</FormLabel>
              <FormControl>
                <Input placeholder="Slider label" {...field} />
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
            "Save"
          )}
        </Button>
      </form>
    </Form>
  );
};
