// #ifndef VUE3
import { Vue } from './vue';
// #endif


export function setAdapter(target, key, value) {
  // #ifndef VUE3
  if (typeof Vue.set === 'function') {
    Vue.set(target, key, value);
  }
  // #endif

  // #ifdef VUE3
  target[key] = value;
  // #endif

  return target;
}
