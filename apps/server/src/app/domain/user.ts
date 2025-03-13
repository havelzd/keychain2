import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user', schema: 'public' })
export class User {
  @PrimaryColumn({ type: 'varchar', nullable: false })
  email = '';

  @Column({ name: 'first_name', type: 'varchar', nullable: false })
  firstName = '';

  @Column({ name: 'last_name', type: 'varchar', nullable: false })
  lastName = '';

  @Column({ name: 'password', type: 'varchar', nullable: false })
  password = '';

  constructor() {}
}
