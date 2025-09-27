"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import styles from "@/styles/BlogTeasers.module.css";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// slug helper (use your own toUrlFriendly if you already have one)
const toUrlFriendly = (s) =>
  s?.toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w]+/g, "-")
    .replace(/^-+|-+$/g, "");

const FALLBACK_POSTS = [
  {
    id: "local-1",
    date: "August 20, 2025",
    title: "Freelancers vs Agencies",
    image: "/media/gif/freelancers.png",
    href: "/blog/freelancers-vs-agencies",
  },
  {
    id: "local-2",
    date: "August 18, 2025  ",
    title:
      "Questions to Ask Before Hiring a Web or App Developer",
    image: "/media/gif/weborapp.png",
    href: "/blog/questions-to-ask-before-hiring-a-web-or-app-developer",
  },
];



export default function BlogTeasers() {
  const [posts, setPosts] = useState(FALLBACK_POSTS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);

        const res = await axios.get(`${API_BASE_URL}/blogs`, {
          params: { page: 1, limit: 9 },
        });

        const apiPosts = (res.data?.data || [])
          .slice(0, 2)
          .map((blog) => {
            const date = new Date(blog.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            });

            // Build slug link from title; if you prefer ID, use `/blog/${blog._id}`
            const slug = toUrlFriendly(blog.title);
            const href = `/blog/${slug || blog._id}`;

            // Normalize banner image for next/image
            const image = blog.bannerImage?.startsWith("http")
              ? blog.bannerImage
              : `${API_BASE_URL}/uploads/${blog.bannerImage}`;

            return {
              id: blog._id,
              date,
              title: blog.title,
              image,
              href,
            };
          });

        if (apiPosts.length) setPosts(apiPosts);
      } catch (e) {
        console.error("Failed to fetch blogs", e);
        // keeps FALLBACK_POSTS
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className={styles.wrap1}>
      <div className={styles.wrap}>
        {/* header bar */}
        <div className={styles.bar}>
          <div className={styles.inner}>
            <h2 className={styles.title}>OUR BLOGS</h2>
            <Link href="/blog" className={styles.viewBtn} aria-label="View all blogs">
              View All Blogs
              <svg
                className={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </Link>
          </div>
        </div>

        <div className={styles.grid} aria-busy={loading}>
          {posts.map((p) => (
            <Link key={p.id} href={p.href} className={styles.cardLink} aria-label={p.title}>
              <article className={styles.card}>
                <div className={styles.imgWrap}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className={styles.img}
                    priority
                  />
                </div>

                <div className={styles.panel}>
                  <time className={styles.date}>{p.date}</time>
                  <h3 className={styles.title}>{p.title}</h3>
                  <hr className={styles.rule} />
                  <span className={styles.readLink}>
                    Read Blog
                    <svg
                      className={styles.arrow}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
