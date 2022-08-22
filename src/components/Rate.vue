<template>
  <span @click="onRate(num)" v-for="num in 5" :key="num">☆</span>
</template>

<script setup>

let emits = defineEmits(["update:modelValue"]);
function onRate(num) {
  emits("update:modelValue", num);
}
</script>
