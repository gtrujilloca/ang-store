import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})

export class StoreService {
  constructor(
    private readonly http: HttpClient
  ) { }

  getProducts(offset: number = 10, limit: number = 10): Observable<IProduct[]> {
    const params = new HttpParams()
      .set('offset',offset)
      .set('limit',limit)

    return this.http.get<IProduct[]>(`${environment.baseUrl}/products`, {
      params
    })
  }
}
