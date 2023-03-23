
import App from './App.svelte'
import { Router, Link, Route } from "svelte-routing";
import InRoom from './inroom/InRoom.svelte';
const app = new App({
  target: document.getElementById('app'),
})

export default app
