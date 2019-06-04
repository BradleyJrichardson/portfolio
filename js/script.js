ScrollReveal().reveal(".box"), { delay: 800 };
ScrollReveal({ reset: true });

var typing = document.getElementById("typing");
var typewriter = new Typewriter(typing, {
  loop: true
});

typewriter
  .typeString("<strong>Bradley Richardson</strong> <br>")
  .typeString("Full-stack Developer, Student at CoderAcademy")
  .pauseFor(2500)
  .start();
