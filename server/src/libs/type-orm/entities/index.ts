import { GeneralFields } from 'src/core/entities';
import { TypeOrmEntity } from './type-orm.entity';
import { User } from './user/user';

export const entities = [User];

export type EntityFields = Omit<TypeOrmEntity, GeneralFields>;
