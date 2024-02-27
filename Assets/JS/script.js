document.addEventListener("DOMContentLoaded", function () {
  // Initialize Typed.js
  var options = {
    strings: ["Web Designer.", "Freelancer.", "Web Developer."],
    typeSpeed: 200, // typing speed in milliseconds
    backSpeed: 50, // backspacing speed in milliseconds
    loop: true, // loop the animation indefinitely
  };

  var typed = new Typed("#typed-output", options);
});
