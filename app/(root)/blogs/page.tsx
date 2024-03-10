import BlogCard from '@/components/cards/blog';
import PageHeader from '@/components/shared/page-haed';
import { getBlogs } from '@/service/blog.service';

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="max-w-6xl mx-auto">
      <PageHeader />

      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-24">
        {blogs.map(blog => (
          <BlogCard key={blog.title} {...blog} isVertical />
        ))}
      </div>
    </div>
  );
}
