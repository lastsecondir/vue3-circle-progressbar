import { createApp } from 'vue';
import App from './App.vue';
import CircleProgressbar from '../src/index';

const app = createApp(App);

app.use(CircleProgressbar);

app.mount('#app');
