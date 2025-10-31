import { Column, Entity } from 'typeorm';
import { UserEntity } from '../../../../core/entities/user/user';
import { TypeOrmEntity } from '../type-orm.entity';

@Entity()
export class User extends TypeOrmEntity implements UserEntity {
  @Column()
  login: string;

  @Column({ unique: true })
  email: string;

  @Column()
  passwordHash: string;

  @Column({ nullable: true })
  name?: string;
}
