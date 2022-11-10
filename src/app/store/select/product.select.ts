import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IProduct } from "src/app/interfaces/product";

export const selectProducts = createFeatureSelector<ReadonlyArray<IProduct>>('items');

export const selectProduct = createSelector(
  selectProducts,
  (products) => products.map(product => product.id === 2)
)