import {
  Controller,
  Post,
  Get,
  Patch,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactDTO } from './dto/contact.dto';
import { PaginationQueryType } from 'src/types/util.types';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  create(
    @Body()
    contactDto: ContactDTO,
  ) {
    return this.contactService.create(contactDto);
  }

  @Get()
  findAll(@Query() query: PaginationQueryType) {
    return this.contactService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body('status') status: string) {
    return this.contactService.update(id, status);
  }
}
