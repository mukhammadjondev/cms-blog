import { ChildProps } from '@/types';
import Navbar from './_components/navbar';
import Footer from './_components/footer';

function Layout({ children }: ChildProps) {
  return (
    <main>
      <div className="container">{children}</div>
    </main>
  );
}

export default Layout;
