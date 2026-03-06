// Production environment configuration
export const environment = {
  production: true,
  apiUrl: 'https://api.example.com/api',
  baseHref: '/',
  analytics: {
    enabled: true,
    trackingId: 'UA-XXXXXXXXX-X'
  },
  features: {
    contactForm: true,
    darkMode: false,
    animations: true
  }
};

