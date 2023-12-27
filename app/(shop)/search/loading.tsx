import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex w-full flex-col gap-3 overflow-hidden rounded-lg border border-gray-200 bg-white p-2  shadow-sm lg:p-3">
      <Skeleton className="h-60 w-60" />

      <div>
        <span className="inline-block self-start pb-1 pr-1 text-sm font-bold">
          <Skeleton className="h-3 w-32" />
        </span>
        <h3 className="line-clamp-2 h-12 text-sm lg:text-base">
          <Skeleton className="h-3 w-32" />
        </h3>
      </div>
      <div className="flex">
        <div className="flex">
          <span className="inline-block self-start pb-1 pr-1 text-sm font-medium lg:p-0.5 lg:text-sm">
            <Skeleton className="h-3 w-32" />
          </span>
          <h2 className="leading-0 self-end  p-0 text-xl font-bold text-blue-950">
            <Skeleton className="h-3 w-32" />
          </h2>
        </div>

        <p className="inline-block self-end pb-1 pl-1 text-sm font-medium text-red-500 line-through lg:p-0.5 lg:text-lg">
          <Skeleton className="h-3 w-32" />
        </p>
      </div>
      <div className="">
        <div className="mx-auto flex justify-evenly">
          <Skeleton className="h-3 w-32" />
        </div>
      </div>
    </div>
  );
}
