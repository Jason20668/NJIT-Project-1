let mCurrentIndex = 0 // Tracks the current image index
let mImages = [] // Array to hold GalleryImage objects
const mUrl = 'images.json' // Replace with actual JSON URL
let mWaitTime = 5000 // Timer interval in milliseconds

$(document).ready(() => {
  $('.details').hide()
  startTimer();
  $('.moreIndicator').click(() => {
    $('.moreIndicator').toggleClass('rot90 rot270')
    $('.details').slideToggle()
  })

  $('#nextPhoto').click(() => {
    showNextPhoto();
  })
  $('#prevPhoto').click(() => {
    showPrevPhoto();
  })

  fetchJSON()
})

// Function to fetch JSON data and store it in mImages
function fetchJSON() {
  $.ajax({
    url: mUrl,
    dataType: 'json',
    success: function (data) {
      mImages = data.images;
      swapPhoto()
    },
    error: function (xhr, status, error) {
      console.error("Failed to load")
    }
  })
}

// Function to swap and display the next photo in the slideshow
function swapPhoto() {
  let currentImage = mImages[mCurrentIndex];
  $('#photo').attr('src', currentImage.imgPath);
  $('.location').text(`Digimon Name: ${currentImage.imgLocation}`)
  $('.description').text(`Previous Digivolution: ${currentImage.description}`)
  $('.date').text(`Next Digivolution: ${currentImage.date}`)
}
