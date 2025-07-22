<script setup>
import { useRouter } from 'vue-router';
import { getAllProducts } from '../store';

const router = useRouter();

const products = getAllProducts;

const productsToOrder = products.value.filter(product => product.actualAmount < product.minimumAmount);

const backToOverview = () => {
    router.push({ name: 'inventory.overview' });
}
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>Te bestellen producten</th>
                <th>Minimale aantal</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in productsToOrder" :key="product.id">
                <td>{{ product.name }}</td>
                <td>{{ product.minimumAmount - product.actualAmount }}</td>
            </tr>
        </tbody>
    </table>
    <br>
    <button @click="backToOverview">Terug naar overzicht</button>
</template>