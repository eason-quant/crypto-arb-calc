import { MetadataRoute } from 'next';
import { coins } from '@/lib/coins';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://crypto-arb-calc.vercel.app'; // 

  // 
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
  ];

  //
  const coinRoutes = Object.keys(coins).map((coinKey) => ({
    url: `${baseUrl}/calculator/${coinKey}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8, // 
  }));

  return [...routes, ...coinRoutes];
}