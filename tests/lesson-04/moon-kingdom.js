// Tạo hàm createCharacters
function creatCharacters() {
  characters = [
    {
      name: "Player 01",
      level: 1,
      health: 500,
    },
    {
      name: "Player 02",
      level: 2,
      health: 250,
    },
  ];

  let charactersPowerUp = characters.map((character) => {
    character.name = character.name.toUpperCase();
    character.level = character.level * 2;
    character.health = character.health * 3;

    return character;
  });

    // console.log(charactersPowerUp);

  const possibleWinners = characters.filter(
    (character) => character.health > 1000,
  );

    // console.log(possibleWinners);
}

creatCharacters();





// Tạo hàm printLeaderboard
function printLeaderboard(players) {
  players = [
    {
      name: "Mario",
      score: 1000,
    },
    {
      name: "Luigi",
      score: 900,
    },
    {
      name: "Peach",
      score: 850,
    },
    {
      name: "Yoshi",
      score: 800,
    },
  ];

  let bangXH = players.sort((a, b) => b.score - a.score);

  const medals = ["🥇", "🥈", "🥉"];

  let sortedBXH = bangXH.map((players, index) => {
    return {
        position: index < 3 ? `${medals[index]} ${index + 1}` : `  ${index + 1}`,
        name: players.name,
        score: players.score,
    }
  });
  
  sortedBXH.forEach((ranking) => {
    console.log(`${ranking.position}. ${ranking.name} - ${ranking.score} pts`);
  })

}

printLeaderboard();
