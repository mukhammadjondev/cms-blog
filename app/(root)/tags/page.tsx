import CategoriesTagsCard from '@/components/cards/categories-tags';
import PageHeader from '@/components/shared/page-haed';
import { getTags } from '@/service/tag.service';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All tags',
};

async function TagsPage() {
  const tags = await getTags();

  return (
    <div className="max-w-6xl mx-auto">
      <PageHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-20">
        {tags.map(item => (
          <CategoriesTagsCard key={item.slug} {...item} type="tags" />
        ))}
      </div>
    </div>
  );
}

export default TagsPage;
