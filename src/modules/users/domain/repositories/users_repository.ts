import {User} from '../models/user';

export interface UsersRepository {

  GetByEmailAndName(email: string, name: string): Promise<User | undefined>;
  Save(user: User): Promise<User>;
}
