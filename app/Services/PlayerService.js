import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";


class PlayerService{


  createPlayer(playerData){
    let newPlayer = new Player(playerData.name)
    appState.allPlayers.push(newPlayer)
    console.log(appState.allPlayers)
  }

  adjustScore(name, direction){
    let player = appState.allPlayers.find(e => e.name == name)
    if(direction == "up"){
      player.score++
    }else{
      if(player.score != 0){
        player.score--
      }
    }
    
  }
}


export const playerService = new PlayerService