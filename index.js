/* JavaScript for Hamburger Menu Toggle */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
/* Toggle the 'active' class on nav-links when hamburger is clicked */
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
/* JavaScript for Tab Switching between Student and Admin Forms */
document.addEventListener("DOMContentLoaded", () => {
  // Tab switching
  const studentTab = document.getElementById('studentTab');
  const adminTab = document.getElementById('adminTab');
  const studentForm = document.getElementById('studentForm');
  const adminForm = document.getElementById('adminForm');

  studentTab.addEventListener('click', () => {
    studentTab.classList.add('active');
    adminTab.classList.remove('active');
    studentForm.classList.add('active');
    adminForm.classList.remove('active');
  });

  adminTab.addEventListener('click', () => {
    adminTab.classList.add('active');
    studentTab.classList.remove('active');
    adminForm.classList.add('active');
    studentForm.classList.remove('active');
  });
});
