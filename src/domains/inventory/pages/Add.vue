<script setup>
import ProductForm from '../components/ProductForm.vue';
import { addProduct, getAllProducts } from '../store';

const product = { name: '', actualAmount: 0, minimumAmount: 0 };


const addNewProduct = (product) => {
    const newID = getAllProducts.value.length === 0 ? 1 : Math.max(...getAllProducts.value.map(product => product.id)) + 1;
    addProduct({ id: newID, ...product });
}
</script>

<template>
    <ProductForm :product="product" nameButtonForSubmit="Toevoegen" @newProduct="addNewProduct" />    
</template>