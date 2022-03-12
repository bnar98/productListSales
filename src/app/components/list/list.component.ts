import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  productsForm = new FormGroup({
    title: new FormControl(''),
    quantity: new FormControl(''),
  });
  tableData:
    [{
      title: string,
      quantity: number
    }]
    | undefined;
  result: any
  constructor() { }

  ngOnInit(): void {
  }
  addData() {
    if (!this.tableData) {
      this.tableData = [this.productsForm.value]

    }
    else {

      this.result = this.tableData.filter(s => s.title = this.productsForm.value.title);

      if (this.result) {
        console.log('test')


      }
      else {
        this.tableData?.push(this.productsForm.value)
      }
    }


  }
}
