import ContactForm from '@/components/forms/contact';
import PageHeader from '@/components/shared/page-haed';
import { Mail, Phone } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <PageHeader />
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 mt-6">
        <div className="flex flex-col">
          <h1 className="text-4xl font-creteRound">Contact MuhsDev</h1>
          <p className="mt-2 text-muted-foreground">
            I am here to help and answer any question you might have. I look
            forward to hearing from you
          </p>

          <div className="mt-12 flex items-center gap-3">
            <Mail className="w-4 h-4" />
            <p className="text-sm">info@muhsdev.ac</p>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <Phone className="w-4 h-4" />
            <p className="text-sm">+98 02 296 4902</p>
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-creteRound mb-2">Contact form</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
