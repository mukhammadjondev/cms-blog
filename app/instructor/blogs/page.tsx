import BlogCard from '@/components/cards/blog';
import { getBlogs } from '@/service/blog.service';

export default async function InstructorBlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-24">
      {blogs.map(blog => (
        <BlogCard key={blog.title} {...blog} isVertical />
      ))}
    </div>
  );
}
