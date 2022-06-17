export default {
  selfHosted: true,
  enabled: process.env.NODE_ENV === 'production',
  domain: 'next-start.vercel.app',
  customDomain: 'https://stats.web.id',
  trackOutboundLinks: true,
}
