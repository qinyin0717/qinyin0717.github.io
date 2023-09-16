function validateEmail() {
    var email = document.getElementById("form2").value;
    var validationMessage = document.getElementById("emailValidation");

    // Simple regex pattern for email validation
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        validationMessage.innerText = "correct";
        validationMessage.classList.remove("wrong");
        validationMessage.classList.add("correct");
    } else {
        validationMessage.innerText = "wrong";
        validationMessage.classList.remove("correct");
        validationMessage.classList.add("wrong");
    }

    if (email == "") {
        validationMessage.innerText = "";
    }
}

function validateName() {
    var name = document.getElementById("form3").value;
    var validationMessageName = document.getElementById("nameValidation");

    // Regex pattern to check for numbers or specific characters
    var pattern = /[0-9!@#$%^&*]/;

    if (name.match(pattern)) {
        validationMessageName.innerText = "wrong";
        validationMessageName.classList.remove("correct");
        validationMessageName.classList.add("wrong");
    } else {
        validationMessageName.innerText = "correct";
        validationMessageName.classList.remove("wrong");
        validationMessageName.classList.add("correct");
    }

    if (name == "") {
        validationMessageName.innerText = "";
    }
}

    // pop up the notification
    document.addEventListener("DOMContentLoaded", function() {
        var popup = document.getElementById("welcomePopup");
        var closeBtn = document.querySelector(".close-btn");

        window.addEventListener("scroll", function() {
            if (window.scrollY > 10 && !popup.classList.contains("shown")) {
                popup.style.display = "block";
                popup.classList.add("shown");
            }
        });

        closeBtn.addEventListener("click", function() {
            popup.style.display = "none";
        });
    });

// Read the images 
$(document).ready(function(){
    $(".city").click(function(event) {
        // Prevent default link behavior
        event.preventDefault();

        // Create image source based on the clicked city's data attribute
        var cityName = $(this).data('city');
        var imgSrc = "images/states/" + cityName + ".jpg";

        // Find the closest image container and set its source
        $(this).closest('.tab-pane').find('.city-image-container img').attr('src', imgSrc).show();
    });
});

// Back to the top 
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

