export default function initHeader() {
    if (window.innerWidth <= 1024) return;
    
    const dropdowns = document.querySelectorAll(".js-dropdown");

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", (e) => {
            e.stopPropagation();

            dropdowns.forEach((item) => {
                if (item !== dropdown) {
                    item.classList.remove("is-open");
                }
            });

            dropdown.classList.toggle("is-open");
        });

        dropdown
            .querySelector(".js-dropdown-menu")
            ?.addEventListener("click", (e) => {
                e.stopPropagation();
            });
    });

    document.addEventListener("click", () => {
        dropdowns.forEach((dropdown) => {
            dropdown.classList.remove("is-open");
        });
    });

    // ----------

    const menuToggle = document.querySelector('.js-menu-toggle');
    const nav = document.querySelector('.js-nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            const isOpen = !nav.classList.contains('is-open');

            menuToggle.classList.toggle('is-open', isOpen);
            nav.classList.toggle('is-open', isOpen);
            menuToggle.setAttribute('aria-expanded', String(isOpen));
        });
    }
}
