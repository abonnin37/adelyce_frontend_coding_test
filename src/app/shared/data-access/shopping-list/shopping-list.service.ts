import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../models/product.class';
import {ShoppingList} from '../../models/shopping-list.class';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  static shoppingList: ShoppingList = null;
  public shoppingList$: BehaviorSubject<ShoppingList> = new BehaviorSubject<ShoppingList>({items: []});

  constructor(private http: HttpClient) { }

  getShoppingList(): Observable<ShoppingList> {
    if ( ! ShoppingListService.shoppingList )
    {
      this.http.get<any>('http://localhost:8080/api/shopping-list').subscribe(data => {
        ShoppingListService.shoppingList = data;

        this.shoppingList$.next(ShoppingListService.shoppingList);
      });
    }
    else
    {
      this.shoppingList$.next(ShoppingListService.shoppingList);
    }

    return this.shoppingList$;
  }
}
