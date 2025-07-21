<script setup>
import { getAllProducts } from '../store';

const products = getAllProducts;
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>Product</th>
                <th>Aantal aanwezig</th>
                <th>Vereiste aantal</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id">
                <td>{{ product.name }}</td>
                <td>{{ product.actualAmount }}</td>
                <td></td>
            </tr>
        </tbody>
    </table>
</template>