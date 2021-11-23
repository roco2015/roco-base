<template>
  <h1><slot></slot></h1>
  {{msg}}
  <div class="content">
    <h3>roco搭建自用脚手架</h3>
    <dl>
      <dt>内容配置</dt>
      <dd>1. vue3 + typescript + vite2 + postcss</dd>
      <dd>2. eslint + stylelint</dd>

      <dt>vscode需要安装的插件</dt>
      <dd>1. eslint            publisher:"Dirk Baeumer"</dd>
      <dd>2. stylelint         publisher:"stylelint"</dd>
      <dd>3. postcss           自己酌情安装</dd>

      <dt>安装依赖</dt>
      <dd>yarn install</dd>
    </dl>
    <p>Email: roco2015@163.com</p>
    <p>Github: roco2015@163.com</p>
  </div>
  <button type="button" class="test-btn" @click="count++">count is: {{ count }}</button>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  padding: 2px 4px;
  border-radius: 4px;
  background-color: #eee;
  color: #304455;
}

.test-btn {
  display: block;
  margin: 0 auto;
  padding: 0 20px;
  border: 1px solid gray;
  border-radius: 4px;
  background: none;
  line-height: 40px;
  cursor: pointer;

  &:hover {
    background: rgb(0 0 0 / 10%);
  }

  &:active {
    background: rgb(0 0 0 / 20%);
  }
}
</style>
