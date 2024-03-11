'use client';

import { cn } from '@/lib/utils';
import { Dot, Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

interface PageHeaderProps {
  desc?: string;
  title?: string;
}

export default function PageHeader({ desc, title }: PageHeaderProps) {
  const paths = usePathname();
  const pathNames = paths.split('/').filter(path => path);

  return (
    <div className="relative mt-[15vh] mb-12 flex items-center justify-center flex-col">
      {desc && <p className="text-lg text-muted-foreground">{desc}</p>}
      <h2 className="text-center text-4xl section-title font-creteRound">
        <span className="capitalize">
          {title ? title : pathNames[pathNames.length - 1]}
        </span>
      </h2>

      <div className="flex gap-1 items-center mt-4">
        <Home className="w-4 h-4" />
        <Link href="/" className="opacity-90 hover:underline hover:opacity-100">
          Home
        </Link>
        <Dot />
        {pathNames.map((link, idx) => {
          const href = `/${pathNames.slice(0, idx + 1).join('/')}`;
          const itemClasses =
            pathNames.length !== idx + 1
              ? 'opacity-90 hover:underline hover:opacity-100'
              : 'text-muted-foreground';

          return (
            <Fragment key={idx}>
              <Link href={href} className={cn('capitalize', itemClasses)}>
                {link}
              </Link>
              {pathNames.length !== idx + 1 && <Dot />}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
