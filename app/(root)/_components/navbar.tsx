'use client';

import Link from 'next/link';
import { navLinks } from '@/constants';
import ModeToggle from '@/components/shared/mode-toggle';
import GlobalSearch from './global-search';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Mobile from './mobile';

function Navbar() {
  const pathname = usePathname();

  return (
    <div className="h-[10vh] backdrop-blur-3xl border-b fixed z-40 inset-0 bg-bacground">
      <nav className="conrainer max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between px-4">
        <Link href="/">
          <h1 className="text-3xl md:text-4xl font-creteRound">MuhsDev</h1>
        </Link>
        <div className="gap-2 hidden md:flex">
          {navLinks.map(nav => (
            <Link
              key={nav.route}
              href={nav.route}
              className={cn(
                'hover:bg-blue-400/20 py-1 px-2 cursor-pointer rounded-sm transition-colors',
                pathname === nav.route && 'text-blue-400'
              )}
            >
              {nav.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <GlobalSearch />
          <ModeToggle />
          <Mobile />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
