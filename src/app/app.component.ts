import { Component } from '@angular/core';
import {Workbook} from "exceljs";
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'margapp';
  flavors: string[] = ['Lime', 'Fruit', 'Texana', 'Golden Texana'];
  people: number = 0;

  constructor(private dataService: DataService){
    this.dataService.select('');
  }
}
