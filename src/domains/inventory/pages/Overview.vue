<script setup>
import { RouterLink } from 'vue-router';
import { getAllProducts } from '../store';

const products = getAllProducts;
</script>

<template>
    <table>
        <thead>
            <tr>
                <th></th>
                <th><RouterLink to="/add" style="padding-right: 30px;">Product toevoegen</RouterLink></th>
                <th><RouterLink to="/order">Te bestellen producten</RouterLink></th>
                <th></th>
            </tr>
            <tr>
                <th></th>
                <th>Product</th>
                <th>Aantal aanwezig</th>
                <th>Vereiste aantal</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id">
                <td><RouterLink :to="{ name: 'inventory.edit', params: { id: product.id } }">Bewerken</RouterLink></td>
                <td>{{ product.name }}</td>
                <td><input v-model="product.actualAmount" type="number" min="0" step="1" /></td>
                <td>{{ product.minimumAmount }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style>
td, th {
    text-align: left;
    padding: 5px 20px;
}
</style>