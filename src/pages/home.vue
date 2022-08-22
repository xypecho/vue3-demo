<template>
  <h1>首页</h1>
  <TodoList />
  <h1 @click="toggle">click{{ isFullscreen }}</h1>
  <h1>你的评分是 {{ score }}</h1>
  <Rate v-model="score"></Rate>
    <Heading :level="1">hello geekbang</Heading>
    <Heading :level="2">hello geekbang</Heading>
    <Heading :level="3">hello geekbang</Heading>
</template>

<script setup>
import { ref } from "vue";
import TodoList from "../components/TodoList.vue";
import Rate from "../components/Rate.vue";
import { useFullscreen } from "@vueuse/core";
import Heading from "../components/Heading.jsx";
const { isFullscreen, enter, exit, toggle } = useFullscreen();

let score = ref(3);
</script>
