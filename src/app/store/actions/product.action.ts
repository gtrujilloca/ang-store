import { createAction, props } from '@ngrx/store';
import { IProduct } from 'src/app/interfaces/product';

export const loadProducts = createAction(
  '[Product action] loadProducts'
);
export const getProducts = createAction(
  '[Product action] getProducts',
  props<{items: ReadonlyArray<IProduct>}>()
);
export const getProduct = createAction(
  '[Product action] getProduct',
  props<{id: number}>()
);
export const addProduct= createAction(
  '[Product action] addProduct',
  props<{item: IProduct}>()
);