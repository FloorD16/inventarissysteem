<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const prop = defineProps({product: Object, nameButtonForSubmit: String});

const productCopy = ref({ ...prop.product });

const emit = defineEmits(['newProduct']);

const submit = () => {
    emit('newProduct', productCopy.value);
    router.push({ name: 'inventory.overview' });
}

const backToOverview = () => {
    router.push({ name: 'inventory.overview' });
}
</script>

<template>
    <div>
        <h4>Productnaam: <input v-model="productCopy.name" type="text"/></h4>
        <h4>Aantal in voorraad: <input v-model="productCopy.actualAmount" type="number"/></h4>
        <h4>Minimale aantal in voorraad: <input v-model="productCopy.minimumAmount" type="number"/></h4>
    </div>
    <br>
    <div>
        <button @click="submit">{{ prop.nameButtonForSubmit }}</button>
        <button @click="backToOverview">Annuleren</button>
    </div>
</template>

<style>
  h4 {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 430px; /* or set a consistent width */
  }

  input {
    margin-left: 10px;
  }
</style>
