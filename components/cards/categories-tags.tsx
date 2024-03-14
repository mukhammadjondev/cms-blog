import { ICategoryAndTag } from '@/types';
import { Layers2, Tags } from 'lucide-react';
import Link from 'next/link';

interface Props extends ICategoryAndTag {
  type: 'categories' | 'tags';
}

function CategoriesTagsCard(item: Props) {
  return (
    <Link
      href={`/${item.type}/${item.slug}`}
      className="bg-secondary p-4 md:p-8 rounded-md shadow-xl flex flex-col items-center justify-center hover:bg-secondary/80 transition-colors dark:shadow-white/10"
    >
      {item.type === 'tags' ? <Tags /> : <Layers2 />}
      <h3 className="text-xl font-creteRound ms-2">{item.name}</h3>
      <p>{item.blogs.length} blogs</p>
    </Link>
  );
}

export default CategoriesTagsCard;
