import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { PaginationQueryType } from 'src/types/util.types';
import { updateUserDTO } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(query: PaginationQueryType) {
    return this.userService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    userUpdatePayload: updateUserDTO,
  ) {
    return this.userService.update(id, userUpdatePayload);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const removedUser = await this.userService.delete(id);
    return Boolean(removedUser);
  }
}
