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
/*---------------- fill color inside the icon -----------------------*/


/*-------------- Net Geo Shows --------------------*/ 
document.addEventListener("DOMContentLoaded", function () {
  const visibleCards = 6; // Number of cards visible at a time
  const cardWidth = 175.2; // Width of each card including margin-right (100px card + 10px margin)
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
  /*--------------- Popular Channel --------------*/
  document.addEventListener("DOMContentLoaded", function () {
    const visibleCards = 4; // Number of cards visible at a time
    const cardWidth = 278; // Width of each card including margin-right (100px card + 10px margin)
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
   /*----------- Top 10 Movies ---------------- */
document.addEventListener("DOMContentLoaded", function () {
const visibleCards = 6; // Number of cards visible at a time
const cardWidth = 175; // Width of each card including margin-right (100px card + 10px margin)
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

    /*-------------------- Kids Shows -------------------------*/
    document.addEventListener("DOMContentLoaded", function () {
        const visibleCards = 6; // Number of cards visible at a time
        const cardWidth = 180.8 // Width of each card including margin-right (100px card + 10px margin)
        let currentIndex = 0;
        
        const cardContainer = document.getElementById("slider6");
        const totalCards = document.querySelectorAll(".slider6 .movie").length;
        
        
        // Update the card container's position
        const updateCardContainer = () => {
         const offset = -currentIndex * cardWidth; // Calculate the offset
         cardContainer.style.transform = `translateX(${offset}px)`; // Apply translation with animation
        };
        
        // Event listeners for buttons
        document.getElementById("swipe-left6").addEventListener("click", () => {
            console.log("left click")
         if (currentIndex > 0) {
           currentIndex -= visibleCards; // Move to the previous set of cards
           updateCardContainer();
         }
        });
        
        document.getElementById("swipe-right6").addEventListener("click", () => {
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


/*---------------------- Reality Shows  -------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const visibleCards = 6; // Number of cards visible at a time
  const cardWidth = 177 // Width of each card including margin-right (100px card + 10px margin)
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

  /*---------------  Star Bharat Laughter Club --------------------*/
  document.addEventListener("DOMContentLoaded", function () {
    const visibleCards = 6; // Number of cards visible at a time
    const cardWidth = 184; // Width of each card including margin-right (100px card + 10px margin)
    let currentIndex = 0;
    
    const cardContainer = document.getElementById("slider7");
    const totalCards = document.querySelectorAll(".slider7 .movie").length;
    
    
    // Update the card container's position
    const updateCardContainer = () => {
     const offset = -currentIndex * cardWidth; // Calculate the offset
     cardContainer.style.transform = `translateX(${offset}px)`; // Apply translation with animation
    };
    
    // Event listeners for buttons
    document.getElementById("swipe-left7").addEventListener("click", () => {
        console.log("left click")
     if (currentIndex > 0) {
       currentIndex -= visibleCards; // Move to the previous set of cards
       updateCardContainer();
     }
    });
    
    document.getElementById("swipe-right7").addEventListener("click", () => {
        console.log("right click")
     if (currentIndex < totalCards - visibleCards) {
       currentIndex += visibleCards; // Move to the next set of cards
       updateCardContainer();
     }
    });
    
    // Initialize the position
    updateCardContainer();
    });
/*--------------------- StarPlus Shows -------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const visibleCards = 6; // Number of cards visible at a time
  const cardWidth = 184; // Width of each card including margin-right (100px card + 10px margin)
  let currentIndex = 0;
  
  const cardContainer = document.getElementById("slider8");
  const totalCards = document.querySelectorAll(".slider8 .movie").length;
  
  
  // Update the card container's position
  const updateCardContainer = () => {
   const offset = -currentIndex * cardWidth; // Calculate the offset
   cardContainer.style.transform = `translateX(${offset}px)`; // Apply translation with animation
  };
  
  // Event listeners for buttons
  document.getElementById("swipe-left8").addEventListener("click", () => {
      console.log("left click")
   if (currentIndex > 0) {
     currentIndex -= visibleCards; // Move to the previous set of cards
     updateCardContainer();
   }
  });
  
  document.getElementById("swipe-right8").addEventListener("click", () => {
      console.log("right click")
   if (currentIndex < totalCards - visibleCards) {
     currentIndex += visibleCards; // Move to the next set of cards
     updateCardContainer();
   }
  });
  
  // Initialize the position
  updateCardContainer();
  });