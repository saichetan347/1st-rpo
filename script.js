// script.js
function downloadFile(filePath) {
  // In a real implementation, this would initiate file download
  console.log(`Attempting to download: ${filePath}`);
  
  // For demo purposes, show an alert
  const fileName = filePath.split('/').pop();
  alert(`Downloading: ${fileName}\n\nNote: This is a demo. In production, this would download the actual file.`);
  
  // Actual implementation would be:
  // const link = document.createElement('a');
  // link.href = filePath;
  // link.download = fileName;
  // link.click();
}
function viewCertificate(filename) {
  // In production: window.open('all marks/' + filename, '_blank');
  alert(`Would normally open: ${filename}\n\nFor demo purposes, this shows the alert instead.`);
  // Alternatively for demo:
  // window.open('https://example.com/demo.pdf', '_blank');
}

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
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
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});
// In your script.js file
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