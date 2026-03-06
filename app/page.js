import Link from "next/link";
import { getAllBlogSlugs, getBlogBySlug } from "@/lib/blogData";
import styles from "./page.module.css";

export const metadata = {
  title: "Multi-Blog Platform - Discover Stories Across Topics",
  description:
    "Explore our collection of blogs covering technology, travel, and design. High-quality content from expert writers.",
  keywords: "blog, technology, travel, design, articles, stories",
};

export default function HomePage() {
  const blogSlugs = getAllBlogSlugs();
  const blogs = blogSlugs.map((slug) => getBlogBySlug(slug)).filter(Boolean);

  return (
    <div className={styles["home-page"]}>
      <header className={styles.hero}>
        <div className={styles["hero-content"]}>
          <h1 className={styles["hero-title"]}>Discover Stories That Matter</h1>
          <p className={styles["hero-subtitle"]}>
            Explore our curated collection of blogs spanning technology, travel,
            and design
          </p>
        </div>

        <div className={styles["hero-background"]}></div>
      </header>

      <main className={styles["main-content"]}>
        <section className={styles["blogs-section"]}>
          <h2 className={styles["section-title"]}>Our Blogs</h2>

          <div className={styles["blogs-grid"]}>
            {blogs.map(
              (blog, index) =>
                blog && (
                  <Link
                    key={blog.slug}
                    href={`/${blog.slug}`}
                    className={styles["blog-card"]}
                    style={{
                      "--blog-color": blog.color,
                      "--animation-delay": `${index * 0.15}s`,
                    }}
                  >
                    <div className={styles["blog-card-inner"]}>
                      <h3 className={styles["blog-name"]}>{blog.name}</h3>
                      <p className={styles["blog-tagline"]}>{blog.tagline}</p>
                      <p className={styles["blog-description"]}>
                        {blog.description}
                      </p>

                      <div className={styles["blog-meta"]}>
                        <span className={styles["post-count"]}>
                          {blog.posts.length} articles
                        </span>

                        <span className={styles["read-more"]}>
                          Explore <span className={styles.arrow}>→</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                ),
            )}
          </div>
        </section>

        <section className={styles["features-section"]}>
          <h2 className={styles["section-title"]}>Why Read With Us</h2>

          <div className={styles["features-grid"]}>
            <div className={styles.feature}>
              <div className={styles["feature-icon"]}>⚡</div>
              <h3>Lightning Fast</h3>
              <p>
                Optimized for performance with server-side rendering and
                intelligent code splitting
              </p>
            </div>

            <div className={styles.feature}>
              <div className={styles["feature-icon"]}>🎯</div>
              <h3>SEO Optimized</h3>
              <p>
                Every page is fully indexed with proper meta tags and semantic
                HTML
              </p>
            </div>

            <div className={styles.feature}>
              <div className={styles["feature-icon"]}>📱</div>
              <h3>Mobile First</h3>
              <p>
                Beautiful reading experience on any device, from phone to
                desktop
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
