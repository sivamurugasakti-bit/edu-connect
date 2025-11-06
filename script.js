// --- MOCK DATA: Student Profile ---
const studentProfile = {
    name: "Aisha Sharma",
    studentId: "E1234",
    registerNo: "12CS1023",
    imesId: "IMES-2023-Aisha-1023",
    umisId: "UMIS/CS/0056/2023",
    dob: "15/05/2004",
    gender: "Female", 
    guardianName: "Mrs. Meena Sharma",
    phone: "+91 98765 43210",
    email: "aisha.sharma@college.edu.in",
    aadhaarNo: "XXXX XXXX 5678",
    address: "45-A, Nehru Street, Anna Nagar, Chennai - 600040, Tamil Nadu",
    photoUrl: "https://placehold.co/100x100/0A9396/ffffff?text=AS", 
    sportsParticipation: true,
    sportsName: "Badminton (Singles)",
    sportsStage: "National Level (Bronze Medalist)", 
    currentStatus: "Enrolled (B.Tech Computer Science, Year 2)", 
    major: "B.Tech Computer Science",
    enrollmentDate: "August 2023",
    expectedGraduation: "May 2027",

    academicHistory: [ // High School History
        { name: "Greenwood High School", classes: "Class 9 - Class 12", duration: "4 Years" },
        { name: "City Public School", classes: "Class 1 - Class 8", duration: "8 Years" }
    ],
    collegeHistory: [ 
        { semester: "B.Tech Year 2, Semester 1", gpa: 9.1, details: [{ subject: "Operating Systems", mark: 94, total: 100 }] },
        { semester: "B.Tech Year 1, Semester 2", gpa: 8.8, details: [{ subject: "Data Structures I", mark: 90, total: 100 }] },
        { semester: "B.Tech Year 1, Semester 1", gpa: 8.5, details: [{ subject: "Programming Basics", mark: 88, total: 100 }] }
    ],
    projects: [
        "Data-Driven College Recommendation System (Final Year)",
        "Responsive E-Commerce Frontend (Intermediate)",
        "Microcontroller Traffic Signal Simulation (Beginner)"
    ]
};

// --- MOCK DATA: Academic Performance (High School Data) ---
const academicData = {
    gpa: 9.1, // High School GPA
    readinessScore: "85%", // This will be dynamically calculated now
    history: [ // High School Exams
        { 
            semester: "Grade 12 Pre-Board", 
            gpa: 9.3, 
            subjects: 6,
            details: [
                { subject: "Physics", mark: 95, total: 100 },
                { subject: "Chemistry", mark: 92, total: 100 },
                { subject: "Maths", mark: 98, total: 100 },
                { subject: "Computer Science", mark: 96, total: 100 },
                { subject: "English", mark: 85, total: 100 },
                { subject: "Physical Ed", mark: 99, total: 100 }
            ]
        },
        { 
            semester: "Grade 11 Final", 
            gpa: 8.7, 
            subjects: 7,
            details: [
                { subject: "Physics", mark: 88, total: 100 },
                { subject: "Maths", mark: 90, total: 100 },
            ]
        },
    ],
};

// --- MOCK DATA: College Resources (Guidance tab) ---
const collegeResources = {
    events: [
        { title: "Career Exploration Fair", date: "Jan 15", link: "#", description: "Meet recruiters and alumni from top firms (Virtual).", color: "text-red-500" },
        { title: "Intro to Python Workshop", date: "Jan 20", link: "#", description: "Hands-on session for beginners in Computer Science (On-Campus).", color: "text-green-600" },
    ],
    courses: [
        { name: "Introduction to HTML/CSS", platform: "Codecademy", link: "https://www.codecademy.com/learn/learn-html", duration: "10 hours", icon: "💻" },
        { name: "Financial Literacy Basics", platform: "Coursera", link: "https://www.coursera.org/", duration: "4 weeks", icon: "💰" },
    ],
    quizzes: [
        { name: "Career Aptitude Test", link: "#", description: "Identify potential career matches based on personality.", icon: "🧠" },
        { name: "College Math Readiness Quiz", link: "#", description: "Test your skills for first-year engineering mathematics.", icon: "✖️" },
    ],
    educationNews: [
        { title: "Govt announces new unified policy for college admissions based on merit", source: "The National Herald", date: "Oct 1, 2025", link: "#" },
        { title: "Rise of data science courses in top engineering colleges", source: "Tech Times India", date: "Sep 25, 2025", link: "#" },
    ]
};