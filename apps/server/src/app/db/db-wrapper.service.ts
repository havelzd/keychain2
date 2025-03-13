import { Injectable } from '@nestjs/common';
import { Kysely } from 'kysely';
import pgDialect from './db.config';
import { DatabaseSchema } from './schema/database.schema';

@Injectable()
export class DbWrapper {
  private db;

  constructor() {
    this.db = new Kysely<DatabaseSchema>({ dialect: pgDialect });
  }

  findOne<T extends keyof DatabaseSchema>(table: T) {
    this.db.selectFrom(table).executeTakeFirstOrThrow();
  }
}
