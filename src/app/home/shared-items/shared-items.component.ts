import { Component, OnInit } from '@angular/core';
import {SharedItemsService} from '../../shared/data-access/shared-items/shared-items.service';
import {SharedItem} from '../../shared/models/shared-item.class';

@Component({
  selector: 'app-shared-items',
  templateUrl: './shared-items.component.html',
  styleUrls: ['./shared-items.component.scss']
})
export class SharedItemsComponent implements OnInit {
  items: SharedItem[] = [];

  constructor(
    private sharedItemsService: SharedItemsService,
  ) { }

  ngOnInit(): void {
    this.sharedItemsService.getSharedItems().subscribe(data => {
      this.items = data;
    });
  }
}
