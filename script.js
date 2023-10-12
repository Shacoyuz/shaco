document.addEventListener("DOMContentLoaded", function () {
    const participantsList = document.getElementById("participants");
    const drawButton = document.getElementById("drawButton");
    const resultsList = document.getElementById("results");

    drawButton.addEventListener("click", function () {
        const participants = Array.from(participantsList.querySelectorAll("li"));

        if (participants.length < 2) {
            alert("En az 2 katılımcı gereklidir.");
            return;
        }

        shuffleArray(participants);

        resultsList.innerHTML = "";
        for (let i = 0; i < participants.length; i += 2) {
            const opponent1 = participants[i].textContent;
            const opponent2 = i + 1 < participants.length ? participants[i + 1].textContent : "Serbest Çekiliş";

            const listItem = document.createElement("li");
            listItem.textContent = `Eşleşme ${i / 2 + 1}: ${opponent1} vs. ${opponent2}`;
            resultsList.appendChild(listItem);
        }
    });

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
});
