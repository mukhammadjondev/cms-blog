'use client';

import PageHeader from '@/components/shared/page-haed';
import { Archive, Dot } from 'lucide-react';

export default function ArchivePage() {
  return (
    <div className="max-w-6xl mx-auto">
      <PageHeader desc="Showing posts from" />

      <div className="flex flex-col space-y-3 mt-8">
        <div className="relative">
          <span className="text-5xl font-creteRound relative z-20">2023</span>
          <Archive className="absolute w-16 h-16 -translate-x-4 -translate-y-12 opacity-10" />
        </div>
      </div>

      <div className="flex flex-col space-y-2 mt-8">
        <div className="flex gap-2 text-lg text-muted-foreground">
          <p>05 Dec</p>
          <Dot className="text-white w-8 h-8" />
          <div className="hover:text-white hover:underline cursor-pointer">
            The AGI hype train is running out of steam
          </div>
        </div>
        <div className="flex gap-2 text-lg text-muted-foreground">
          <p>05 Dec</p>
          <Dot className="text-white w-8 h-8" />
          <div className="hover:text-white hover:underline cursor-pointer">
            The AGI hype train is running out of steam
          </div>
        </div>
      </div>
    </div>
  );
}
