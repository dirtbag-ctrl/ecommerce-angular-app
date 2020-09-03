import { ProductService } from './../../../../services/product.service';
import { CategoryService } from './../../../../services/category.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  // Observable 
  categories$;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,) {
    // get catgories from the service
    this.categories$ = categoryService.getCategories();
  }

  // save form data to db
  save(product) {
    this.productService.create(product);
    // redirect user to list of products
    this.router.navigate(['/admin/products']);
  }


}
