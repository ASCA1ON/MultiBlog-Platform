    import { notFound } from "next/navigation";
    import Link from "next/link";
    import dynamic from "next/dynamic";
    import { getBlogBySlug, getPostBySlug } from "@/lib/blogData";
    import styles from "./post.module.css";

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

    export async function generateMetadata({ params }) {
    const { blogSlug, postSlug } = await params;  

    const blog = getBlogBySlug(blogSlug);
    const post = blog ? getPostBySlug(blogSlug, postSlug) : null;

    if (!blog || !post) {
        return {
        title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} | ${blog.name}`,
        description: post.excerpt,
        keywords: post.tags.join(", "),
        authors: [{ name: post.author }],
        openGraph: {
        title: post.title,
        description: post.excerpt,
        type: "article",
        publishedTime: post.publishedAt,
        authors: [post.author],
        tags: post.tags,
        },
        twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.excerpt,
        },
        robots: {
        index: true,
        follow: true,
        },
    };
    }

    export default async function PostPage({ params }) {
    const { blogSlug, postSlug } = await params;
    const blog = getBlogBySlug(blogSlug);
    const post = blog ? getPostBySlug(blogSlug, postSlug) : null;

    if (!blog || !post) {
        notFound();
    }

    return (
        <div className={styles.postPage}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <ol>
            <li>
                <Link href={`/${blog.slug}`}>{blog.name}</Link>
            </li>
            <li aria-current="page">{post.title}</li>
            </ol>
        </nav>

        <article className={styles.postArticle}>
            <header className={styles.postHeader}>
            <h1 className={styles.postTitle}>{post.title}</h1>

            <div className={styles.postMeta}>
                <time dateTime={post.publishedAt} className={styles.postDate}>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
                </time>

                <span className={styles.separator}>•</span>
                <span>By {post.author}</span>
                <span className={styles.separator}>•</span>
                <span>{post.readTime} min read</span>
            </div>

            <div className={styles.postTags}>
                {post.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                    {tag}
                </span>
                ))}
            </div>
            </header>

            <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <footer className={styles.postFooter}>
            <div className={styles.authorInfo}>
                <div className={styles.authorAvatar}>
                {post.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <div>
                <div className={styles.authorName}>{post.author}</div>
                <div className={styles.authorBio}>
                    Contributing writer at {blog.name}
                </div>
                </div>
            </div>
            </footer>
        </article>

        <CommentSection />
        </div>
    );
    }
