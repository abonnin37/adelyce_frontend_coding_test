import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {Item} from '../../models/item.class';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: Item = {id: undefined, name: undefined, users: []};
  @Input() editItem: (item: Item) => void;
  @Input() deleteItem: (item: Item) => void;
  @Input() shareItem: (item: Item) => void;

  constructor() {
  }

  ngOnInit(): void {
  }

}
