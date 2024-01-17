"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const searchSchema = z.object({
  search: z.string().min(1),
});

type TSearch = z.infer<typeof searchSchema>;

type SearchInputProps ={
  className?: string
}
const SearchInput: React.FC<SearchInputProps> = ({className}) => {

  const router = useRouter();

  const {
    handleSubmit,
    register,
  } = useForm<TSearch>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      search: "",
    },
  });
  
  const onSubmit = async (values: TSearch) => {
    router.push(`/search?q=${values.search}`);
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("",className)}>
      <div className="relative flex-1">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3" />
        <Input
          {...register("search")}
          type="search"
          className="block w-full rounded-full border-gray-500 bg-slate-100 py-2 pl-5 text-gray-950 focus:border-blue-950"
          placeholder="Search Model, Product, etc..."
        />
        
        <Button 
        type="submit" 
        variant="ghost"
        className="rounded-full absolute top-0 right-0 py-0 px-4 hover:bg-blue-950 hover:text-white">
          <Search size={18}/>
        </Button>
        {/* <button
          type="submit"
          className="absolute right-1 top-1 rounded-full bg-blue-950 px-4 py-1 text-center font-medium text-white hover:bg-gray-200 hover:font-medium hover:text-blue-950 focus:font-medium focus:text-blue-950 focus:outline-none focus:ring-2 "
        >
          Search
        </button> */}
      </div>
    </form>
  );
};

export default SearchInput;
