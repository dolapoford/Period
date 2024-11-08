import { Component } from '@angular/core';

interface TableData {
  name: string;
  email: string;
  selected: boolean;
  [key: string]: string | boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: TableData[] = [
    { name: 'Alice', email: 'alice@example.com', selected: false },
    { name: 'Bob', email: 'bob@example.com', selected: false },
    { name: 'Charlie', email: 'charlie@example.com', selected: false },
    // Add more data as needed
  ];

  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  page: number = 1;

  toggleSelectAll(event: any): void {
    const isChecked = event.target.checked;
    this.data.forEach((item) => (item.selected = isChecked));
  }

  onCheckboxChange(item: TableData): void {
    item.selected = !item.selected;
  }

  sortTable(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
  }

  getSortedData(): TableData[] {
    return this.data.sort((a, b) => {
      const valueA = a[this.sortColumn as keyof TableData] as string;
      const valueB = b[this.sortColumn as keyof TableData] as string;
  
      if (valueA < valueB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valueA > valueB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }
  
}
