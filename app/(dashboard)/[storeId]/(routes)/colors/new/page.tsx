import prismadb from "@/lib/prismadb";
import SizeForm from "../components/color-form";

const BillboardPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeForm />
      </div>
    </div>
  );
};

export default BillboardPage;
