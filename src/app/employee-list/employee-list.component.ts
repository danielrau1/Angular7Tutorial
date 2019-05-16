import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.sass']
})
export class EmployeeListComponent implements OnInit {

  // [3]
  public employees = [
    {id: 1, name: 'Andrew', age: 30},
    {id: 2, name: 'Brandon', age: 25},
    {id: 3, name: 'Christina', age: 26},
    {id: 4, name: 'Elena', age: 28},
  ];

  constructor() { }

  ngOnInit() {
  }

}
