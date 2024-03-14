import PageHeader from '@/components/shared/page-haed';
import { getArchiveBlogs } from '@/service/blog.service';
import { format } from 'date-fns';
import { Archive, Dot } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Archived blogs',
};

export default async function ArchivePage() {
  const blogs = await getArchiveBlogs();

  return (
    <div className="max-w-6xl mx-auto">
      <PageHeader desc="Showing posts from" />

      {blogs.map((blog, idx) => (
        <Fragment key={idx}>
          <div className="flex flex-col space-y-3 mt-8">
            <div className="relative">
              <span className="text-5xl font-creteRound relative z-20">
                {blog.year}
              </span>
              <Archive className="absolute w-16 h-16 -translate-x-4 -translate-y-12 opacity-10" />
            </div>
          </div>
          <div className="flex flex-col space-y-2 mt-8">
            {blog.blogs.map(item => (
              <div
                className="flex gap-2 text-lg text-muted-foreground"
                key={item.slug}
              >
                <p>{format(new Date(item.createdAt), 'dd MMM')}</p>
                <Dot className="text-white w-8 h-8" />
                <Link
                  href={`/blogs/${item.slug}`}
                  className="hover:text-white hover:underline cursor-pointer"
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
}
