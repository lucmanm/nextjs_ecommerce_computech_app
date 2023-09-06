import Container from "@/app/(admin)/components/Container";
import { AddCategoryForm } from "./components/add-category-form";

const CreateCategoryPage = () => {
  return (
    <Container title="Product Category">
      <AddCategoryForm />
    </Container>
  );
};

export default CreateCategoryPage;
