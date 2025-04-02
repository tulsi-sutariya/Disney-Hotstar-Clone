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

/*------------------- Search bar ---------------------------*/

// Titles: https://omdbapi.com/?s=thor&page=1&apikey=fc1fef96
// details: http://www.omdbapi.com/?i=tt3896198&apikey=fc1fef96

const apiKey = 'aea8ac44';  // Replace with your OMDb API key
const searchBar = document.querySelector("#search-bar")
const autocompleteResults = document.getElementById('autocomplete-results');
const movieDetails = document.getElementById('movie-details');
const header = document.querySelector("#search-ft")

const searchHistoryContainer = document.querySelector(".historys")
searchHistoryContainer.classList.add('search-history');

const searchWrapper = document.createElement('div');
searchWrapper.classList.add('search-wrapper');
searchBar.parentNode.insertBefore(searchWrapper, searchBar);
searchWrapper.appendChild(searchBar);

const clearSearchBtn = document.querySelector(".prompt__form_cross");
clearSearchBtn.style.display = 'none';
clearSearchBtn.onclick = () => { 
    searchBar.value = ''; 
    autocompleteResults.innerHTML = ''; 
    clearSearchBtn.style.display = 'none';
    searchHistoryContainer.style.display = 'flex'; // Show history when clearing search
   header.style.display = "block";
};
searchWrapper.appendChild(clearSearchBtn);

let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

displaySearchHistory();

function fetchAutocomplete(query) {
    if (query.length === 0) {
        autocompleteResults.innerHTML = '';
        clearSearchBtn.style.display = 'none';
        header.style.display = "block";
        searchHistoryContainer.style.display = 'flex'; // Show history when search is empty
        return;
    }
    
    searchHistoryContainer.style.display = 'none';  // Hide history when typing
    movieDetails.style.display= "none";
    header.style.display="none";

    clearSearchBtn.style.display = 'flex';
    autocompleteResults.innerHTML = '';
    
    axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`)
        .then(response => {
            const results = response.data.Search;
            let suggestions = '';
            if (results) {
                results.forEach(item => {
                    suggestions += `
                        <div class="autocomplete-item" onclick="handleSearch('${item.Title}')">
                            ${item.Title} (${item.Year})
                        </div>
                    `;
                });
            }
            autocompleteResults.innerHTML = suggestions;
        })
        .catch(error => console.error(error));
}



let debounceTimer;
searchBar.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => fetchAutocomplete(searchBar.value), 100);
});
function handleSearch(query) {
    searchBar.value = query;
    autocompleteResults.innerHTML = '';
    clearSearchBtn.style.display = 'flex';
    searchHistoryContainer.style.display = 'none';

    movieDetails.style.display= "inline-block" // Hide history when showing movie details
    header.style.display = "none";
    fetchMovieDetails(query);
    addToSearchHistory(query);
}


async function fetchMovieDetails(query) {
    //header.style.visibility="hidden";
    header.style.display = "none"
    movieDetails.innerHTML = `<div class="hand">
    <div class="loading">
                    <div class="finger finger-1">
                      <div class="finger-item">
                        <span></span><i></i>
                      </div>
                    </div>
                    <div class="finger finger-2">
                      <div class="finger-item">
                        <span></span><i></i>
                      </div>
                    </div>
                    <div class="finger finger-3">
                      <div class="finger-item">
                        <span></span><i></i>
                      </div>
                    </div>
                    <div class="finger finger-4">
                      <div class="finger-item">
                        <span></span><i></i>
                      </div>
                    </div>
                    <div class="last-finger">
                      <div class="last-finger-item"><i></i></div>
                    </div>
                  </div>
    </div>`;

    try {
 
        const movieResponse = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&t=${query}`);
        const movie = movieResponse.data;

        if (movie.Response === "True"){
            const imdbLink = `<button type="button" class="watch-btn" style="margin-top:25px">
            <a href="https://www.imdb.com/title/${movie.imdbID}" target="_self"><i class="bi bi-play-fill  pe-1 " style="font-size: 31px;"></i> Watch Now</a>
               </button>`;
            const output = `
            <div class="movie-poster">
            <img src="${movie.Poster}" alt="">
            </div>
                <div class="movie-description">
                    <h5>${movie.Title}</h5>
                         <h6 class="mb-2">${movie.Year}&nbsp;&nbsp; <span style="font-size: 36px;vertical-align: middle;">&#8729;</span>
                            ${movie.Runtime}&nbsp;&nbsp;</span> 
                            <span style="font-size: 36px;vertical-align: middle;margin-left:4px;">&#8729;</span><strong>&nbsp;IMDB : </strong>${movie.imdbRating}
                         </h6>
                    <p class="mb-3">${movie.Plot}</p>
                         <h6 class="mb-2 mt-1">| &nbsp; ${movie.Genre} &nbsp; |</h6>
                    ${imdbLink}
                </div>
            `;
            movieDetails.innerHTML = output;
           header.style.display = "block"
        } else {
            movieDetails.innerHTML = `<p>Sorry, no results found for "${query}".</p>`;
            header.style.display="block";
        }
    } catch (error) {
        movieDetails.innerHTML = `<p>There was an error fetching the details. Please try again.</p>`;
        console.error(error);
        header.style.display="block";
    }
}
// Simulated video ID fetch (replace with actual YouTube Data API call if you have API access)
async function fetchVideoId(query) {
    // This is a simplified version. In production, you should use the YouTube Data API
    // For now, returning a sample video ID
    return 'dQw4w9WgXcQ';
}

function toggleVideo() {
    const videoContainer = document.getElementById('video-container');
    if (videoContainer) {
        videoContainer.style.display = videoContainer.style.display === 'none' ? 'block' : 'none';
    }
}

function addToSearchHistory(query) {
    if (!searchHistory.includes(query)) {
        searchHistory.push(query);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        displaySearchHistory();
    }
}

function displaySearchHistory() {
    searchHistoryContainer.innerHTML = '<div class="history-wrapper ">';
    searchHistory.forEach((item, index) => {
        searchHistoryContainer.innerHTML += `
        <div class= "history-item">
            <button class="delete-history" onclick="fetchMovieDetails('${item}')" style="margin-right:13px;font-size:21px"><i class="bi bi-clock text-white"></i></button>
            <span class="history" onclick="handleSearch('${item}')">${item}</span>
            <button class="delete-history" onclick="deleteHistory(${index})" style="margin-left:10px;font-size:28px"><i class="bi bi-x text-white"></i></button>
            </div>
        `;
    });
    searchHistoryContainer.innerHTML += '</div>';
}

function deleteHistory(index) {
    searchHistory.splice(index, 1);
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    displaySearchHistory();
}

searchBar.addEventListener('input', () => fetchAutocomplete(searchBar.value));

