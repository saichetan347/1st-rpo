// Enhanced download function with visual feedback
function downloadFile(filePath) {
  // Create and show download feedback element
  const feedback = document.createElement('div');
  feedback.className = 'download-feedback';
  feedback.innerHTML = `
    <div class="download-spinner"></div>
    <span>Preparing download...</span>
  `;
  document.body.appendChild(feedback);

  // Create download link
  const link = document.createElement('a');
  link.href = filePath;
  link.download = filePath.split('/').pop();
  
  // Update feedback when download starts
  link.onclick = () => {
    setTimeout(() => {
      feedback.innerHTML = `
        <svg class="download-check" viewBox="0 0 24 24">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        <span>Download started!</span>
      `;
      setTimeout(() => {
        document.body.removeChild(feedback);
      }, 2000);
    }, 300);
  };
  
  // Trigger download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Certificate viewer function
function viewCertificate(filename) {
  window.open('all_marks/' + filename, '_blank', 'noopener,noreferrer');
}

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
      history.pushState(null, null, targetId);
    }
  });
});

// Highlight current section in navigation
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('nav a');
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 200) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});
