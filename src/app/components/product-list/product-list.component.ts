import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '@components/product-card/product-card.component';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { loadProducts } from 'src/app/store/actions/product.action';
import { selectProducts } from 'src/app/store/select/product.select';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
  ],
  providers: [],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList$: Observable<any> = of(Array(4).fill(0));
  isloading:boolean = false;

  constructor(
    private readonly store: Store,
  ) {
    this.productList$ = this.store.select(selectProducts)
  }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }

}
