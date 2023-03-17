import { User } from './user.model';

export interface UsersResponse {
  results: User[];
  count: number;
  statusCode: number;
}

export interface UserResponse {
  result: User;
  statusCode: number;
}
