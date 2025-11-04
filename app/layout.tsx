import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Freddie Mercury ? Quem ?? ',
  description: 'Resumo em portugu?s sobre Freddie Mercury, vocalista do Queen.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
