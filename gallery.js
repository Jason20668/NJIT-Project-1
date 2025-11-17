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

// Advances to the next photo, loops to the first photo if the end of array is reached
function showNextPhoto() {
  startTimer();
  mCurrentIndex++;
  if (mCurrentIndex >= mImages.length) {
    mCurrentIndex = 0
  }
  swapPhoto();
}

// Goes to the previous photo, loops to the last photo if mCurrentIndex goes negative
function showPrevPhoto() {
  startTimer();
  mCurrentIndex--;
  if (mCurrentIndex < 0) {
    mCurrentIndex = mImages.length - 1
  }
  swapPhoto();
}

let mTimer;
// timer after 5 seconds chnages to next one
function startTimer() {
  if (mTimer) {
    clearInterval(mTimer);
  }
  mTimer = setInterval(() => {
    showNextPhoto();
  }, mWaitTime)
}

$('.moreIndicator').click(() => {
  let currentImage = mImages[mCurrentIndex];
  if (currentImage.background = "Red"){
    $('.details').css("background-color", "red")
  } else if (currentImage.background = "White"){
    $('.details').css("background-color", "gray")
  } else if (currentImage.background = "Light Blue"){
    $('.details').css("background-color", "lightblue")
  } else if (currentImage.background = "Pink"){
    $('.details').css("background-color", "pink")
  } else if (currentImage.background = "Blue"){
    $('.details').css("background-color", "darkblue")
  } else if (currentImage.background = "Green"){
    $('.details').css("background-color", "green")
  } else if (currentImage.background = "Yellow"){
    $('.details').css("background-color", "yellow")
  } else{
    $('.details').css("background-color", "lightgreen")
  }
})