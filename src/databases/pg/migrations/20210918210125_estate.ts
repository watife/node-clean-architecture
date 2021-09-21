import {Knex} from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.raw(`
    CREATE TABLE Estates (
      id serial PRIMARY KEY,
      name varchar(100),
      address varchar(100)
    );
  `)
}

export async function down(knex: Knex): Promise<void> {
  return knex.raw(`
    DROP TABLE Estates;
  `)
}
