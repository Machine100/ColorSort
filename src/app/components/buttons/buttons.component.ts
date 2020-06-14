import { Component, OnInit } from '@angular/core';
import { DisplaycontrolService } from 'src/app/displaycontrol.service';
// import { BreadthfirstService } from 'src/app/algorithms/breadthfirst.service';
// import { MazerecursivebacktrackerService } from 'src/app/algorithms/mazerecursivebacktracker.service';
import { Button } from 'protractor';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  generateButtonDepressed: boolean              // these ensure the user adheres to the intended
  solveButtonDepressed: boolean                 // order for button selection, which is:
  mazeGenerating: boolean                       // generate, golve, then clear in that order only
  mazeGenerated: boolean                        //
  mazeSolving: boolean                          //
  mazeSolved: boolean                           //


  constructor(
    private displayControl: DisplaycontrolService,
    ) {}

  ngOnInit() {                                   // initalize everything on the board
    this.displayControl.initBoard()
    this.displayControl.redrawBoard()
    this.generateButtonDepressed = false; this.mazeGenerated = false; this.mazeGenerating = false
    this.solveButtonDepressed = false; this.mazeSolved = false
  }

  async onGenerateMaze() {
  }

  async onSolveMaze() {
  }

  onClearBoard() {
    if (!this.mazeSolved) { return }
    this.displayControl.initBoard()
    this.displayControl.markStart(2, 2)
    this.displayControl.markFinish(17, 17)
    this.displayControl.redrawBoard()
    this.generateButtonDepressed = false; this.mazeGenerated = false; this.mazeGenerating = false
    this.solveButtonDepressed = false; this.mazeSolved = false; this.mazeSolving = false
    document.getElementById('generate-button').style.color = '#3ffd1c'
    document.getElementById('solve-button').style.color = '#3ffd1c'
  }

  onFillAll() {
    this.displayControl.fillAll()
  }
}
