import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../domain/user';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}
}
