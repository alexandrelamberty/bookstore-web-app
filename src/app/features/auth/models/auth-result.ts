import { User } from '../../users/model/user.model';

export interface AuthResult {
  result: UserWithToken;
  statusCode: number;
}

interface UserWithToken {
  token: string;
  user: User;
}
