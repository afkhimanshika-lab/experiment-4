/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            } else {

                // Remove the class when it leaves the screen.
                // This makes the animation happen again
                // when the user scrolls back.

                entry.target.classList.remove("visible");
            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================
   CUSTOM CURSOR
========================= */

const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;


document.addEventListener("mousemove", (event) => {

    mouseX = event.clientX;
    mouseY = event.clientY;

    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;

});


function moveCursorRing() {

    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;

    requestAnimationFrame(moveCursorRing);
}


moveCursorRing();


/* =========================
   CURSOR HOVER EFFECT
========================= */

const hoverElements = document.querySelectorAll(
    "a, button, input, textarea, .skill-card, .project-card"
);


hoverElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {

        cursorRing.classList.add("hovering");

    });

    element.addEventListener("mouseleave", () => {

        cursorRing.classList.remove("hovering");

    });

});


/* =========================
   MAGNETIC BUTTONS
========================= */

const magneticElements = document.querySelectorAll(".magnetic");


magneticElements.forEach((element) => {

    element.addEventListener("mousemove", (event) => {

        const rect = element.getBoundingClientRect();

        const x =
            event.clientX -
            rect.left -
            rect.width / 2;

        const y =
            event.clientY -
            rect.top -
            rect.height / 2;

        element.style.transform =
            `translate(${x * 0.15}px, ${y * 0.15}px)`;

    });


    element.addEventListener("mouseleave", () => {

        element.style.transform = "translate(0, 0)";

    });

});


/* =========================
   STAGGER PROJECT/SKILL CARDS
========================= */

const cardGroups = document.querySelectorAll(
    ".skills-grid, .projects-grid"
);


cardGroups.forEach((group) => {

    const cards = group.querySelectorAll(".reveal");

    cards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 100}ms`;

    });

});