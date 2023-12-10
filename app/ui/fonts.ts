import { Lusitana, Noto_Sans, Roboto } from 'next/font/google';

export const noto_sans = Noto_Sans({ subsets: ['latin'] });
export const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});
