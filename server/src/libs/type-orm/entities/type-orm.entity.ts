import {
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';

export abstract class TypeOrmEntity  {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
