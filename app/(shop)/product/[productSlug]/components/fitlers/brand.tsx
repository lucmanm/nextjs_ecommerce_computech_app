import { Checkbox } from "@/components/ui/checkbox";

const BrandFilter = () => {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms2"  checked/>
        <label
          htmlFor="terms2"
          className="font-medium"
        >
          Dell
        </label>
      </div>
    </div>
  );
};

export default BrandFilter;
