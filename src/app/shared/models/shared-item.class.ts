import {User} from './user.class';

export class SharedItem {
  id?: string;
  name?: string;
  shoppingList?: ShoppingListForSharedItem;
}

export class ShoppingListForSharedItem {
  user?: User;
}

export class SharedItemPayload {
  userId?: string;
  itemId?: string;
}
