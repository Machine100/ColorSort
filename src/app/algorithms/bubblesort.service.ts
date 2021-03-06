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
  row: number               // the row currently being sorted
  bubbleSortComparisons     // count of comparisons done for bubble sort
  mergeSortComparisons      // count of comparsions done for merge sort

  initBoard() {
    console.log('at initBoard')
    this.row = 0             // only used for mergesort
    this.bubbleSortComparisons = 0
    this.mergeSortComparisons = 0
    this.gridOfColors = [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],
                          [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],
                          [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],
                          [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []  ]
    for (let i = 0; i < 1; i++) {
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
    for (let k = 0; k < 1; k++) {
      for (let row = 0; row < 64; row++) {
        for (let column = 0; column < 64; column++) {
          const id: string = row.toString() + '_' + column.toString()
          const randomColorCode = Math.floor(Math.random() * 4)
          if (randomColorCode === 0) {
            document.getElementById(id).style.backgroundColor = '#000080'
            this.gridOfColors[row][column] = '000080'
          } else {
          if (randomColorCode === 1) {
            document.getElementById(id).style.backgroundColor = '#582F00'
            this.gridOfColors[row][column] = '582F00'
          } else {
          if (randomColorCode === 2) {
            document.getElementById(id).style.backgroundColor = '#004E96'
            this.gridOfColors[row][column] = '004E96'
          } else {
          if (randomColorCode === 3) {
            document.getElementById(id).style.backgroundColor = '#AFA8BA'
            this.gridOfColors[row][column] = 'AFA8BA'
          }}}}
        }
      }
      // await this._delayTimer()
    }
    // this.gridOfColors[1] = [1,6,3,5,6,77,8]     // @@@
  }

  async sortRowColors() {
    this.bubbleSortComparisons = 0
    // console.log('at sortRowColors')
    for (let i = 0; i < 64; i++) {
      for (let j = 0; j < 63; j++) {
        for (let column = 0; column < (64 - j); column++) {
          const leftNumber: number = parseInt(this.gridOfColors[i][column], 16)
          const rightNumber: number = parseInt(this.gridOfColors[i][column + 1], 16)
          // console.log ('left:', leftNumber, 'right:', rightNumber)
          this.bubbleSortComparisons++
          if (leftNumber > rightNumber) {
            const temp: string = this.gridOfColors[i][column]
            this.gridOfColors[i][column] = this.gridOfColors[i][column + 1]
            this.gridOfColors[i][ column + 1 ] = temp

            let id: string = i.toString() + '_' + column.toString()
            let toColor: string = '#' + this.gridOfColors[i][column]
            document.getElementById(id).style.backgroundColor = toColor

            const altPass: number = column + 1
            toColor = '#' + this.gridOfColors[i][altPass]
            id = i.toString() + '_' + altPass.toString()
            document.getElementById(id).style.backgroundColor = toColor

          }
        }
         // await this._delayTimer()
      }
      await this._delayTimer()
    }
    console.log('bubbleSortComparisons:', this.bubbleSortComparisons)
  }

  async doMergeSort() {
    this.row = 0
    this.mergeSortComparisons = 0
    for (let i = 0; i < 64; i ++) {
      this.mergeSort(this.gridOfColors[this.row])
      // console.log(this.gridOfColors[this.row])
      this.row++
      // console.log('this.row', this.row)
      await this._delayTimer()
    }
    console.log('mergeSortComparisons:', this.mergeSortComparisons)
  }

  async mergeSort(referenceTosortMA: string[], pointerStart?: number, pointerEnd?: number) {
    // await this._delayTimer()
    if (pointerStart === undefined) { pointerStart = 0}
    if (pointerEnd === undefined) { pointerEnd = this.gridOfColors[this.row].length - 1 }
    // console.log('pointerStart:', pointerStart, ' pointerEnd: ', pointerEnd)

    if (pointerStart === pointerEnd) {             // check for base case of single digit
        this._combine(referenceTosortMA, pointerStart, pointerEnd);
        return
    }
    const pointerMiddle: number = Math.ceil( (pointerStart + pointerEnd) / 2 )
    this.mergeSort(this.gridOfColors[this.row], pointerStart, pointerMiddle - 1)      // pass left side
    this.mergeSort(this.gridOfColors[this.row], pointerMiddle, pointerEnd)
    this._combine(this.gridOfColors[this.row], pointerStart, pointerEnd)
    return
  }

  async _combine(referenceTosortMa: string[], leftStart: number, rightEnd: number) {
    //await this._delayTimer()
    if (leftStart === rightEnd) { return }

    const rightStart: number = Math.ceil( (leftStart + rightEnd) / 2 )
    const leftEnd: number = rightStart - 1
    //console.log('combine:', 'LS:', leftStart, 'LE', leftEnd, 'RS', rightStart, 'RE', rightEnd)
    let leftIndex: number = leftStart
    let rightIndex: number = rightStart

    const tempMa: string[] = []
    while (leftIndex <= leftEnd && rightIndex <= rightEnd) {
      const leftNumber: number = parseInt(this.gridOfColors[this.row][leftIndex], 16)
      const rightNumber: number = parseInt(this.gridOfColors[this.row][rightIndex ], 16)
      //console.log('leftIndex:', leftIndex, 'rightIndex', rightIndex)
      //console.log('leftNumber: ',leftNumber, 'rightNumber: ', rightNumber)
      if (leftNumber <= rightNumber) {
        this.mergeSortComparisons++
        tempMa.push(this.gridOfColors[this.row][leftIndex])
        leftIndex++
      } else {
        tempMa.push(this.gridOfColors[this.row][rightIndex])
        rightIndex++
      }
    }
    while (leftIndex <= leftEnd) {    // if anything left on left side push them all onto end of stack
      tempMa.push(this.gridOfColors[this.row][leftIndex])
      leftIndex++
    }
    while (rightIndex <= rightEnd) {
      tempMa.push(this.gridOfColors[this.row][rightIndex])
      rightIndex++
    }
    //console.log('tempMa:', tempMa)
    for (let i = leftStart; i <= rightEnd; i++) {                  // Merge temporary array into into main array
      this.gridOfColors[this.row][i] = tempMa.shift()
      const id: string = this.row.toString() + '_' + i
      const toColor: string = '#' + this.gridOfColors[this.row][i]
      document.getElementById(id).style.backgroundColor = toColor
      //await this._delayTimer()
    }

      //console.log('sortMa:', this.gridOfColors[1])
      return
  }




}
