import { cn } from "@/lib/utils";

const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={cn(
        "relative w-40 min-w-fit rounded-full bg-white px-5 py-1  font-bold text-blue-950 shadow-md  lg:py-2 lg:text-lg",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Title;
