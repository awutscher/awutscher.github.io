
// Navbar

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

// Responsive Nav

var width = document.documentElement.clientWidth;

console.log (width);

function openNav(){
if (width > 600){ 
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  else  { 
      document.getElementById("mySidenav").style.width = "100%";
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
      document.getElementById("mySidenav").classList.remove("sidenav");
      document.getElementById("mySidenav").classList.add("sidenavmob");
}
};

// Slider 

var slides = document.getElementById("slides");
var animation1 = document.getElementById("animation1");
var animation2 = document.getElementById("animation2");
var animation3 = document.getElementById("animation3");
var animation4 = document.getElementById("animation4");

var time = true;

console.log(time);

function delay(n){
  return new Promise(function(resolve){
      setTimeout(resolve,n*1000);
  });
}

async function loop () {
  do{ 
      slides.classList.remove("bg-1");
      animation1.style.display = "none";
      slides.classList.add("bg-2");
      animation2.style.display = "block";
      await delay (5);
      slides.classList.remove("bg-2");
      animation2.style.display = "none";
      slides.classList.add("bg-3");
      animation3.style.display = "block";
      await delay (5);
      slides.classList.remove("bg-3");
      animation3.style.display = "none";
      slides.classList.add("bg-4");
      animation4.style.display = "block";
      await delay (5);
      slides.classList.remove("bg-4");
      animation4.style.display = "none";
      slides.classList.add("bg-1");
      animation1.style.display = "block";
      await delay (5);
  }
  while (time===true);
};

loop();

/* // Lightbox

function openModal1() {
  document.getElementById("lightbox-lebenslauf").style.display = "block";
}

function closeModal1() {
  document.getElementById("lightbox-lebenslauf").style.display = "none";
}
 */