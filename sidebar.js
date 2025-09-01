document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.getElementById('menu-btn');
    const mainContent = document.getElementById('main-content');

    // Function to open the sidebar
    const openSidebar = () => {
        sidebar.classList.add('open');
        mainContent.classList.add('blur');
    };

    // Function to close the sidebar
    const closeSidebar = () => {
        sidebar.classList.remove('open');
        mainContent.classList.remove('blur');
    };

    // Event listener for the menu button to toggle the sidebar
    menuBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click from bubbling up to the main content
        if (sidebar.classList.contains('open')) {
            closeSidebar();
        } else {
            openSidebar();
        }
    });

    // Event listener to close the sidebar when clicking on the blurred main content
    mainContent.addEventListener('click', () => {
        if (sidebar.classList.contains('open')) {
            closeSidebar();
        }
    });

    // Prevent clicks inside the sidebar from closing it
    sidebar.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});