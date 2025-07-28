 document.addEventListener('DOMContentLoaded', function() {
            // Mobile Menu Toggle
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            
            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Close mobile menu if open
                    mobileMenu.classList.add('hidden');
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80, // Adjust for fixed header
                            behavior: 'smooth'
                        });
                        
                        // Update active nav link
                        document.querySelectorAll('.nav-link').forEach(link => {
                            link.classList.remove('active');
                        });
                        this.classList.add('active');
                    }
                });
            });
            
            // Back to Top Button
            const backToTopButton = document.getElementById('back-to-top');
            
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    backToTopButton.classList.remove('hidden');
                } else {
                    backToTopButton.classList.add('hidden');
                }
            });
            
            backToTopButton.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            // Form Validation
            const infoForm = document.getElementById('infoForm');
            const formSuccess = document.getElementById('formSuccess');
            
            infoForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                let isValid = true;
                
                // Validate name
                const name = document.getElementById('name');
                const nameError = document.getElementById('nameError');
                if (!name.value.trim()) {
                    nameError.classList.remove('hidden');
                    isValid = false;
                } else {
                    nameError.classList.add('hidden');
                }
                
                // Validate email
                const email = document.getElementById('email');
                const emailError = document.getElementById('emailError');
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email.value)) {
                    emailError.classList.remove('hidden');
                    isValid = false;
                } else {
                    emailError.classList.add('hidden');
                }
                
                // Validate phone
                const phone = document.getElementById('phone');
                const phoneError = document.getElementById('phoneError');
                if (!phone.value.trim()) {
                    phoneError.classList.remove('hidden');
                    isValid = false;
                } else {
                    phoneError.classList.add('hidden');
                }
                
                // Validate program
                const program = document.getElementById('program');
                const programError = document.getElementById('programError');
                if (!program.value) {
                    programError.classList.remove('hidden');
                    isValid = false;
                } else {
                    programError.classList.add('hidden');
                }
                
                if (isValid) {
                    infoForm.reset();
                    formSuccess.classList.remove('hidden');
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        formSuccess.classList.add('hidden');
                    }, 5000);
                }
            });
            
            // Highlight active navigation link based on scroll position
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            
            window.addEventListener('scroll', function() {
                let current = '';
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    
                    if (pageYOffset >= (sectionTop - 150)) {
                        current = section.getAttribute('id');
                    }
                });
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('active');
                    }
                });
            });
            
            // Course card hover effect
            const courseCards = document.querySelectorAll('.course-card');
            courseCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px)';
                    this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = '';
                    this.style.boxShadow = '';
                });
            });
        });