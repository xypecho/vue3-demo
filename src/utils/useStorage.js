// 数据变化之后会把数据同步到 localStorage 之上，这样我们就实现了 todolist 和本地存储的同步。
import { watchEffect, ref } from "vue";

export function useStorage(name, value = []) {
  //   const _localStorage = localStorage.getItem(name);
  //   let data = ref(
  //     _localStorage ? JSON.parse(localStorage.getItem(name)) : value
  //   );
  let data = ref(JSON.parse(localStorage.getItem(name)) || value);

  watchEffect(() => {
    localStorage.setItem(name, JSON.stringify(data.value));
  });
  return data;
}
