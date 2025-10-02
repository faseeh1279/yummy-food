import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { TableColumn, TableData } from '../models/shared.model';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  standalone: false
})
export class TableComponent {
  @Input() tableColumns: TableColumn[] = [];
  @Input() tableData: TableData[] = [];
  @Input() actions: boolean = false; 
  @ContentChild(TemplateRef) actionTemplate!: TemplateRef<any>;
}
