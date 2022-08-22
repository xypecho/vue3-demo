<template>
  <div @click="add">
    组件中的 {{ count }}

    处理后的 {{ double }}
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
let store = useStore();
let count = computed(() => store.state.count);
let double = computed(() => store.getters.double);
function add() {
  store.commit("add");
}
// 异步更新vuex中的数据
function asyncAdd() {
  store.dispatch("asyncAdd");
}
</script>
