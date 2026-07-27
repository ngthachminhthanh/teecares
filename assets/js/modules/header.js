export default function initHeader() {
    const dropdowns = document.querySelectorAll(".js-dropdown");
    const menuToggle = document.querySelector(".js-menu-toggle");
    const nav = document.querySelector(".js-nav");

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", (e) => {
            if (window.innerWidth > 1024) return;

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
                if (window.innerWidth > 1024) return;

                e.stopPropagation();
            });
    });

    document.addEventListener("click", () => {
        if (window.innerWidth > 1024) return;

        dropdowns.forEach((dropdown) => {
            dropdown.classList.remove("is-open");
        });
    });

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", (e) => {
            if (window.innerWidth > 1024) return;

            e.stopPropagation();

            const isOpen = !nav.classList.contains("is-open");

            menuToggle.classList.toggle("is-open", isOpen);
            nav.classList.toggle("is-open", isOpen);
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });
    }

    window.addEventListener("resize", () => {
        if (window.innerWidth > 1024) {
            dropdowns.forEach((dropdown) => {
                dropdown.classList.remove("is-open");
            });

            if (nav) {
                nav.classList.remove("is-open");
            }

            if (menuToggle) {
                menuToggle.classList.remove("is-open");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        }
    });
}