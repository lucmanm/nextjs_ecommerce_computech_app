import Container from "@/components/Container";
import Title from "@/components/Title";
import AddProductForm from "@/components/block/AddProductForm";

import React from "react";

const CreateProduct = () => {
    return (
        <Container>
            <Title>Add Product</Title>
            <AddProductForm/>
        </Container>
    );
};

export default CreateProduct;
