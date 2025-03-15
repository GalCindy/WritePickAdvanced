const prompts = {
    singleWord: ["Hope", "Journey", "Silence", "Whisper", "Reflection", "Dream", "Solitude", "Shadow", "Laughter", "Rain", "Ocean", "Fire", "Breeze", "Memory", "Echo", "Mystery", "Light", "Darkness", "Serendipity", "Time", "Heart", "Sky", "River", "Wander", "Melody", "Embrace", "Home", "Dance", "Secret", "Stars", "Bloom", "Moon", "Love", "Infinity", "Flight", "Fragile", "Horizon", "Pause", "Window", "Silence", "Rise", "Moment", "Farewell", "Feather", "Story", "Glow", "Stillness", "Path", "Wild", "Together"],
    firstLines: [...],
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