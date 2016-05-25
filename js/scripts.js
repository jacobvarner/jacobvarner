function changeImage(element) {
  var oldSource = element.src;
  var newSource = document.getElementById("image-main").src;

  document.getElementById("image-main").src = oldSource;
  element.src = newSource;
}

function lastUpdate() {
  //Update here and it will autofill everywhere.
  document.write("May 14, 2016");
}

function toggleMenu() {
  var menuStatus = document.getElementById("menu-button").className;

  if (menuStatus === "closed") {
    document.getElementById("mobile-nav").style.display = "block";
    document.getElementById("menu-icon").src = "images/menu-icon-close.png";
    document.getElementById("menu-button").className = "open";
  } else {
    document.getElementById("mobile-nav").style.display = "none";
    document.getElementById("menu-icon").src = "images/menu-icon.png";
    document.getElementById("menu-button").className = "closed";
  }
}

function toggleMenuProjects() {
  var menuStatus = document.getElementById("menu-button").className;

  if (menuStatus === "closed") {
    document.getElementById("mobile-nav").style.display = "block";
    document.getElementById("menu-icon").src = "../images/menu-icon-close.png";
    document.getElementById("menu-button").className = "open";
  } else {
    document.getElementById("mobile-nav").style.display = "none";
    document.getElementById("menu-icon").src = "../images/menu-icon.png";
    document.getElementById("menu-button").className = "closed";
  }
}
