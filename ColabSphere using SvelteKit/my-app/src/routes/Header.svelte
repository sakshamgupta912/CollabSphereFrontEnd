<script>
</script>

<div class="header">
	  
	<img src="CompanyLogo.png" alt='Comapany Logo' class="logo"/>
	  <div class="header-right">
	  <a class="active" href="#home">Home</a>
	  <a href="#contact">Contact</a>
	  <a href="#about">About</a>
	</div>
  </div>
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


  <style>
	 /* Style the header with a grey background and some padding */
	 .header {
    overflow: hidden;
    background-color: #f1f1f1;
    padding: 10px 100px;
  }
  
  /* Style the header links */
  .header a {
    float: left;
    color: black;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    line-height: 25px;
    border-radius: 4px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  /* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */
  .logo
  {
    height: 60px; 
  }

  
  /* Change the background color on mouse-over */
  .header a:hover {
    background-color: #ddd;
    color: black;
  }
  
  /* Style the active/current link*/
  .header a.active {
    background-color: #FF5757;
    color: white;
  }
  
  /* Float the link section to the right */
  .header-right {
    float: right;
  }
  
  
  /* Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other */
  @media screen and (max-width: 500px) {
    .header a {
      float: none;
      display: block;
      text-align: left;
    }
    .header-right {
      float: none;
    }
  }


  /*-------Hamburger-------*/
  
.button_container {
  position: fixed;
  top: 4%;
  left: 3%;
  height: 27px;
  width: 35px;
  cursor: pointer;
  z-index: 100;
  transition: opacity 0.25s ease;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.button_container:hover {
  opacity: 0.7;
}
.button_container.active .top {
  transform: translateY(11px) translateX(0) rotate(45deg);
  background: rgba(255, 87, 87, 0.76);
}
.button_container.active .middle {
  opacity: 0;
  background: rgba(255, 87, 87, 0.76);
}
.button_container.active .bottom {
  transform: translateY(-11px) translateX(0) rotate(-45deg);
  background: rgba(255, 87, 87, 0.76);
}
.button_container span {
  background: rgba(255, 87, 87, 0.76);
  border: none;
  height: 5px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.35s ease;
  cursor: pointer;
}
.button_container span:nth-of-type(2) {
  top: 11px;
}
.button_container span:nth-of-type(3) {
  top: 22px;
}

.overlay {
  position: fixed;
  background: #6b5757;

  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.35s, visibility 0.35s, height 0.35s;
  overflow: hidden;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.overlay.open {
  opacity: 0.9;
  visibility: visible;
  height: 100%;
}
.overlay.open li {
  animation: fadeInRight 0.5s ease forwards;
  animation-delay: 0.35s;
}
.overlay.open li:nth-of-type(2) {
  animation-delay: 0.4s;
}
.overlay.open li:nth-of-type(3) {
  animation-delay: 0.45s;
}
.overlay.open li:nth-of-type(4) {
  animation-delay: 0.5s;
}
.overlay nav {
  position: relative;
  height: 70%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 50px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  text-align: center;
}
.overlay ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: inline-block;
  position: relative;
  height: 100%;
}
.overlay ul li {
  display: block;
  height: 25%;
  height: calc(100% / 4);
  min-height: 50px;
  position: relative;
  opacity: 0;
}
.overlay ul li a {
  display: block;
  position: relative;
  color: #fff;
  text-decoration: none;
  overflow: hidden;
}
.overlay ul li a:hover:after, .overlay ul li a:focus:after, .overlay ul li a:active:after {
  width: 100%;
}
.overlay ul li a:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0%;
  transform: translateX(-50%);
  height: 3px;
  background: #fff;
  transition: 0.35s;
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    left: 20%;
  }
  100% {
    opacity: 1;
    left: 0;
  }
}

  </style>