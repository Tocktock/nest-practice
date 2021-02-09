import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { validate } from 'class-validator';
import { DeleteResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { EmailAlreadyExistException } from './exceptions/email-already-exist-exception';
import { UsernameAlreadyExistException } from './exceptions/username-already-exist-exception';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto): Promise<Object | undefined> {
    const { username, email, password } = createUserDto;

    const thisUser = await this.userRepository.findOne({ username: username });
    if (thisUser) {
      const error = 'UserName is already exist';
      throw new UsernameAlreadyExistException(error);
    }
    const thisEmail = await this.userRepository.findOne({ email: email });
    if (thisEmail) {
      const error = 'Email is already exist';
      throw new EmailAlreadyExistException(error);
    }
    // create new user
    let newUser = new UserEntity();
    newUser.email = email;
    newUser.password = password;
    newUser.username = username;
    const validate_error = await validate(newUser);
    if (validate_error.length > 0) {
      const _error = { username: 'UserInput is not valid check type' };
      throw new HttpException(
        { message: 'Input data validation failed', _error },
        HttpStatus.BAD_REQUEST,
      );
    } else {
      try {
        const userId = await this.userRepository
          .save(newUser)
          .then((v) => v.id);
        return { userId: userId };
      } catch {}
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  async findByEmail(email: string): Promise<UserEntity | undefined> {
    return await this.userRepository.findOne({ email });
  }

  async findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(email: string): Promise<DeleteResult> {
    return await this.userRepository.delete({ email: email });
  }
}
