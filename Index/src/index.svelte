<script>
    var toggle = document.getElementById("toggle");
    var overlay = document.getElementById("overlay");
  
    toggle.addEventListener("click", function () {
      toggle.classList.toggle("active");
      overlay.classList.toggle("open");
    });
  
  
  </script>
<main>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <link rel="stylesheet" href="./global.css" />
    <link rel="stylesheet" href="./index.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open Sans:wght@400;600;700&display=swap" />
  
  
  </head>
<body>



    <div class="container">
      <div class="rooms">
  
        <img class="e-classroom-2-14" alt="" src="./public/eclassroom-2-1@2x.png" />
        <div class="account-information4">
          <img class="image-1-icon4" alt="" src="./public/image-1@2x.png" />
        </div>
  
        <div class="room-box" id="rOOMBOXContainer">
          <div class="room-box-inner">
            <img class="frame-child" alt="" src="./public/ellipse-2@2x.png" />
          </div>
          <div class="room-name">ROOM NAME</div>
          <img class="room-box-hamburger" alt="" src="./public/room-box-hamburger.svg" id="roomBoxHamburger" />
  
        </div>
  
        <div class="button_container" id="toggle"><span class="top"></span><span class="middle"></span><span
            class="bottom"></span></div>
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
      </div>
  
  
    </div>
  
  </body>
</main>

<style>
    body {
  margin: 0;
  line-height: normal;
}

.popup-overlay {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

:root {
  /* fonts */
  --font-open-sans: "Open Sans";

  /* font sizes */
  --font-size-11xl: 30px;
  --font-size-6xl: 25px;

  /* Colors */
  --color-black: #000;
  --color-gainsboro-100: #d9d9d9;
  --color-gainsboro-200: rgba(222, 220, 220, 0.76);
  --color-dimgray: #737373;
  --color-white: #fff;
  --color-darkgray: #adacac;

  /* Paddings */
  --padding-smi: 13px;
  --padding-12xl: 31px;

  /* border radiuses */
  --br-6xl: 25px;
  --br-7xs: 6px;
  --br-89xl: 108px;
  --br-21xl-5: 40.5px;
}

    body
{
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.e-classroom-2-14 {
  position: absolute;
  top: 1px;
  left: 129px;
  width: 300px;
  height: 114px;
  object-fit: cover;
}
.hamburger4,
.image-1-icon4 {
  position: absolute;
  top: 37px;
  left: 37px;
  width: 55px;
  height: 40px;
}
.image-1-icon4 {
  margin: 0 !important;
  top: 6px;
  left: 6px;
  border-radius: 40.48px;
  width: 85px;
  height: 80.95px;
  flex-shrink: 0;
  object-fit: cover;
  z-index: 0;
}
.account-information4 {
  position: absolute;
  top: 18px;
  right: 32px;
  border-radius: var(--br-89xl);
  background-color: var(--color-gainsboro-200);
  width: 96px;
  height: 94px;
  display: flex;
  flex-direction: column;
  padding: var(--padding-smi) var(--padding-12xl);
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
}
.frame-child {
  position: relative;
  width: 209px;
  height: 209px;
  flex-shrink: 0;
  object-fit: cover;
}
.room-box-inner {
  position: absolute;
  top: 28px;
  left: 71px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 10px;
  align-items: flex-start;
  justify-content: flex-start;
}
.room-name {
  top: 281px;
  left: 76px;
}
.room-box,
.room-name {
  position: absolute;
}
.room-box-hamburger {
  position: absolute;
  top: 24px;
  left: 342px;
  width: 5px;
  height: 25px;
}
.room-box {
  top: 189px;
  left: 129px;
  border-radius: var(--br-6xl);
  background-color: rgba(255, 87, 87, 0.76);
  width: 372px;
  height: 372px;
  overflow: hidden;
  cursor: pointer;
}
.rooms{
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 1080px;
  overflow: auto;
  text-align: left;
  font-size: 35px;
  color: var(--color-white);
  font-family: var(--font-open-sans);
}
.room-box-drop-down-menu-child {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: var(--br-6xl);
  background-color: var(--color-gainsboro-100);
}
.leave-room {
  position: absolute;
  top: 11px;
  left: 13px;
}
.room-box-drop-down-menu {
  position: relative;
  width: 112px;
  height: 42px;
  cursor: pointer;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
  text-align: left;
  font-size: 15px;
  color: var(--color-black);
  font-family: var(--font-open-sans);
}
.background-1 {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #dadada;
  width: 522px;
  height: 1080px;
}
.hamburgerclose-child {
  height: 15%;
  top: -5%;
  bottom: 90%;
  left: calc(50% - 15.26px);
  width: 55px;
  transform: rotate(45deg);
}
.hamburgerclose-child,
.hamburgerclose-inner,
.hamburgerclose-item {
  position: absolute;
  border-radius: var(--br-7xs);
  background-color: var(--color-dimgray);
  transform-origin: 0 0;
}
.hamburgerclose-item {
  height: 15%;
  top: 92.23%;
  bottom: -7.23%;
  left: calc(50% - 19.5px);
  width: 55px;
  transform: rotate(-45deg);
}
.hamburgerclose-inner {
  height: 12.39%;
  width: 8.93%;
  top: 42.5%;
  right: 43.7%;
  bottom: 45.11%;
  left: 47.37%;
  transform: rotate(0.61deg);
}
.hamburgerclose {
  position: absolute;
  top: 37px;
  left: 37px;
  width: 55px;
  height: 40px;
}
.all-assignments {
  position: absolute;
  top: 0;
  left: 0;
  line-height: 32px;
  font-weight: 600;
}
.all-assignments-wrapper,
.rooms-wrapper {
  position: absolute;
  top: 154px;
  left: 37px;
  width: 230px;
  height: 32px;
  cursor: pointer;
}
.rooms-wrapper {
  top: 229px;
  width: 100px;
}


/* Burger */
.button_container {
  position: fixed;
  top: 5%;
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