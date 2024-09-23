import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../models/product.class';
import {Item} from '../../models/item.class';
import {ShoppingList} from '../../models/shopping-list.class';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {SharedItemPayload} from '../../models/shared-item.class';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor(private http: HttpClient, private shoppingListService: ShoppingListService) { }

  create(item: Item): Observable<ShoppingList> {
    this.http.post<Item>('http://localhost:8080/api/items', item).subscribe(
      response => {
        ShoppingListService.shoppingList.items.push(response);
        this.shoppingListService.shoppingList$.next(ShoppingListService.shoppingList);
      },
      error => {
        console.log(error);
      }
    );

    return this.shoppingListService.shoppingList$;
  }

  update(item: Item): Observable<ShoppingList>{
    ShoppingListService.shoppingList.items.forEach(element => {
      if (element.id === item.id)
      {
        this.http.put<Item>('http://localhost:8080/api/items/' + item.id, item).subscribe(
          response => {
            element.name = response.name;

            this.shoppingListService.shoppingList$.next(ShoppingListService.shoppingList);
          },
          error => {
            console.log(error);
          }
        );
      }
    });

    return this.shoppingListService.shoppingList$;
  }


  delete(id: string): Observable<ShoppingList>{
    this.http.delete<null>('http://localhost:8080/api/items/' + id).subscribe(
      () => {
        ShoppingListService.shoppingList.items = ShoppingListService.shoppingList.items.filter(value => value.id !== id );
        this.shoppingListService.shoppingList$.next(ShoppingListService.shoppingList);
      },
      error => {
        console.log(error);
      }
    );

    return this.shoppingListService.shoppingList$;
  }

  shareItem(payload: SharedItemPayload): Observable<ShoppingList> {
    ShoppingListService.shoppingList.items.forEach(element => {
      if (element.id === payload.itemId)
      {
        this.http.post<Item>('http://localhost:8080/api/shared-items', payload).subscribe(
          response => {
            element.users = response.users;

            this.shoppingListService.shoppingList$.next(ShoppingListService.shoppingList);
          },
          error => {
            console.log(error);
          }
        );
      }
    });

    return this.shoppingListService.shoppingList$;
  }

  cancelShareItem(payload: SharedItemPayload): Observable<ShoppingList> {
    ShoppingListService.shoppingList.items.forEach(item => {
      if (item.id === payload.itemId)
      {
        this.http.post<Item>('http://localhost:8080/api/shared-items/cancel', payload).subscribe(
          response => {
            item.users = response.users;

            this.shoppingListService.shoppingList$.next(ShoppingListService.shoppingList);
          },
          error => {
            console.log(error);
          }
        );
      }
    });

    return this.shoppingListService.shoppingList$;
  }
}
