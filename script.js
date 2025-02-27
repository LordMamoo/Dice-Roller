function rollDice() {
    const type = parseInt(document.getElementById("diceType").value);
    const num = parseInt(document.getElementById("diceNumber").value);
    let results = document.getElementById("result")

    if (![100, 20, 12, 10, 8, 6, 4] || isNaN(num) || num <= 0) {
        results.textContent = "Invalid input! Use a valid dice type (d4, d6, d8, d10, d12, d20, d100)";
        return;
    }

    let rolls = [];

    for (let i = 0; i < num; i ++) {
        rolls.push(Math.floor(type * Math.random()) + 1);
    }

    results.textContent = `You rolled: ${rolls.join(', ')}`;
    type.value = null;
    num.value = null;
}