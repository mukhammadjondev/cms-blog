import { IBlog } from '@/types';
import request, { gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;

export const getBlogs = async () => {
  const query = gql`
    query MyQuery {
      blogs {
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

export const getDetailedBlog = async (slug: string) => {
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
};

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
