var slideIndex1 = 0;
var slideIndex2 = 0;
showSlides();

function showSlides() {
  var i;
  var slides1 = document.getElementsByClassName("mySlides");
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";  
  }
  slideIndex1++;
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";  
  }
  slideIndex2++;
  if (slideIndex1 > slides1.length) {slideIndex1 = 1}    
  if (slideIndex2 > slides2.length) {slideIndex2 = 1}  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides1[slideIndex1-1].style.display = "block";  
  slides2[slideIndex2-1].style.display = "block";
  dots[slideIndex1-1].className += " active";
  dots[slideIndex2-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}