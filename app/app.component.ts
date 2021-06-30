import { Component } from '@angular/core';
import { products } from './products';

@Component({
    selector: 'my-app',
    template: `
       <app-product-grid></app-product-grid>
    `
})
export class AppComponent {
}
