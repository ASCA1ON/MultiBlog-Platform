# HyperBlog Platform

A high-performance, SEO-optimized multi-blog platform built with Next.js. This platform uses a subfolder-based routing architecture and demonstrates modern web development best practices.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠 Architectural Decisions

### 1. Rendering Strategy (SSR / Server Components)

- **Primary Choice**: Server Components (Next.js App Router) by default.
- **Why**: This ensures that content is server-rendered for maximum SEO benefit and minimizes the amount of JavaScript sent to the client. By keeping logic on the server, we improve Core Web Vitals (especially First Contentful Paint).
- **Client Components**: Used sparingly for interactive elements like the `CommentSection` while keeping the main content (headers, text) as server components.

### 2. SEO Approach

- **Dynamic Metadata**: Every blog and post page uses `generateMetadata` to populate page titles, meta descriptions, OpenGraph tags, and keywords dynamically from a data source.
- **Semantic HTML**: Proper heading hierarchy (e.g., a single `<h1>` per page) is enforced.
- **Indexability**: Server-rendered content ensures that search engine crawlers can see the full content of the blogs without executing JavaScript.

### 3. Performance Decisions

- **Bundle Optimization**: "Heavy" components (like the `CommentSection`) are loaded using `dynamic()` imports to split the bundle and only load interactivity when needed.
- **Styling**: Converted styled-jsx to **CSS Modules** for components like `BlogHeader` and `PostCard`. This allows them to function as **Server Components**, avoiding the client-side runtime of traditional CSS-in-JS solutions.
- **Image Optimization**: Ready for `next/image` to handle lazy loading and format conversion.

### 4. Middleware Logic

- **Internal Rewriting**: The application uses a middleware implementation (currently in `proxy.js`) that reads a custom header (`x-blog-domain`).
- **Dynamic Routing**: Depending on the header value, the request is internally rewritten to a specific subfolder blog (e.g., `/tech`, `/travel`). This allows the platform to appear as different blogs while sharing the same underlying routing logic.

---

## 📈 Scaling for the Future

### How to scale to Main Domain + Subdomain + Subfolder?

To support a complex structure like `blog.maindomain.com/subfolder` or `customdomain.com`, the following architecture is recommended:

1. **Hostname-based Middleware**: Update the middleware to check `request.headers.get('host')` in addition to custom headers.
2. **Database-backed Tenants**: Instead of a static map, fetch domain/slug relationships from a database (with caching at the edge).
3. **Internal Rewrites**:
   - `custom.com` → Rewrite to `/[tenantSlug]/...` internally.
   - `subdomain.maindomain.com` → Rewrite to `/[tenantSlug]/...`.
   - `maindomain.com/tech-blog` → Already handled by the Current subfolder routing.
4. **Vercel Platforms Approach**: Leverage wildcard domains and internal rewrites to serve thousands of dynamic blogs from a single Next.js deployment.
