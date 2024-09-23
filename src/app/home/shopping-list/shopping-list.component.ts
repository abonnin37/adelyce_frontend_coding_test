import { Component, OnInit } from '@angular/core';
import {Item} from '../../shared/models/item.class';
import {ShoppingListService} from '../../shared/data-access/shopping-list/shopping-list.service';
import {MatDialog} from '@angular/material/dialog';
import {ItemDialogComponent} from '../../shared/ui/item-dialog/item-dialog.component';
import {ItemsService} from '../../shared/data-access/items/items.service';
import {ShareItemDialogComponent} from "../../shared/ui/share-item-dialog/share-item-dialog.component";
import {SharedItemsService} from "../../shared/data-access/shared-items/shared-items.service";
import {User} from "../../shared/models/user.class";
import {SharedItemPayload} from "../../shared/models/shared-item.class";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  items: Item[] = [];
  selectedUser: User | null = null;

  constructor(
    private shoppingListService: ShoppingListService,
    private itemsService: ItemsService,
    public dialog: MatDialog,
    private sharedItemsService: SharedItemsService
  ) { }

  ngOnInit(): void {
    this.shoppingListService.getShoppingList().subscribe(data => {
      this.items = data.items;
    });

    this.sharedItemsService.selectedItem$.subscribe(selectedUser => {
      this.selectedUser = selectedUser;
    });
  }

  addItem = () => {
    const dialogRef = this.dialog.open(ItemDialogComponent, {
      data: { name: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newItem = { name: result };
        this.itemsService.create(newItem);
      }
    });
  }

  editItem = (item: Item) => {
    const dialogRef = this.dialog.open(ItemDialogComponent, {
      data: { name: item.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== item.name && result !== null) {
        this.itemsService.update({...item, name: result});
      }
    });
  }

  deleteItem = (item: Item) => {
    this.itemsService.delete(item.id);
  }

  shareItem = (item: Item) => {
    const dialogRef = this.dialog.open(ShareItemDialogComponent, {
      data: { item }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const payload: SharedItemPayload = {
          userId: this.selectedUser.id,
          itemId: item.id
        };

        if (payload.userId && payload.itemId) {
          this.itemsService.shareItem(payload);
        }
      }
    });
  }
}
