<template>
  <div class="hello-world">
    <hello-world msg="Hello Vue 3 + TypeScript + Vite">hello world</hello-world>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default defineComponent({
  name: 'HomeIndex',
  components: {
    HelloWorld,
  },
});
</script>

<style lang="postcss">
.hello-world {
  margin: 60px;
  text-align: center;
}
</style>