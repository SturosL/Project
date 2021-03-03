var indexValue = 0;
function slideShow(){
  setTimeout(slideShow, 5000);
  var i;
  const img = document.querySelectorAll("img");
  for(i = 0; i < img.length; i++){
    img[i].style.display = "none";
  }
  indexValue++;
  if(indexValue > img.length){indexValue = 1}
  img[indexValue -1].style.display = "block";
}
slideShow();