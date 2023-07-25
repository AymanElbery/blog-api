/* eslint-disable prettier/prettier */
// post.model.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  author: string;

  @Prop({ type: Date, required: true })
  date: Date;

  @Prop({ type: [String], required: true })
  tags: string[];
}

export const PostSchema = SchemaFactory.createForClass(Post);
