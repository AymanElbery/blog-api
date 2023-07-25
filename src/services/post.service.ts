/* eslint-disable prettier/prettier */
import { Injectable ,NotFoundException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from '../models/post.model';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  async create(postData: Partial<Post>): Promise<Post> {
    const createdPost = new this.postModel(postData);
    return createdPost.save();
  }

  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }

  async findById(id: string): Promise<Post> {
    return this.postModel.findById(id).exec();
  }

  async update(id: string, updateData: Partial<Post>): Promise<Post> {
    const existingPost = await this.postModel.findById(id).exec();

    if (!existingPost) {
      throw new NotFoundException('Blog post not found');
    }

    existingPost.set(updateData);
    return existingPost.save();
  }

  async delete(id: string): Promise<Post> {
    const deletedPost = await this.postModel.findByIdAndRemove(id).exec();

    if (!deletedPost) {
      throw new NotFoundException('Blog post not found');
    }

    return deletedPost;
  }

}
