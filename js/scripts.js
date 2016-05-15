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
