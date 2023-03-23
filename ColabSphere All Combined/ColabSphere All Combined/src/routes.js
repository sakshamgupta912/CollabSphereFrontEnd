import InRoom__SvelteComponent_ from "./routes/InRoomPage.svelte"
import Index__SvelteComponent_ from "./routes/homePage.svelte"
import Hi__SvelteComponent_ from "./routes/hi.svelte"

export const routes = {
    
    '/':   Index__SvelteComponent_,
    '/InRoom': InRoom__SvelteComponent_,
    '*': Hi__SvelteComponent_
    
}