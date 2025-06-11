function downloadFile(filePath) {
  // Create a temporary link element
  const link = document.createElement('a');
  link.href = filePath;
  
  // Extract filename from path
  const fileName = filePath.split('/').pop(); 
  link.download = fileName;
  
  // Append to body (required for Firefox)
  document.body.appendChild(link);
  
  // Trigger click
  link.click();
  
  // Clean up
  document.body.removeChild(link);
}

function viewCertificate(filename) {
  // Open certificate in new tab
  window.open('all_marks/' + filename, '_blank');
}

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for header height
        behavior: 'smooth'
      });
      
      // Update URL without page jump
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
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - 200) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {  // Fixed: Added backticks
      link.classList.add('active');
    }
  });
});
