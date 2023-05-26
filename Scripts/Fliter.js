window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById("navbar-id-about").style.top = "0";
  } else {
    document.getElementById("navbar-id-about").style.top = "-50px";
  }
}


document.addEventListener('DOMContentLoaded', function(event) {
  document.querySelector('body').style.opacity = 1
})

// Get all filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');

// Get all images
const images = document.querySelectorAll('.image');

// Add click event listener to each filter button
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Get the category value from the data-category attribute
    const category = button.getAttribute('data-category');

    // Show all images if the category is "all"
    if (category === 'all') {
      images.forEach((image) => {
        image.style.display = 'block';
      });
    } else {
      // Hide images that don't belong to the selected category
      images.forEach((image) => {
        if (!image.classList.contains(category)) {
          image.style.display = 'none';
        } else {
          image.style.display = 'block';
        }
      });
    }
  });
});
