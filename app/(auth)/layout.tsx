import '@/styles/global.css';
import GlassPane from "@/components/GlassPane";
import { ReactNode } from "react";

interface AuthRootLayoutProps {
  children: ReactNode;
}

export default function AuthRootLayout({ children }: AuthRootLayoutProps) {
  return (
    <html lang='en'>
      <head />
      <body className='h-screen w-screen candy-mesh p-32'>
        <GlassPane className='w-full h-full flex items-center justify-center'>
          {children}
        </GlassPane>
      </body>
    </html>
  );
}
