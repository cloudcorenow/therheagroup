import { useEffect } from 'react';

export interface DocumentMeta {
  title: string;
  description: string;
  /** Path appended to the site origin for canonical/OG URLs, e.g. "/about" */
  path?: string;
  ogImage?: string;
}

const SITE_ORIGIN = 'https://www.therheagroup.com';
const DEFAULT_OG_IMAGE = '/image.png';

function upsertMeta(attr: 'name' | 'property', key: string, content: string): void {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string): void {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Updates document title and meta tags (description, Open Graph, Twitter, canonical)
 * on mount. Restores nothing on unmount — the last-set values persist, which is
 * fine for a SPA where every page sets its own meta.
 */
export function useDocumentMeta(meta: DocumentMeta): void {
  const { title, description, path = '/', ogImage = DEFAULT_OG_IMAGE } = meta;
  const url = `${SITE_ORIGIN}${path}`;
  const image = ogImage.startsWith('http') ? ogImage : `${SITE_ORIGIN}${ogImage}`;

  useEffect(() => {
    document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', image);
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', image);
    upsertLink('canonical', url);
  }, [title, description, url, image]);
}
