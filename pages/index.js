import About from '../components/About';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation ';
import { PageSEO } from '../utils/SEO';
import siteMetadata from '../utils/siteMetadata';

export default function Home() {
  return (
    <>
      <Navigation />
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />
      <div className="max-h-screen">
        <div className="space-y-14 lg:space-y-24">
          <main className="max-w-4xl mx-auto mt-16 antialiased">
            <About />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
