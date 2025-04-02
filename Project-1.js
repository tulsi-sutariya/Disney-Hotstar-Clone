/*----------- Tooltip ------------------*/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

/*-------------- latest movie scrollbar --------------------*/ 
document.addEventListener("DOMContentLoaded", function () {
  const visibleCards = 6; // Number of cards visible at a time
  const cardWidth = 174 // Width of each card including margin-right (100px card + 10px margin)
  let currentIndex = 0;
  
  const cardContainer = document.getElementById("slider");
  const totalCards = document.querySelectorAll(".slider .movie").length;
  
  
  // Update the card container's position
  const updateCardContainer = () => {
   const offset = -currentIndex * cardWidth; // Calculate the offset
   cardContainer.style.transform = `translateX(${offset}px)`; // Apply translation with animation
  };
  
  // Event listeners for buttons
  document.getElementById("swipe-left").addEventListener("click", () => {
      console.log("left click")
   if (currentIndex > 0) {
     currentIndex -= visibleCards; // Move to the previous set of cards
     updateCardContainer();
   }
  });
  
  document.getElementById("swipe-right").addEventListener("click", () => {
      console.log("right click")
   if (currentIndex < totalCards - visibleCards) {
     currentIndex += visibleCards; // Move to the next set of cards
     updateCardContainer();
   }
  });
  
  // Initialize the position
  updateCardContainer();
  });
   /*----------- Top 10 Movies ---------------- */
  
   document.addEventListener("DOMContentLoaded", function () {
const visibleCards = 6; // Number of cards visible at a time
const cardWidth = 175.8 // Width of each card including margin-right (100px card + 10px margin)
let currentIndex = 0;

const cardContainer = document.getElementById("slider2");
const totalCards = document.querySelectorAll(".slider2 .movie").length;


// Update the card container's position
const updateCardContainer = () => {
 const offset = -currentIndex * cardWidth; // Calculate the offset
 cardContainer.style.transform = `translateX(${offset}px)`; // Apply translation with animation
};

// Event listeners for buttons
document.getElementById("swipe-left2").addEventListener("click", () => {
    console.log("left click")
 if (currentIndex > 0) {
   currentIndex -= visibleCards; // Move to the previous set of cards
   updateCardContainer();
 }
});

document.getElementById("swipe-right2").addEventListener("click", () => {
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
    const cardWidth = 270 // Width of each card including margin-right (100px card + 10px margin)
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
    
    /*-------------------- Internation Hits -------------------------*/
    document.addEventListener("DOMContentLoaded", function () {
        const visibleCards = 6; // Number of cards visible at a time
        const cardWidth = 184.77 // Width of each card including margin-right (100px card + 10px margin)
        let currentIndex = 0;
        
        const cardContainer = document.getElementById("slider4");
        const totalCards = document.querySelectorAll(".slider4 .movie").length;
        
        
        // Update the card container's position
        const updateCardContainer = () => {
         const offset = -currentIndex * cardWidth; // Calculate the offset
         cardContainer.style.transform = `translateX(${offset}px)`; // Apply translation with animation
        };
        
        // Event listeners for buttons
        document.getElementById("swipe-left4").addEventListener("click", () => {
            console.log("left click")
         if (currentIndex > 0) {
           currentIndex -= visibleCards; // Move to the previous set of cards
           updateCardContainer();
         }
        });
        
        document.getElementById("swipe-right4").addEventListener("click", () => {
            console.log("right click")
         if (currentIndex < totalCards - visibleCards) {
           currentIndex += visibleCards; // Move to the next set of cards
           updateCardContainer();
         }
        });
        
        // Initialize the position
        updateCardContainer();
        });


        /*------- video playing--------------*/
        const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(card => {
  const video = card.querySelector('.card-video');

  // Play video on hover
  card.addEventListener('mouseenter', () => {
    video.play();
  });

  // Pause video when hover ends
  card.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0; // Reset to the beginning
  });
});


/*---------------------- Popular Web Series  -------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const visibleCards = 6; // Number of cards visible at a time
  const cardWidth = 175.78; // Width of each card including margin-right (100px card + 10px margin)
  let currentIndex = 0;
  
  const cardContainer = document.getElementById("slider5");
  const totalCards = document.querySelectorAll(".slider5 .movie").length;
  
  
  // Update the card container's position
  const updateCardContainer = () => {
   const offset = -currentIndex * cardWidth; // Calculate the offset
   cardContainer.style.transform = `translateX(${offset}px)`; // Apply translation with animation
  };
  
  // Event listeners for buttons
  document.getElementById("swipe-left5").addEventListener("click", () => {
      console.log("left click")
   if (currentIndex > 0) {
     currentIndex -= visibleCards; // Move to the previous set of cards
     updateCardContainer();
   }
  });
  
  document.getElementById("swipe-right5").addEventListener("click", () => {
      console.log("right click")
   if (currentIndex < totalCards - visibleCards) {
     currentIndex += visibleCards; // Move to the next set of cards
     updateCardContainer();
   }
  });
  
  // Initialize the position
  updateCardContainer();
  });


  /*--------------- Active Class ---------------------------*/

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

/*------------------- sports hover ----------------------*/
const icon2 = document.getElementById('sport1')
const icon6 = document.querySelector("#sports23")
// On hover, switch between outline and fill
icon6.addEventListener('mouseenter', () => {
    icon2.classList.remove('bi-pie-chart');
    icon2.classList.add('bi-pie-chart-fill');
});

icon6.addEventListener('mouseleave', () => {
    icon2.classList.remove('bi-pie-chart-fill');
    icon2.classList.add('bi-pie-chart');
});

const icon3 = document.getElementById('chat-icon')
const icon64 = document.querySelector("#chat")
// On hover, switch between outline and fill
icon64.addEventListener('mouseenter', () => {
    icon3.classList.remove('bi-chat-dots');
    icon3.classList.add('bi-chat-dots-fill');
});

icon64.addEventListener('mouseleave', () => {
    icon3.classList.remove('bi-chat-dots-fill');
    icon3.classList.add('bi-chat-dots');
});