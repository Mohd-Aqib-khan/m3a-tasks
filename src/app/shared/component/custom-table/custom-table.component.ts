import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { COLUMNS_TO_DISPLAY } from 'src/app/component/task-second/sampleData';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]

})
export class CustomTableComponent {
  @Input() dataSource: any[] = [];
  @Input() columnsToDisplay: string[] = COLUMNS_TO_DISPLAY;
    //['name', 'position', 'weight', 'symbol'];
  @Input() isHeaderVisible = true;

  expandedElement: any | null = null;

  get columnsToDisplayWithExpand(): string[] {
    return [...this.columnsToDisplay, 'expand'];
  }

  toggleRow(element: any, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.expandedElement = this.expandedElement === element ? null : element;
  }
}
