<script setup>
import { ref } from 'vue';


const prop = defineProps({product: Object});

const productCopy = ref({ ...prop.product });

const emit = defineEmits(['newProduct']);

const submit = () => {
    emit('newProduct', productCopy.value);
}
</script>

<template>
    <div>
        <h4>Product: <input v-model="productCopy.item" type="text"/></h4>
        <h4>Prijs: <input v-model="productCopy.price" type="number"/></h4>
        <h4>Aantal: <input v-model="productCopy.amount" type="number"/></h4>

        <button @click="submit">Verzend</button>
    </div>
</template>