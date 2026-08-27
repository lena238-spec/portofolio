document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       MOBILE NAVIGATION
    ========================================= */

    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", function () {

            const isOpen = navbar.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        const navLinks = navbar.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navbar.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =========================================
       PROJECT FILTER
    ========================================= */

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const projectCards =
        document.querySelectorAll(".project-card");


    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedFilter =
                button.getAttribute("data-filter");


            /* Active button */

            filterButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            /* Filter project */

            projectCards.forEach(function (card) {

                const categories =
                    card.getAttribute("data-category");


                if (
                    selectedFilter === "all" ||
                    categories.includes(selectedFilter)
                ) {

                    card.classList.remove("hidden");

                } else {

                    card.classList.add("hidden");

                }

            });

        });

    });


    /* =========================================
       HEADER SCROLL EFFECT
    ========================================= */

    const header =
        document.querySelector(".header");


    window.addEventListener("scroll", function () {

        if (window.scrollY > 30) {

            header.style.background =
                "rgba(9, 13, 22, 0.96)";

        } else {

            header.style.background =
                "rgba(9, 13, 22, 0.88)";

        }

    });


    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const revealElements =
        document.querySelectorAll(
            ".section-heading, " +
            ".about-card, " +
            ".project-card, " +
            ".timeline-item, " +
            ".skill-card, " +
            ".education-card"
        );


    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.08
            }

        );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        observer.observe(element);

    });


});
