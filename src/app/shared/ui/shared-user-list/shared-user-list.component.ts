import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../models/item.class';
import {ItemsService} from '../../data-access/items/items.service';
import {User} from '../../models/user.class';
import {SharedItemPayload} from '../../models/shared-item.class';

@Component({
  selector: 'app-shared-user-list',
  templateUrl: './shared-user-list.component.html',
  styleUrls: ['./shared-user-list.component.scss']
})
export class SharedUserListComponent implements OnInit {
  @Input() item: Item;
  @Input() deleteItem: (item: Item) => void;
  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
  }

  cancelShareUser = (user: User) => {
    const payload: SharedItemPayload = {
      userId: user.id,
      itemId: this.item.id
    };

    this.itemsService.cancelShareItem(payload);
  }
}
