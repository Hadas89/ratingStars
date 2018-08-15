function starsRating () {
 var checkedspans = document.getElementsByClassName('checked')
 var spanstars = document.getElementsByClassName('star')


 
 for (let i = 0; i < spanstars.length; i++) {
  var spanstars = document.getElementsByClassName('star')
  spanstars[i].addEventListener('mouseover', function () {
    this.classList.add('checked')
    this.onmouseout = function () {
     spanstars[i].classList.remove('checked')
    }
    if (i !== 0 ) {
    spanstars[i-1].classList.add('checked')
    }

    })


 }
}
starsRating()
  
