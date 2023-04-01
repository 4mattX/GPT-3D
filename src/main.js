import { createApp } from 'vue'
import App from './App.vue'
import draggable from 'vuedraggable'
import {TroisJSVuePlugin} from "troisjs";

createApp(App).use(draggable)
createApp(App).use(TroisJSVuePlugin).mount('#app')

