const dropDownElement = document.querySelectorAll('.dropdown');

dropDownElement.forEach(dropdown => {
  const trigger = dropdown.querySelector('a');
  const menu = dropdown.querySelector('.dropdown-menu');

  // Event listener
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    // Close other dropdowns
    dropDownElement.forEach(d => {
      if (d !== dropdown) {
        d.querySelector('.dropdown-menu').style.display = 'none';
      }
    });
    // Toggle current one
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  });
});

// Close dropdown if clicked outside
document.addEventListener('click', (e) => {
  dropDownElement.forEach(dropdown => {
    if (!dropdown.contains(e.target)) {
      dropdown.querySelector('.dropdown-menu').style.display = 'none';
    }
  });
});
