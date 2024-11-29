// Animated hamburger menu starts here

let hamburgerdiv = document.querySelector(".hamburger");
let navigator = document.querySelector(".program-navigator");
let closehamburger = document.querySelector(".closehamburger");
let hamburger2 = document.querySelector(".hamburger2");
let Showlocation = document.querySelector("#location");
let Giftscontainer = document.querySelector(".gifts-container");
let giftsMenu = document.querySelector("#gifts");
let programMenu = document.querySelector(".mobile-program-container");

// Unified toggle function
function toggleVisibility(target) {
    // Hide both containers first
    programMenu.classList.remove('show-program');
    Giftscontainer.classList.remove('show-program');

    // Show the target container
    if (target === 'programMenu') {
        programMenu.classList.add('show-program');
        closehamburger.classList.toggle('show-closehamburger')
    navigator.classList.toggle('hide-program-navigator')


    } else if (target === 'Giftscontainer') {
        Giftscontainer.classList.add('show-program');
    closehamburger.classList.toggle('show-closehamburger')
    navigator.classList.toggle('hide-program-navigator')


    }
    else{
        programMenu.classList.remove('show-program');
    Giftscontainer.classList.remove('show-program');
    }
}

// Event listener to remove all and show `programMenu`
function removeAllAndShowProgram() {
    programMenu.classList.remove('show-program');
    Giftscontainer.classList.remove('show-program');
    closehamburger.classList.toggle('show-closehamburger')
    navigator.classList.toggle('hide-program-navigator')
}

// Add event listeners
hamburgerdiv.addEventListener("click", () => toggleVisibility('programMenu'));
hamburger2.addEventListener("click", () => removeAllAndShowProgram());
Showlocation.addEventListener("click", () => toggleVisibility('programMenu'));
giftsMenu.addEventListener("click", () => toggleVisibility('Giftscontainer'));

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