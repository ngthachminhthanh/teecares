import initHeader from './modules/header.js';
import initAreas from './modules/areas.js';

document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initAreas();

    AOS.init({
        once: true,
        duration: 800,
    });
});