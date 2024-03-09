import { ReactNode } from 'react';

export interface ChildProps {
  children: ReactNode;
}

export interface IBlog {
  title: string;
  description: string;
  author: string;
  tags: string[];
  date: string;
  image: string;
}

export interface IAuthor {
  name: string;
  image: string;
}
