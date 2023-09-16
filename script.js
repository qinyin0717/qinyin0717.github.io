
document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
    window.addEventListener("scroll", function() {
        if (window.scrollY > 3000) {
            scrollToTopBtn.classList.add("active");
        } else {
            scrollToTopBtn.classList.remove("active");
        }
    });
  
    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

// Function to increase font size
function increaseFontSize() {
    var elements = document.querySelectorAll('*');
    var newSize;

    elements.forEach(function(element) {
        var currentSize = window.getComputedStyle(element).fontSize;
        newSize = parseFloat(currentSize) * 1.1;
        element.style.fontSize = newSize + 'px';
    });

    // Store the new font size in session storage
    sessionStorage.setItem('fontSize', newSize + 'px');
}

// Function to decrease font size
function decreaseFontSize() {
    var elements = document.querySelectorAll('*');
    var newSize;

    elements.forEach(function(element) {
        var currentSize = window.getComputedStyle(element).fontSize;
        newSize = parseFloat(currentSize) / 1.1;
        element.style.fontSize = newSize + 'px';
    });

    // Store the new font size in session storage
    sessionStorage.setItem('fontSize', newSize + 'px');
}

// Check if there's a stored font size preference and apply it on page load
window.addEventListener('load', function() {
    var storedSize = sessionStorage.getItem('fontSize');
    if (storedSize) {
        var elements = document.querySelectorAll('*');
        elements.forEach(function(element) {
            element.style.fontSize = storedSize;
        });
    }
});


document.querySelectorAll('.star').forEach(function(star) {
    star.addEventListener('click', function() {
        var rating = this.getAttribute('data-rating');
        document.getElementById('rating').value = rating;

        // Reset all stars
        document.querySelectorAll('.star').forEach(function(s) {
            s.classList.remove('active');
        });

        // Set active class for selected stars
        for (var i = 1; i <= rating; i++) {
            document.querySelector('.star[data-rating="' + i + '"]').classList.add('active');
        }
    });
});


document.querySelectorAll('.box').forEach(function(box) {
    box.addEventListener('click', function() {
        var foodInfo = this.querySelector('.food-info');
        if (foodInfo.style.display === 'block') {
            foodInfo.style.display = 'none';
        } else {
            foodInfo.style.display = 'block';
        }
    });
});

const apiKey = 'AIzaSyBxmqP008iME_LoROTFqc2qMxypdViQ6aM';
const cx = 'https://cse.google.com/cse.js?cx=110f7906f58f9404a';

function search(query) {
    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${query}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Process the search results
            console.log(data);
        })
        .catch(error => console.error('Error:', error));
}

// Example usage:
search('example query');



const ApiKey = 'YAIzaSyCBnjZ9rprjv5JAwyN80GrJKEWPFNXVJB8';
const videoId = '1r50HTXbzlI'; // Replace with the actual video ID

fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${ApiKey}`)
    .then(response => response.json())
    .then(data => {
        // Process the video data here
        console.log(data);
    })
    .catch(error => console.error('Error:', error));


    


