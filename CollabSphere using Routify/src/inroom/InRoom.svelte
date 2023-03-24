<script>
	import Annoucement from "./Tabs/Annoucement.svelte";
	import Assignment from "./Tabs/Assignment.svelte";
	import Members from "./Tabs/Members.svelte";
	import "./Header.css";
	import "./Hamburger.css";
	let activeTab=Annoucement;
	
</script>

<body>
	<header>
	  <div class="header">
	  
		<img src="CompanyLogo.png" alt='Comapany Logo' class="logo"/>
		  <div class="header-right">
		  <a class="active" href="#home">Home</a>
		  <a href="#contact">Contact</a>
		  <a href="#about">About</a>
		</div>
	  </div>
	  
	  <!-- Hamburger -->
	  <div class="button_container" id="toggle"><span class="top"></span><span class="middle"></span><span class="bottom"></span></div>
	  <div class="overlay" id="overlay">
		<nav class="overlay-menu">
		  <ul>
			<li><a href="#">Home</a></li>
			<li><a href="#">About</a></li>
			<li><a href="#">Work</a></li>
			<li><a href="#">Contact</a></li>
		  </ul>
		</nav>
	  </div>
  
	</header>
	
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
  