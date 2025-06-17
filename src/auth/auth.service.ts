import { Injectable } from '@nestjs/common';
import { SingInDto, SingUpDto } from './dtos/auth';

@Injectable()
export class AuthService {
  async singup(data: SingUpDto) {
    console.table(data);
    return data;
  }

  async singin(data: SingInDto) {
    console.log(data);
    return data;
  }
}
