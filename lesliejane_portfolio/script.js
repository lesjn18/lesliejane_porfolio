// NAVIGATION FUNCTIONALITY
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// PROJECTS DATA STORAGE
let projects = [
    {
        id: 'trashscan',
        icon: '🗑️',
        title: 'TRASHSCAN',
        subtitle: 'Smart Waste Management System',
        shortDesc: 'An AI-powered waste classification platform that helps users identify and properly dispose of garbage using image recognition.',
        fullDesc: 'TRASHSCAN is an AI-powered Smart Waste Management System designed to help users identify, classify, and properly dispose of garbage using image recognition. The goal of the system is to promote better waste sorting habits, improve recycling awareness, and support eco-friendly decision-making in communities.',
        tech: 'HTML, CSS, JavaScript, PHP, MySQL',
        role: 'UI/UX Designer & Backend Developer',
        features: [
            'Waste classification (Biodegradable, Non-Biodegradable, Recyclable)',
            'Proper disposal instructions',
            'Recycling tips',
            'Environmental impact highlights',
            'DIY project ideas for possible reuse'
        ],
        screenshots: [
            'project-images/trashscan-landing.png',
            'project-images/trashscan-login.png',
            'project-images/trashscan-signup.png',
            'project-images/trashscan-upload.png',
            'project-images/trashscan-analysis.png',
            'project-images/trashscan-history.png',
            'project-images/trashscan-settings.png',
            'project-images/trashscan-admin.png',
            'project-images/trashscan-usermanagement.png'
        ]
    }
];

// MUSIC SECTION - COLOR BOX FUNCTIONALITY
const colors = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
];

function changeColor() {
    const box = document.getElementById('colorBox');
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.background = randomColor;
    box.style.transform = 'rotate(0deg) scale(1)';
}

function randomAnimation() {
    const box = document.getElementById('colorBox');
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomRotate = Math.floor(Math.random() * 360);
    const randomScale = 0.8 + Math.random() * 0.4;
    
    box.style.background = randomColor;
    box.style.transform = `rotate(${randomRotate}deg) scale(${randomScale})`;
}

function resetBox() {
    const box = document.getElementById('colorBox');
    box.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    box.style.transform = 'rotate(0deg) scale(1)';
}

// CONTACT FORM SUBMISSION
function handleSubmit(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    alert(`Thank you for your message!\n\nEmail: ${email}\nSubject: ${subject}\n\nYour message has been received. I'll get back to you soon!`);
    
    event.target.reset();
}

// ADD PROJECT FUNCTIONALITY
function showAddProjectForm() {
    const modal = document.getElementById('addProjectModal');
    modal.style.display = 'block';
}

function closeAddProjectForm() {
    const modal = document.getElementById('addProjectModal');
    modal.style.display = 'none';
    document.getElementById('newProjectForm').reset();
}

function handleAddProject(event) {
    event.preventDefault();
    
    // Get form values
    const icon = document.getElementById('projectIcon').value || '📦';
    const title = document.getElementById('projectTitle').value;
    const subtitle = document.getElementById('projectSubtitle').value;
    const shortDesc = document.getElementById('projectShortDesc').value;
    const fullDesc = document.getElementById('projectFullDesc').value;
    const tech = document.getElementById('projectTech').value;
    const role = document.getElementById('projectRole').value;
    const featuresText = document.getElementById('projectFeatures').value;
    
    // Parse features
    const features = featuresText.split('\n').filter(f => f.trim() !== '');
    
    // Create project ID
    const projectId = title.toLowerCase().replace(/\s+/g, '-');
    
    // Create new project object
    const newProject = {
        id: projectId,
        icon: icon,
        title: title,
        subtitle: subtitle,
        shortDesc: shortDesc,
        fullDesc: fullDesc,
        tech: tech,
        role: role,
        features: features,
        screenshots: []
    };
    
    // Add to projects array
    projects.push(newProject);
    
    // Refresh projects grid
    renderProjects();
    
    // Close modal and reset form
    closeAddProjectForm();
    
    // Show success message
    alert(`✅ Project "${title}" has been added successfully!`);
}

function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = '';
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.onclick = () => showProjectDetails(project.id);
        
        card.innerHTML = `
            <h3>${project.icon} ${project.title}</h3>
            <p class="project-subtitle">${project.subtitle}</p>
            <p>${project.shortDesc}</p>
            <button class="btn btn-small">View Details →</button>
        `;
        
        grid.appendChild(card);
    });
}

// PROJECT DETAILS MODAL
function showProjectDetails(projectId) {
    const modal = document.getElementById('projectModal');
    const content = document.getElementById('projectDetailsContent');
    
    // Find project by ID
    const project = projects.find(p => p.id === projectId);
    
    if (!project) {
        alert('Project not found!');
        return;
    }
    
    // Generate features HTML
    const featuresHTML = project.features.map(f => `<li>✓ ${f}</li>`).join('');
    
    // Generate screenshots HTML if available
    let screenshotsHTML = '';
    if (project.screenshots && project.screenshots.length > 0) {
        const screenshotItems = project.screenshots.map(img => `
            <div class="gallery-item">
                <img src="${img}" alt="Project Screenshot">
                <div class="caption">Screenshot</div>
            </div>
        `).join('');
        
        screenshotsHTML = `
            <h3>📸 Project Screenshots</h3>
            <div class="project-gallery">
                ${screenshotItems}
            </div>
        `;
    }
    
    content.innerHTML = `
        <div class="project-details">
            <h2>${project.icon} ${project.title} – ${project.subtitle}</h2>
            <p><em>A Portfolio Project</em></p>
            
            <h3>📌 Project Overview</h3>
            <p>${project.fullDesc}</p>
            
            ${project.features.length > 0 ? `
            <p>Key features include:</p>
            <ul>
                ${featuresHTML}
            </ul>
            ` : ''}
            
            ${screenshotsHTML}
            
            ${project.role ? `
            <h3>🛠 My Role</h3>
            <h4>${project.role}</h4>
            ` : ''}
            
            ${project.tech ? `
            <h3>🔧 Technologies Used</h3>
            <p>${project.tech}</p>
            ` : ''}
            
            <div style="text-align:center; margin-top: 40px;">
                <button class="btn btn-primary" onclick="closeProjectDetails()">Close</button>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

function closeProjectDetails() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const addModal = document.getElementById('addProjectModal');
    const detailsModal = document.getElementById('projectModal');
    
    if (event.target == addModal) {
        addModal.style.display = 'none';
    }
    if (event.target == detailsModal) {
        detailsModal.style.display = 'none';
    }
}

// SMOOTH SCROLLING FOR NAVIGATION
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });
    
    // Render projects on page load
    renderProjects();
});


// INITIALIZE - SHOW HOME ON LOAD
window.addEventListener('load', () => {
    showSection('home');
});
