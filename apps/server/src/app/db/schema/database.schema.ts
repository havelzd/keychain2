import { Insertable, Selectable, Updateable } from 'kysely';

export interface IUserTable {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
}

export type IUser = Selectable<IUserTable>;
export type INewUser = Insertable<IUserTable>;
export type IUserUpdate = Updateable<IUserTable>;

export interface DatabaseSchema {
  user: IUserTable;
}
