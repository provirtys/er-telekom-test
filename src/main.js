import '@assets/style/index.scss';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { VueFire, VueFireAuth } from 'vuefire';
import { firebaseApp } from './firebase';
import { router } from './router';

const modules = import.meta.glob('./assets/icons/*.svg');
Object.values(modules).forEach(async (el) => await el());

const app = createApp(App);
const pinia = createPinia();

app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()]
});
app.use(router);
app.use(pinia);
app.mount('#app');
