import {
  Controller,
  Get,
  Query,
  Req,
  Headers,
  Param,
  Post,
  Body,
  HttpException,
  HttpStatus,
  ForbiddenException,
  UseFilters,
  UsePipes, ValidationPipe, ParseIntPipe, UseGuards, SetMetadata, UseInterceptors,
} from '@nestjs/common';
import { CreatePostDto } from './post.dto';
import { DemoService } from './providers/demo/demo.service';
import { DemoFilter } from '../core/filters/demo.filter';
import { DemoAuthGuard } from '../core/guards/demo-auth.guard';
import { Roles } from '../core/decorators/roles.decorator';
import { LogginInterceptor } from '../core/interceptors/loggin.interceptor';
import { TransformInterceptor } from '../core/interceptors/transform.interceptor';
import { ErrorsInterceptor } from '../core/interceptors/errors.interceptor';
import { User } from '../core/decorators/user.decorator';
import { DemoPipe } from '../core/pipes/demo.pipe';

@Controller('posts')
export class PostsController {

  constructor(private readonly demoService: DemoService) {}

  @Get()
  index() {
    return this.demoService.findAll();
  }

  @Get(':id')
  show(@Param('id', ParseIntPipe) id) {
    return {
      title: `Post ${id}`,
    };
  }

  @Post()
  @UsePipes(ValidationPipe)
  @Roles('member')
  store(@Body() post: CreatePostDto, @User('demo', DemoPipe) user) {

    this.demoService.create(post);
  }
}
