import { appState } from "../AppState.js";
import { playerService } from "../Services/PlayerService.js";
import { getFormData } from "../Utils/FormHandler.js";



export class PlayerController{

  drawPlayers(){
    let template = ''
    appState.allPlayers.forEach(player => {
      template += player.htmlTemplate
    })
    document.querySelector("#player-container").innerHTML = template
  }

  createPlayers(){
    window.event.preventDefault()
    let form = window.event.target
    let playerData = getFormData(form)
    playerService.createPlayer(playerData)
    form.reset()
    this.drawPlayers()
  }

  adjustScore(name, direction){
    playerService.adjustScore(name, direction)
    this.drawPlayers()
  }

}
