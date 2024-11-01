import { Component, Input, Output, EventEmitter, ViewChild, OnChanges } from '@angular/core';
import { TreeviewI18n, TreeviewItem, TreeviewConfig, DropdownTreeviewComponent, TreeviewHelper } from 'ngx-treeview';
import { DropdownTreeviewSelectI18n } from './dropdown-treeview-select-i18n';
import {isNil} from "../../../projects/ngx-treeview/src/lib/utils";

@Component({
  selector: 'ngx-dropdown-treeview-select',
  templateUrl: './dropdown-treeview-select.component.html',
  styleUrls: [
    './dropdown-treeview-select.component.scss'
  ],
  providers: [
    { provide: TreeviewI18n, useClass: DropdownTreeviewSelectI18n }
  ]
})
export class DropdownTreeviewSelectComponent implements OnChanges {
  @Input() config: TreeviewConfig;
  @Input() items: TreeviewItem[];
  @Input() maxHeight: number;
  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();
  @ViewChild(DropdownTreeviewComponent) dropdownTreeviewComponent: DropdownTreeviewComponent;
  filterText: string;
  private dropdownTreeviewSelectI18n: DropdownTreeviewSelectI18n;

  constructor(
    public i18n: TreeviewI18n
  ) {
    this.config = TreeviewConfig.create({
      hasAllCheckBox: false,
      hasCollapseExpand: false,
      hasFilter: true,
      maxHeight: 500
    });
    this.dropdownTreeviewSelectI18n = i18n as DropdownTreeviewSelectI18n;
  }

  ngOnChanges(): void {
    if (this.maxHeight) {
      this.config.maxHeight = this.maxHeight;
    }
    this.updateSelectedItem();
  }

  select(item: TreeviewItem): void {
    this.selectItem(item);
  }

  private updateSelectedItem(): void {
    if (!isNil(this.items)) {
      const selectedItem = TreeviewHelper.findItemInList(this.items, this.value);
      this.selectItem(selectedItem);
    }
  }

  private selectItem(item: TreeviewItem): void {
    if (this.dropdownTreeviewSelectI18n.selectedItem !== item) {
      this.dropdownTreeviewSelectI18n.selectedItem = item;
      if (this.dropdownTreeviewComponent) {
        this.dropdownTreeviewComponent.onSelectedChange([item]);
      }

      if (item) {
        if (this.value !== item.value) {
          this.value = item.value;
          this.valueChange.emit(item.value);
        }
      }
    }
  }
}
