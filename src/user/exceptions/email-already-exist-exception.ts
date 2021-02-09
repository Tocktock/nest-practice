import { BadRequestException } from '@nestjs/common';

export class EmailAlreadyExistException extends BadRequestException {
  constructor(error?: string) {
    super('email_already_exist', error);
  }
}
