import { PostgresDialect, PostgresDialectConfig } from 'kysely';
import { Pool, PoolConfig } from 'pg';

export const poolConfig: PoolConfig = {
  port: 5433,
  host: 'localhost',
  user: 'keychain',
  password: 'keychain',
  database: 'keychain',
};

const postgresDialectConfig: PostgresDialectConfig = {
  pool: new Pool(poolConfig),
};

const pgDialect = new PostgresDialect(postgresDialectConfig);

export default pgDialect;
