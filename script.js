// Navigation toggle for mobile
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinksArray = document.querySelectorAll('.nav-link[href^="#"]');

function highlightNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinksArray.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNav);

// Load projects dynamically
const projects = [
    {
        id: 'parasocialist',
        title: 'Parasocialist',
        description: 'A Berlin-based punk project weaving sardonic wit and playful defiance. Rejoice! EP released September 2025.',
        image: 'assets/images/parasocialist/cover.jpg',
        tags: ['Music', 'Punk', 'Berlin', 'Production'],
        link: 'projects/project-1.html'
    },
    {
        id: 'project-2',
        title: 'Sample Project 2',
        description: 'Another project description. Showcase your work, skills, and creativity here.',
        image: 'https://via.placeholder.com/400x200',
        tags: ['Design', 'UI/UX', 'React'],
        link: 'projects/project-2.html'
    },
    {
        id: 'project-3',
        title: 'Sample Project 3',
        description: 'Add more projects to demonstrate your range of skills and interests.',
        image: 'https://via.placeholder.com/400x200',
        tags: ['Mobile', 'iOS', 'Swift'],
        link: 'projects/project-3.html'
    }
];

function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = projects.map(project => `
        <a href="${project.link}" class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-image" onerror="this.style.background='linear-gradient(135deg, #6366f1, #8b5cf6)'">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </a>
    `).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    highlightNav();
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

