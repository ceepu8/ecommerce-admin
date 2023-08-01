import prismadb from "@/lib/prismadb";
import ProductForm from "../components/product-form";

const BillboardPage = async ({
  params,
}: {
  params: { storeId: string; productId: string };
}) => {
  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm categories={categories} sizes={sizes} colors={colors} />
      </div>
    </div>
  );
};

export default BillboardPage;
