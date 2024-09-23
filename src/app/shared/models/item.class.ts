import {User} from './user.class';

export class Item {
  id?: string;
  name?: string;
  users?: User[];
}

export interface ItemPayload {
  name: string;
}
