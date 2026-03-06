import Link from "next/link";
import styles from "./PostCard.module.css";

export default function PostCard({ post, blogSlug, blogColor, index }) {
  return (
    <article
      className={styles.postCard}
      style={{
        "--blog-color": blogColor,
        "--animation-delay": `${index * 0.1}s`,
      }}
    >
      <Link href={`/${blogSlug}/${post.slug}`} className={styles.postLink}>
        <div className={styles.postMeta}>
          <time className={styles.postDate}>
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className={styles.postReadTime}>{post.readTime} min read</span>
        </div>

        <h2 className={styles.postTitle}>{post.title}</h2>
        <p className={styles.postExcerpt}>{post.excerpt}</p>

        <div className={styles.postFooter}>
          <span className={styles.postAuthor}>By {post.author}</span>
          <div className={styles.postTags}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.readMore}>
          Read article <span className={styles.arrow}>→</span>
        </div>
      </Link>
    </article>
  );
}
