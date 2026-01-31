"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import Breadcrumbs from "@/components/BreadCrumbs";
import BlogContactForm from "@/components/blogs/BlogContactForm";
import Icons from "@/components/Icons.client";
import Script from "next/script";
import "@/styles/BlogsFaqStyle.css";
import ContactFrom from "@/components/ContactForm";
// SAME API as grid
const API_URL = "https://api.nakshatranamahacreations.in/api/blogs";
const ASSET_BASE = "https://api.nakshatranamahacreations.in";

// If you append static blogs in the grid, copy that same array here too.
// If not using static posts, leave as [].
const blogData = [];

const slugify = (s = "") =>
  s.trim().toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");

const normalizeApi = (item) => {
  const title = item?.title ?? "Untitled";
  const computedSlug = item?.slug || slugify(title);
  const rawBanner = item?.bannerImage;

  return {
    id: item?._id ?? computedSlug,
    slug: computedSlug,
    title,
    description: item?.description ?? "",
    metaTitle: item?.metaTitle || title,
    metaDescription: item?.metaDescription || "",
    services: Array.isArray(item?.services) ? item.services : [],
    faqs: Array.isArray(item?.faqs) ? item.faqs : [],
    bannerImage:
      typeof rawBanner === "string" && rawBanner.startsWith("http")
        ? rawBanner
        : rawBanner
        ? `${ASSET_BASE}/uploads/${rawBanner}`
        : "/media/blogs/placeholder.png",
    createdAt: item?.createdAt || new Date().toISOString(),
    updatedAt: item?.updatedAt || item?.createdAt || new Date().toISOString(),
  };
};

export default function BlogDetailsPage() {
  const params = useParams();
  const routeSlugRaw = params?.title;
  const routeSlug = Array.isArray(routeSlugRaw)
    ? routeSlugRaw[0]
    : String(routeSlugRaw || "").toLowerCase();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (idx) => setOpenIndex((p) => (p === idx ? null : idx));

  const staticCards = useMemo(
    () =>
      blogData.map((b) => ({
        ...b,
        _slug: slugify(b.title || ""),
        bannerImage: b.banner ?? "/media/blogs/placeholder.png",
        createdAt: b.date ? new Date(b.date).toISOString() : new Date().toISOString(),
        description: b.description || "",
        services: Array.isArray(b.services) ? b.services : [],
        faqs: Array.isArray(b.faqs) ? b.faqs : [],
      })),
    []
  );

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      if (!routeSlug) return;

      setLoading(true);
      setErr(null);

      try {
        // 🔑 Fetch a BIG page once so any clicked post is available
        const res = await axios.get(API_URL, {
          params: { page: 1, limit: 500 }, // increase if you have more than 500
        });

        const payload = res?.data ?? {};
        const list = Array.isArray(payload?.data) ? payload.data : [];
        const items = list.map(normalizeApi);

        let found =
          items.find(
            (n) => n.slug === routeSlug || slugify(n.title) === routeSlug
          ) || null;

        // Fallback to static if you use static cards in the grid
        if (!found && staticCards.length) {
          found = staticCards.find((b) => b._slug === routeSlug) || null;
        }

        if (cancelled) return;

        if (found) {
          const dateObj = new Date(found.createdAt);
          setBlog({
            ...found,
            date: isNaN(dateObj.getTime())
              ? ""
              : dateObj.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }),
          });
          setErr(null);
        } else {
          setErr("Blog not found.");
        }
      } catch (e) {
        console.error("Fetch blog failed:", e);
        if (!cancelled) setErr("Blog not found.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [routeSlug, staticCards]);

  const articleSchema =
    blog && {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: blog.title,
      description: blog.metaDescription || blog.description?.slice(0, 160),
      author: {
        "@type": "Person",
        name: "Nakshatra Namaha Creations",
        url: "https://www.nakshatranamahacreations.com/",
      },
      publisher: {
        "@type": "Organization",
        name: "Nakshatra Namaha Creations",
        logo: {
          "@type": "ImageObject",
          url: "https://www.nakshatranamahacreations.com/media/logo.png",
        },
      },
      datePublished: blog.createdAt,
      dateModified: blog.updatedAt || blog.createdAt,
      image: blog.bannerImage,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://www.nakshatranamahacreations.com/blog/${routeSlug}`,
      },
    };

  const faqSchema =
    blog && Array.isArray(blog.faqs) && blog.faqs.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: blog.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

  const breadcrumbPaths = blog
    ? [
        { name: "Home", link: "/" },
        { name: "Blog", link: "/blog" },
        { name: blog.title, link: `/blog/${routeSlug}` },
      ]
    : [
        { name: "Home", link: "/" },
        { name: "Blog", link: "/blog" },
      ];

  if (loading) return <p>Loading...</p>;
  if (err || !blog) return <p>{err || "Blog not found."}</p>;

  return (
    <div>
      {articleSchema && (
        <Script type="application/ld+json">{JSON.stringify(articleSchema)}</Script>
      )}
      {faqSchema && (
        <Script type="application/ld+json">{JSON.stringify(faqSchema)}</Script>
      )}

      <Breadcrumbs paths={breadcrumbPaths} />

      <div className="blogDetailContainer" style={{ paddingInline: "4%", marginTop: "30px" }}>
        <Row>
          <Col sm={9}>
            <div className="position-relative">
              <img
                src={blog.bannerImage}
                alt={blog.title}
                width="100%"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <h1
                className="blogHeading1 bg-white shadow mx-4 text-center position-absolute p-2"
                style={{ bottom: "-40px", fontSize: "30px" }}
              >
                {blog.title}
              </h1>
            </div>

            <div className="mt-5 ms-lg-4 mx-3" id="content" style={{ textAlign: "justify" }}>
              <div dangerouslySetInnerHTML={{ __html: blog.description }} />

              {Array.isArray(blog.faqs) && blog.faqs.length > 0 && (
                <section className="faq-container mt-5">
                  <div className="service-mainhead">
                    <h2 className="service-title">Frequently Asked Questions</h2>
                  </div>

                  <div className="faqbox">
                    {blog.faqs.map((f, i) => {
                      const isOpen = openIndex === i;
                      return (
                        <div className="aligned" key={i}>
                          <div className="content" onClick={() => toggleFAQ(i)}>
                            <div className="question">{f.question}</div>
                            <div className="icon">
                              {isOpen ? <span className="minus">−</span> : <span className="plus">+</span>}
                            </div>
                          </div>
                          <div className="answer" style={{ display: isOpen ? "block" : "none" }}>
                            {f.answer}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              )}
            </div>
          </Col>

          <Col sm={3} className="p-lg-0 p-4">
            <div style={{ position: "sticky", top: "150px" }}>
              <ContactFrom />
            </div>
          </Col>
        </Row>

        <div style={{ marginTop: "10%" }}>
          <Container>
            <Icons />
          </Container>
        </div>
      </div>
    </div>
  );
}
