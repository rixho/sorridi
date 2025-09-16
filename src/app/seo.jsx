import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const SeoProvider = ({ children }) => <HelmetProvider>{children}</HelmetProvider>;

export const Seo = ({ title, description, url = "https://sorridi.yachts/", image = "/og.jpg", schema }) => (
  <>
    <Helmet>
      <title>{title ? `${title} • Sorridi Yachts` : "Sorridi Yachts"}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || "Sorridi Yachts"} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index,follow" />
    </Helmet>
    {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />}
  </>
);
