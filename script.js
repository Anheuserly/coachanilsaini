// GSAP Animations
gsap.from("#home h1", { opacity: 0, y: -50, duration: 1 });
gsap.from(".video-item", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
});
gsap.from("#youtube-feed iframe", { opacity: 0, scale: 0.8, duration: 1, delay: 0.5 });

// Swiper Initialization for any carousel
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Calendar Initialization (example with FullCalendar)
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            { title: 'Event 1', date: '2024-09-01' },
            { title: 'Event 2', date: '2024-09-07' }
        ]
    });
    calendar.render();
});

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    var email = document.getElementById('newsletter-email').value;

    // Perform validation if necessary

    // Send data using fetch or XMLHttpRequest
    fetch('submit_newsletter.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
    })
    .then(response => response.json())
    .then(data => {
      // Handle success
      console.log('Success:', data);
    })
    .catch((error) => {
      // Handle error
      console.error('Error:', error);
    });
  });


  document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission
    const email = document.querySelector('input[name="email"]').value;
    
    if (validateEmail(email)) {
        // You can perform AJAX requests here or handle the data before sending it to the server
        console.log("Email is valid: " + email);
        // Submit the form via AJAX or notify the user
    } else {
        alert("Please enter a valid email address.");
    }
});

function validateEmail(email) {
    // Basic email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


  $(document).ready(function() {
    $('#subscribe-form').submit(function(event) {
        event.preventDefault();
        $.ajax({
            url: 'subscribe.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                // Handle the response from the server
                alert('Subscription successful!');
            },
            error: function() {
                // Handle errors
                alert('An error occurred.');
            }
        });
    });
});

  
