import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon2 from 'argon2';

import { AuthDTO } from './dto/auth.dto';

@Injectable({})
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  async register(authDTO: AuthDTO) {
    const hashedPassword: string = await argon2.hash(authDTO.password);
    const { name, age, email } = authDTO;
    const newUser = await this.prismaService.user.create({
      data: {
        hashedPassword,
        name,
        age,
        email,
      },
      select: {
        id: true,
        email: true,
        name: true,
        age: true,
        createAt: true,
      },
    });

    return newUser;
  }
  login() {
    return 'loggedin';
  }
}
