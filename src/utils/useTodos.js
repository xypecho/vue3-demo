// 所有功能代码都写在一起的话，也会带来一些问题：随着功能越来越复杂，script 内部的代码也会越来越多。因此，我们可以进一步对代码进行拆分，把功能独立的模块封装成一个独立的函数，真正做到按需拆分。
import { ref, computed } from "vue";
import { useStorage } from "./useStorage.js";

export function useTodos() {
  let title = ref("");
  // let todos = ref([{ title: "学习Vue", done: false }]);
  let todos = useStorage("todos", []);
  function addTodo() {
    todos.value.push({
      title: title.value,
      done: false,
    });
    title.value = "";
  }
  function clear() {
    todos.value = todos.value.filter((v) => !v.done);
  }
  let active = computed(() => {
    return todos.value.filter((v) => !v.done).length;
  });
  let all = computed(() => todos.value.length);
  let allDone = computed({
    get: function () {
      return active.value === 0;
    },
    set: function (value) {
      todos.value.forEach((todo) => {
        todo.done = value;
      });
    },
  });
  return { title, todos, addTodo, clear, active, all, allDone };
}
