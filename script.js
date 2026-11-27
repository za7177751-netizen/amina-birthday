/* ==========================
   AMINA BIRTHDAY WEBSITE
   JAVASCRIPT
========================== */

// 1. LOADING SCREEN (5 SECONDS)

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");
    const mainContent = document.getElementById("main-content");

    setTimeout(function () {

        loader.classList.add("hide");
        mainContent.classList.add("show");

    }, 5000);

});


// 2. FLOATING HEARTS & BUTTERFLIES

const floatingContainer = document.getElementById("floating-elements");

const symbols = ["💗", "♡", "🦋", "✨", "🌸", "💕"];

function createFloatingElement() {

    const element = document.createElement("span");

    element.classList.add("float-item");

    element.innerHTML = symbols[
        Math.floor(Math.random() * symbols.length)
    ];

    // Random horizontal position
    element.style.left = Math.random() * 100 + "%";

    // Random animation duration
    element.style.animationDuration =
        (Math.random() * 5 + 5) + "s";

    // Random size
    element.style.fontSize =
        (Math.random() * 15 + 15) + "px";

    floatingContainer.appendChild(element);

    // Remove after animation
    setTimeout(function () {
        element.remove();
    }, 11000);

}


// Create new floating elements every 700ms

setInterval(createFloatingElement, 700);


// 3. SURPRISE BUTTON

const surpriseButton = document.getElementById("surprise-btn");

surpriseButton.addEventListener("click", function () {

    document.getElementById("wishes").scrollIntoView({
        behavior: "smooth"
    });

    // Birthday celebration
    celebrateBirthday();

});


// 4. BIRTHDAY CELEBRATION

