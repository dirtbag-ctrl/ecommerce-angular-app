import { ProductService } from './../../../../services/product.service';
import { CategoryService } from './../../../../services/category.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  categories$;  // Observable 
  product: any = {};
  id;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,) {
    // get catgories from the service
    this.categories$ = this.categoryService.getCategories();

    // get single product from db 
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.productService.getProduct(this.id).pipe(take(1)).subscribe(p => this.product = p);
  }

  // save form data to db
  save(product) {
    // if product already exists update it 
    if (this.id) this.productService.update(this.id, product);
    // else create a new product
    else this.productService.create(product);
    // redirect user
    this.router.navigate(['/admin/products']);
  }

  // delete product
  delete() {
    if (!confirm('Are you sure you want to delete this product?')) return

    this.productService.delete(this.id);
    // redirect user
    this.router.navigate(['/admin/products']);

  }


}
