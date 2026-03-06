import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
import { getBlogBySlug, getAllBlogSlugs } from "@/lib/blogData";
import BlogHeader from "@/components/BlogHeader";
import PostCard from "@/components/PostCard";
import styles from "./blog.module.css";

const CommentSection = dynamic(() => import("@/components/CommentSection"), {
  loading: () => (
    <div
      style={{
        textAlign: "center",
        padding: "3rem",
        color: "#999",
      }}
    >
      Loading comments...
    </div>
  )
});

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    blogSlug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { blogSlug } = await params;
  const blog = getBlogBySlug(blogSlug);
  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `${blog.name} - ${blog.tagline}`,
    description: blog.description,
    keywords: blog.posts.flatMap((post) => post.tags).join(", "),
    authors: [{ name: "Multi-Blog Platform" }],
    openGraph: {
      title: blog.name,
      description: blog.description,
      type: "website",
      locale: "en_US",
      siteName: "HyperBlog Platform",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.name,
      description: blog.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function BlogPage({ params }) {
  const { blogSlug } = await params;
  const blog = getBlogBySlug(blogSlug);

  if (!blog) {
    notFound();
  }

  return (
    <div className={styles.blogPage}>
      <BlogHeader blog={blog} />

      <main className={styles.blogContent}>
        <div className={styles.container}>
          <div className={styles.backButtonContainer}>
            <Link href="/" className={styles.backButton}>
              ← Back to All Blogs
            </Link>
          </div>
          <h1 className={styles.visuallyHidden}>
            {blog.name} - Latest Articles
          </h1>

          <section className={styles.postsSection}>
            <div className={styles.postsGrid}>
              {blog.posts.map((post, index) => (
                <PostCard
                  key={post.id}
                  post={post}
                  blogSlug={blog.slug}
                  blogColor={blog.color}
                  index={index}
                />
              ))}
            </div>
          </section>

          <aside className={styles.aboutSection}>
            <h2>About {blog.name}</h2>
            <p>{blog.description}</p>
          </aside>

          {/* Demonstrate performance awareness by dynamically loading "heavy" section */}
          <section className={styles.recentActivity}>
             <CommentSection />
          </section>
        </div>
      </main>
    </div>
  );
}
