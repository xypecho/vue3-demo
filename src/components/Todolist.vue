<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button v-if="active < all" @click="clear">清理</button>
    <div v-if="todos.length">
      <!-- <transition-group name="flip-list" tag="ul">
        <li v-for="todo in todos" :key="todo.title">
          <input type="checkbox" v-model="todo.done" />
          <span :class="{ done: todo.done }"> {{ todo.title }}</span>
        </li>
      </transition-group> -->
      <transition-group name="flip-list" tag="ul">
        <li v-for="(todo, i) in todos" :key="i">
          <input type="checkbox" v-model="todo.done" />
          <span :class="{ done: todo.done }">{{ todo.title }}</span>
        </li>
      </transition-group>
    </div>
    <div v-else>暂无数据</div>
    <div>
      全选<input type="checkbox" v-model="allDone" />
      <span> {{ active }} / {{ all }} </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useTodos } from "../utils/useTodos";

let { title, todos, addTodo, clear, active, all, allDone } = useTodos();
</script>
<style>
.flip-list-enter-active,
.flip-list-leave-active {
  transition: all 0.5s ease;
  color: red;
}
.flip-list-enter-from,
.flip-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
  color: yellowgreen;
}
</style>
