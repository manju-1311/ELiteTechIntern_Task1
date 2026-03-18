// DATA OBJECT - Update this part to change your website content!
const resumeData = {
    education: [
        { title: "B.Sc Computer Science", school: "Bhaktavatsalam memorial college, Chennai", date: "2024 - Present", score: "CGPA: 8.33" },
        { title: "HSC (12th Grade)", school: "Chennai Girls Higher Secondary School", date: "2023 - 2024", score: "75.6%" },
        { title: "SSLC (10th Grade)", school: "Government High School, Veerapuram", date: "2021 - 2022", score: "70%" }
    ],
    skills: ["Python", "Java", "JavaScript", "HTML", "CSS", "Excel", "MS-Word", "React (Learning)"],
    certifications: [
        "Fundamentals of UX Design (Coursera)",
        "Python Zero to Hero (Guvi)",
        "AI Fundamentals (IBM)",
        "Getting Started With AI (IBM)",
        "MongoDB basics for Students"
    ]
};

// Function to Load Education
function loadEducation() {
    const list = document.getElementById('education-list');
    resumeData.education.forEach(item => {
        list.innerHTML += `
            <div style="margin-bottom: 20px; border-left: 2px solid #6a5acd; padding-left: 15px;">
                <h4>${item.title}</h4>
                <p>${item.school}</p>
                <small>${item.date} | <strong>${item.score}</strong></small>
            </div>
        `;
    });
}

// Function to Load Skills
function loadSkills() {
    const list = document.getElementById('skills-list');
    resumeData.skills.forEach(skill => {
        list.innerHTML += `<div class="skill-card">${skill}</div>`;
    });
}

// Function to Load Certs
function loadCerts() {
    const list = document.getElementById('cert-list');
    resumeData.certifications.forEach(cert => {
        list.innerHTML += `<div class="cert-item"><i class="fas fa-certificate" style="color:#6a5acd"></i> ${cert}</div>`;
    });
}

// Hamburger Menu Toggle
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '8vh';
    nav.style.background = 'white';
    nav.style.width = '100%';
}

// Initialize
window.onload = () => {
    loadEducation();
    loadSkills();
    loadCerts();
};