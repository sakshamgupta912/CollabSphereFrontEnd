<script>
	let files = [];
	let description = '';
  
	function handleFilesUpload(event) {
	  files = [...files, ...event.target.files];
	}
  
	function handleFileRemove(index) {
	  files = files.filter((_, i) => i !== index);
	}
  
	function handleDescriptionChange(event) {
	  description = event.target.value;
	}
  
	function handleFormSubmit(event) {
	  event.preventDefault();
  
	  // Do something with the files and description, e.g. send them to the backend
  
	  // Reset the form
	  files = [];
	  description = '';
	}
  
	function handleFormReset() {
	  files = [];
	  description = '';
	}
  </script>
   <div class="form-container">
	<h1 class="form-title">Submit Assignment</h1>
	<form on:submit={handleFormSubmit} on:reset={handleFormReset}>
	  <div class="form-field">
		<label for="file-upload">Upload Files</label>
		<input type="file" id="file-upload" multiple on:change={handleFilesUpload} />
		{#if files.length > 0}
		  <ul class="file-list">
			{#each files as file, i}
			  <li class="file-item">
				<span>{file.name}</span>
				<button type="button" on:click={() => handleFileRemove(i)}>Remove</button>
			  </li>
			{/each}
		  </ul>
		{/if}
	  </div>
	  <div class="Description">
		<label>
		  Description:
		  <textarea on:input={handleDescriptionChange} />
		</label>
	  </div>
	  <div class="form-actions">
		<button type="submit">Send</button>
		<button type="reset">Reset</button>
	  </div>
	</form>
  </div>
  <style>

	.form-container {
	border-radius: 10px;
	background-color:rgba(255, 87, 87, 0.486);
	margin: 10%;
	padding: 20px;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
  
	.form-title {
	  font-size: 1.5rem;
	  margin-bottom: 1rem;
	  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
  
	.form-field {
	  margin: 1rem 0;
	  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	  
	 
	}
  
	.form-field label {
	  font-size: 1.0rem;
	  margin-bottom: 0.5rem;
	  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
  
	.form-field input[type="file"] {
	  margin-top: 0.5rem;
	  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
  
	.form-field input[type="text"] {
	  margin-top: 0.5rem;
	  padding: 0.5rem;
	  border: 1px solid #ccc;
	  border-radius: 4px;
	  font-size: 1.2rem;
	  width: 100%;
	  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
  
	.file-list {
	  list-style: none;
	  margin: 0;
	  padding: 0;
	  display: flex;
	  flex-wrap: wrap;
	  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
  
	.file-item {
	  display: flex;
	  align-items: center;
	  margin: 0.5rem;
	  background-color: #f2f2f2;
	  border-radius: 4px;
	  padding: 0.5rem;
	  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
  
	.file-item span {
	  margin-left: 0.5rem;
	  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
  
	.file-item button {
	  margin-left: auto;
	  border: none;
	  background-color: #0077cc;
	  color: #ffff;
	  cursor: pointer;
	  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
  
	.form-actions {
	  margin-top: 1rem;
	  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
  
	.form-actions button {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	  margin: 0 0.5rem;
	  padding: 0.5rem 1rem;
	  font-size: 1.2rem;
	  border: none;
	  border-radius: 4px;
	  background-color: #0077cc;
	  color: #fff;
	  cursor: pointer;
	}
  
	.form-actions button[type="reset"] {
	  background-color: #ccc;
	  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
	
	textarea {
	  display: block;
	  width: 100%;
	  height: 100px;
	  margin-top: 10px;
	  
	  border-radius: 10px;
	  resize: none;
	  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
  </style>
  
 
	