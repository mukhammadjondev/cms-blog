import Link from 'next/link';
import { SidebarNav } from './components/sidebar-nav';
import ModeToggle from '@/components/shared/mode-toggle';

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function AdminDashboardLayout({
  children,
}: SettingsLayoutProps) {
  return (
    <>
      <div className="space-y-6 p-10 pb-16">
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/6">
            <div className="flex items-center justify-between mb-4">
              <Link href="/">
                <h1 className="text-2xl md:text-3xl font-creteRound">
                  MuhsDev
                </h1>
              </Link>
              <ModeToggle />
            </div>
            <SidebarNav />
          </aside>
          <div className="flex-1 lg:max-w-6xl space-y-6">{children}</div>
        </div>
      </div>
    </>
  );
}
