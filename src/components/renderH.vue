<template>
  <dynode />
</template>
<script setup>
import { h, useSlots } from "vue";
const slots = useSlots();
const props = defineProps({
  level: {
    type: Number,
    required: true,
  },
});

// 三个参数分别为：标签名，prop 或 attribute ，slots.default() // 子节点
const dynode = () => h(`h${props.level}`, {}, slots.default());
</script>
