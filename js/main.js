const greetings = [
    "Hello friend. I'm Matt.",
    "Hey there. I'm Matt.",
    "Hi! I'm Matt.",
    "Howdy. I'm Matt.",
    "Greetings. I'm Matt.",
    "What's up. I'm Matt.",
    "Yo. I'm Matt."
]

const code = [
    "See my code.",
    "Check my code.",
    "See me code.",
    "Use my code.",
    "Clone my repos.",
    "See me in your CLI.",
    "Check my git.",
    "See me in PHP."
]

const music = [
    "Sing my songs.",
    "Check my tunes.",
    "Check my riffs.",
    "Get my records.",
    "Hear my sounds.",
    "Catch my vibes."
]

const stuff = [
    "Let's talk about music.",
    "Discuss Formula One with me.",
    "Let's talk electric guitars.",
    "Let's spin some records.",
    "Let's talk Old schoold D&D.",
    "Roll 1d20 with me.",
    "Let's discuss movies.",
    "Can I quote Seinfeld?",
    "I've read lots of Peanuts comic strips.",
    "The TR-909 is an amazing machine, isn't it?",
    "Music live coding is something really cool...",
    "Top 5 tv series: Seinfeld, The Wire, Halt and Catch Fire, Freaks and Geeks, Silicon Valley.",
    "Have you ever heard about Braunstein?",
    "Kerouac's On The Road is an amazing book.",
    "Have you read Jerome K Jerome?",
    "DIY is a lifestyle.",
    "I like analog studio gear (who doesn't?).",
    "Top 3 bands: Nirvana, The Beatles, Sonic Youth.",
    "I love medieval miniature wargaming.",
    "I play guitar and sing in clubs.",
    "Telecasters are great guitars.",
    "I love Japan and its culture.",
    "I love mecha model kits.",
]

function pickSegment(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}

const FADE_DURATION_MS = 1000;
const GREETING_LEAD_MS = 300;
const INTERVAL_MS = 10000;

function composeBio() {
    const greetingEl = document.querySelector('#greeting');
    const codeEl = document.querySelector('#code');
    const musicEl = document.querySelector('#music');
    const stuffEl = document.querySelector('#stuff');

    greetingEl.classList.add('fade-out');
    codeEl.classList.add('fade-out');
    musicEl.classList.add('fade-out');
    stuffEl.classList.add('fade-out');

    setTimeout(() => {
        greetingEl.textContent = pickSegment(greetings);
        requestAnimationFrame(() => {
            greetingEl.classList.remove('fade-out');
        });

        setTimeout(() => {
            codeEl.textContent = pickSegment(code);
            musicEl.textContent = pickSegment(music);
            stuffEl.textContent = pickSegment(stuff);

            requestAnimationFrame(() => {
                codeEl.classList.remove('fade-out');
                musicEl.classList.remove('fade-out');
                stuffEl.classList.remove('fade-out');
            });
        }, GREETING_LEAD_MS);
    }, FADE_DURATION_MS);
}

composeBio();
setInterval(composeBio, INTERVAL_MS);

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');

function updateToggleText() {
    const isDark = document.body.classList.contains('dark');
    themeToggle.textContent = isDark ? '[light mode]' : '[dark mode]';
}

// Set initial theme based on system preference
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark');
}
updateToggleText();

themeToggle.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.toggle('dark');
    updateToggleText();
});
