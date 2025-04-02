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
/*------------- Disney Movies -----------------*/

document.addEventListener("DOMContentLoaded", function () {
    const visibleCards = 6; // Number of cards visible at a time
    const cardWidth = 175.3 // Width of each card including margin-right (100px card + 10px margin)
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

    /*------------- Marvel Movies -----------*/
    document.addEventListener("DOMContentLoaded", function () {
        const visibleCards = 6; // Number of cards visible at a time
        const cardWidth = 183 // Width of each card including margin-right (100px card + 10px margin)
        let currentIndex = 0;
        
        const cardContainer = document.getElementById("slider10");
        const totalCards = document.querySelectorAll(".slider10 .movie").length;
        
        
        // Update the card container's position
        const updateCardContainer = () => {
         const offset = -currentIndex * cardWidth; // Calculate the offset
         cardContainer.style.transform = `translateX(${offset}px)`; // Apply translation with animation
        };
        
        // Event listeners for buttons
        document.getElementById("swipe-left10").addEventListener("click", () => {
            console.log("left click")
         if (currentIndex > 0) {
           currentIndex -= visibleCards; // Move to the previous set of cards
           updateCardContainer();
         }
        });
        
        document.getElementById("swipe-right10").addEventListener("click", () => {
            console.log("right click")
         if (currentIndex < totalCards - visibleCards) {
           currentIndex += visibleCards; // Move to the next set of cards
           updateCardContainer();
         }
        });
        
        // Initialize the position
        updateCardContainer();
        });

          /*------------- Pixar Movies -----------*/
    document.addEventListener("DOMContentLoaded", function () {
        const visibleCards = 6; // Number of cards visible at a time
        const cardWidth = 183 // Width of each card including margin-right (100px card + 10px margin)
        let currentIndex = 0;
        
        const cardContainer = document.getElementById("slider11");
        const totalCards = document.querySelectorAll(".slider11 .movie").length;
        
        
        // Update the card container's position
        const updateCardContainer = () => {
         const offset = -currentIndex * cardWidth; // Calculate the offset
         cardContainer.style.transform = `translateX(${offset}px)`; // Apply translation with animation
        };
        
        // Event listeners for buttons
        document.getElementById("swipe-left11").addEventListener("click", () => {
            console.log("left click")
         if (currentIndex > 0) {
           currentIndex -= visibleCards; // Move to the previous set of cards
           updateCardContainer();
         }
        });
        
        document.getElementById("swipe-right11").addEventListener("click", () => {
            console.log("right click")
         if (currentIndex < totalCards - visibleCards) {
           currentIndex += visibleCards; // Move to the next set of cards
           updateCardContainer();
         }
        });
        
        // Initialize the position
        updateCardContainer();
        })

         /*------------- Documentary Movies -----------*/
         document.addEventListener("DOMContentLoaded", function () {
            const visibleCards = 6; // Number of cards visible at a time
            const cardWidth = 183 // Width of each card including margin-right (100px card + 10px margin)
            let currentIndex = 0;
            
            const cardContainer = document.getElementById("slider12");
            const totalCards = document.querySelectorAll(".slider12 .movie").length;
            
            
            // Update the card container's position
            const updateCardContainer = () => {
             const offset = -currentIndex * cardWidth; // Calculate the offset
             cardContainer.style.transform = `translateX(${offset}px)`; // Apply translation with animation
            };
            
            // Event listeners for buttons
            document.getElementById("swipe-left12").addEventListener("click", () => {
                console.log("left click")
             if (currentIndex > 0) {
               currentIndex -= visibleCards; // Move to the previous set of cards
               updateCardContainer();
             }
            });
            
            document.getElementById("swipe-right12").addEventListener("click", () => {
                console.log("right click")
             if (currentIndex < totalCards - visibleCards) {
               currentIndex += visibleCards; // Move to the next set of cards
               updateCardContainer();
             }
            });
            
            // Initialize the position
            updateCardContainer();
            })

            
    /*-------------------- Horror Movies -------------------------*/
    document.addEventListener("DOMContentLoaded", function () {
        const visibleCards = 6; // Number of cards visible at a time
        const cardWidth = 183 // Width of each card including margin-right (100px card + 10px margin)
        let currentIndex = 0;
        
        const cardContainer = document.getElementById("slider9");
        const totalCards = document.querySelectorAll(".slider9 .movie").length;
        
        
        // Update the card container's position
        const updateCardContainer = () => {
         const offset = -currentIndex * cardWidth; // Calculate the offset
         cardContainer.style.transform = `translateX(${offset}px)`; // Apply translation with animation
        };
        
        // Event listeners for buttons
        document.getElementById("swipe-left9").addEventListener("click", () => {
            console.log("left click")
         if (currentIndex > 0) {
           currentIndex -= visibleCards; // Move to the previous set of cards
           updateCardContainer();
         }
        });
        
        document.getElementById("swipe-right9").addEventListener("click", () => {
            console.log("right click")
         if (currentIndex < totalCards - visibleCards) {
           currentIndex += visibleCards; // Move to the next set of cards
           updateCardContainer();
         }
        });
        
        // Initialize the position
        updateCardContainer();
        });