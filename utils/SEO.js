import Head from 'next/head';
import { useRouter } from 'next/router';
import siteMetadata from './siteMetadata';

const CommonSEO = ({
  title,
  description,
  ogType,
  ogImage,
  twImage,
  canonicalUrl,
}) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta
        property="og:url"
        content={`${siteMetadata.siteUrl}${router.asPath}`}
      />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      {ogImage.constructor.name === 'Array' ? (
        ogImage.map(({ url, index }) => (
          <meta property="og:image" content={url} key={index} />
        ))
      ) : (
        <meta property="og:image" content={ogImage} key={ogImage} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMetadata.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twImage} />
      <link
        rel="canonical"
        href={
          canonicalUrl
            ? canonicalUrl
            : `${siteMetadata.siteUrl}${router.asPath}`
        }
      />
    </Head>
  );
};

export const PageSEO = ({ title, description }) => {
  const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
  const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
  return (
    <CommonSEO
      title={title}
      description={description}
      ogType="website"
      ogImage={ogImageUrl}
      twImage={twImageUrl}
    />
  );
};

export const TagSEO = ({ title, description }) => {
  const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
  const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
  const router = useRouter();
  return (
    <>
      <CommonSEO
        title={title}
        description={description}
        ogType="website"
        ogImage={ogImageUrl}
        twImage={twImageUrl}
      />
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${description} - RSS feed`}
          href={`${siteMetadata.siteUrl}${router.asPath}/feed.xml`}
        />
      </Head>
    </>
  );
};

export const BlogSEO = ({
  authorDetails,
  title,
  meta,
  thumbnail,
  createdAt,
  url,
  canonicalUrl,
}) => {
  const postDateTemplate = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const router = useRouter();
  const publishedAt = new Date(createdAt).toLocaleDateString(
    siteMetadata.locale,
    postDateTemplate
  );
  const modifiedAt = new Date(createdAt || createdAt).toLocaleDateString(
    siteMetadata.locale,
    postDateTemplate
  );

  let image = !thumbnail ? [siteMetadata.socialBanner] : image;

  let authorList;
  if (authorDetails) {
    authorList = {
      '@type': 'Person',
      name: authorDetails.name,
    };
  } else {
    authorList = {
      '@type': 'Person',
      name: siteMetadata.author,
    };
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline: title,
    image: image,
    datePublished: publishedAt,
    dateModified: modifiedAt,
    author: authorList,
    publisher: {
      '@type': 'Organization',
      name: siteMetadata.author,
      logo: {
        '@type': 'ImageObject',
        url: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
      },
    },
    description: title,
  };

  const twImageUrl = image;

  return (
    <>
      <CommonSEO
        title={title}
        description={meta}
        ogType="article"
        ogImage={image}
        twImage={image}
        canonicalUrl={canonicalUrl}
      />
      <Head>
        {createdAt && (
          <meta property="article:published_time" content={publishedAt} />
        )}
        {createdAt && (
          <meta property="article:modified_time" content={modifiedAt} />
        )}
      </Head>
    </>
  );
};
