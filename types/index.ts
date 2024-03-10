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
  tag: IAuthor;
  createdAt: string;
  content: { html: string };
}

export interface IAuthor {
  name: string;
  image: { url: string };
}

export interface ICategoryAndTag {
  name: string;
  slug: string;
}
