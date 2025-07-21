import { computed, ref } from "vue";

const products = ref([
    { id: 1, name: 'Kippenhok', actualAmount: 5, minimumAmount: 2 },
    { id: 2, name: 'Waterbak', actualAmount: 15, minimumAmount: 5 },
    { id: 3, name: 'Voerbak', actualAmount: 15, minimumAmount: 5 },
    { id: 4, name: 'Kippenkorrel', actualAmount: 30, minimumAmount: 10 },
    { id: 5, name: 'Graan', actualAmount: 30, minimumAmount: 10 },
    { id: 6, name: 'Meelwormen', actualAmount: 20, minimumAmount: 5 },
    { id: 7, name: 'Hennepstrooisel', actualAmount: 20, minimumAmount: 5 }
 ]);

 export const getAllProducts = computed(() => products.value);

 export const addProduct = (product) => products.value.push(product);