"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import Breadcrumbs from "@/components/BreadCrumbs";
import BlogContactForm from "@/components/blogs/BlogContactForm";
import Icons from "@/components/Icons";
import Script from "next/script";
import "@/styles/BlogsFaqStyle.css";
import BlogsGridByService from "../BlogsGridByService";

// Your Next.js API proxy that returns paginated list from the backend
const API_PROXY = "/api/blogs";
const ASSET_BASE = "https://api.nakshatranamahacreations.in";

// (optional) local static fallback list
const blogData = [];

const slugify = (s = "") =>
  s.trim().toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");

// ✅ Normalize ALL fields you need
const normalizeApi = (item) => ({
  id: item?._id,
  slug: item?.slug || slugify(item?.title || ""),
  title: item?.title ?? "Untitled",
  description: item?.description ?? "",
  metaTitle: item?.metaTitle || item?.title || "Untitled",
  metaDescription: item?.metaDescription || "",
  services: Array.isArray(item?.services) ? item.services : [],
  faqs: Array.isArray(item?.faqs) ? item.faqs : [],
  bannerImage: item?.bannerImage?.startsWith?.("http")
    ? item.bannerImage
    : item?.bannerImage
    ? `${ASSET_BASE}/uploads/${item.bannerImage}`
    : "/media/blogs/placeholder.png",
  createdAt: item?.createdAt || new Date().toISOString(),
  updatedAt: item?.updatedAt || item?.createdAt || new Date().toISOString(),
});

export default function BlogDetailsPage() {
  const { title: routeSlug } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  // FAQ accordion state
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (idx) => setOpenIndex((prev) => (prev === idx ? null : idx));

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
      setLoading(true);
      setErr(null);

      try {
        // find by slug from paginated list
        let found = null;
        let page = 1;
        let totalPages = 1;

        while (!found && page <= totalPages) {
          const res = await axios.get(API_PROXY, { params: { page } });
          const data = Array.isArray(res?.data?.data) ? res.data.data : [];
          totalPages = Number(res?.data?.totalPages) || 1;

          for (const raw of data) {
            const n = normalizeApi(raw);
            if (n.slug === routeSlug || slugify(n.title) === routeSlug) {
              found = n;
              break;
            }
          }
          page += 1;
        }

        // static fallback
        if (!found) {
          found = staticCards.find((b) => b._slug === routeSlug) || null;
        }

        if (!cancelled) {
          if (found) {
            const dateObj = new Date(found.createdAt);
            setBlog({
              ...found,
              date: isNaN(dateObj)
                ? ""
                : dateObj.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }),
            });
          } else {
            setErr("Blog not found.");
          }
          setLoading(false);
        }
      } catch (e) {
        if (!cancelled) {
          console.error("Fetch blog failed:", e);
          const fallback = staticCards.find((b) => b._slug === routeSlug);
          if (fallback) {
            const dateObj = new Date(fallback.createdAt);
            setBlog({
              ...fallback,
              date: isNaN(dateObj)
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
          setLoading(false);
        }
      }
    };

    if (routeSlug) run();
    return () => {
      cancelled = true;
    };
  }, [routeSlug, staticCards]);

  // --- JSON-LD ---
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
    blog && blog.faqs?.length
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
    : [];

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
              {/* Body */}
              <div dangerouslySetInnerHTML={{ __html: blog.description }} />

              {/* ✅ FAQs only (styled like your screenshot) */}
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
            <br />
            {/* <BlogsGridByService/> */}
          </Col>

          <Col sm={3} className="p-lg-0 p-4">
            <div style={{ position: "sticky", top: "20px" }}>
              <BlogContactForm />
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
