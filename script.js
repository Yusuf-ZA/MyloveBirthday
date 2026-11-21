
// Mengambil tombol dan elemen HTML
const startBtn = document.getElementById("startBtn");
const giftBtn = document.getElementById("giftBtn");
const giftMessage = document.getElementById("giftMessage");

// Tombol mulai
const birthdayMusic = document.getElementById("birthdayMusic");

startBtn.addEventListener("click", function () {
    document.querySelector("#gift").scrollIntoView({
        behavior: "smooth"
    });

    birthdayMusic.volume = 0.35;

    birthdayMusic.play().catch(function (error) {
        console.log("Musik belum dapat diputar:", error);
    });
});

// Fungsi efek kejutan
function createConfetti() {
    const colors = ["#ff69b4", "#ffd700", "#ffffff", "#ff9ebc"];

    for (let i = 0; i < 70; i++) {
        const confetti = document.createElement("div");

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.width = "10px";
        confetti.style.height = "10px";
        confetti.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = "50%";
        confetti.style.zIndex = "9999";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration = 2000 + Math.random() * 2000;

        confetti.animate(
            [
                { transform: "translateY(0) rotate(0deg)", opacity: 1 },
                {
                    transform: `translateY(110vh) rotate(720deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-in"
            }
        );

        setTimeout(() => {
            confetti.remove();
        }, duration);
    }
}

// Fungsi hati berjatuhan
function createHearts() {
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement("div");

        heart.textContent = "💗";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-30px";
        heart.style.fontSize = "25px";
        heart.style.zIndex = "9999";
        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        const duration = 3000 + Math.random() * 2000;

        heart.animate(
            [
                { transform: "translateY(0)", opacity: 1 },
                { transform: "translateY(110vh)", opacity: 0 }
            ],
            {
                duration: duration,
                easing: "ease-in"
            }
        );

        setTimeout(() => {
            heart.remove();
        }, duration);
    }
}

// Tombol membuka hadiah
giftBtn.addEventListener("click", function () {
    giftMessage.style.display = "block";
    giftMessage.textContent =
        "Tadaaa!!!!! Happy Birthday..... sayangkuu, cintaku, cantikku  banyak ya lovenya tapi ini masih kurang banyak sama cintaku ke kamu 💗 ";

    giftBtn.textContent = "💝";
    giftBtn.disabled = true;

    createConfetti();
    createHearts();
});

// Animasi hati yang berjatuhan
function createFloatingHeart() {
    const container = document.getElementById("heart-container");

    if (!container) return;

    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.textContent = ["💗", "💕", "💖", "❤️", "🌸",][
        Math.floor(Math.random() * 5)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    const duration = 5 + Math.random() * 5;
    heart.style.animationDuration = duration + "s";

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Membuat hati muncul secara berkala
setInterval(createFloatingHeart, 700);

// Efek hati melayang
function createFloatingHearts() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-300px";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";
    heart.style.animation = "heartFloat 5s linear forwards";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createFloatingHearts, 800);

/* EFEK MENGETIK SURAT ZAHWA */


/* EFEK MENGETIK SURAT ZAHWA */

const loveLetter = document.querySelector(".love-letter");

if (loveLetter) {

    const paragraphs = loveLetter.querySelectorAll(
        ".letter-content p"
    );

    // Simpan teks asli dan sembunyikan sejak awal
    const originalTexts = [];

    paragraphs.forEach((paragraph, index) => {
        originalTexts[index] = paragraph.textContent;
        paragraph.textContent = "";
    });

    let alreadyTyped = false;

    loveLetter.addEventListener("toggle", function () {

        if (!loveLetter.open || alreadyTyped) {
            return;
        }

        let paragraphIndex = 0;

        function typeParagraph() {

            if (paragraphIndex >= paragraphs.length) {
                alreadyTyped = true;
                return;
            }

            const paragraph = paragraphs[paragraphIndex];
            const text = originalTexts[paragraphIndex];

            let characterIndex = 0;

            function typeCharacter() {

                if (characterIndex < text.length) {

                    paragraph.textContent +=
                        text.charAt(characterIndex);

                    characterIndex++;

                    setTimeout(typeCharacter, 45);

                } else {

                    paragraphIndex++;

                    setTimeout(typeParagraph, 500);
                }
            }

            typeCharacter();
        }

        typeParagraph();
    });
}
