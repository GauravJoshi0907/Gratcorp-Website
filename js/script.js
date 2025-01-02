
var $ = jQuery.noConflict();


// Page Loader
$(window).load(function () {
    
    "use strict";
	$('#loader').fadeOut();
});



    // jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    
    "use strict";
    
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 68
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});



// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
	offset: 70
	
});



// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    "use strict";
    $('.navbar-toggle:visible').click();
});
    
    
    
    
    /*----------------------------------------------------*/
    /*	Css3 Transition
    /*----------------------------------------------------*/

        $('*').each(function(){
            if($(this).attr('data-animation')) {
                var $animationName = $(this).attr('data-animation'),
                    $animationDelay = "delay-"+$(this).attr('data-animation-delay');
                $(this).appear (function() {
                    $(this).addClass('animated').addClass($animationName);
                    $(this).addClass('animated').addClass($animationDelay);
                });
            }
        });
    
    

    
    /*--------------------------------------------------*/
    /* Counter*/
    /*--------------------------------------------------*/ 
        

                $('.timer').countTo();

                $('.counter-item').appear(function() {
                    $('.timer').countTo();
                },{accY: -100});
            
        



////------- Testimonials Carousel
	
var testimonial = $("#testimonial-carousel");

testimonial.owlCarousel({
	navigation : true,
	pagination: true,
	slideSpeed : 2500,
	stopOnHover: true,
	autoPlay: 3000,
	singleItem: true,
	transitionStyle : "fade",
	navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
});

	

////------- Pricing Table

$(document).ready(function() {
 
  $(".pricing").owlCarousel({
        pagination: true,
        navigation : false,
        slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 3000,
    	singleItem:false,
        itemsMobile : [550,1],
        itemsDesktopSmall : [991,2],
        items: 4,
		transitionStyle : "fade",
		navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
  });
 
});


////------- Latest News

$(document).ready(function() {
 
  $(".latest-news").owlCarousel({
        pagination: true,
        navigation : false,
        slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 4000,
    	singleItem:false,
        itemsMobile : [550,1],
        itemsDesktopSmall : [991,2],
        items: 3,
		transitionStyle : "fade",
		navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
  });
 
});




// Team Carousel

$(document).ready(function() {
 
  $(".our-team").owlCarousel({
        pagination: true,
        slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 3000,
        items: 4,
    	//singleItem:true,
        itemsMobile : [550,1],
        itemsDesktopSmall : [991,2],
		transitionStyle : "fade",
		navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
  });
 
});



////------- Partner/CLients

$(document).ready(function() {
 
  $(".clients").owlCarousel({
        pagination: false,
        navigation : true,
        slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 3000,
    	singleItem:false,
        itemsMobile : [550,1],
        itemsDesktopSmall : [991,2],
        items: 5,
		transitionStyle : "fade",
		navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
  });
 
});




$ ( function () {

	$(".video").fitVids();
	
});





        // Tab------------------------------


$('#team a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})




/*---------------------------------------------------*/
    /* Progress Bar
    /*---------------------------------------------------*/
    $(document).ready(function($) {
	"use strict";
    
        $('.skill-shortcode').appear(function() {
            $('.progress').each(function(){ 
                $('.progress-bar').css('width',  function(){ return ($(this).attr('data-percentage')+'%')});
            });
        },{accY: -100});
        
        
    });
	

//Code by Gaurav Joshi

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.project-head h1');
    const section = document.getElementById('journey-section');

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCounter = () => {
                const target = +counter.getAttribute('data-target');
                const current = +counter.innerText;
                const speed = +counter.getAttribute('data-speed') || 20; // Default to 20ms if no data-speed

                const increment = Math.ceil(target / 100);

                if (current < target) {
                    counter.innerText = current + increment;
                    setTimeout(updateCounter, speed); // Use custom speed
                } else {
                    counter.innerText = target + "+"; // Add "+" after reaching the target
                }
            };

            // Reset counter to 0 before animation starts
            counter.innerText = "0";
            updateCounter();
        });
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters(); // Restart animation every time section is visible
                }
            });
        },
        {
            threshold: window.innerWidth <= 768 ? 0.3 : 0.7 // Trigger at 30% visibility on smaller screens (below 768px)
        }
    );

    observer.observe(section);
});

