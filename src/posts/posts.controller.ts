import { Controller, Get, Query, Req, Headers, Param, Post, Body } from '@nestjs/common';
import { CreatePostDto } from './post.dto';

@Controller('posts')
export class PostsController {
  @Get()
  index(@Headers('authorization') headers) {
    // tslint:disable-next-line:no-console
    console.log(
      headers,
    );

    return [
      {
        title: 'hello',
      },
    ];
  }

  @Get(':id')
  show(@Param() params) {
    return {
      title: `Post ${params.id}`,
    };
  }

  @Post()
  store(@Body() post: CreatePostDto) {
    // tslint:disable-next-line:no-console
    console.log(post.title);
  }
}
