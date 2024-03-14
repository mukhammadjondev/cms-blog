import { IBlog, ICategoryAndTag } from '@/types';
import request, { gql } from 'graphql-request';
import { cache } from 'react';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;

export const getTags = async () => {
  const query = gql`
    query MyQuery {
      tags {
        name
        slug
        blogs(where: { archive: false }) {
          id
        }
      }
    }
  `;

  const { tags } = await request<{ tags: ICategoryAndTag[] }>(
    graphqlAPI,
    query
  );
  return tags;
};

export const getBlogsByTag = cache(async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      tag(where: { slug: $slug }) {
        blogs {
          author {
            name
            image {
              url
            }
            bio
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
          description
        }
        name
      }
    }
  `;

  const { tag } = await request<{ tag: { blogs: IBlog[]; name: string } }>(
    graphqlAPI,
    query,
    { slug }
  );
  return tag;
});
