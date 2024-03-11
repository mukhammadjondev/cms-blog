import AuthorCard from '@/components/cards/author';
import PageHeader from '@/components/shared/page-haed';
import { authors } from '@/constants';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <PageHeader />
      <h1 className="text-center text-4xl font-creteRound">
        We are the MuhsDev, <br /> Team of content writers and designers.
      </h1>

      <div className="grid grid-cols-4 gap-4 min-h-96 mt-6">
        <div className="col-span-2 max-md:col-span-4 relative h-80">
          <Image
            src={'/about/01.jpg'}
            alt="about"
            fill
            className="rounded-md object-cover"
          />
        </div>
        <div className="h-80 self-end relative max-md:col-span-2 max-md:h-72">
          <Image
            src={'/about/00.jpg'}
            alt="about"
            fill
            className="rounded-md object-cover"
          />
        </div>
        <div className="relative h-80 max-md:col-span-2 max-md:mb-8 max-md:h-72">
          <Image
            src={'/about/02.jpg'}
            alt="about"
            fill
            className="rounded-md object-cover"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 flex flex-col text-center space-y-4 text-muted-foreground">
        <p>
          If ever a place existed where you could just go crazy creatively, it
          is definitely your about page. It’s your chance to show your readers
          who you really are. Pictures, quotes, inspirational graphics, whatever
          it is that drives you.. Display it here in a way that only you can.
        </p>
        <p>
          I’ve included a plugin in the setup of this theme that will make
          adding columns to your pages and posts a piece of cake. Let creativity
          take control, and forget about the technical end of things, I’ve got
          your six.
        </p>
      </div>

      <h2 className="text-center text-4xl section-title font-creteRound my-12">
        <span>Our writers</span>
      </h2>

      <div className="flex justify-around max-md:flex-col max-md:space-y-4 max-md:items-center">
        {authors.map(author => (
          <AuthorCard key={author.name} {...author} />
        ))}
      </div>
    </div>
  );
}