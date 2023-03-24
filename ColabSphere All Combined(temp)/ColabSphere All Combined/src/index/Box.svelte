<script>
     
    export let room_box_name='Room Box';
    export let room_box_image='./room_box_image.png';
	

    // Define the URL that you want to redirect to
    export let url = 'https://example.com';
	
	// Define a function to handle the click event
	function handleClick(event) {
		
		
		// Redirect the user to the specified URL
		window.location.href = url;
		
		
	}
	function handleRemoveRoomBox(event)
	{	
		alert("Room Box Rempve function called ");
		// Prevent the click event from propagating to parent elements
		event.stopPropagation();
	}
</script>

<div class="RoomBox" id="RoomBox" on:click={handleClick}>
	<a class="close" on:click={handleRemoveRoomBox} > </a>
	<div class="room_box_name" >
			{room_box_name}
	</div>
	<div class="room_box_image">
		<img src={room_box_image} alt="ICON" />
	</div>
</div>

<style>
	.RoomBox {
		position: relative;
	width: 300px;
	height: 300px;
	background: rgba(255, 87, 87, 0.76);
	border-radius: 25px;
	margin: 20px;
	display: inline-block;
	
	}
	.room_box_name
	{
		position: relative;
		
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 30px;
		text-align: center;
		top: 75%;
		color: #FFFFFF;
		
	}

	.room_box_image
	{
		text-align: center;
	
	}
	.room_box_image img
	{	
		height: 150px;
		
	}
	
	.close {

	width: 32px;
	height: 32px;
	opacity: 0.3;
	
	}
	.close:hover {
	opacity: 1;
	}
	.close:before, .close:after {
	position: absolute;
	right: 15px;
	content: ' ';
	height: 33px;
	width: 2px;
	background-color: #333;
	margin: 10%;
	}
	.close:before {
	transform: rotate(45deg);
	}
	.close:after {
	transform: rotate(-45deg);
	}

</style>