import styles from "./BlogHeader.module.css";

export default function BlogHeader({ blog }) {
  return (
    <header
      className={styles.blogHeader}
      style={{
        "--blog-color": blog.color,
      }}
    >
      <div className={styles.headerBackground}></div>
      <div className={styles.headerContent}>
        <h1 className={styles.blogTitle}>{blog.name}</h1>
        <p className={styles.blogTagline}>{blog.tagline}</p>
      </div>
    </header>
  );
}
