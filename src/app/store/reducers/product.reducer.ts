import { createReducer, on } from '@ngrx/store';
import { IProduct } from 'src/app/interfaces/product';
import { addProduct, getProducts } from '../actions/product.action';

export const initialState: ReadonlyArray<IProduct> = [];

export const productsReducer = createReducer(
  initialState,
  on(getProducts,(_, { items }) => [...items]),
  on(addProduct, (old, { item }) => [...old, item])
)
