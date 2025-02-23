import {
  Component,
  ElementRef,
  Injector,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  Input,
} from '@angular/core';
import * as d3 from 'd3';
import { OrgChart } from 'd3-org-chart';
import { EntityCardComponent } from '../entity-card/entity-card.component';
import { HierarchyNode } from 'd3';
import { FormGroup } from '@angular/forms';

interface OrgNode {
  id: number;
  customParentId?: number;
  companyName?: string;
  employeeName?: string;
  detailType: number;
  imagePath: string;
}

@Component({
  selector: 'app-organization-tree',
  templateUrl: './organization-tree.component.html',
  styleUrls: ['./organization-tree.component.scss'],
})
export class OrganizationTreeComponent implements AfterViewInit {

  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;


  data: OrgNode[] = [
    { id: 1, companyName: 'M3a Family Office', detailType: 1, imagePath: "2496508.jpg" },
    { id: 2, customParentId: 1, detailType: 2, employeeName: 'Reetika', imagePath: "reetika.gif" },
    { id: 3, customParentId: 1, detailType: 2, employeeName: 'Mohd Aqib', imagePath: "aqib.gif" },
    { id: 4, customParentId: 2, detailType: 3, employeeName: 'Prachi', imagePath: "woman.gif" },
    { id: 5, customParentId: 2, detailType: 3, employeeName: 'Rena', imagePath: "rena.gif" },
    { id: 6, customParentId: 3, detailType: 3, employeeName: 'Topesh', imagePath: "suraj.gif" },
    { id: 7, customParentId: 3, detailType: 3, employeeName: 'Suraj', imagePath: "topesh.gif" },
  ];

  chart: OrgChart<OrgNode> | null = null;

  componentRefs: any[] = [];

  constructor(
    private viewContainerRef: ViewContainerRef,
    private injector: Injector
  ) {}

  ngAfterViewInit(): void {
    if (!this.chart) {
      this.chart = new OrgChart<OrgNode>();
      this.updateChart();
    }
  }

  updateChart(): void {
    if (!this.chart) {
      return;
    }

    this.chart
      .data(this.data)
      .nodeHeight((d) => 65 + 25)
      .nodeWidth((d) => 220 + 2)
      .container(this.chartContainer.nativeElement)
      .compact(false)
      .nodeId((dataItem) => dataItem.id)
      .parentNodeId((node) => {
        const data: OrgNode = 'data' in node ? node.data : node;
        return data.customParentId;
      })
      // .childrenMargin(() => 70)
      // .compactMarginBetween(() => 90)
      .nodeContent((node) => {
        return `<div id="org-container-${node.id}"></div>`;
      })
      .onExpandOrCollapse((node) => {
        this.renderEmployeeCards();
      })
      .expandAll()
      .fit()
      .render();



    this.chart.connections([{ from: "1", to: "7", label: "Conflicts of interest" }]).render()
    this.renderEmployeeCards();
  }

  renderEmployeeCards(): void {
    // Clear any previously inserted views
    this.viewContainerRef.clear();
    this.componentRefs.forEach((ref) => ref.destroy());
    this.componentRefs = [];

    this.data.forEach((node) => {
      const container = document.getElementById(`org-container-${node.id}`);
      if (container) {
        container.innerHTML = '';
        this.createEmployeeComponent(container, node);
      }
    });
  }

  createEmployeeComponent(container: HTMLElement, nodeData: OrgNode): void {
    // Instead of using ComponentFactoryResolver, we use the ViewContainerRef.createComponent method
    const componentRef = this.viewContainerRef.createComponent(EntityCardComponent, {
      injector: this.injector,
    });
    componentRef.instance.entity = nodeData;
    // Append the rendered component to the target container element
    container.appendChild(componentRef.location.nativeElement);
    this.componentRefs.push(componentRef);
  }

  updateConnectionForm(connectionForm: FormGroup): void {
    console.log("thisffdf34", connectionForm);
    this.chart?.connections(connectionForm.get('configurations')?.value).render();
    this.renderEmployeeCards();
  }
}
