import BlogCard from '@/components/cards/blog';
import PageHeader from '@/components/shared/page-haed';
import { getBlogsByCategory } from '@/service/category.service';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogsByCategory(params.slug);

  return {
    title: blog.name,
  };
}

async function CategoryPage({ params }: { params: { slug: string } }) {
  const category = await getBlogsByCategory(params.slug);

  return (
    <div className="max-w-6xl mx-auto">
      <PageHeader title={category.name} />

      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-24">
        {category.blogs.map(blog => (
          <BlogCard key={blog.title} {...blog} isVertical />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
