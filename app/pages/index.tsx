import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  PostCard,
  Categories,
  PostWidget,
  WantAPost,
  Contact,
} from "../components";
import { getPosts } from "../services/index";
import { FeaturedPosts } from "../sections";

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>SPORTS VILLA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo1.png" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>

      <WantAPost />
      <Contact />
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
