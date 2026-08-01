export default function initHeader() {
    const tabletBreakpoint = 1024;

    const siteHeader = document.querySelector(".site-header");
    const nav = document.querySelector(".js-nav");
    const menuToggle = document.querySelector(".js-menu-toggle");
    const overlay = document.querySelector(".js-header-overlay");
    const dropdowns = document.querySelectorAll(
        ".header__nav .menu-item-has-children"
    );

    if (!nav || !menuToggle || !siteHeader) return;

    const isMobile = () => window.innerWidth <= tabletBreakpoint;

    function closeSubmenus() {
        dropdowns.forEach((dropdown) => {
            dropdown.classList.remove("is-open");
        });
    }

    function setMenuState(isOpen) {
        nav.classList.toggle("is-open", isOpen);
        menuToggle.classList.toggle("is-open", isOpen);
        siteHeader.classList.toggle("is-white", isOpen);

        overlay?.classList.toggle("is-open", isOpen);

        document.body.classList.toggle("is-lock-scroll", isOpen);

        menuToggle.setAttribute("aria-expanded", String(isOpen));

        if (!isOpen) {
            closeSubmenus();
        }
    }

    // Mobile submenu
    dropdowns.forEach((dropdown) => {
        const link = dropdown.querySelector(":scope > a");
        const submenu = dropdown.querySelector(":scope > .sub-menu");

        if (!link || !submenu) return;

        link.addEventListener("click", (e) => {
            if (!isMobile()) return;

            e.preventDefault();
            e.stopPropagation();

            const isOpen = dropdown.classList.contains("is-open");

            closeSubmenus();

            dropdown.classList.toggle("is-open", !isOpen);
        });

        submenu.addEventListener("click", (e) => {
            if (!isMobile()) return;

            e.stopPropagation();
        });
    });

    // Hamburger
    menuToggle.addEventListener("click", (e) => {
        if (!isMobile()) return;

        e.stopPropagation();

        setMenuState(!nav.classList.contains("is-open"));
    });

    // Overlay
    overlay?.addEventListener("click", () => {
        setMenuState(false);
    });

    // Resize
    window.addEventListener("resize", () => {
        if (!isMobile()) {
            setMenuState(false);
        }
    });

    // Active menu color
    const currentPath = window.location.pathname.replace(/\/$/, '');

    document.querySelectorAll('.header__nav > ul > .menu-item > a').forEach(link => {
        const href = link.getAttribute('href');

        if (
            !href ||
            href === '#' ||
            href.startsWith('javascript:') ||
            href.startsWith('mailto:') ||
            href.startsWith('tel:')
        ) {
            return;
        }

        const linkPath = new URL(link.href, window.location.origin)
            .pathname
            .replace(/\/$/, '');

        if (linkPath === currentPath) {
            link.parentElement.classList.add('is-active');
        }
    });
}