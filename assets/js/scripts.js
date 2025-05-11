// Toggle sidebar on mobile
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('sidebarToggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            document.querySelector('.sidebar').classList.toggle('show-sidebar');
        });
    }
    
    const toggleButtonClose = document.getElementById('sidebarToggleClose');
    if (toggleButtonClose) {
        toggleButtonClose.addEventListener('click', function() {
            document.querySelector('.sidebar').classList.toggle('show-sidebar');
        });
    }
});


// Profile dropdown functionality
const profileButton = document.getElementById('profileButton');
const profileDropdown = document.getElementById('profileDropdown');

// Toggle dropdown when profile button is clicked
profileButton.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent event from bubbling up
    profileDropdown.classList.toggle('auth-show');
});

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    if (!profileButton.contains(e.target)) {
        profileDropdown.classList.remove('auth-show');
    }
});

// Prevent dropdown from closing when clicking inside it
profileDropdown.addEventListener('click', function(e) {
    e.stopPropagation();
});