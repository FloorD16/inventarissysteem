<script setup>
import { useRoute } from 'vue-router';
import { getProductByID, updateProduct } from '../store';
import ProductForm from '../components/ProductForm.vue';

const id = Number(useRoute().params.id);
const selectedProduct = getProductByID(id);

const update = (product) => updateProduct(product);

</script>

<template>
    <ProductForm :product="selectedProduct" nameButtonForSubmit='Aanpassen' @newProduct="update" />
</template>