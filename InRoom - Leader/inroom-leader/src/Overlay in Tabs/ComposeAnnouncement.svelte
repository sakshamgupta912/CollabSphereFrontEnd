<script>
	let subject = "";
	let message = "";
	let attachments = [];

	function handleAttachmentChange(event) {
		// update attachments array with selected files
		attachments = [...event.target.files];
	}

	function handleSubmit() {
		// handle form submission with attachments
	}
	function handleReset()
	{
		subject = "";
		message = "";
		attachments = [];
	}
	function handleRemoveAllAttachment()
	{
		console.log("hi")
		attachments = [];
	}

</script>


<form class="ComposeAnnouncement" on:submit|preventDefault={handleSubmit} on:Reset|preventDefault={handleReset} >
		<div class="compose-field">
			<label for="subject">Subject</label>
			<input id="subject" type="text" bind:value={subject} required />
		</div>

		<div class="compose-field">
			<label for="message">Message</label>
			<textarea id="message" bind:value={message} required />
		</div>

		<div class="attachment-field">
			<label for="attachments">Attachments</label>
			<input
				id="attachments"
				type="file"
				multiple
				onchange={handleAttachmentChange}
			/>
		</div>
		<button type="submit">Send</button>
		<button type="Reset" >Reset</button>
</form>

	


<style>
	.ComposeAnnouncement{

        
		background-color:rgba(255, 87, 87, 0.486);
		margin: 20px;
		padding: 5px;
		border-radius: 10px;
        height: 505px;
        width: 500px;
		;
	}
	.compose-field {
		display: flex;
		flex-direction: column;
		
		margin: 30px;
		top:100px;
		
	}

	label {
		font-weight: bold;
		margin-bottom: 0.5rem;
	}

	input[type="text"],
	textarea {
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 0.25rem;
		font-size: 1rem;
		margin-bottom: 0.5rem;
	}

	textarea {
		resize: none;
		min-height: 100px;
	}

	button {
		background-color: #4285f4;
		color: #fff;
		border: none;
		margin-left:30px;
		border-radius: 0.25rem;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		cursor: pointer;
		
	}

	button:hover {
		background-color: #3367d6;
	}

	button:active {
		background-color: #2a56c6;
	}

	.attachment-field {
		display: flex;
		flex-direction: column;
		margin: 30px;
		
	}

	.attachment-field input[type="file"] {
		margin-bottom: 0.5rem;
	}
</style>
