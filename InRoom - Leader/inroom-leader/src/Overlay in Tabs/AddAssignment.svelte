<script>
    let title = '';
    let description = '';
    let files = [];
    
    const handleFileInput = (event) => {
      files = [...files, ...event.target.files];
    };
    
    const removeFile = (index) => {
      files.splice(index, 1);
      files = [...files];
    };

    const handleAdd = () => {
		const formData = new FormData();

		formData.append("", title);
		formData.append("message", description);

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
  title = '';
  description = '';
  files = [];
};

  </script>

<div class="AddAssignment">
    <h1 style="font-size:1.5rem">Add Assignment</h1>
  <h1>Title</h1>
  <input bind:value={title} type="text" placeholder="Enter the title of the assignment" />
  
  <h1>Description</h1>
  <textarea bind:value={description} placeholder="Enter the description of the assignment"></textarea>
  
  <h1>Upload file section</h1>
  <input type="file" multiple on:change={handleFileInput} />
  
  <div>
    {#each files as file, index}
      <div>
        <span>{file.name}</span>
        <button on:click={() => removeFile(index)}>Remove</button>
      </div>
    {/each}
  </div>
  <div class="buttons-section">
    <button on:click={handleAdd}>Add</button>
    <button on:click={handleReset}>Reset</button>
</div>
</div>
  <style>
    .AddAssignment{
        padding: 10px;
		background-color: rgba(255, 87, 87, 0.486);;
		margin: 10%;
		border-radius: 10px;
    }
    h1 {
      font-size: 1.0rem;
      
    }
    
    input[type="text"], textarea {
      width: 100%;
      padding: 0.5rem;
      border-radius: 0.25rem;
      border: 1px solid #ccc;
      margin-bottom: 1rem;
    }
    
    input[type="file"] {
      margin-bottom: 1rem;
    }
    
    .file {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
    }
    
    .file span {
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .file button {
      margin-left: 1rem;
      padding: 0.25rem 0.5rem;
      border: none;
      border-radius: 0.25rem;
      background-color: #f44336;
      color: white;
      cursor: pointer;
    }
    
    .file button:hover {
      background-color: #d32f2f;
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
  </style>
  