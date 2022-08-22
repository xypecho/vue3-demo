<template>
  <div class="box" :style="{ width: width + 'px' }"></div>
  <button @click="change">click</button>
  <hr />

  <button @click="toggle">click</button>
  <transition name="fade">
    <h1 v-if="showTitle">你好 Vue 3</h1>
  </transition>
  <Count />
  vuex中的值：
  {{ count }}
  <hr />
  <anchored :level="1">阿萨德克拉克森</anchored>
  <anchored :level="2">阿萨德克拉克森</anchored>
  <anchored :level="3">阿萨德克拉克森</anchored>
  <div>1111111111</div>
  <renderH :level="1">啊啊啊</renderH>
</template>

<script setup>
import { ref, computed } from "vue";
import Count from "../components/Count.vue";
import anchored from "../components/anchored.vue";
import renderH from "../components/renderH.vue";

import { useStore } from "vuex";
let store = useStore();
let count = computed(() => store.state.count);

let width = ref(100);
function change() {
  width.value += 100;
}

let showTitle = ref(true);
function toggle() {
  showTitle.value = !showTitle.value;
}
</script>

<style>
.box {
  background: red;
  height: 100px;
  transition: width 1s linear;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
