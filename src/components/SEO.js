import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const siteTitle = title || data.site.siteMetadata.title;
  const siteDescription = description || data.site.siteMetadata.description;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta charset="UTF-8"></meta>
      <meta name="keywords" content="Daylan Hoff, portfolio, Daylan, Hoff, full stack dev, full stack developer, personal portfolio, portfolio website, developer, devops, dev ops, release, release engineer, devops engineer, dev ops engineer, front end developer, front end, back end, back end developer, Dylan, Hof, Dilan, DH, dh, who is daylan hoff" />
    </Helmet>
  );
};

export default SEO;