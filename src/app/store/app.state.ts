import { ActionReducerMap } from "@ngrx/store";
import { IProduct } from "../interfaces/product";
import { productsReducer } from "./reducers/product.reducer";

export interface AppState {
  items: ReadonlyArray<IProduct>
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  items: productsReducer
};