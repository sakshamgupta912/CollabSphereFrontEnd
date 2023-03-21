<script>
	import Box from "./Box.svelte";

	let obj = {
		room_box_name :"Maths" 
	}
 
</script>

<!-- <div class="RoomBox" id="RoomBox">
	<a href="#RemoveRoomFunc" class="close"> </a>
	<div class="room_box_name" >
		{room_box_name}
	</div>
	<div class="room_box_image">
		<img src={room_box_image} alt="ICON" />
	</div>
	
</div> -->

<body>
	<Box {...obj}/>
</body>