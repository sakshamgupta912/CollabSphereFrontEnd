<script>
	let files = [];
	let description = '';
  
	const handleFileChange = (event) => {
	  files = [...event.target.files];
	};
  
	const handleDescriptionChange = (event) => {
	  description = event.target.value;
	};
  
	const handleSubmit = (event) => {
	  event.preventDefault();
	  // Send files and description data to backend API or store in database
	  console.log('Files:', files);
	  console.log('Description:', description);
	  // Reset form fields
	  files = [];
	  description = '';
	};

	function handleReset()
	{
		files = [];
	  	description = '';
	}
  </script>
  
  <div class="SubmitAssignment">
	<h1>Submit Assignment</h1>
	<form on:submit={handleSubmit}>
	  <label>
		Choose files:
		<input type="file" multiple on:change={handleFileChange} />
	  </label>
	  <br />
	  <label>
		Description:
		<textarea on:input={handleDescriptionChange} />
	  </label>
	  <br />
	  <button type="submit">Submit</button>
	  <button type="reset" on:click={handleReset}>Reset</button>
	</form>
</div>

<style>
	.SubmitAssignment
	{
		background-color:rgba(255, 87, 87, 0.486);
		margin: 20px;
		padding: 5px;
		border-radius: 10px;
        height: 400px;
        width: 600px;
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
  
	button[type="submit"] {
	  display: inline-block;
	 
	    background-color: #4285f4;
	    color: #fff;
		border: none;
		margin-left:30px;
		border-radius: 0.25rem;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		cursor: pointer;
	}
	button[type="reset"] {
	  display: inline-block;
	 
		border: none;
		margin-left:30px;
		border-radius: 0.25rem;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		cursor: pointer;
	}
  
	button[type="submit"]:hover {
	  background-color: #0069d9;
	}
  </style>
  
  