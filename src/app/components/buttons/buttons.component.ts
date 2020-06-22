import { Component, OnInit } from '@angular/core';
import { BubblesortService } from 'src/app/algorithms/bubblesort.service'
import { Button } from 'protractor';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  constructor(
    private bubbleSort: BubblesortService
    ) {}

  ngOnInit() {                                   // initalize everything on the board
    console.log('at ngOnInit in the component.')
    this.bubbleSort.initBoard()
  }

  async onGenerateMaze() {
  }

  async onSolveMaze() {
  }

  onClearBoard() {
  }

  onFillAll() {
    this.bubbleSort.fillAll()
  }

  onSortARow() {
    this.bubbleSort.sortRowColors()
  }

  onDoMergeSort() {
    this.bubbleSort.doMergeSort()
  }
}
