import { JwtDto } from './jwt.dto';

export class RequestUserDto implements Omit<JwtDto, 'sub'> {
  id!: string;
  roles!: string[];
  sessionId!: string;
}
