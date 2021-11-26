import { Request } from 'express';
import { UserEntity } from 'src/modules/users/user.entity';

export interface RequestContext extends Request {
  user: UserEntity
}