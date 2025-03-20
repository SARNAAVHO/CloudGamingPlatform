function startGame(gameTitle) {
    const gameLinks = {
        "Cyber Racer": "https://poki.com/en/g/mr-racer-car-racing",
        "Space Wars": "https://www.crazygames.com/game/space-wars-battleground",
        // "Dungeon Quest": "https://poki.com/en/g/forgotten-dungeon",
        "Madalin Stunt Cars": "https://www.crazygames.com/game/madalin-stunt-cars-2",
        // "Viking Escape": "https://poki.com/en/g/viking-escape",
        "Bubble Shooter": "https://www.bubbleshooter.net/"
    };

    if (gameTitle in gameLinks) {
        window.open(gameLinks[gameTitle], "_blank");
    } else {
        alert("Game not found!");
    }
}
