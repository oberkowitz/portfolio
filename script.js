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
        link: 'projects/parasocialist-rejoice-ep.html'
    },
    {
        id: 'good-screen-bad-screen',
        title: 'Good Screen, Bad Screen',
        description: 'An EP that explores the contradictions of life in digital work and creative time. Released December 2020.',
        image: 'assets/images/halffish/Good Screen Bad Screen.jpeg',
        link: 'projects/halffish-good-screen-bad-screen.html'
    },
    {
        id: 'surface-tension',
        title: 'Surface Tension',
        description: 'An electronic EP by Halffish, written, produced, and mixed by Oren Berkowitz. Released December 2019.',
        image: 'assets/images/halffish/surface-tension-cover.jpeg',
        link: 'projects/halffish-surface-tension.html'
    },
    {
        id: 'inattention',
        title: 'Inattention',
        description: 'Halffish\'s debut of immersive electronic sketches and long-form textures. Released February 2016.',
        image: 'assets/images/halffish/Inattention.jpeg',
        link: 'projects/halffish-inattention.html'
    }
];

const edgeNetworkReleases = [
    {
        id: 'edge001-spaceport-lounge-music',
        title: 'EDGE001 - Spaceport Lounge Music',
        description: 'The first Edge Network release featuring Vitling with remixes by Halffish and DJ Sterni. Released April 2021.',
        image: 'assets/images/edge-network/edge001-spaceport-lounge-music.jpg',
        link: 'projects/edge001-spaceport-lounge-music.html'
    },
    {
        id: 'intersections-vol-1',
        title: 'Intersections Vol. 1',
        description: 'Charity compilation with artists across the Edge Network, including Halffish. Released June 2022.',
        image: 'assets/images/edge-network/intersections-vol-1.jpg',
        link: 'projects/intersections-vol-1.html'
    },
    {
        id: 'intersections-vol-2',
        title: 'Intersections Vol. 2',
        description: 'Second charity compilation from Edge Network featuring Halffish and collaborators. Released December 2022.',
        image: 'assets/images/edge-network/intersections-vol-2.jpg',
        link: 'projects/intersections-vol-2.html'
    }
];

function renderProjectCards(items, targetGridId) {
    const targetGrid = document.getElementById(targetGridId);
    if (!targetGrid) return;

    targetGrid.innerHTML = items.map(project => `
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
        </a>
    `).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderProjectCards(projects, 'projectsGrid');
    renderProjectCards(edgeNetworkReleases, 'edgeNetworkGrid');
    highlightNav();
});

