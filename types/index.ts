import { ReactNode } from 'react';

export interface ChildProps {
  children: ReactNode;
}

export interface IBlog {
  title: string;
  description: string;
  image: { url: string };
  author: IAuthor;
  category: ICategoryAndTag;
  tag: ICategoryAndTag;
  createdAt: string;
  content: { html: string };
  slug: string;
}

export interface IArchivedBlog {
  year: string;
  blogs: IBlog[];
}

export interface IAuthor {
  _id: string;
  name: string;
  bio: string;
  avatar: string;
  blogs: IBlog[];
}

export interface ICategoryAndTag {
  name: string;
  slug: string;
  blogs: IBlog[];
}
