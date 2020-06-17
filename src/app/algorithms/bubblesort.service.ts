import { Injectable } from '@angular/core';
import { DisplaycontrolService } from 'src/app/displaycontrol.service'

@Injectable({
  providedIn: 'root'
})
export class BubblesortService {

  constructor(private displayControl: DisplaycontrolService) {
    // this.initBoard()
  }

  gridOfColors: string[][]

  initBoard() {
    console.log('at initBoard')
    this.gridOfColors = [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],
                          [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],
                          [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],
                          [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []  ]
    for (let i=0; i<1; i++) {
      for (let j = 0; j < 64; j++) {
        this.gridOfColors[i][j] = ''
      }
    }
    console.log(this.gridOfColors)
  }

  private _delayTimer() {
    return new Promise((resolve) => {
      setTimeout ( () => {
        resolve()
      }, 0)
    })
  }

  async fillAll() {
    for (let k=0; k<1; k++) {
      for (let row = 0; row < 64; row++) {
        for (let column = 0; column < 64; column++) {
          const id: string = row.toString() + '_' + column.toString()
          const randomColorCode = Math.floor(Math.random() * 4)
          if (randomColorCode === 0) {
            document.getElementById(id).style.backgroundColor = '#000080'
            this.gridOfColors[row][column] = '#000080'
          } else {
          if (randomColorCode === 1) {
            document.getElementById(id).style.backgroundColor = '#582F00'
            this.gridOfColors[row][column] = '#000080'
          } else {
          if (randomColorCode === 2) {
            document.getElementById(id).style.backgroundColor = '#004E96'
            this.gridOfColors[row][column] = '#004E96'
          } else {
          if (randomColorCode === 3) {
            document.getElementById(id).style.backgroundColor = '#AFA8BA'
            this.gridOfColors[row][column] = '#AFA8BA'
          }}}}
        }
      }
      await this._delayTimer()
    }
  }

  sortRowColors() {
    console.log('at sortRowColors')
    let row: number = 5
    for (let i=0; i<64; i++) {
      for (let j=0; j<64; j++) {
        console.log ('i:', i, 'j', j)
      }
    }

  }


}
