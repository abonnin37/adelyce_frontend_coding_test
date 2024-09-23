import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {SharedItem} from '../../models/shared-item.class';
import {User} from '../../models/user.class';

@Injectable({
  providedIn: 'root'
})
export class SharedItemsService {

  constructor(private http: HttpClient) { }

  private static sharedItems: SharedItem[] = [];
  private static selectedItem: User = null;

  private sharedItems$: BehaviorSubject<SharedItem[]> = new BehaviorSubject<SharedItem[]>([]);
  public selectedItem$: BehaviorSubject<User> = new BehaviorSubject<User>({id: undefined, email: undefined});

  getSharedItems(): Observable<SharedItem[]> {
    if ( SharedItemsService.sharedItems.length === 0 )
    {
      this.http.get<any>('http://localhost:8080/api/shared-items').subscribe(data => {
        SharedItemsService.sharedItems = data;

        this.sharedItems$.next(SharedItemsService.sharedItems);
      });
    }
    else
    {
      this.sharedItems$.next(SharedItemsService.sharedItems);
    }

    return this.sharedItems$;
  }

  setSelectedItem(user: User | null) {
    this.selectedItem$.next(user);
  }
}
