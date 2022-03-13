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
    title: new FormControl('شامپۆ'),
    quantity: new FormControl(1),
  });
  products = [
    ' تایت تۆ 4kg',
    'معجون مناڵ و گەورە',
    'تایت تۆ9kg',
    'تایت عا 5kg',
    'شامپۆی جل ',
    'معتەری جل',
    'کلێنشی تەڕ گەورەو مناڵ',
    'کلێنسی وشک ',
    'کلێنسی مەتبەخ',
    'سابون Dane',
    ' سابون لۆکس ',
    'سابون ئیڤڵ ',
    'مەعتەری عام',
    'شامپۆی قژ',
    ' شامپۆی دەست',
    'کەفی دەست',
    'دایبی گیزمۆ',

    'فلاش ئیڤڵ',
    'فلاش هارمۆنی',
    'فاست ملەوەن',
    ' پاکەرەوەی چەوری تەباخ']
  tableData:
    [{
      title: string,
      quantity: number
    }]
    | undefined;
  result: any;
  i: number = 0
  constructor() { }

  ngOnInit(): void {
  }
  addData() {
    if (!this.tableData) {
      this.tableData = [this.productsForm.value]

    }
    else {

      this.result = this.tableData.filter((s, index) => {
        if (s.title === this.productsForm.value.title) {

          this.i = index
        }
        return s.title === this.productsForm.value.title
      })

      if (this.result.length > 0) {
        this.tableData[this.i].quantity = +this.tableData[this.i].quantity + 1
        this.i = 0

      }
      else {

        this.tableData?.push(this.productsForm.value)
      }

    }


  }

}
