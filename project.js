
var stars = document.getElementById('stars')
var moon = document.getElementById('moon')
var nouvil = document.querySelector('.nouvil')

 window.onscroll = function (){
	var value = scrollY;
	stars.style.left=value+'px'
	moon.style.top = value*4+'px'

	nouvil.style.fontSize = value + 'px'
	if(scrollY >= 67){
		nouvil.style.fontSize = 74+'px'
		nouvil.style.position = 'fixed'
		if(scrollY>=456){
			nouvil.style.display='none'
		}else{nouvil.style.display='block'}
		


		}
	}
    
    var books07 = ['book2.jpg','book5.jpg','book6.jpg'];
var currentBookIndex = 0;

function changeBooks() {
  var currentBook = books07[currentBookIndex];
  $("#current-book").html(`<img src="./${currentBook}">`);
  currentBookIndex = (currentBookIndex + 1) % books07.length;
}     
  document.getElementById('change-book-button').addEventListener('click', changeBook)
      