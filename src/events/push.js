/* eslint-disable no-console */
export default function({ type = 'click', payload = {} }) {
  if (process.env.NODE_ENV !== 'development') {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', type, payload);
    }
  } else if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ type, payload });
  }
}
