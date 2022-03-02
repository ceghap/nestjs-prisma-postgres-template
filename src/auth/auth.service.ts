import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signup() {
    return {
      msg: 'i am signup',
    };
  }

  signin() {
    return {
      msg: 'i am signin',
    };
  }
}
