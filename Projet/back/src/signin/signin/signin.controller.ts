import { Controller, NotFoundException, } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Signin } from '../signin.entity';
import { SigninService } from '../signin.service';
import { Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('signin')
export class SigninController {
  constructor(
    private signinService: SigninService,
    private readonly utilisateurService: SigninService) {}


}
