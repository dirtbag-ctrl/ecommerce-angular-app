import { Product } from './../../../models/product';
import { ProductService } from './../../../services/product.service';
import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  products: Product[];
  subscripton: Subscription;
  dataSource: MatTableDataSource<Product>;
  displayedColumns: any[] = [
    'title',
    'price',
    'key'
  ];


  constructor(private productService: ProductService) {
    this.subscripton = this.productService.getAllProducts()
      .subscribe(products => {
        this.products = products; // populates products object with data from db 
        this.dataSource = new MatTableDataSource(products); // populates table data soruce with data from db 

        setTimeout(() => { // set data limit for page 
          this.dataSource.paginator = this.paginator;
        }, 0);
        this.dataSource.sort = this.sort;

      });

  }


  // filter search
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    // destroy after using 
    this.subscripton.unsubscribe();
  }

  



}
