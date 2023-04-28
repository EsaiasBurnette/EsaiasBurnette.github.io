var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

// Slide show 
function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 

// Shared Buttons to external link
function sharedButton() {
  var siteUrl = window.location.href;
  var siteTitle = document.title;
  var siteName = "The Dominican Foodie"; // Replace with your site name
  var siteHashtag = "theDominicanFoodie"; // Replace with your site hashtag

  document.querySelector('#share-buttons .facebook').href = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(siteUrl);
  document.querySelector('#share-buttons .twitter').href = 'https://twitter.com/share?text=' + encodeURIComponent(siteTitle) + '&url=' + encodeURIComponent(siteUrl) + '&hashtags=' + encodeURIComponent(siteHashtag);
  document.querySelector('#share-buttons .linkedin').href = 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(siteUrl) + '&title=' + encodeURIComponent(siteTitle) + '&source=' + encodeURIComponent(siteName);
}

var isPlaying = false; // Create a variable to track the audio playback status

function toggleAudio() {
		// Get the audio element by its id
		var audio = document.getElementById("myAudio");

    // Get the image element by its id for each slider
		var img1 = document.getElementById("audio-icon1");
        var img2 = document.getElementById("audio-icon2");
        var img3 = document.getElementById("audio-icon3");

		// Toggle the audio playback status and update the icon for each slider
		if (isPlaying) {
			audio.pause();
			isPlaying = false;
			img1.src = 'img/audio.png'; // Change the image to show the play icon
              img2.src = 'img/audio.png'; // Change the image to show the pause icon
              img3.src = 'img/audio.png'; // Change the image to show the pause icon
		} else {
			audio.play();
			isPlaying = true;
			img1.src = 'img/pause.png'; // Change the image to show the pause icon
            img2.src = 'img/pause.png'; // Change the image to show the pause icon
             img3.src = 'img/pause.png'; // Change the image to show the pause icon
			}
		}
