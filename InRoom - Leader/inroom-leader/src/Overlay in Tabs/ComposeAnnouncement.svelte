<script>
	let subject = "";
	let message = "";
	let files = [];

	const handleAnnounce = () => {
		const formData = new FormData();

		formData.append("subject", subject);
		formData.append("message", message);

		for (let i = 0; i < files.length; i++) {
			formData.append("files", files[i]);
		}

		fetch("/api/send", {
			method: "POST",
			body: formData,
		}).then((response) => {
			if (response.ok) {
				alert("Message sent successfully!");
			} else {
				alert("Failed to send message.");
			}
		});
	};

	const handleReset = () => {
		subject = "";
		message = "";
		files = [];
	};

	const handleFileChange = (event) => {
		files = [...event.target.files];
	};

	const handleRemoveFile = (index) => {
		files.splice(index, 1);
		files = [...files];
	};
</script>


<div class="ComposeAnnouncement">
	<h1 style="font-size:1.5rem">Announcement</h1>
	<div class="message-section">
		<div class="compose-field">
			<label for="subject">Subject</label>
			<input id="subject" type="text" bind:value={subject} required />
		</div>

		<div class="compose-field">
			<label for="message">Message</label>
			<textarea id="message" bind:value={message} required />
		</div>
	</div>

	<div class="upload-section">
		<div class="attachment-field">
			<label for="attachments">Attachments</label>
			<input
				id="attachments"
				type="file"
				multiple
				on:change={handleFileChange}
			/>
		</div>

		{#if files.length > 0}
			<ul style="list-style-type: none">
				{#each files as file, index}
					<li key={index}  style="list-style-type: none">
						{file.name}
						<button on:click={() => handleRemoveFile(index)}
							>Remove</button
						>
					</li>
				{/each}
			</ul>
		{/if}
	</div>

	<div class="buttons-section">
		<button on:click={handleAnnounce}>Announce</button>
		<button on:click={handleReset}>Reset</button>
	</div>
</div>

<style>
	h1{
font-size:1rem;
}
	.ComposeAnnouncement {
		padding: 10px;
		background-color: rgba(255, 87, 87, 0.486);
		margin: 10%;
		border-radius: 10px;
	}
	.compose-field {
		display: flex;
		flex-direction: column;
		margin-bottom: 20px;
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
		border-radius: 0.25rem;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		cursor: pointer;
		margin-right: 10px;
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
		margin-bottom: 20px;
	}
</style>
