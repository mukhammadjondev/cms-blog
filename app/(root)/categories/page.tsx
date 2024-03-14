import CategoriesTagsCard from '@/components/cards/categories-tags';
import PageHeader from '@/components/shared/page-haed';
import { getCategories } from '@/service/category.service';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All categories',
};

async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="max-w-6xl mx-auto">
      <PageHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-20">
        {categories.map(item => (
          <CategoriesTagsCard key={item.slug} {...item} type="categories" />
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;
