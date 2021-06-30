import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@progress/kendo-angular-grid';
import { products } from '../products';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent {
  @ViewChild('productGrid') productGrid: GridComponent;
  public gridData: any[] = products;
  public gridHeight = window.innerHeight - 150;
  public selectedProductIndexes = [];
  currentIndex = 0;

  @HostListener('window:resize') onResize() {
    this.gridHeight = window.innerHeight - 150;
  }

  selectedGridData(event) {
    this.currentIndex = event.rowIndex;
    this.highlightSelectedRow(event.dataItem);
  }

  highlightSelectedRow(dataItem) {
    this.selectedProductIndexes = [];
    this.selectedProductIndexes.push(dataItem.ProductID);
  }

  crawlNextRow() {
    this.currentIndex++;
    var productGridData = this.getProductGridData(this.productGrid);
    if (this.currentIndex < productGridData.length) {
      this.highlightSelectedRow(productGridData[this.currentIndex]);
    }
  }

  crawlPreviousRow() {
    this.currentIndex--;
    if (this.currentIndex >= 0) {
      var productGridData = this.getProductGridData(this.productGrid);
      this.highlightSelectedRow(productGridData[this.currentIndex]);
    }
  }

  getProductGridData(productGrid: GridComponent) {
    var productGridData: any = productGrid.data;
    return productGridData.data;
  }
}
