import { Component, HostListener, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {
  public gridData: any[] = products;
  public gridHeight = window.innerHeight - 150;

  @HostListener('window:resize') onResize() {
    this.gridHeight = window.innerHeight - 150;
  }

  constructor() {}

  ngOnInit() {}
}
