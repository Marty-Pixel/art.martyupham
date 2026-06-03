// SLIDESHOW MODAL
    // Author: Yilmaz Gunduzalp

    // Open the Modal 
    function openModal() {
        document.getElementById("myHomeModal").style.display = "block";
        document.getElementById("loader").style.display = "none";
        intervalID = setInterval(showSlides, 3500);
      }
      // Close the Modal
      function closeHomeModal() {
        // Get the <span> element that closes the modal
  var page = document.getElementsByClassName("home-page-container")[0];
        document.getElementById("myHomeModal").style.display = "none";
        page.style.display = "block";
        clearInterval(intervalID);
      }

      var slideIndex = 1;
      showSlides(slideIndex);

      // Next/previous controls
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }

      // Thumbnail image controls
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }

      function setPreviousandCurrent() {
        [prev, cur] = getPreviousandCurrent();
        if (cur === 5) {
            previous = 5;
            current = 0;
        } else 
        {
          previous = current;
          current = previous + 1;
        }
      }

      function getPreviousandCurrent() {
        return [previous, current];
      }

      function showSlides() {
        [previous, current] = getPreviousandCurrent();
        var slides = document.getElementsByClassName("homeSlides");

          slides[previous].style.display = "none";
          slides[current].style.display = "block";
          setPreviousandCurrent();

      }

  // END SLIDESHOW MODAL


function startProcessWithCallback() {
  // Show the spinner
  showSpinner();

  // Simulating an asynchronous task with a callback
  simulateApiCallWithCallback((error, result) => {
    hideSpinner(); // Hide spinner once the task is done

    if (error) {
      console.error('Error:', error);
      alert('An error occurred');
    } else {
      console.log('Success:', result);
      alert('Operation completed successfully');
    }
  });
}

// Simulating an API call using a callback
function simulateApiCallWithCallback(callback) {
  setTimeout(() => {
    const success = true; // Change this to false to simulate an error
    if (success) {
      callback(null, 'Data fetched successfully!');
    } else {
      callback('Error fetching data');
    }
  }, 3000); // Simulates a 3-second task
}
