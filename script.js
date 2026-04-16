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

// Smooth scrolling for anchor links (including dynamically inserted ones)
document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
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
// NOTE: `anchorId` is used for the inline project detail section on the home page.
const projects = [
    {
        anchorId: 'parasocialist',
        title: 'Parasocialist',
        subtitle: 'Rejoice! EP',
        description: 'A Berlin-based punk project weaving sardonic wit and playful defiance. EP released September 2025.',
        meta: ['September 2025', 'Berlin, Germany', 'Punk'],
        image: 'assets/images/parasocialist/cover.jpg',
        tags: ['Music', 'Punk', 'Berlin', 'Production'],
        link: 'projects/project-1.html'
    },
    {
        anchorId: 'project-2',
        title: 'Project 2',
        subtitle: 'Another example project',
        description: 'A template-style project page. Replace this copy with your real overview, process, and results.',
        meta: ['2024', 'Design'],
        image: '',
        tags: ['Design', 'UI/UX', 'React'],
        link: 'projects/project-2.html'
    },
    {
        anchorId: 'project-3',
        title: 'Project 3',
        subtitle: 'Third example project',
        description: 'A template-style project page for mobile development. Replace with your real content and media.',
        meta: ['2024', 'Mobile Development'],
        image: '',
        tags: ['Mobile', 'Development'],
        link: 'projects/project-3.html'
    }
];

function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    const projectsDetails = document.getElementById('projectsDetails');
    if (!projectsGrid || !projectsDetails) return;

    const imageMarkup = project => {
        if (project.image) {
            return `<img src="${project.image}" alt="${project.title}" class="project-image" onerror="this.onerror=null; this.src=''; this.style.background='linear-gradient(135deg, #6366f1, #8b5cf6)'">`;
        }
        return `<div class="project-image-placeholder" aria-hidden="true"></div>`;
    };

    projectsGrid.innerHTML = projects.map(project => `
        <a href="#${project.anchorId}" class="project-card" aria-label="View project: ${project.title}">
            ${imageMarkup(project)}
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </a>
    `).join('');

    projectsDetails.innerHTML = projects.map(project => `
        <div class="project-detail" id="${project.anchorId}">
            ${project.image ? `
                <img src="${project.image}" alt="${project.title}" class="project-image" onerror="this.onerror=null; this.src=''; this.style.background='linear-gradient(135deg, #6366f1, #8b5cf6)'">
            ` : `
                <div class="project-image-placeholder" aria-hidden="true"></div>
            `}
            <div class="project-detail-header">
                <h3 class="project-detail-title">${project.title}</h3>
                ${project.subtitle ? `<p class="project-detail-subtitle">${project.subtitle}</p>` : ''}
                ${project.meta?.length ? `
                    <div class="project-detail-meta">
                        ${project.meta.map(item => `<span>${item}</span>`).join(' <span class="meta-separator">•</span> ')}
                    </div>
                ` : ''}
            </div>
            <div class="project-detail-body">
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-detail-link">
                    <a href="${project.link}" class="btn btn-secondary">Open Project Page</a>
                </div>
            </div>
        </div>
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

