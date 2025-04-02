document.querySelectorAll('.nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav ul li a.active').classList.remove('active');
        this.classList.add('active');
        
    });
});
/*--------------------- tv hover ------------------------*/ 
const menu = document.getElementById('tv34')
const icon =document.querySelector("#tv")
// On hover, switch between outline and fill
menu.addEventListener('mouseenter', () => {
    icon.classList.remove('bi-tv');
    icon.classList.add('bi-tv-fill');
});

menu.addEventListener('mouseleave', () => {
    icon.classList.remove('bi-tv-fill');
    icon.classList.add('bi-tv');
});

/************* home hover --------------- */
const menu2 = document.getElementById('house-icon')
const icon64 = document.querySelector("#house")
// On hover, switch between outline and fill
icon64.addEventListener('mouseenter', () => {
    menu2.classList.remove('bi-house-door');
    menu2.classList.add('bi-house-door-fill');
});

icon64.addEventListener('mouseleave', () => {
    menu2.classList.remove('bi-house-door-fill');
    menu2.classList.add('bi-house-door');
});

const icon3 = document.getElementById('chat-icon')
const menu3 = document.querySelector("#chat")
// On hover, switch between outline and fill
menu3.addEventListener('mouseenter', () => {
    icon3.classList.remove('bi-chat-dots');
    icon3.classList.add('bi-chat-dots-fill');
});

menu3.addEventListener('mouseleave', () => {
    icon3.classList.remove('bi-chat-dots-fill');
    icon3.classList.add('bi-chat-dots');
});


/*----------- Tooltip ------------------*/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
 /*--------------- Popular Channel --------------*/
 document.addEventListener("DOMContentLoaded", function () {
    const visibleCards = 4; // Number of cards visible at a time
    const cardWidth = 279; // Width of each card including margin-right (100px card + 10px margin)
    let currentIndex = 0;
    
    const cardContainer = document.getElementById("popular");
    const totalCards = document.querySelectorAll(".popular .video-card1").length;
  
    
    // Update the card container's position
    const updateCardContainer = () => {
     const offset = -currentIndex * cardWidth; // Calculate the offset
     cardContainer.style.transform = `translateX(${offset}px)`; // Apply translation with animation
    };
    
    // Event listeners for buttons
    document.getElementById("swipe-left14").addEventListener("click", () => {
        console.log("left click")
     if (currentIndex > 0) {
       currentIndex -= visibleCards; // Move to the previous set of cards
       updateCardContainer();
     }
    });
    
    document.getElementById("swipe-right14").addEventListener("click", () => {
        console.log("right click")
     if (currentIndex < totalCards - visibleCards) {
       currentIndex += visibleCards; // Move to the next set of cards
       updateCardContainer();
     }
    });
    
    // Initialize the position
    updateCardContainer();
    });

    /*----------------- Sports ------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
    const visibleCards = 4; // Number of cards visible at a time
    const cardWidth = 270.22 // Width of each card including margin-right (100px card + 10px margin)
    let currentIndex = 0;
    
    const cardContainer = document.getElementById("slider3");
    const totalCards = document.querySelectorAll(".slider3 .movie").length;
    
    
    // Update the card container's position
    const updateCardContainer = () => {
     const offset = -currentIndex * cardWidth; // Calculate the offset
     cardContainer.style.transform = `translateX(${offset}px)`; // Apply translation with animation
    };
    
    // Event listeners for buttons
    document.getElementById("swipe-left3").addEventListener("click", () => {
        console.log("left click")
     if (currentIndex > 0) {
       currentIndex -= visibleCards; // Move to the previous set of cards
       updateCardContainer();
     }
    });
    
    document.getElementById("swipe-right3").addEventListener("click", () => {
        console.log("right click")
     if (currentIndex < totalCards - visibleCards) {
       currentIndex += visibleCards; // Move to the next set of cards
       updateCardContainer();
     }
    });
    
    // Initialize the position
    updateCardContainer();
    });