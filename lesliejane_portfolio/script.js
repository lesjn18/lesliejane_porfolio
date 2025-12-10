// ========================================
// NAVIGATION FUNCTIONALITY
// ========================================
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

// ========================================
// MUSIC SECTION - COLOR BOX FUNCTIONALITY
// ========================================
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

// ========================================
// CONTACT FORM SUBMISSION
// ========================================
function handleSubmit(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    alert(`Thank you for your message!\n\nEmail: ${email}\nSubject: ${subject}\n\nYour message has been received. I'll get back to you soon!`);
    
    event.target.reset();
}

// ========================================
// PROJECT DETAILS MODAL
// ========================================
function showProjectDetails(projectId) {
    const modal = document.getElementById('projectModal');
    const content = document.getElementById('projectDetailsContent');
    
    if (projectId === 'trashscan') {
        content.innerHTML = `
            <div class="project-details">
                <h2>🗑️ TRASHSCAN – Smart Waste Management System</h2>
                <p><em>A Capstone Project | AI-Powered Waste Classification Platform</em></p>
                
                <h3>📌 Project Overview</h3>
                <p>
                    TRASHSCAN is an AI-powered Smart Waste Management System designed to help users identify, classify, 
                    and properly dispose of garbage using image recognition. The goal of the system is to promote better 
                    waste sorting habits, improve recycling awareness, and support eco-friendly decision-making in communities.
                </p>
                <p>The platform analyzes uploaded trash images and provides:</p>
                <ul>
                    <li>✓ Waste classification (Biodegradable, Non-Biodegradable, Recyclable)</li>
                    <li>✓ Proper disposal instructions</li>
                    <li>✓ Recycling tips</li>
                    <li>✓ Environmental impact highlights</li>
                    <li>✓ DIY project ideas for possible reuse</li>
                </ul>

                <h3>📸 Project Screenshots</h3>
                <div class="project-gallery">
                    <div class="gallery-item">
                        <div style="background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%); height: 200px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; border-radius: 10px 10px 0 0;">
                            <div style="text-align: center; padding: 20px;">
                                <div style="font-size: 3em; margin-bottom: 10px;">🌿</div>
                                <div>Landing Page</div>
                            </div>
                        </div>
                        <div class="caption">TRASHSCAN Landing Page</div>
                    </div>
                    <div class="gallery-item">
                        <div style="background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%); height: 200px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; border-radius: 10px 10px 0 0;">
                            <div style="text-align: center; padding: 20px;">
                                <div style="font-size: 3em; margin-bottom: 10px;">🔐</div>
                                <div>Login Page</div>
                            </div>
                        </div>
                        <div class="caption">User Login Interface</div>
                    </div>
                    <div class="gallery-item">
                        <div style="background: linear-gradient(135deg, #FF9800 0%, #F57C00 100%); height: 200px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; border-radius: 10px 10px 0 0;">
                            <div style="text-align: center; padding: 20px;">
                                <div style="font-size: 3em; margin-bottom: 10px;">📤</div>
                                <div>Upload Page</div>
                            </div>
                        </div>
                        <div class="caption">Image Upload & Analysis</div>
                    </div>
                    <div class="gallery-item">
                        <div style="background: linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%); height: 200px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; border-radius: 10px 10px 0 0;">
                            <div style="text-align: center; padding: 20px;">
                                <div style="font-size: 3em; margin-bottom: 10px;">📊</div>
                                <div>Results Page</div>
                            </div>
                        </div>
                        <div class="caption">Analysis Results Display</div>
                    </div>
                    <div class="gallery-item">
                        <div style="background: linear-gradient(135deg, #E91E63 0%, #C2185B 100%); height: 200px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; border-radius: 10px 10px 0 0;">
                            <div style="text-align: center; padding: 20px;">
                                <div style="font-size: 3em; margin-bottom: 10px;">⚙️</div>
                                <div>Admin Dashboard</div>
                            </div>
                        </div>
                        <div class="caption">Admin Control Panel</div>
                    </div>
                    <div class="gallery-item">
                        <div style="background: linear-gradient(135deg, #00BCD4 0%, #0097A7 100%); height: 200px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; border-radius: 10px 10px 0 0;">
                            <div style="text-align: center; padding: 20px;">
                                <div style="font-size: 3em; margin-bottom: 10px;">👥</div>
                                <div>User Management</div>
                            </div>
                        </div>
                        <div class="caption">User Management System</div>
                    </div>
                </div>

                <h3>🛠 My Role</h3>
                <h4>UI/UX Designer & Backend Developer</h4>
                <p>I handled:</p>
                <ul>
                    <li>🎨 Front-end layout and overall user interface design</li>
                    <li>💻 Development of backend features including logic for handling user input, displaying results, 
                        and managing system workflows</li>
                    <li>🧩 Assisted in integrating the analysis results into the UI</li>
                    <li>📂 Contributed to page routing, dashboard design, and visual consistency</li>
                </ul>

                <h3>🔧 Tech Stack</h3>
                <ul>
                    <li><strong>Frontend:</strong> HTML, CSS, JavaScript</li>
                    <li><strong>Backend:</strong> PHP</li>
                    <li><strong>Database:</strong> MySQL</li>
                    <li><strong>Tools:</strong> GitHub</li>
                    <li><strong>Design Tools:</strong> Canva</li>
                </ul>

                <h3>👥 Users & System Workflow</h3>
                
                <h4>Admin Workflow</h4>
                <p>Admins can:</p>
                <ul>
                    <li>Manage user accounts</li>
                    <li>View system analytics</li>
                    <li>View user statistics and analysis history</li>
                    <li>Edit user details</li>
                    <li>Delete accounts</li>
                    <li>Grant admin permissions</li>
                    <li>Upload trash images and generate analysis</li>
                    <li>Update own account information</li>
                </ul>

                <h4>User Workflow</h4>
                <p>Regular users can:</p>
                <ul>
                    <li>Register and log in</li>
                    <li>Upload images for analysis</li>
                    <li>View classification results</li>
                    <li>Receive disposal instructions, recycling tips, environmental impact info, and DIY reuse ideas</li>
                    <li>View personal analysis history</li>
                    <li>Update account details</li>
                </ul>

                <h3>🎯 Project Objectives</h3>
                
                <h4>General Objective</h4>
                <p>
                    To create a web-based system that classifies waste through image analysis and provides practical 
                    recommendations for proper disposal or reuse.
                </p>

                <h4>Specific Objectives</h4>
                <ul>
                    <li>Allow account registration and login</li>
                    <li>Enable users to upload images for waste classification</li>
                    <li>Display category results and suggestions</li>
                    <li>Provide environmental, recycling, and DIY reuse information</li>
                    <li>Offer user history tracking</li>
                    <li>Allow admins to manage users and view analytics</li>
                </ul>

                <h3>🌱 Project Impact</h3>
                <p>TRASHSCAN aims to improve waste management practices by:</p>
                <ul>
                    <li>Reducing incorrect waste disposal</li>
                    <li>Encouraging recycling and reuse</li>
                    <li>Supporting sustainability awareness</li>
                    <li>Providing accessible and user-friendly AI-driven waste classification</li>
                </ul>

                <div style="text-align:center; margin-top: 40px;">
                    <button class="btn btn-primary" onclick="closeProjectDetails()">Close</button>
                </div>
            </div>
        `;
    }
    
    modal.style.display = 'block';
}

function closeProjectDetails() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// ========================================
// SMOOTH SCROLLING FOR NAVIGATION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });
});

// ========================================
// INITIALIZE - SHOW HOME ON LOAD
// ========================================
window.addEventListener('load', () => {
    showSection('home');
});