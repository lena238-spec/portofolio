document.addEventListener("DOMContentLoaded", () => {

    /* ================= MOBILE MENU ================= */

    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", () => {
            navbar.classList.toggle("active");
        });


        navbar.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {
                navbar.classList.remove("active");
            });

        });

    }


    /* ================= PROJECT FILTER ================= */

    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");


    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            /* Active button */

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");


            const filterValue =
                button.getAttribute("data-filter");


            projectCards.forEach(card => {

                const categories =
                    card.getAttribute("data-category");


                if (
                    filterValue === "all" ||
                    categories.includes(filterValue)
                ) {

                    card.classList.remove("hidden");

                } else {

                    card.classList.add("hidden");

                }

            });

        });

    });


    /* ================= SCROLL HEADER ================= */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.background =
                "rgba(11,15,25,0.96)";

        } else {

            header.style.background =
                "rgba(11,15,25,0.88)";

        }

    });

});
