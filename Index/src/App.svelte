<script>
  import Box from "./Box.svelte";
  var toggle = document.getElementById("toggle");
  var overlay = document.getElementById("overlay");

  // toggle.addEventListener("click", function () {
  //   toggle.classList.toggle("active");
  //   overlay.classList.toggle("open");
  // });

  function onClick() {
    console.log("HELLO");
    toggle.classList.toggle("active");
    overlay.classList.toggle("open");
  }
</script>

<body>
  <header>
    <div class="header">
      <img src="CompanyLogo.png" alt="Comapany Logo" class="logo" />
      <div class="header-right">
        <a class="active" href="#home">Home</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>

    <!-- Hamburger -->
    <div class="button_container" id="toggle" on:click={onClick}>
      <span class="top" /><span class="middle" /><span class="bottom" />
    </div>
    <div class="overlay" id="overlay">
      <nav class="overlay-menu">
        <ul>
          <li><a href="#">Rooms</a></li>
          <li><a href="#">All Assignment</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
  
  
</body>

<style>
</style>
