import React, { useEffect } from 'react';

type Props = {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  type?: string;
  structuredData?: object;
};

function setTag(selector: string, attr: string, value: string) {
  let el = document.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = document.createElement(selector.startsWith('meta') ? 'meta' : selector.startsWith('link') ? 'link' : 'meta');
    const nameMatch = selector.match(/meta\[name="([^"]+)"\]/);
    const propMatch = selector.match(/meta\[property="([^"]+)"\]/);
    const relMatch = selector.match(/link\[rel="([^"]+)"\]/);
    if (nameMatch) (el as HTMLMetaElement).setAttribute('name', nameMatch[1]);
    if (propMatch) (el as HTMLMetaElement).setAttribute('property', propMatch[1]);
    if (relMatch) (el as HTMLLinkElement).setAttribute('rel', relMatch[1]);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

function setJsonLd(data?: object) {
  const id = 'app-structured-data';
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = data ? JSON.stringify(data) : '';
}

export const Seo: React.FC<Props> = ({ title, description, keywords, canonical, image, type = 'website', structuredData }) => {
  useEffect(() => {
    if (title) document.title = title;
    if (description) setTag('meta[name="description"]', 'content', description);
    if (keywords) setTag('meta[name="keywords"]', 'content', keywords);
    if (canonical) setTag('link[rel="canonical"]', 'href', canonical);
    setTag('meta[name="robots"]', 'content', 'index,follow');
    if (title) setTag('meta[property="og:title"]', 'content', title);
    if (description) setTag('meta[property="og:description"]', 'content', description);
    setTag('meta[property="og:type"]', 'content', type);
    if (canonical) setTag('meta[property="og:url"]', 'content', canonical);
    if (image) setTag('meta[property="og:image"]', 'content', image);
    if (title) setTag('meta[name="twitter:title"]', 'content', title);
    if (description) setTag('meta[name="twitter:description"]', 'content', description);
    if (image) setTag('meta[name="twitter:image"]', 'content', image);
    setTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setJsonLd(structuredData);
    return () => {};
  }, [title, description, keywords, canonical, image, type, structuredData]);
  return null;
};

