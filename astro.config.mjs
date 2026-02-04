// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://fabicraft.net',
	integrations: [
		starlight({
			title: 'FabiCraft',
			logo: {
			  src: './src/assets/logo.png'
      },
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            href: '/favicon.ico',
            sizes: '32x32',
          }
        }
      ],
			social: [
			  { icon: 'discord', label: 'Discord', href: 'https://discord.gg/TJyAWjztUD' },
			  { icon: 'github', label: 'GitHub', href: 'https://github.com/fabicraftnet' }
			],
			sidebar: [
			  { slug: 'rules' },
				{ slug: 'how-to-join' },
				{
					label: 'Survival',
					autogenerate: { directory: 'survival' }
				}
			],
			customCss: [
        // Relative path to your custom CSS file
        './src/styles/custom.css',
      ],
		}),
	],
});
