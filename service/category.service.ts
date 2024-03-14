import { IBlog, ICategoryAndTag } from '@/types';
import request, { gql } from 'graphql-request';
import { cache } from 'react';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;

export const getCategories = async () => {
  const query = gql`
    query MyQuery {
      categories {
        name
        slug
        blogs {
          id
        }
      }
    }
  `;

  const { categories } = await request<{ categories: ICategoryAndTag[] }>(
    graphqlAPI,
    query
  );
  return categories;
};

export const getBlogsByCategory = cache(async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      category(where: { slug: $slug }) {
        blogs(where: { archive: false }) {
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

  const { category } = await request<{
    category: { blogs: IBlog[]; name: string };
  }>(graphqlAPI, query, { slug });
  return category;
});
