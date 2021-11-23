<template>
  <hello-world msg="Hello Vue 3 + TypeScript + Vite">hello world</hello-world>
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
