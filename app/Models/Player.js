
export class Player{
  constructor(name){
    this.name = name
    this.score = 0
  }

  get htmlTemplate(){
    return`
    <div class="col-2 bg-grey text-dark fw-semibold p-2">
      <div>
        <p>${this.name}: ${this.score}</p>
        <button class="btn btn-md btn-success" onclick="app.playerController.adjustScore('${this.name}', 'up')">+</button>
        <button class="btn btn-md btn-danger" onclick="app.playerController.adjustScore('${this.name}', 'down')">-</button>
    </div>
  </div>`
  }
}