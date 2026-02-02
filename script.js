const texts = [
    "Web Developer",
    "Full Stack Developer",
    "JavaScript Lover",
    "Modern UI Designer",
];

const element = document.getElementById("typewriter");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 80;
const deletingSpeed = 50;
const delayAfterTyping = 1500;

function typeEffect() {
    const currentText = texts[textIndex];

    if (!isDeleting) {
        element.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, delayAfterTyping);
        }
    } else {
        element.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length; // sıradaki metin
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? deletingSpeed : typingSpeed
    );
}

typeEffect();
