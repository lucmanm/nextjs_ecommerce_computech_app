"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const searchSchema = z.object({
  search: z.string().min(1),
});

type TSearch = z.infer<typeof searchSchema>;

const SearchInput = () => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
    reset,
  } = useForm<TSearch>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      search: "",
    },
  });

  const onSubmit = async (values: TSearch) => {
    router.push(`/search?q=${values.search}`);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Search
      </label>
      <div className="relative flex-1">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"/>
        <input
          {...register("search")}
          disabled={isSubmitting}
          type="search"
          className="block w-full rounded-full border-gray-500 bg-slate-100 py-2 pl-10 text-gray-950 focus:border-blue-950"
          placeholder="Search Model, Product, etc..."
        />
        <button
          type="submit"
          className="absolute right-1 top-1 rounded-full bg-blue-950 px-4 py-1 text-center font-medium text-white hover:bg-gray-200 hover:font-medium hover:text-blue-950 focus:font-medium focus:text-blue-950 focus:outline-none focus:ring-2 "
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
