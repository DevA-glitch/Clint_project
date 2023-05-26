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

// $(document).ready(function() {
//   //carousel options
//   $('#quote-carousel').carousel({
//     pause: true, interval: 10000,
//   });
// });

