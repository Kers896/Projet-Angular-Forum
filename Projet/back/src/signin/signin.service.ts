import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Signin } from './signin.entity';
// import { UpdateResult, DeleteResult } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SigninService {
    private saltRajout = 10;

    constructor(
        @InjectRepository(Signin)
        private signinRepository: Repository<Signin>,
    ) { }

    async findAll(): Promise<Signin[]> {
        return await this.signinRepository.find();
    }

}
