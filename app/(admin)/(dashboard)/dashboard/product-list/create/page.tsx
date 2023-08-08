import Container from "@/components/Container";
import Title from "@/components/Title";
import Button from "@/components/form/Button";
import InputField from "@/components/form/InputField";
import React from "react";

const CreateProduct = () => {
    return (
        <Container>
            <Title>Add Product</Title>
            <section className="my-6 rounded-md bg-white">
                <form className="px-8 py-8">
                    <InputField
                        type="text"
                        name="model"
                        placeholder="Model Number"
                        required
                    />
                    <InputField
                        type="text"
                        name="description"
                        placeholder="Description"
                        required
                    />
                    <InputField
                        type="number"
                        name="Price"
                        placeholder="Price"
                        required
                    />
                    <InputField
                        type="number"
                        name="sale_Price"
                        placeholder="Sale Price"
                        required
                    />
                    <InputField
                        type="number"
                        name="stock_Qantity"
                        placeholder="Stock Quantity"
                        required
                    />
                    <Button />
                </form>
            </section>
        </Container>
    );
};

export default CreateProduct;
