import BlogCard from '@/components/cards/blog';
import PageHeader from '@/components/shared/page-haed';
import { getBlogsByTag } from '@/service/tag.service';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogsByTag(params.slug);

  return {
    title: blog.name,
  };
}

async function TagPage({ params }: { params: { slug: string } }) {
  const tag = await getBlogsByTag(params.slug);

  return (
    <div className="max-w-6xl mx-auto">
      <PageHeader title={tag.name} />

      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-24">
        {tag.blogs.map(blog => (
          <BlogCard key={blog.title} {...blog} isVertical />
        ))}
      </div>
    </div>
  );
}

export default TagPage;
