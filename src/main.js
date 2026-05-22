import OBR from "@owlbear-rodeo/sdk";

async function rollFudgeDice() {
  await OBR.broadcast.sendMessage("dice-plus/roll-request", {
    rollId: `roll_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
    playerId: await OBR.player.getId(),
    playerName: await OBR.player.getName(),
    rollTarget: 'everyone',
    diceNotation: '4dF',
    showResults: true,
    timestamp: Date.now(),
    source: "fateroll",
  }, { destination: 'ALL' });
}

document.querySelector('#rollfudge').addEventListener('click', rollFudgeDice);
