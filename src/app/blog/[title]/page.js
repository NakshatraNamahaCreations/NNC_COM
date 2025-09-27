// app/blog/[title]/page.js
import BlogDetailsClient from "./BlogDetailsClient.jsx";

const API = "https://api.nakshatranamahacreations.in";

const stripHtml = (html = "") => html.replace(/<[^>]*>/g, "");
const slugify = (s = "") =>
  s.trim().toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");

export async function generateMetadata({ params }) {
  // In your project, params.title actually contains the SLUG
  const routeSlug = params?.title ?? "";

  const canonical = `https://www.nakshatranamahacreations.com/blog/${routeSlug}`;

  if (!routeSlug) {
    return {
      title: "Blog not found | Nakshatra Namaha Creations",
      description: "Missing blog slug.",
      alternates: { canonical },
    };
  }

  // Hit the working endpoint you verified in Postman
  const res = await fetch(`${API}/api/blogs`, { cache: "no-store" });
  if (!res.ok) {
    return {
      title: "Blog not found | Nakshatra Namaha Creations",
      description: "Could not fetch blog data.",
      alternates: { canonical },
    };
  }

  const json = await res.json();
  const blogs = Array.isArray(json?.data) ? json.data : [];

  // Match by stored slug first, then by slugified title as a safety net
  const blog =
    blogs.find((b) => b?.slug === routeSlug) ||
    blogs.find((b) => slugify(b?.title || "") === routeSlug);

  if (!blog) {
    return {
      title: "Blog not found | Nakshatra Namaha Creations",
      description: "This blog could not be found.",
      alternates: { canonical },
    };
  }

  const title = blog.metaTitle || blog.title || "Blog";
  const description =
    blog.metaDescription || stripHtml(blog.description || "").slice(0, 160);

  const bannerImage =
    blog.bannerImage?.startsWith?.("http")
      ? blog.bannerImage
      : blog.bannerImage
      ? `${API}/uploads/${blog.bannerImage}`
      : "https://www.nakshatranamahacreations.com/media/blogs/placeholder.png";

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      images: bannerImage ? [{ url: bannerImage, width: 1200, height: 630, alt: title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: bannerImage ? [bannerImage] : [],
    },
  };
}


export const dynamic = "force-dynamic";

export default function Page({ params }) {
  // Pass the route slug down so the client renders the same blog
  return <BlogDetailsClient slug={params.title} />;
}
