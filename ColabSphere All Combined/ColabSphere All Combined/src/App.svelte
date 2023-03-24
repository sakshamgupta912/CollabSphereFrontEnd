<script>
	import Router,{location}from 'svelte-spa-router';
	import InRoomPage from './routes/InRoomPage.svelte';
	import HomePage from './routes/homePage.svelte';
	import Hi from './routes/hi.svelte';
    import InRoom from './inroom/InRoom.svelte';
	
</script>

<Router routes={{
	'/':HomePage,
	'/InRoomPage': InRoom
}}/>

<hr> {location} 



