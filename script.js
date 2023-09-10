function hideWholeScreen() {
    const animation = document.querySelector('.animation')
    animation.style.display = 'none';
}

function resetNavItemsAndDropdowns() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.style.transform = '';
        const dropdown = item.querySelector('.dropdown');
        if (dropdown) {
            dropdown.style.transform = 'translateY(-100%)';
            dropdown.classList.remove('open');
            dropdown.classList.remove('div-to-disable');
        }
    });
}

function handleNavItemClick(event) {
    event.preventDefault();

    // Check if the screen width is smaller than 1200px
    if (window.innerWidth < 1200) {
        const link = event.target;
        const navItem = link.parentElement;
        const dropdown = navItem.querySelector('.dropdown');
        const navItems = document.querySelectorAll('.nav-item');

        // Get the height of the dropdown
        if (dropdown) {
            const dropdownHeight = dropdown.offsetHeight;

            // Check if the dropdown is already open
            const isOpen = dropdown.classList.contains('open');

            resetNavItemsAndDropdowns();

            if (isOpen) {
                // Close the dropdown and reset translation
                closeMenu();
            } else {
                // Open the dropdown and move subsequent items
                dropdown.classList.add('open');
                dropdown.classList.add('div-to-disable');
                dropdown.style.transform = `translateY(100px)`;
                let moveItems = false;
                navItems.forEach(item => {
                    if (moveItems) {
                        item.style.transform = `translateY(${dropdownHeight}px)`;
                    }
                    if (item === navItem) {
                        moveItems = true;
                    }
                });
            }
        } else {
            // If there's no dropdown, close the menu
            closeMenu();
        }
    }
}

function closeMenu() {
    const menuCheckbox = document.getElementById('menu-checkbox');
    menuCheckbox.checked = false;
    const nav = document.querySelector('.nav');
    nav.style.transform = 'translateX(100%)';
    nav.style.pointerEvents = 'none';
    resetNavItemsAndDropdowns();
}

document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(navItem => {
        const link = navItem.querySelector('a');
        link.addEventListener('click', handleNavItemClick);
    });
});

// Add event listeners for links within .dropdown elements to close the menu
document.addEventListener('DOMContentLoaded', function () {
    const dropdownLinks = document.querySelectorAll('.dropdown li a');

    dropdownLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            // Check if the screen width is smaller than 1200px
            if (window.innerWidth < 1200) {
                closeMenu();
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuCheckbox = document.getElementById('menu-checkbox');
    const nav = document.querySelector('.nav');

    menuCheckbox.addEventListener('change', function () {
        if (menuCheckbox.checked) {
            nav.style.transform = 'translateX(0)';
            nav.style.pointerEvents = 'all';
        } else {
            closeMenu();
        }
    });
});


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth > 1200) {
        const container = document.querySelector('.maincontent');
        const simple = document.querySelector('.simple');
        const qual = document.querySelector('.qual');
        const quick = document.querySelector('.quick');
        const lock = document.querySelector('.lock');
        const sett = document.querySelector('.sett');
        const map = document.querySelector('.map');
        const your = document.querySelector('.p-h3');

        container.addEventListener('mousemove', (e) => {
            const xPos = (e.clientX / window.innerWidth) * 2 - 1;
            const yPos = (e.clientY / window.innerHeight) * 2 - 1;

            const moveAmount = 20;

            simple.style.transform = `translate(calc(-160% + ${xPos * moveAmount}px), calc(300% + ${yPos * moveAmount}px))`;
            qual.style.transform = `translate(calc(-10% + ${xPos * moveAmount * 1.4}px), calc(140% + ${yPos * moveAmount * 0.5}px))`;
            quick.style.transform = `translate(calc(150% + ${xPos * moveAmount * 1.8}px), calc(-50% + ${yPos * moveAmount * 0.7}px))`;
            lock.style.transform = `translate(calc(90% + ${xPos * moveAmount * 0.7}px), calc(-16% + ${yPos * moveAmount * 0.2}px))`;
            sett.style.transform = `translate(calc(-310% + ${xPos * moveAmount * 0.5}px), calc(-80% + ${yPos * moveAmount * 0.3}px))`;
            map.style.transform = `translate(calc(160% + ${xPos * moveAmount * 0.4}px), calc(-210% + ${yPos * moveAmount * 0.4}px))`;
            your.style.transform = `translate(calc(-180% + ${xPos * moveAmount * 0.2}px), calc(-350% + ${yPos * moveAmount * 0.1}px))`;
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {

    const nav = document.querySelector('nav');
    (window.screenWidth > 1200) || (nav.style.zIndex = '5')


    const navItems = document.querySelectorAll('.nav-item');
    let r = document.querySelector(":root");

    const maincontent = document.querySelector('.maincontent');

    navItems.forEach((navItem) => {
        navItem.addEventListener('mouseover', () => {
            maincontent.style.filter = 'blur(4px)';
            r.style.setProperty("--first-nav-background", "#151515");
        });

        navItem.addEventListener('mouseout', () => {
            maincontent.style.filter = 'blur(0px)';
            r.style.setProperty("--first-nav-background", "#222");
        });
    });
});

document.querySelector('.navbar').addEventListener('click', function (event) {
    const target = event.target;
    if (target.tagName === 'A') {
        // A link was clicked, you can handle it here
        const linkText = target.textContent;
        console.log('Clicked link:', linkText);
    }
});