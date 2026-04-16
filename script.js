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
        link: 'projects/parasocialist-rejoice-ep.html'
    },
    {
        id: 'surface-tension',
        title: 'Surface Tension',
        description: 'An electronic EP by Halffish, written, produced, and mixed by Oren Berkowitz. Released December 2019.',
        image: 'assets/images/halffish/surface-tension-cover.jpeg',
        tags: ['Electronic', 'Deep House', 'Berlin'],
        link: 'projects/halffish-surface-tension.html'
    }
];

function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = projects.map(project => `
        <a href="${project.link}" class="project-card"${project.isExternal ? ' target="_blank" rel="noopener noreferrer"' : ''}>
            <div class="project-media">
                ${project.image
                    ? `<img src="${project.image}" alt="${project.title}" class="project-image" onerror="this.style.background='#000000'">`
                    : `<div class="project-image" aria-hidden="true"></div>`
                }
                <div class="project-info">

                    <div class="project-tooltip">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                    </div>
                </div>
            </div>
            <div class="project-content" aria-hidden="true">
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

