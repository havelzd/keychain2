import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from '../../domain/user';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { LoginResponse } from '@keychain2/api';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(
    email: string,
    firstName: string,
    lastName: string,
    password: string,
  ): Promise<User> {
    const existingUser = await this.userRepository.findOne({
      where: { email },
    });
    if (existingUser) {
      throw new ConflictException('User already exists');
    }
    // hash password
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = new User();
    user.email = email;
    user.firstName = firstName;
    user.lastName = lastName;
    user.password = hashedPassword;
    return this.userRepository.save(user);
  }

  async login(email: string, password: string): Promise<LoginResponse> {
    const user = await this.userRepository.findOne({
      where: { email },
    });
    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }
    if (!bcrypt.compareSync(password, user.password)) {
      throw new BadRequestException('invalid credentials');
    }
    // generate token
    const payload = {
      sub: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    };
    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
