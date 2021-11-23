import { createApp } from 'vue';
import App from './App.vue';
import ajax from '@/plugins/ajax';
import router from '@/router/index';

const app = createApp(App);

app.use(ajax);
app.use(router);

app.mount('#app');
