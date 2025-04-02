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

/*---------- chatboat Nexa --------------*/
const messageForm = document.querySelector(".prompt__form");
const chatHistoryContainer = document.querySelector(".chats");

const themeToggleButton = document.getElementById("themeToggler");
const clearChatButton = document.getElementById("deleteButton");

// State variables
let currentUserMessage = null;
let isGeneratingResponse = false;

const GOOGLE_API_KEY = "AIzaSyB5tgVkiVKhLh3Uk3QAkTSuQ-Zw6M2BWts";
//const GOOGLE_API_KEY = "AIzaSyCVbUnflpcd6DN-RT3kCziDMuj5wmcJmYI";
//const API_REQUEST_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${GOOGLE_API_KEY}`;
const API_REQUEST_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GOOGLE_API_KEY}`



// Load saved data from local storage
const loadSavedChatHistory = () => {
    const savedConversations = JSON.parse(localStorage.getItem("saved-api-chats")) || [];

    chatHistoryContainer.innerHTML = '';

    // Iterate through saved chat history and display messages
    savedConversations.forEach(conversation => {
        // Display the user's message
        const userMessageHtml = `

            <div class="message__content">
                <img class="message__avatar" src="https://w7.pngwing.com/pngs/798/436/png-transparent-computer-icons-user-profile-avatar-profile-heroes-black-profile.png" alt="User avatar">
               <p class="message__text">${conversation.userMessage}</p>
            </div>
        
        `;

        const outgoingMessageElement = createChatMessageElement(userMessageHtml, "message--outgoing");
        chatHistoryContainer.appendChild(outgoingMessageElement);

        // Display the API response
        const responseText = conversation.apiResponse?.candidates?.[0]?.content?.parts?.[0]?.text;
        const parsedApiResponse = marked.parse(responseText).replace(/\*\*\*/g, ""); // Convert to HTML
        const rawApiResponse = responseText; // Plain text version

        const responseHtml = `
        
           <div class="message__content">
                <img class="message__avatar" src="https://img.informer.com/icons/png/128/7633/7633328.png" alt="Gemini avatar">
                <p class="message__text"></p>
                <div class="message__loading-indicator hide">
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
                </div>
            </div>
            <span onClick="copyMessageToClipboard(this)" class="message__icon hide"><i class='bx bx-copy-alt'></i></span>
        
        `;

        const incomingMessageElement = createChatMessageElement(responseHtml, "message--incoming");
        chatHistoryContainer.appendChild(incomingMessageElement);

        const messageTextElement = incomingMessageElement.querySelector(".message__text");

        // Display saved chat without typing effect
        showTypingEffect(rawApiResponse, parsedApiResponse, messageTextElement, incomingMessageElement, true); // 'true' skips typing
    });

    document.querySelector(".banner").classList.toggle("hide-header", savedConversations.length > 0);
};

// create a new chat message element
const createChatMessageElement = (htmlContent, ...cssClasses) => {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", ...cssClasses);
    messageElement.innerHTML = htmlContent;
    return messageElement;
}

// Show typing effect
const showTypingEffect = (rawText, htmlText, messageElement, incomingMessageElement, skipEffect = false) => {
    const copyIconElement = incomingMessageElement.querySelector(".message__icon");
    copyIconElement.classList.add("hide"); // Initially hide copy button
    document.querySelector(".chats").classList.add("loaded");


    if (skipEffect) {
        // Display content directly without typing
        messageElement.innerHTML = htmlText.replace(/\*\*\*/g, "");;
        hljs.highlightAll();
        addCopyButtonToCodeBlocks();
        copyIconElement.classList.remove("hide"); // Show copy button
        isGeneratingResponse = false;

        setTimeout(() => {
            document.querySelectorAll(".chats ul, .chats ol").forEach(list => {
                list.style.listStyle = "disc inside"; // Ensure list-style is applied
            });
        }, 100); 
        
        return;
    }

    const wordsArray = rawText.split(' ');
    let wordIndex = 0;

    const typingInterval = setInterval(() => {
        messageElement.innerText += (wordIndex === 0 ? '' : ' ') + wordsArray[wordIndex++];
        if (wordIndex === wordsArray.length) {
            clearInterval(typingInterval);
            isGeneratingResponse = false;
            messageElement.innerHTML = htmlText.replace(/\*\*\*/g, "");
            hljs.highlightAll();
            addCopyButtonToCodeBlocks();
            copyIconElement.classList.remove("hide");

            setTimeout(() => {
                document.querySelectorAll(".chats ul, .chats ol").forEach(list => {
                    list.style.listStyle = "disc inside";
                });
            }, 100);
        }
    }, 75);
};

// Fetch API response based on user input
const requestApiResponse = async (incomingMessageElement) => {
    const messageTextElement = incomingMessageElement.querySelector(".message__text");

    try {
        const response = await fetch(API_REQUEST_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ role: "user", parts: [{ text: currentUserMessage }] }]
            }),
        });

        const responseData = await response.json();
        if (!response.ok) throw new Error(responseData.error.message);

        const responseText = responseData?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!responseText) throw new Error("Invalid API response.");

        const parsedApiResponse = marked.parse(responseText);
        const rawApiResponse = responseText;

        showTypingEffect(rawApiResponse, parsedApiResponse, messageTextElement, incomingMessageElement);

        // Save conversation in local storage
        let savedConversations = JSON.parse(localStorage.getItem("saved-api-chats")) || [];
        savedConversations.push({
            userMessage: currentUserMessage,
            apiResponse: responseData
        });
        localStorage.setItem("saved-api-chats", JSON.stringify(savedConversations));
    } catch (error) {
        isGeneratingResponse = false;
        messageTextElement.innerText = error.message;
        messageTextElement.closest(".message").classList.add("message--error");
    } finally {
        incomingMessageElement.classList.remove("message--loading");
    }
};

const addCopyButtonToCodeBlocks = () => {
    const codeBlocks = document.querySelectorAll('pre');

    codeBlocks.forEach((block) => {
        const codeElement = block.querySelector('code');
        let language = [...codeElement.classList].find(cls => cls.startsWith('language-'))?.replace('language-', '') || 'Text';

        // Ensure parent <pre> is relative
        block.style.position = "relative";

        const languageLabel = document.createElement('div');
        languageLabel.innerText = language.charAt(0).toUpperCase() + language.slice(1);
        languageLabel.classList.add('code__language-label');
        block.appendChild(languageLabel);

        const copyButton = document.createElement('button');
        copyButton.innerHTML = `<i class='bx bx-copy'></i>`;
        copyButton.classList.add('code__copy-btn');
        copyButton.setAttribute("data-tooltip", "Copy"); // Tooltip added
        block.appendChild(copyButton);

        copyButton.addEventListener('mouseenter', () => {
            copyButton.setAttribute("data-tooltip", "copy");
        });

        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(codeElement.innerText).then(() => {
                copyButton.innerHTML = `<i class='bx bx-check'></i>`;
                copyButton.setAttribute("data-tooltip", "Copied!"); // Change tooltip text
                setTimeout(() => {
                    copyButton.innerHTML = `<i class='bx bx-copy'></i>`;
                    copyButton.setAttribute("data-tooltip", "Copy");
                }, 2000);
            }).catch(err => {
                console.error("Copy failed:", err);
                alert("Unable to copy text!");
            });
        });
    });
};


// Show loading animation during API request
const displayLoadingAnimation = () => {
    const loadingHtml = `

        <div class="message__content">
            <img class="message__avatar" src="https://img.informer.com/icons/png/128/7633/7633328.png" alt="Gemini avatar">
            <p class="message__text"></p>
            <div class="message__loading-indicator">
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
            </div>
        </div>
        <span onClick="copyMessageToClipboard(this)" class="message__icon hide"><i class='bx bx-copy-alt'></i></span>
    
    `;

    const loadingMessageElement = createChatMessageElement(loadingHtml, "message--incoming", "message--loading");
    chatHistoryContainer.appendChild(loadingMessageElement);

    requestApiResponse(loadingMessageElement);
};

// Copy message to clipboard
const copyMessageToClipboard = (copyButton) => {
    const messageContent = copyButton.parentElement.querySelector(".message__text").innerText;

    navigator.clipboard.writeText(messageContent);
    copyButton.innerHTML = `<i class='bx bx-check'></i>`; // Confirmation icon
    setTimeout(() => copyButton.innerHTML = `<i class='bx bx-copy-alt'></i>`, 1000); // Revert icon after 1 second
};

// Handle sending chat messages
const handleOutgoingMessage = () => {
    currentUserMessage = messageForm.querySelector(".prompt__form-input").value.trim() || currentUserMessage;
    if (!currentUserMessage || isGeneratingResponse) return; // Exit if no message or already generating response

    isGeneratingResponse = true;

    const outgoingMessageHtml = `
    
        <div class="message__content">
            <img class="message__avatar" src="https://w7.pngwing.com/pngs/798/436/png-transparent-computer-icons-user-profile-avatar-profile-heroes-black-profile.png" alt="User avatar">
            <p class="message__text"></p>
        </div>

    `;

    const outgoingMessageElement = createChatMessageElement(outgoingMessageHtml, "message--outgoing");
    outgoingMessageElement.querySelector(".message__text").innerText = currentUserMessage;
    chatHistoryContainer.appendChild(outgoingMessageElement);

    messageForm.reset(); // Clear input field
    document.querySelector(".banner") .classList.add("hide-header");
    setTimeout(displayLoadingAnimation, 500); // Show loading animation after delay
};


// Clear all chat history
clearChatButton.addEventListener('click', () => {
    if (confirm("Are you sure you want to delete all chat history?")) {
        localStorage.removeItem("saved-api-chats");

        // Reload chat history to reflect changes
        loadSavedChatHistory();

        currentUserMessage = null;
        isGeneratingResponse = false;
    }
});



// Prevent default from submission and handle outgoing message
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleOutgoingMessage();
});

// Load saved chat history on page load
loadSavedChatHistory();


document.getElementById("deleteButton").setAttribute("data-tooltip", "Delete");