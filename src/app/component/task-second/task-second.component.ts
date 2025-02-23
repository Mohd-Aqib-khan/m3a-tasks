import { Component } from '@angular/core';
import { SAMPLE_DATA, SAMPLE_DATA_2 } from './sampleData';

@Component({
  selector: 'app-task-second',
  templateUrl: './task-second.component.html',
  styleUrls: ['./task-second.component.scss']
})
export class TaskSecondComponent {
  data = SAMPLE_DATA_2;




}
