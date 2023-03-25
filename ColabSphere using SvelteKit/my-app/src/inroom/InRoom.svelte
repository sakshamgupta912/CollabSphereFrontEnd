<script>
	import Annoucement from "./Tabs/Annoucement.svelte";
	import Assignment from "./Tabs/Assignment.svelte";
	import Members from "./Tabs/Members.svelte";
	
	let activeTab=Annoucement;
</script>

<body>
	
	
	<div class="InRoomNav" id="InRoomNav" >
		<div id="Tabs">
			<button on:click={() => (activeTab=Annoucement)} class= InRoomNavButton>Annoucement</button>
			<button on:click={() => (activeTab=Assignment)} class= InRoomNavButton>Assignment</button>
			<button on:click={() => (activeTab=Members)} class= InRoomNavButton>Members</button>
		</div>
	</div>
	
	<div>
		<svelte:component this={activeTab}/>
	</div>
	
  </body>

  <style>
	.InRoomNav{
		width: 100%;
		
		height: 43px;
		left: 0px;
		background: #D9D9D9;
	}
	
	#Tabs
	{
		

		text-align: center;
		
	}
	#Tabs button
	{	
		font-size: larger;
		align-items: center;
		height:41px;
		width: auto;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
	
  </style>
  