//Animation effect for heading 
document.addEventListener("DOMContentLoaded", () => {
    const animatedTexts = document.querySelectorAll(".animated-text");

    const animateText = (element) => {
    const text = element.getAttribute("data-original-text") || element.textContent; // Store original text
        element.setAttribute("data-original-text", text);
        element.innerHTML = ""; // Clear the existing text

        text.split("").forEach((letter, index) => {
            const span = document.createElement("span");
            span.textContent = letter === " " ? "\u00A0" : letter; // Replace spaces with non-breaking spaces
            span.style.animationDelay = `${index * 0.05}s`; // Adjust delay for speed
            element.appendChild(span);
        });
    };


    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateText(entry.target); // Trigger animation every time
                }
            });
        },
        { threshold: 0.5 } // Adjust visibility threshold if needed
    );

    animatedTexts.forEach((text) => observer.observe(text)); // Observe each animated text element
});



//Animation effect for paragraph
document.addEventListener("DOMContentLoaded", function () {
    const paragraphs = document.querySelectorAll('.typing-effect'); // Select all paragraphs with the typing effect class

    // Function to animate text letter by letter
    const animateText = (element) => {
        const text = element.textContent;
        element.textContent = ''; // Clear the text

        // Create a span for each character
        text.split('').forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter === ' ' ? '\u00A0' : letter; // Handle spaces
            span.style.animationDelay = `${index * 0.01}s`; // Adjust delay for letter animation speed
            element.appendChild(span);
        });
    };

    // IntersectionObserver to check if the paragraph is in view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('start-typing'); // Add class to trigger the typing effect
                animateText(entry.target); // Apply the letter animation effect
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the element is in view
    });

    paragraphs.forEach(paragraph => {
        observer.observe(paragraph); // Start observing each paragraph
    });
});

//Slider Functionality

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.testimonials-slider', {
        loop: false, // Disable looping to prevent ghost slides
        slidesPerView: 2, // Show two slides at a time
        slidesPerGroup: 2, // Move two slides at a time
        spaceBetween: 20, // Spacing between slides
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 1, // Show one slide at a time on smaller screens
                slidesPerGroup: 1, // Move one slide at a time on smaller screens
            },
            1024: {
                slidesPerView: 2, // Show two slides at a time on larger screens
                slidesPerGroup: 2, // Move two slides at a time on larger screens
            },
        },
    });
});


//Effect For section heading

document.addEventListener("DOMContentLoaded", function () {
    const allTextElements = document.querySelectorAll('.pop-typing-effect');

    // Function to apply the animation for each text element
    function applyTypingEffect(textElement) {
        const text = textElement.innerText;
        textElement.innerHTML = ''; // Clear the existing text initially

        // Create span elements for each letter (including spaces)
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            
            // Check if the current character is a space
            if (text[i] === ' ') {
                span.innerHTML = '&nbsp;'; // Add a non-breaking space to preserve spacing
            } else {
                span.innerText = text[i];
            }
            
            textElement.appendChild(span);
        }
    }

    // Set up the Intersection Observer to trigger when the element comes into view
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Reset the animation and restart typing effect
                const spans = entry.target.querySelectorAll('span');
                spans.forEach((span, index) => {
                    span.style.animation = 'none'; // Reset animation
                    span.offsetHeight; // Trigger a reflow to restart animation
                    span.style.animation = `typingPop 2s steps(12) ${index * 0.1}s forwards`; // Restart animation
                });
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    // Loop through all text elements with the class "pop-typing-effect"
    allTextElements.forEach(element => {
        applyTypingEffect(element); // Apply the typing effect to each element
        observer.observe(element); // Observe each element for when it comes into view
    });
});
