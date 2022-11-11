import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '@components/product-card/product-card.component';
import { Store } from '@ngrx/store';
import { StoreService } from '@services/store.service';
import { Observable } from 'rxjs';
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

  productList$: Observable<any> = new Observable();

  constructor(
    private readonly storeService: StoreService,
    private readonly store: Store,
  ) {
    this.productList$ = this.store.select(selectProducts)
  }

  ngOnInit(): void {
    // this.getAllProducts()
    // this.store.dispatch(getProducts({items: response}))
    this.store.dispatch(loadProducts());
  }

  // getAllProducts(){
  //   this.storeService.getProducts()
  //     .subscribe(response => {
  //       console.log(response);
  //       this.store.dispatch(getProducts({items: response}))
  //     })
  // }

}
