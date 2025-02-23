import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrganizationTreeComponent } from 'src/app/shared/component/organization-tree/organization-tree.component';

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.scss']
})
export class TaskOneComponent implements OnInit {
  @ViewChild("orgTree", { static: true }) orgTree!: OrganizationTreeComponent;

  connectionForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.connectionForm = this.fb.group({
      configurations: this.fb.array([this.createConfiguration(true)])
    });
  }

  // Create one configuration group
  createConfiguration(setDefaultValue: boolean = false): FormGroup {
    return this.fb.group({
      from: [setDefaultValue ? '1': '', Validators.required],
      to: [setDefaultValue ? '7' : '', Validators.required],
      label: [setDefaultValue ? 'Conflicts of interest' : '', Validators.required]
    });
  }

  // Get configurations as FormArray
  get configurations(): FormArray {
    return this.connectionForm.get('configurations') as FormArray;
  }

  // Add new configuration
  addConfiguration(): void {
    this.configurations.push(this.createConfiguration());
  }

  // Remove a configuration by index
  removeConfiguration(index: number): void {
    if (this.configurations.length > 1) {
      this.configurations.removeAt(index);
    }
  }

  // Form submission
  onSubmit(): void {
    if (this.connectionForm.valid) {
      this.orgTree.updateConnectionForm(this.connectionForm);
      console.log(this.orgTree, 'dfdfdfd');
      // You can add further processing here.
    } else {
      console.log('Form is invalid');
    }
  }
}
