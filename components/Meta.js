import Head from "next/head";

const Meta = (props) => {
  const {
    title,
    keyword,
    description,
    og_name,
    og_site,
    og_title,
    og_description,
    og_image,
    og_url,
    twitter_card,
    icon,
  } = props;
  return (
    <Head>
      <meta name="keyword" content={keyword} />
      <meta name="description" content={description} />
      <link rel="icon" href={icon} />
      <link rel="apple-touch-icon" href={icon} />
      <meta property="og:name" content={og_name} />
      <meta property="og:site" content={og_site} />
      <meta property="og:title" content={og_title} />
      <meta property="og:description" content={og_description} />
      <meta property="og:image" content={og_image} />
      <meta property="og:url" content={og_url} />
      <meta name="twitter:card" content={twitter_card} />

      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Dolphins India PS Pvt Ltd",
  keyword:
    "web development, programming, java, python, reactjs, e-commerce, shopping",
  description:
    "E-commerce Company, where brand meets the customer. Online shopping experience doesn't get better then what Dolphins India provides",
  icon: "/favicon.ico",

  og_name: "Dolphins India PS Pvt Ltd",
  og_site: "https://dolphinsindia.com",
  og_title: "Dolphins India PS Pvt Ltd",
  og_description: "Relive Shopping Experience, Where brand meets customer",
  og_image: "%PUBLIC_URL%/title_image.png",
  og_url: "https://dolphinsindia.com",
  twitter_card:
    "Online shopping experience doesn't get better than what Dolphins India provides",
};

export default Meta;
