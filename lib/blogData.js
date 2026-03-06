export const BLOGS_DATA = {
  "tech-blog": {
    slug: "tech-blog",
    name: "TechVerse",
    description:
      "Exploring the frontiers of technology, AI, and software development",
    tagline: "Where innovation meets implementation",
    color: "#2563eb",
    posts: [
      {
        id: "1",
        slug: "future-of-ai-2026",
        title: "The Future of AI in 2026: What's Next?",
        excerpt:
          "Exploring the latest developments in artificial intelligence and what they mean for developers and businesses.",
        content: `
          <p>As we navigate through 2026, artificial intelligence continues to reshape our technological landscape at an unprecedented pace. This article explores the key trends and developments that are defining the future of AI.</p>
          
          <h2>Breakthrough Developments</h2>
          <p>The integration of AI into everyday applications has reached new heights. From advanced language models to sophisticated computer vision systems, we're witnessing a transformation in how technology understands and interacts with the world.</p>
          
          <h2>Impact on Software Development</h2>
          <p>Developers are now leveraging AI-powered tools that can understand context, generate code, and even debug complex systems. This isn't replacing developers—it's amplifying their capabilities and allowing them to focus on higher-level problem-solving.</p>
          
          <h2>Ethical Considerations</h2>
          <p>With great power comes great responsibility. The AI community is increasingly focused on ethical AI development, ensuring systems are transparent, fair, and beneficial to society as a whole.</p>
        `,
        author: "Sarah Chen",
        publishedAt: "2026-02-28",
        readTime: 8,
        tags: ["AI", "Machine Learning", "Technology Trends"],
      },
      {
        id: "2",
        slug: "web-performance-optimization",
        title: "Web Performance Optimization: A 2026 Guide",
        excerpt:
          "Essential techniques for building lightning-fast web applications in the modern era.",
        content: `
          <p>Performance is no longer optional—it's a fundamental requirement for successful web applications. Users expect instant interactions, and search engines reward fast-loading sites.</p>
          
          <h2>Core Web Vitals</h2>
          <p>Understanding and optimizing for Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) remains crucial. These metrics directly impact user experience and SEO rankings.</p>
          
          <h2>Modern Optimization Techniques</h2>
          <p>Server-side rendering, edge computing, and intelligent code splitting are now standard practices. Dynamic imports allow us to load heavy components only when needed, dramatically reducing initial bundle sizes.</p>
          
          <h2>Image Optimization</h2>
          <p>With formats like AVIF and WebP becoming mainstream, image optimization has never been easier. Lazy loading and responsive images ensure users only download what they need.</p>
        `,
        author: "Marcus Rodriguez",
        publishedAt: "2026-02-15",
        readTime: 10,
        tags: ["Performance", "Web Development", "Optimization"],
      },
      {
        id: "3",
        slug: "nextjs-best-practices",
        title: "Next.js 14: Best Practices for Production",
        excerpt:
          "Build scalable, performant applications with Next.js 14's latest features and patterns.",
        content: `
          <p>Next.js 14 introduces powerful features that make building production-grade applications easier than ever. Let's explore the best practices that will set your project up for success.</p>
          
          <h2>Server Components by Default</h2>
          <p>React Server Components are now the default in Next.js 14, offering better performance and smaller bundle sizes. Understanding when to use 'use client' is key to optimal performance.</p>
          
          <h2>App Router Patterns</h2>
          <p>The App Router provides a more intuitive way to structure your application. Layouts, loading states, and error boundaries are now first-class citizens, making your code more maintainable.</p>
          
          <h2>Data Fetching Strategies</h2>
          <p>Choose between Static Site Generation (SSG), Server-Side Rendering (SSR), and Incremental Static Regeneration (ISR) based on your content's update frequency and user needs.</p>
        `,
        author: "Emma Thompson",
        publishedAt: "2026-01-20",
        readTime: 12,
        tags: ["Next.js", "React", "Web Development"],
      },
    ],
  },
  "travel-blog": {
    slug: "travel-blog",
    name: "Wanderlust Chronicles",
    description:
      "Discovering hidden gems and authentic experiences around the globe",
    tagline: "Stories from the road less traveled",
    color: "#059669",
    posts: [
      {
        id: "4",
        slug: "hidden-gems-japan",
        title: "Hidden Gems of Rural Japan",
        excerpt:
          "Venture beyond Tokyo and Kyoto to discover the authentic heart of Japan.",
        content: `
          <p>While Tokyo and Kyoto captivate millions of visitors, rural Japan holds secrets that few travelers discover. This journey takes you through villages where tradition thrives and nature reigns supreme.</p>
          
          <h2>Takayama: The Little Kyoto</h2>
          <p>Nestled in the Japanese Alps, Takayama preserves Edo-period streets that transport you back in time. Morning markets burst with local crafts and mountain vegetables, while sake breweries offer tastings of their finest creations.</p>
          
          <h2>Shirakawa-go: Gassho-zukuri Villages</h2>
          <p>These UNESCO World Heritage sites feature traditional farmhouses with steep thatched roofs designed to withstand heavy snowfall. Stay overnight in a farmhouse to experience authentic rural life and hospitality.</p>
          
          <h2>Kumano Kodo: Ancient Pilgrimage Trails</h2>
          <p>Walk in the footsteps of emperors and pilgrims on these sacred mountain paths. The trails wind through ancient forests, past waterfalls, and lead to spiritual shrines that have stood for over a millennium.</p>
        `,
        author: "Yuki Tanaka",
        publishedAt: "2026-02-10",
        readTime: 15,
        tags: ["Japan", "Rural Travel", "Culture"],
      },
      {
        id: "5",
        slug: "sustainable-travel-tips",
        title: "The Sustainable Traveler's Handbook",
        excerpt:
          "How to explore the world while minimizing your environmental impact.",
        content: `
          <p>Travel enriches our lives, but it shouldn't cost the Earth. This guide offers practical strategies for reducing your environmental footprint while still experiencing the world's wonders.</p>
          
          <h2>Transportation Choices</h2>
          <p>Choose trains over planes when possible. Support local transportation systems. Consider carbon offset programs for unavoidable flights. The journey itself becomes part of the adventure when you slow down.</p>
          
          <h2>Accommodation Philosophy</h2>
          <p>Select eco-certified hotels, support local guesthouses, or try house-sitting. Your accommodation choices directly impact local communities and ecosystems.</p>
          
          <h2>Responsible Tourism</h2>
          <p>Respect local cultures and traditions. Support local businesses. Avoid contributing to overtourism by exploring less-visited destinations. Leave places better than you found them.</p>
        `,
        author: "Alex Rivera",
        publishedAt: "2026-01-25",
        readTime: 10,
        tags: ["Sustainable Travel", "Eco-Tourism", "Travel Tips"],
      },
      {
        id: "6",
        slug: "patagonia-adventure",
        title: "Trekking Through Patagonia: A Complete Guide",
        excerpt:
          "Everything you need to know for an unforgettable Patagonian adventure.",
        content: `
          <p>Patagonia, the wild frontier at the southern tip of South America, offers some of the world's most spectacular trekking experiences. This guide will help you navigate this vast and beautiful wilderness.</p>
          
          <h2>Planning Your Trek</h2>
          <p>The trekking season runs from November to March. Book refugios (mountain huts) months in advance, especially for the famous W Trek in Torres del Paine. Weather can change in minutes—pack for all seasons.</p>
          
          <h2>Must-See Highlights</h2>
          <p>The granite towers of Torres del Paine, the electric blue ice of Perito Moreno Glacier, and the dramatic peaks of Fitz Roy. Each landscape more breathtaking than the last.</p>
          
          <h2>Practical Preparation</h2>
          <p>Train for elevation gain and long distances. Invest in quality waterproof gear. Bring water purification tablets. The preparation is worth it when you stand before nature's grandeur.</p>
        `,
        author: "Carlos Mendez",
        publishedAt: "2026-01-05",
        readTime: 18,
        tags: ["Patagonia", "Trekking", "Adventure Travel"],
      },
    ],
  },
  "design-blog": {
    slug: "design-blog",
    name: "Pixel Perfect",
    description:
      "Exploring the intersection of design, creativity, and user experience",
    tagline: "Crafting experiences that inspire",
    color: "#7c3aed",
    posts: [
      {
        id: "7",
        slug: "minimalist-design-trends",
        title: "Beyond Minimalism: Design Trends for 2026",
        excerpt:
          "How modern design is evolving beyond simple minimalism into something more nuanced.",
        content: `
          <p>Minimalism dominated design for years, but 2026 brings a more nuanced approach. We're seeing designers balance simplicity with personality, creating interfaces that are both clean and characterful.</p>
          
          <h2>Intentional Complexity</h2>
          <p>Today's best designs aren't afraid of complexity—they embrace it intentionally. Rich textures, bold typography, and unexpected animations create memorable experiences without sacrificing usability.</p>
          
          <h2>Color Revival</h2>
          <p>Goodbye, all-white interfaces. Designers are rediscovering the emotional power of color. Vibrant palettes, custom gradients, and thoughtful contrast create visual hierarchies that guide users naturally.</p>
          
          <h2>Micro-Interactions Matter</h2>
          <p>Subtle animations and transitions aren't just decorative—they provide feedback, guide attention, and make interfaces feel alive. Every hover state and loading animation contributes to the overall experience.</p>
        `,
        author: "Sophia Martinez",
        publishedAt: "2026-02-20",
        readTime: 12,
        tags: ["Design Trends", "UI/UX", "Visual Design"],
      },
      {
        id: "8",
        slug: "typography-masterclass",
        title: "Typography Masterclass: Beyond the Basics",
        excerpt: "Master the art of typography to elevate your design work.",
        content: `
          <p>Typography is the foundation of great design. Understanding the subtle art of type can transform good designs into exceptional ones.</p>
          
          <h2>Font Pairing Principles</h2>
          <p>Pair a distinctive display font with a refined body font. Create contrast through weight, style, and personality. Avoid pairing fonts that compete for attention—they should complement each other.</p>
          
          <h2>Hierarchy and Rhythm</h2>
          <p>Establish clear visual hierarchy through size, weight, and spacing. Use consistent vertical rhythm to create harmonious layouts. Every typographic decision should guide the reader's eye naturally.</p>
          
          <h2>Advanced Techniques</h2>
          <p>Experiment with variable fonts for responsive designs. Use OpenType features for polish. Consider reading patterns and optical adjustments. Master kerning and tracking for that final 10% of refinement.</p>
        `,
        author: "David Kim",
        publishedAt: "2026-02-05",
        readTime: 14,
        tags: ["Typography", "Design Principles", "Visual Communication"],
      },
      {
        id: "9",
        slug: "design-systems-guide",
        title: "Building Scalable Design Systems",
        excerpt:
          "Create design systems that empower teams and maintain consistency at scale.",
        content: `
          <p>Design systems are more than component libraries—they're the foundation for scaling design across products and teams. Here's how to build one that actually works.</p>
          
          <h2>Start With Principles</h2>
          <p>Define your design principles before diving into components. These principles should guide every decision, from color choices to interaction patterns. Principles create consistency beyond visual elements.</p>
          
          <h2>Component Architecture</h2>
          <p>Build atomic components that compose into molecules and organisms. Each component should be flexible yet opinionated. Document not just how to use components, but when and why.</p>
          
          <h2>Governance and Evolution</h2>
          <p>Establish clear processes for proposing, reviewing, and implementing changes. Design systems must evolve with your product. Balance consistency with flexibility—rigid systems stifle innovation.</p>
        `,
        author: "Rachel Foster",
        publishedAt: "2026-01-15",
        readTime: 16,
        tags: ["Design Systems", "Component Design", "Team Collaboration"],
      },
    ],
  },
};

export function getBlogBySlug(slug) {
  return BLOGS_DATA[slug] || null;
}

export function getAllBlogSlugs() {
  return Object.keys(BLOGS_DATA);
}

export function getPostBySlug(blogSlug, postSlug) {
  const blog = getBlogBySlug(blogSlug);
  if (!blog) return null;
  return blog.posts.find((post) => post.slug === postSlug) || null;
}
