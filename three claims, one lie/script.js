const claims = [
    { text: "I have climbed Mount Everest.", isLie: false },
    { text: "I speak six languages.", isLie: false },
    { text: "I have a pet turtle.", isLie: false },
];

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function randomizeLies(claims) {

    claims.forEach((claim) => (claim.isLie = false));

    const lieIndex = Math.floor(Math.random() * claims.length);
    claims[lieIndex].isLie = true;
}

function resetGame() {
    randomizeLies(claims);
    const shuffledClaims = shuffle(claims);

    const buttons = shuffle(["c1", "c2", "c3"]);

    document.getElementById(buttons[0]).value = shuffledClaims[0].text;
    document.getElementById(buttons[1]).value = shuffledClaims[1].text;
    document.getElementById(buttons[2]).value = shuffledClaims[2].text;

    window.claimsOrder = shuffledClaims;

    alert("New round started! Try to find the lie again!");
}

function handleGuess(index) {
    const selectedClaim = window.claimsOrder[index];

    if (selectedClaim.isLie) {
        alert("🎉 Correct! You found the lie.");
    } else {
        alert("❌ Nope! That one is true.");
    }
}

window.onload = function () {
    resetGame();

    document.getElementById("c1").addEventListener("click", () => handleGuess(0));
    document.getElementById("c2").addEventListener("click", () => handleGuess(1));
    document.getElementById("c3").addEventListener("click", () => handleGuess(2));
};

const submitButton = document.querySelector("input[type='submit']");
submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    resetGame();
});