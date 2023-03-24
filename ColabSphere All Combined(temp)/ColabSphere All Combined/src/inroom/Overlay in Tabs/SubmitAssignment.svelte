<script>
	let files = [];
	let description = '';
  
	const handleFileChange = (event) => {
	  files = [...event.target.files];
	};
  
	const handleDescriptionChange = (event) => {
	  description = event.target.value;
	};
  
	const handleRemoveFile = (index) => {
	  files.splice(index, 1);
	  files = [...files];
	};
  
	const handleSubmit = () => {
	  // Send files and description data to backend API or store in database
	  console.log('Files:', files);
	  console.log('Description:', description);
	  // Reset form fields
	  files = [];
	  description = '';
	};
  
	function handleReset() {
	  files = [];
	  description = '';
	};
  </script>
  
  <section class="SubmitAssignment">
	<h1>Submit Assignment</h1>
  
	<div>
	  <label>
		Choose files:
		<input type="file" multiple on:change={handleFileChange} />
	  </label>
  
	  {#if files.length > 0}
		<ul style="list-style-type: none">
		  {#each files as file, index}
			<li key={file.name} style="list-style-type: none">
			  {file.name}
			  <button type="button" on:click={() => handleRemoveFile(index)}>Remove</button>
			</li>
		  {/each}
		</ul>
	  {/if}
	</div>
  
	<div>
	  <label>
		Description:
		<textarea on:input={handleDescriptionChange} />
	  </label>
	</div>
  
	<div>
	  <button type="button" on:click={handleSubmit}>Submit</button>
	  <button type="button" on:click={handleReset}>Reset</button>
	</div>
  </section>
  
  <style>
	.SubmitAssignment {
	  background-color: rgba(255, 87, 87, 0.486);
	  margin: 20px;
	  padding: 5px;
	  border-radius: 10px;
	  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	
	}
  
	h1 {
	  font-size: 24px;
	  margin-bottom: 20px;
	  margin-left: 20px;
	}
  
	label {
	  display: block;
	  margin-bottom: 10px;
	  margin-left: 20px;
	}
  
	input[type="file"] {
	  display: block;
	  margin-top: 5px;
	  margin-bottom: 10px;
	  padding: 5px;
	  border: 1px solid #ccc;
	  border-radius: 3px;
	}
  
	textarea {
	  display: block;
	  width: 94%;
	  height: 100px;
	  margin-top: 10px;
	  border: 1px solid #ccc;
	  border-radius: 3px;
	  resize: none;
	}
  
	button[type="button"] {
	  display: inline-block;
	  background-color: #4285f4;
	  color: #fff;
	  border: none;
	  margin-left: 30px;
	  border-radius: 0.25rem;
	  padding: 0.5rem 1rem;
	  font-size: 1rem;
	  cursor: pointer;
	}
  
	button[type="button"]:hover {
	  background-color: #0069d9;
	}
  </style>
  