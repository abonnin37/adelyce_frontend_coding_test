import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Item} from '../../models/item.class';
import {UserService} from '../../data-access/user/user.service';
import {User} from '../../models/user.class';
import {SharedItemsService} from "../../data-access/shared-items/shared-items.service";

@Component({
  selector: 'app-share-item-dialog',
  templateUrl: './share-item-dialog.component.html',
  styleUrls: ['./share-item-dialog.component.scss']
})
export class ShareItemDialogComponent implements OnInit {
  protected item: Item;
  protected users: User[];
  protected selectedItem: User | null = null;

  constructor(
    public dialogRef: MatDialogRef<ShareItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    private sharedItemsService: SharedItemsService
  ) {
    this.item = data.item;
  }

  closeRegistrationDialog(): void {
    this.item = undefined;
    this.selectedItem = undefined;
    this.dialogRef.close();
  }

  onSelectionChange(event: any) {
    this.selectedItem = event.value;
    this.sharedItemsService.setSelectedItem(this.selectedItem);
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

}
