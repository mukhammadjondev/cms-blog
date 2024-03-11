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

export interface IAuthor {
  name: string;
  bio: string;
  image: { url: string };
}

export interface ICategoryAndTag {
  name: string;
  slug: string;
}
