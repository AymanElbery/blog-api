import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { PostService } from '../services/post.service';
import { Post as PostModel } from '../models/post.model';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() postData: Partial<PostModel>): Promise<PostModel> {
    return this.postService.create(postData);
  }

  @Get()
  findAll(): Promise<PostModel[]> {
    return this.postService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<PostModel> {
    return this.postService.findById(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() postData: Partial<PostModel>,
  ): Promise<PostModel> {
    return this.postService.update(id, postData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<PostModel> {
    return this.postService.delete(id);
  }
  
}
