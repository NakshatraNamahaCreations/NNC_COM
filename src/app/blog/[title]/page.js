// app/blog/[title]/page.js
import BlogDetailsClient from "./BlogDetailsClient.jsx";

const API_BASE = "https://api.nakshatranamahacreations.in";

// utils
const stripHtml = (html = "") => html.replace(/<[^>]*>/g, "");
const slugify = (s = "") =>
  s.trim().toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");

// paginate the real API until we find the blog (or exhaust pages)
async function findBlogBySlug(routeSlug) {
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const res = await fetch(
      `${API_BASE}/api/blogs?page=${page}&limit=50`,
      { cache: "no-store" }
    );

    if (!res.ok) break;

    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];
    totalPages = Number(json?.totalPages) || 1;

    const found =
      list.find((b) => b?.slug === routeSlug) ||
      list.find((b) => slugify(b?.title || "") === routeSlug);

    if (found) return found;
    page += 1;
  }

  return null;
}

export async function generateMetadata({ params }) {
  const routeSlug = params?.title || "";
  const canonical = `https://www.nakshatranamahacreations.com/blog/${routeSlug}`;

  if (!routeSlug) {
    return {
      title: "Blog not found | Nakshatra Namaha Creations",
      description: "Missing blog slug.",
      alternates: { canonical },
    };
  }

  // fetch across pages so meta works for any post
  const blog = await findBlogBySlug(routeSlug);

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
    typeof blog?.bannerImage === "string" && blog.bannerImage.startsWith("http")
      ? blog.bannerImage
      : blog?.bannerImage
      ? `${API_BASE}/uploads/${blog.bannerImage}`
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

// ensure this route is always dynamic so we don’t cache a wrong page
export const dynamic = "force-dynamic";

export default function Page({ params }) {
  return <BlogDetailsClient slug={params.title} />;
}
