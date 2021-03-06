import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { ProductGridComponent } from './product-grid/product-grid.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GridModule,
    HttpClientModule
  ],
  declarations: [AppComponent, ProductGridComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
