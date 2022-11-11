import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product!: IProduct;

  categoryColor:any = {
    1: 'card__category--shoes',
    2: 'card__category--furniture',
    3: 'card__category--clothes',
    4: 'card__category--electronic',
    5: 'card__category--other',
  }

  constructor() { }

  ngOnInit(): void {
  }

  getColor(id:number) {
    return this.categoryColor[id] || '';
  }

}
