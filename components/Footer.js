import siteMetadata from '../utils/siteMetadata';
import Link from 'next/link';
import { currentDayName } from '../utils/dateUtils';

export default function Footer() {
  return (
    <footer>
      <div className="mt-10 flex flex-col items-center">
        <div className="mb-2 hidden text-sm text-gray-500 dark:text-gray-400 md:flex">
          <div className="mx-1">
            <Link href={`${siteMetadata.website}`} className="link-underline">
              <>HaivTech{` © ${new Date().getFullYear()}`}</>
            </Link>
          </div>
          {`•`}
          <div className="mx-1">
            <Link href={`${siteMetadata.website}`} className="link-underline">
              <>Have a good {currentDayName()}!</>
            </Link>
          </div>
          {`•`}
          <div className="mx-1">
            <Link href="/contact" className="link-underline">
              Contact
            </Link>
          </div>
        </div>

        <div className="mb-2 text-sm text-gray-500 dark:text-gray-400 sm:block md:hidden lg:hidden">
          <div className="mx-1">
            <Link href={`${siteMetadata.website}`} className="link-underline">
              <>
                {siteMetadata.author}
                {` © ${new Date().getFullYear()}`}
              </>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
