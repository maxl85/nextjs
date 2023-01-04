// import Image from 'next/image';
// import { Inter } from '@next/font/google';
import { Button, Htag } from '../components';

// const inter = Inter({ subsets: ['latin'] });

export default function Home(): JSX.Element {
  return (
    <>
      <main>
        <Htag tag="h1">Text</Htag>
        <Button appearance="primary">Button</Button>
        <Button appearance="ghost">Button</Button>
      </main>
    </>
  );
}