function celebrateBirthday() {

    const celebrationSymbols = [
        "🎉", "💖", "🌸", "✨", "🦋", "💕", "🎊"
    ];

    for (let i = 0; i < 45; i++) {

        const particle = document.createElement("span");

        particle.innerHTML =
            celebrationSymbols[
                Math.floor(Math.random() * celebrationSymbols.length)
            ];

        particle.style.position = "fixed";
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.top = "-40px";
        particle.style.fontSize =
            (Math.random() * 20 + 15) + "px";

        particle.style.pointerEvents = "none";
        particle.style.zIndex = "1000";

        document.body.appendChild(particle);

        const fallDuration = Math.random() * 3 + 2;

        particle.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(110vh) rotate(720deg)`,
                    opacity: 0
                }
            ],
            {
                duration: fallDuration * 1000,
                easing: "ease-in",
                fill: "forwards"
            }
        );

        setTimeout(function () {
            particle.remove();
        }, fallDuration * 1000);

    }

}


// 5. TIMELINE SCROLL ANIMATION

const timelineItems = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.animate(
                [
                    {
                        opacity: 0,
                        transform: "translateY(35px)"
                    },
                    {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                ],
                {
                    duration: 900,
                    easing: "ease-out",
                    fill: "forwards"
                }
            );

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.2
});

timelineItems.forEach(function (item) {
    observer.observe(item);
});


// 6. CURRENT BIRTHDAY YEAR

const birthdayDate = new Date(1996, 10, 27);

const age = new Date().getFullYear() - birthdayDate.getFullYear();

console.log("Amina's age:", age);


// 7. CONSOLE MESSAGE

console.log("Happy Birthday Amina Khalid! 💗");
console.log("Made with love ♡");
/* =========================
   BLOW OUT BIRTHDAY CANDLES
========================= */

const blowButton = document.getElementById("blow-btn");

const candles = document.querySelectorAll(".candle");

const cakeMessage = document.getElementById("cake-message");

let candlesBlown = false;

blowButton.addEventListener("click", function () {

    if (candlesBlown) {

        candles.forEach(function(candle) {
            candle.classList.remove("flame-off");
        });

        cakeMessage.textContent =
            "Three little candles, endless wishes. ♡";

        blowButton.textContent = "✨ Blow Out The Candles";

        candlesBlown = false;

        return;
    }

    candles.forEach(function(candle) {
        candle.classList.add("flame-off");
    });

    cakeMessage.textContent =
        "May all your beautiful wishes come true, Amina! 💗";

    blowButton.textContent = "🎂 Light Candles Again";

    candlesBlown = true;

    celebrateBirthday();

});
/* =========================
   OPEN SECRET GIFT
========================= */

const giftBox = document.getElementById("gift-box");

const openGiftButton =
    document.getElementById("open-gift-btn");

const giftMessage =
    document.getElementById("gift-message");

let giftOpened = false;

openGiftButton.addEventListener("click", function () {

    if (!giftOpened) {

        giftBox.classList.add("open");

        giftMessage.classList.add("show");

        openGiftButton.textContent = "💗 Close Gift";

        giftMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        celebrateBirthday();

        giftOpened = true;

    } else {

        giftBox.classList.remove("open");

        giftMessage.classList.remove("show");

        openGiftButton.textContent = "🎁 Open Your Gift";

        giftOpened = false;

    }

});
/* =========================
   BIRTHDAY MUSIC CONTROLS
========================= */

const birthdayAudio =
    document.getElementById("birthday-audio");

const musicButton =
    document.getElementById("music-btn");

const musicDisc =
    document.getElementById("music-disc");

const musicVisualizer =
    document.getElementById("music-visualizer");

musicButton.addEventListener("click", async function () {

    if (birthdayAudio.paused) {

        try {

            await birthdayAudio.play();

            musicButton.textContent = "❚❚ Pause Music";

            musicDisc.classList.add("playing");

            musicVisualizer.classList.add("active");

        } catch (error) {

            musicButton.textContent = "Music unavailable";

            console.log("Music error:", error);

        }

    } else {

        birthdayAudio.pause();

        musicButton.textContent = "▶ Play Music";

        musicDisc.classList.remove("playing");

        musicVisualizer.classList.remove("active");

    }

});

birthdayAudio.addEventListener("ended", function () {

    musicButton.textContent = "▶ Play Music";

    musicDisc.classList.remove("playing");

    musicVisualizer.classList.remove("active");

});


// Try autoplay when website loads
window.addEventListener("load", () => {
    birthdayAudio.play().catch(() => {
        console.log("Autoplay blocked by browser.");
    });
});

// Start music on first user interaction
document.addEventListener("click", () => {
    if (birthdayAudio.paused) {
        birthdayAudio.play().catch(() => {});
    }
}, { once: true });
// Continuous Birthday Music
const audio = document.getElementById("birthday-audio");

if (audio) {
    audio.loop = true;
    audio.volume = 0.5;

    // Try autoplay
    window.addEventListener("load", () => {
        audio.play().catch(() => {
            console.log("Autoplay blocked. Waiting for user interaction.");
        });
    });

    // Start music after first interaction
    document.addEventListener("click", function startMusic() {
        audio.play().catch(() => {});
    }, { once: true });
}
// Birthday Age Counter Animation

const ageNumber = document.getElementById("age-number");

function animateAge() {
    const targetAge = 30;
    let currentAge = 0;

    const duration = 2000;
    const intervalTime = duration / targetAge;

    const ageTimer = setInterval(() => {
        currentAge++;

        ageNumber.textContent = currentAge;

        if (currentAge >= targetAge) {
            clearInterval(ageTimer);
        }
    }, intervalTime);
}

// Start animation when section appears
const ageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animateAge();
            ageObserver.unobserve(entry.target);
        }
    });
});

if (ageNumber) {
    ageObserver.observe(ageNumber);
}
// Live Birthday Countdown

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const countdownMessage = document.getElementById("countdown-message");

function updateCountdown() {

    const now = new Date();

    // Next Birthday: 27 November
    let nextBirthday = new Date(
        now.getFullYear(),
        10,
        27,
        0, 0, 0
    );

    // If this year's birthday has passed, target next year
    if (now >= nextBirthday) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }

    const difference = nextBirthday - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    daysElement.textContent = String(days).padStart(2, "0");
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");

    countdownMessage.textContent =
        "Counting down to another beautiful birthday ❤️";
}

if (daysElement && hoursElement && minutesElement && secondsElement) {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}
// Final Birthday Fireworks

const fireworksContainer = document.getElementById("fireworks-container");
const fireworksButton = document.getElementById("fireworks-btn");

function createFirework() {

    if (!fireworksContainer) return;

    const colors = ["#D99BB4", "#C5A0E8", "#FFD700", "#FFFFFF", "#FF8FAB"];

    const centerX = Math.random() * 80 + 10;
    const centerY = Math.random() * 65 + 15;

    for (let i = 0; i < 35; i++) {

        const particle = document.createElement("span");

        particle.className = "firework-particle";

        const angle = (Math.PI * 2 * i) / 35;
        const distance = Math.random() * 100 + 50;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        particle.style.left = centerX + "%";
        particle.style.top = centerY + "%";

        particle.style.setProperty("--x", x + "px");
        particle.style.setProperty("--y", y + "px");

        particle.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        particle.style.boxShadow = "0 0 10px " + particle.style.background;

        fireworksContainer.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 1600);
    }
}

// Multiple fireworks
function startFireworks() {

    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createFirework();
        }, i * 400);
    }
}

// Button click
if (fireworksButton) {
    fireworksButton.addEventListener("click", startFireworks);
}

// Start when final section appears
const finalSection = document.getElementById("final-celebration");

if (finalSection) {

    const fireworksObserver = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                startFireworks();
                fireworksObserver.unobserve(finalSection);
            }

        });

    }, { threshold: 0.4 });

    fireworksObserver.observe(finalSection);
}