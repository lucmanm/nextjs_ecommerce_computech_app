import Breadcrumb from "@/components/Breadcrumb";

export default function Products() {
  return (
    <main className="mx-4 my-8 grid grid-cols-12 gap-x-6 gap-y-6 dt:container  tb:mx-auto">
      <div className=" col-span-12">
        <Breadcrumb />
      </div>
      <div className="col-span-full bg-blue-950 dt:col-span-3">
        Product Image Preview
      </div>
      <div className="col-span-full bg-blue-950 dt:col-span-9">
        Short Description
      </div>
    </main>
  );
}
