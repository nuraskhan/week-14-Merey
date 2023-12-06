import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import GameBoard from "./components/GameBoard.vue";
const app = createApp(App)
app.component("GameBoard", GameBoard)
app.mount('#app')

