import 'vue/dist/vue';

declare module 'vue/dist/vue' {
  interface VueConstructor {
    new (c: any): any;
    extend(c: any): any;
    use(c: any): any;
    mixin: Function;
    component: Function;
  }

  const Vue: VueConstructor;
  export default Vue;
}

