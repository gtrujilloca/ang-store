import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { StoreService } from "@services/store.service";
import { catchError, EMPTY, map, mergeMap } from "rxjs";


@Injectable()
export class ProductEffects {

  loadPriducts$ = createEffect(() => this.actions$.pipe(
    ofType('[Product action] loadProducts'),
    mergeMap(() => this.storeService.getProducts()
      .pipe(
        map(products => ({ type: '[Product action] getProducts', items: products})),
        catchError(() => EMPTY)
      ))
  ))

  constructor(
    private actions$: Actions,
    private storeService: StoreService,
  ){}

}