import { IBlog } from '@/types';
import request, { gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;

export const getBlogs = async () => {
  const query = gql`
    query MyQuery {
      blogs {
        title
        description
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
