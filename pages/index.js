import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link' 
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/Navbar'

import { getAllFilesMetadata  } from '../lib/mdx';

export default function Home({ posts }) {
  return (
    
    
    <div className={styles.container}>
      <Navbar>
      </Navbar>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Mi Blog!
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        {/* mapeo de posts */}
        <div className={styles.grid}>
          {posts.map  (post => (
            <Link 
            key={post.slug}
            href={`/${post.slug}`} 
            className={styles.card}
            >
              <a href="https://nextjs.org/docs" className={styles.card}>
                <h2>{ post.title } &rarr;</h2>
                <p>{post.date}</p>
              </a>  
            </Link>
             
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        > 
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
export async function getStaticProps() {
  const posts = getAllFilesMetadata(); 

  
  console.log(posts);
  return {
     props: {posts},
  }; 
}   