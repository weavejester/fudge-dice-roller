import OBR from "@owlbear-rodeo/sdk";

function rollFudgeDice() {
  OBR.notification.show("Rolling dice");
}

document.querySelector('#rollfudge').addEventListener('click', rollFudgeDice);
