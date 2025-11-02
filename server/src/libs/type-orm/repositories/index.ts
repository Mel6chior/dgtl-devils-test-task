import { GeneralFields } from 'src/core/entities';
import { FindOneOptions, FindOptionsWhere, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity.js';
import { TypeOrmEntity } from '../entities/type-orm.entity';

export abstract class CrudRepository<Entity extends TypeOrmEntity> {
  constructor(protected readonly repository: Repository<Entity>) {}

  async create(data: Omit<Entity, GeneralFields>) {
    return await this.repository.save(<Entity>data);
  }

  async findById(id: string) {
    return await this.repository.findOne(<FindOneOptions<Entity>>{
      where: { id },
    });
  }

  async findAll() {
    return await this.repository.find();
  }

  async update(id: string, data: Partial<Entity>) {
    return await this.repository.update(
      <FindOptionsWhere<Entity>>{ id },
      <QueryDeepPartialEntity<Entity>>data,
    );
  }

  async delete(id: string) {
    return await this.repository.delete(<FindOptionsWhere<Entity>>{ id });
  }
}
