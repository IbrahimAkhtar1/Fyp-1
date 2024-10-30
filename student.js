// Toggle responsive navigation menu
function myMenuFunction() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("responsive");
}

// Course data for each semester
const coursesBySemester = {
  1: [
    "CSC 1101 Calculus and Analytical Geometry",
    "CSC 1102 English Composition and Comprehension",
    "CSC 1103 Fundamentals of Programming",
    "CSCL 1103 Lab: Fundamentals of Programming",
    "CSC 1108 Introduction to Computer Science",
    "CSCL 1108 Lab: Introduction to Computer Science",
    "CSC 1107 Applied Physics",
    "CSCL 1107 Lab: Applied Physics"
  ],
  2: [
    "CSC 1208 Object Oriented Programming Techniques",
    "CSCL 1208 Lab: Object Oriented Programming Techniques",
    "CSC 1206 Probability and Statistics",
    "CSC 1207 Digital Logic Design",
    "CSCL 1207 Lab: Digital Logic Design",
    "CSC 1209 Islamic Studies/ Humanities",
    "CSC 1211 Ideology and Constitution of Pakistan",
    "CSC 2101 Communication and Presentation Skills"
  ],
  3: [
    "CSC 2102 Data Structures and Algorithms",
    "CSCL 2102 Lab: Data Structures and Algorithms",
    "CSC 3105 Computer Organization and Assembly Language",
    "CSCL 3105 Lab: Computer Organization and Assembly Language",
    "CSC 1201 Discrete Mathematical Structures",
    "CSC 3206 Artificial Intelligence",
    "CSCL 3206 Lab: Artificial Intelligence",
    "CSC 1202 Multivariate Calculus"
  ],
  4: [
    "CSC 3209 Computer Networks",
    "CSCL 3209 Lab: Computer Networks",
    "CSC 2203 Database Systems",
    "CSCL 2203 Lab: Database Systems",
    "CSC 3202 Design and Analysis of Algorithms",
    "AIC 2401 Programming for Artificial Intelligence",
    "AICL 2401 Lab: Programming for Artificial Intelligence",
    "CSC 2206 Linear Algebra",
    "AI Elective - I"
  ],
  5: [
    "CSC 3107 Operating Systems",
    "CSCL 3107 Lab: Operating Systems",
    "AIC 3501 Artificial Neural Networks",
    "AICL 3501 Lab: Artificial Neural Networks",
    "AIC 3503 Machine Learning",
    "AICL 3503 Lab: Machine Learning",
    "AIC 3502 Knowledge Representation and Reasoning",
    "AI Elective - II",
    "CSC 3111 Entrepreneurship"
  ],
  6: [
    "CSC 1205 Technical and Business Writing",
    "AIC 3605 Computer Vision",
    "AICL 3605 Lab: Computer Vision",
    "University Elective - I",
    "CSC 3109 Software Engineering",
    "AI Elective - III",
    "CSC 3110 Civics & Community Engagement"
  ],
  7: [
    "CSC 4107 Information Security",
    "CSCL 4107 Lab: Information Security",
    "CSC 4109 Professional Practices",
    "AI Elective - IV",
    "AI Elective - V",
    "AIC 4707 Final Year Project - I",
    "AI Elective - VI"
  ],
  8: [
    "AIC 4807 Final Year Project-II",
    "AI Elective - VII",
    "CSC 4106 Parallel and Distributed Computing",
    "University Elective - II"
  ]
};

// Display courses based on selected semester
function displayCourses() {
  const semesterSelect = document.getElementById('semesterSelect');
  const selectedSemester = semesterSelect.value;
  const courseList = document.getElementById('courseList');
  
  // Clear current course list
  courseList.innerHTML = '';
  
  // Populate course list for the selected semester
  if (selectedSemester && coursesBySemester[selectedSemester]) {
    coursesBySemester[selectedSemester].forEach(course => {
      const courseCheckbox = document.createElement('input');
      courseCheckbox.type = 'checkbox';
      courseCheckbox.name = 'course';
      courseCheckbox.value = course;
      
      const courseLabel = document.createElement('label');
      courseLabel.appendChild(courseCheckbox);
      courseLabel.append(` ${course}`);
      
      const courseItem = document.createElement('div');
      courseItem.className = 'course-item';
      courseItem.appendChild(courseLabel);
      
      courseList.appendChild(courseItem);
    });
  }
}

// Handle course enrollment form submission
document.getElementById('enrollForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const enrolledList = document.getElementById('enrolledList');
  enrolledList.innerHTML = ''; // Clear previous enrolled courses list

  const selectedCourses = document.querySelectorAll('input[name="course"]:checked');
  if (selectedCourses.length > 0) {
    selectedCourses.forEach(course => {
      const li = document.createElement('li');
      li.textContent = course.value;
      enrolledList.appendChild(li);
    });
    alert('You have successfully enrolled in the selected courses!');
  } else {
    alert('Please select at least one course to enroll.');
  }
});

// Handle logout functionality
document.getElementById('logoutBtn').addEventListener('click', function() {
  localStorage.removeItem('loggedInUser');
  window.location.href = 'index.html';
});

// Load and display the logged-in user's name on the dashboard
document.addEventListener("DOMContentLoaded", function() {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  
  if (!loggedInUser) {
    alert("You are not logged in. Redirecting to the login page.");
    window.location.href = 'index.html';
  } else {
    document.querySelector('header h1').textContent = `Welcome, ${loggedInUser.firstName} ${loggedInUser.lastName}`;
  }
});
