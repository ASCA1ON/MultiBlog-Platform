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
            A state-of-the-art platform for deep dives into technology, travel,
            and the world of design.
          </p>
        </div>
      </header>

      <main className={styles["main-content"]}>
        <section className={styles["blogs-section"]}>
          <h2 className={styles["section-title"]}>Curated Networks</h2>

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
                      <span className={styles["post-count"]}>
                        {blog.posts.length} Curated Articles
                      </span>
                      <h3 className={styles["blog-name"]}>{blog.name}</h3>
                      <p className={styles["blog-tagline"]}>{blog.tagline}</p>
                      <p className={styles["blog-description"]}>
                        {blog.description}
                      </p>

                      <div className={styles["blog-meta"]}>
                        <span className={styles["read-more"]}>
                          Explore Collection
                        </span>
                      </div>
                    </div>
                  </Link>
                ),
            )}
          </div>
        </section>

        <section className={styles["features-section"]}>
          <h2 className={styles["section-title"]}>Engineered For Reading</h2>

          <div className={styles["features-grid"]}>
            <div className={styles.feature}>
              <div className={styles["feature-icon"]}>⚡</div>
              <h3>Ultra-Responsive</h3>
              <p>
                Zero-lag interactions powered by Next.js Server Components and intelligent code splitting.
              </p>
            </div>

            <div className={styles.feature}>
              <div className={styles["feature-icon"]}>🎯</div>
              <h3>SEO-First Engine</h3>
              <p>
                Built with deep search engine visibility in mind, from dynamic meta tags to semantic markup.
              </p>
            </div>

            <div className={styles.feature}>
              <div className={styles["feature-icon"]}>🎨</div>
              <h3>Editorial Design</h3>
              <p>
                A cinematic reading experience that puts typography and content at the forefront.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '4rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>
        <p>&copy; 2026 HyperBlog Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}
