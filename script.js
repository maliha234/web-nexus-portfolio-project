// Smooth Scrolling for Navigation Links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default link behavior
  
      const targetId = this.getAttribute('href').substring(1); // Get the section ID
      const targetSection = document.getElementById(targetId); // Get the corresponding section
  
      // Scroll to the section
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  // Hamburger Menu for Mobile Screens
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.navbar');
  
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the visibility of the menu
  });
  
  // Contact Form Validation
  const contactForm = document.getElementById('contact-form');
  
  contactForm.addEventListener('submit', (e) => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Simple validation: Check if all fields are filled
    if (!name || !email || !message) {
      e.preventDefault(); // Prevent form submission
      alert('Please fill in all fields before submitting!');
    } else {
      alert('Your message has been sent successfully!');
    }
  });
  
  // Scroll Animations: Fade in on Scroll
  window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
  
      // Check if element is in view
      if (elementTop < windowHeight) {
        element.classList.add('visible');
      }
    });
  });
  

