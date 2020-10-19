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
    "Let's talk old schoold D&D.",
    "Roll 1d20 with me.",
    "Let's discuss movies.",
    "Can I quote Seinfeld?",
    "I've read lots of Peanuts comic strips.",
    "The TR-909 is an amazing machine, isn't it?",
    "Music live coding is something really cool...",
    "Top 5 tv series: Seinfeld, The Wire, Halt and Catch Fire, Bojack Horseman and one yet to come.",
    "Have you ever heard about Braunstein?",
    "Kerouac's On The Road is an amazing book.",
    "Have you read Jerome K Jerome?",
    "DIY is a lifestyle.",
    "I like analog studio gear (who doesn't?).",
    "Top 3 bands: Nirvana, The Beatles, Sonic Youth."
]

function pickSegment(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}

function composeBio() {
    document.querySelector('#code').textContent = pickSegment(code)
    document.querySelector('#music').textContent = pickSegment(music)
    document.querySelector('#stuff').textContent = pickSegment(stuff)
}

composeBio()
