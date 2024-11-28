// Animated hamburger menu starts here

let hamburgerdiv = document.querySelector(".hamburger")
let programMenu = document.querySelector(".mobile-program-container")



function toggleClassName() {
    hamburgerdiv.classList.toggle('crossburger')
    programMenu.classList.toggle('show-program')
}

hamburgerdiv.addEventListener("click", toggleClassName)
// Animated hamburger menu ends here

// Swiper implementation ends here

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true, autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
// Animated Hamburger menu ends here


// Countdown implementation starts here
    const targetDate = new Date('December 21, 2024 00:00:00').getTime();

    // Update the countdown every second
    const interval = setInterval(function() {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      // Display the countdown
      document.getElementById('countdown').innerHTML =`<span>${days}</span> D <span>${hours}</span> H <span>${minutes}</span> M <span>${seconds}</span> S` ;

      // If the countdown reaches zero, stop the interval and display a message
      if (timeLeft < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = "The day has arrived!";
      }
    }, 1000);
  

// Countdown implementation ends here