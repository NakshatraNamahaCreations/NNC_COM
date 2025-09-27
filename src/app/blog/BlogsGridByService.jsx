"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import axios from "axios";

const API_PROXY = "/api/blogs";
const ASSET_BASE = "https://api.nakshatranamahacreations.in";

const slugify = (s = "") =>
  s.trim().toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");
const stripHtml = (html = "") => html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
const truncate = (t = "", n = 160) => (t.length > n ? t.slice(0, n).trim() + "…" : t);

const normalize = (item) => {
  const title = item?.title || "Untitled";
  const slug = item?.slug || slugify(title);
  const banner =
    item?.bannerImage?.startsWith?.("http")
      ? item.bannerImage
      : item?.bannerImage
      ? `${ASSET_BASE}/uploads/${item.bannerImage}`
      : "/media/blogs/placeholder.png";

  return {
    id: item?._id || slug,
    slug,
    title,
    banner,
    services: Array.isArray(item?.services) ? item.services : [],
    excerpt: truncate(stripHtml(item?.metaDescription || item?.description || "")),
    createdAt: item?.createdAt || item?.updatedAt || null,
  };
};

export default function BlogsGridByService({
  services = [],
  currentSlug = "",
  heading = "Explore Our Latest Blogs",
  limit = 6,
}) {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  // normalise services for robust compare
  const serviceSet = useMemo(
    () =>
      new Set(
        services
          .filter(Boolean)
          .map((s) => s.toString().trim().toLowerCase())
      ),
    [services]
  );

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      setLoading(true);
      try {
        const res = await axios.get(API_PROXY);
        const raw = Array.isArray(res?.data?.data)
          ? res.data.data
          : Array.isArray(res?.data)
          ? res.data
          : [];

        let list = raw.map(normalize);

        // exclude current post
        if (currentSlug) list = list.filter((b) => b.slug !== currentSlug);

        // prefer service-matched blogs
        let matched = list;
        if (serviceSet.size) {
          matched = list.filter((b) =>
            (b.services || []).some(
              (s) => serviceSet.has((s || "").toString().trim().toLowerCase())
            )
          );
        }

        // if no matches, fallback to latest blogs
        const byDate = (a, b) =>
          new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();

        const final = (matched.length ? matched : list).sort(byDate).slice(0, limit);

        if (!cancelled) setCards(final);
      } catch (e) {
        console.error("BlogsGridByService fetch failed:", e);
        if (!cancelled) setCards([]); // show empty
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [serviceSet, currentSlug, limit]);

  if (loading) {
    return (
      <section className="blogs-grid-wrap">
        <h2 className="blogs-grid-heading">{heading}</h2>
        <div className="blogs-grid">
          {Array.from({ length: 3 }).map((_, i) => (
            <div className="blog-card skeleton" key={i}>
              <div className="blog-card__image" />
              <div className="blog-card__body">
                <div className="skeleton-line" />
                <div className="skeleton-line short" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (!cards.length) return null;

  return (
    <section className="blogs-grid-wrap">
      <h2 className="blogs-grid-heading">{heading}</h2>
      <div className="blogs-grid">
        {cards.map((b) => (
          <article className="blog-card" key={b.id}>
            <Link href={`/blog/${b.slug}`} className="blog-card__image-link" aria-label={b.title}>
              <img className="blog-card__image" src={b.banner} alt={b.title} />
            </Link>
            <div className="blog-card__body">
              <Link href={`/blog/${b.slug}`} className="blog-card__title">
                {b.title}
              </Link>
              <p className="blog-card__desc">{b.excerpt}</p>
              <Link href={`/blog/${b.slug}`} className="blog-card__cta">
                Read More
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

