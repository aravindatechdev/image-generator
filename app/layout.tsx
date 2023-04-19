import Header from '@/components/Header';
import './globals.css';
import PromptInput from '@/components/PromptInput';
import ClientProvider from "@/components/ClientProvider";

export const metadata = {
  title: 'AI Image Generator',
  description: 'Generated using ChatGPT',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>
          {/* Header */}
          <Header />

          {/* Prompt Input */}
          <PromptInput />
        </ClientProvider>

        {children}</body>
    </html>
  );
}
