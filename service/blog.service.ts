import { IArchivedBlog, IBlog } from '@/types';
import request, { gql } from 'graphql-request';
import { cache } from 'react';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;

export const getBlogs = async () => {
  const query = gql`
    query MyQuery {
      blogs(where: { archive: false }) {
        title
        description
        slug
        createdAt
        author {
          name
          image {
            url
          }
        }
        category {
          name
          slug
        }
        image {
          url
        }
        tag {
          name
          slug
        }
        content {
          html
        }
      }
    }
  `;

  const { blogs } = await request<{ blogs: IBlog[] }>(graphqlAPI, query);
  return blogs;
};

export const getArchiveBlogs = async () => {
  const query = gql`
    query MyQuery {
      blogs(where: { archive: true }) {
        title
        slug
        createdAt
      }
    }
  `;

  const { blogs } = await request<{ blogs: IBlog[] }>(graphqlAPI, query);
  const filteredBlogs = blogs.reduce(
    (acc: { [year: string]: IArchivedBlog }, blog: IBlog) => {
      const year = blog.createdAt.substring(0, 4);
      if (!acc[year]) {
        acc[year] = { year, blogs: [] };
      }
      acc[year].blogs.push(blog);
      return acc;
    },
    {}
  );
  const result: IArchivedBlog[] = Object.values(filteredBlogs);
  return result;
};

export const getDetailedBlog = cache(async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      blog(where: { slug: $slug }) {
        author {
          name
          image {
            url
          }
          bio
          id
        }
        content {
          html
        }
        createdAt
        image {
          url
        }
        slug
        tag {
          name
          slug
        }
        category {
          name
          slug
        }
        title
      }
    }
  `;

  const { blog } = await request<{ blog: IBlog }>(graphqlAPI, query, { slug });
  return blog;
});

export const getSearchBlogs = async (title: string) => {
  const query = gql`
    query MyQuery($title: String!) {
      blogs(where: { title_contains: $title }) {
        image {
          url
        }
        slug
        createdAt
        title
      }
    }
  `;

  const { blogs } = await request<{ blogs: IBlog[] }>(graphqlAPI, query, {
    title,
  });
  return blogs;
};
