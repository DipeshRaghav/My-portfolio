document.addEventListener('DOMContentLoaded', () => {
    // Hero section animation enhancement
    const heroContent = document.querySelector('.hero-content');
    const heroTitle = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero h2');
    const heroText = document.querySelector('.hero p');
    const heroButton = document.querySelector('.cta-button');

    // Add visible class to elements with a cascading effect
    setTimeout(() => {
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
    }, 300);

    setTimeout(() => {
        heroSubtitle.style.opacity = '1';
        heroSubtitle.style.transform = 'translateY(0)';
    }, 500);

    setTimeout(() => {
        heroText.style.opacity = '1';
        heroText.style.transform = 'translateY(0)';
    }, 700);

    setTimeout(() => {
        heroButton.style.opacity = '1';
        heroButton.style.transform = 'translateY(0)';
    }, 900);

    // Navigation scroll effect
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('nav-scrolled');
        } else {
            header.classList.remove('nav-scrolled');
        }
    });

    // About section animation on scroll
    const aboutCard = document.querySelector('.about-card');
    const aboutQuote = document.querySelector('.about-quote');
    const aboutSection = document.querySelector('.about');

    // Animate about section when scrolled into view
    function checkAboutView() {
        const aboutPosition = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (aboutPosition < screenPosition) {
            aboutCard.style.transform = 'translateY(0)';
            aboutCard.style.opacity = '1';

            setTimeout(() => {
                aboutQuote.style.transform = 'translateY(0)';
                aboutQuote.style.opacity = '1';
            }, 300);

            window.removeEventListener('scroll', checkAboutView);
        }
    }

    window.addEventListener('scroll', checkAboutView);
    checkAboutView(); // Check on initial load

    // Skill category animation on scroll
    const skillCategories = document.querySelectorAll('.skill-category');
    const skillsSection = document.querySelector('.skills');

    // Animate skills when scrolled into view
    function checkSkillsView() {
        const skillsPosition = skillsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (skillsPosition < screenPosition) {
            skillCategories.forEach((category, index) => {
                setTimeout(() => {
                    category.style.transform = 'translateY(0)';
                    category.style.opacity = '1';
                }, 200 * index);
            });

            // Add animation to skill ratings
            document.querySelectorAll('.skill-rating i.fas').forEach((circle, index) => {
                setTimeout(() => {
                    circle.style.transform = 'scale(1.2)';
                    circle.style.textShadow = '0 0 5px rgba(255, 255, 0, 0.5)';

                    setTimeout(() => {
                        circle.style.transform = '';
                        circle.style.textShadow = '';
                    }, 500);
                }, 50 * index);
            });

            window.removeEventListener('scroll', checkSkillsView);
        }
    }

    window.addEventListener('scroll', checkSkillsView);
    checkSkillsView(); // Check on initial load

    // Interactive skill categories
    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', () => {
            const icon = category.querySelector('.skill-category-header i');
            if (icon) {
                icon.style.transform = 'scale(1.3) rotate(10deg)';
                icon.style.textShadow = '0 0 10px rgba(255, 255, 0, 0.7)';
            }
        });

        category.addEventListener('mouseleave', () => {
            const icon = category.querySelector('.skill-category-header i');
            if (icon) {
                icon.style.transform = '';
                icon.style.textShadow = '';
            }
        });
    });

    // Mobile Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');

                navLinks.forEach(link => {
                    link.style.animation = '';
                });
            }
        });
    });

    // Smooth scrolling for anchor links with offset for fixed header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const headerHeight = document.querySelector('header').offsetHeight;

            window.scrollTo({
                top: targetElement.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        });
    });

    // Add active class to navigation links when scrolling
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-links a');
        const headerHeight = document.querySelector('header').offsetHeight;

        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - headerHeight - 100) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // Add scroll to top button functionality
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '&uarr;';
    scrollTopBtn.classList.add('scroll-top');
    document.body.appendChild(scrollTopBtn);

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    // Add the CSS for the scroll to top button
    const style = document.createElement('style');
    style.textContent = `
        .scroll-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 0;
            background-color: var(--primary-color);
            color: var(--secondary-color);
            border: none;
            font-size: 24px;
            font-weight: bold;
            cursor: pointer;
            display: none;
            z-index: 999;
            box-shadow: 0 2px 10px rgba(255, 255, 0, 0.3);
            transition: all 0.3s ease;
        }
        
        .scroll-top:hover {
            background-color: var(--secondary-color);
            color: var(--primary-color);
            transform: translateY(-3px);
            box-shadow: 0 4px 15px rgba(255, 255, 0, 0.5);
            border: 1px solid var(--primary-color);
        }
        
        .nav-links a.active {
            color: var(--primary-color);
            font-weight: 700;
        }
        
        .burger.toggle .line1 {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .burger.toggle .line2 {
            opacity: 0;
        }
        
        .burger.toggle .line3 {
            transform: rotate(45deg) translate(-5px, -6px);
        }

        /* Hero section animation styles */
        .hero h1, .hero h2, .hero p, .cta-button {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
    `;
    document.head.appendChild(style);

    // Project card animation on scroll
    const projectCards = document.querySelectorAll('.project-card');
    const projectsSection = document.querySelector('.projects');

    // Animate projects when scrolled into view
    function checkProjectsView() {
        const projectsPosition = projectsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (projectsPosition < screenPosition) {
            projectCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.transform = 'translateY(0)';
                    card.style.opacity = '1';
                }, 200 * index);
            });

            window.removeEventListener('scroll', checkProjectsView);
        }
    }

    window.addEventListener('scroll', checkProjectsView);
    checkProjectsView(); // Check on initial load

    // Add interactive effects to project cards
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.project-header i');
            if (icon) {
                icon.style.transform = 'scale(1.3) rotate(10deg)';
                icon.style.textShadow = '0 0 10px rgba(255, 255, 0, 0.7)';
            }
        });

        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.project-header i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.textShadow = '';
            }
        });
    });
}); 