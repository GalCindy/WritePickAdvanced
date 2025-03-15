const prompts = {
    singleWord: ["Hope", "Journey", "Silence", "Whisper", "Reflection", "Dream", "Solitude", "Shadow", "Laughter", "Rain", "Ocean", "Fire", "Breeze", "Memory", "Echo", "Mystery", "Light", "Darkness", "Serendipity", "Time", "Heart", "Sky", "River", "Wander", "Melody", "Embrace", "Home", "Dance", "Secret", "Stars", "Bloom", "Moon", "Love", "Infinity", "Flight", "Fragile", "Horizon", "Pause", "Window", "Silence", "Rise", "Moment", "Farewell", "Feather", "Story", "Glow", "Stillness", "Path", "Wild", "Together"],
    firstLines: ["It wasn’t until the parrot started reciting my emails that I realized I had a problem.", "The moment I stepped off the train, I knew I’d never see home again.", "I woke up to find a sticky note on my forehead that simply read: ‘Don’t trust the dog.’", "The old house at the end of the street had been abandoned for years—until today.", "We were halfway through dinner when Grandma casually announced she used to rob banks.", "I never thought I’d hear my own name on the evening news.",  "The fortune cookie read: ‘Your life is about to change in the worst way.’", "He walked into the café like he owned the place. Technically, he did. But only because he won it in a poker game last night."],
    justForFun: [...],
    memoir: [...],
    dearAbby: [...],
    genreChallenge: [...]
};

function generatePrompt() {
    let category = document.getElementById("category").value;
    let selectedPrompts = category === "all" ? [].concat(...Object.values(prompts)) : prompts[category];
    let randomIndex = Math.floor(Math.random() * selectedPrompts.length);
    document.getElementById("prompt").innerText = selectedPrompts[randomIndex];
}
