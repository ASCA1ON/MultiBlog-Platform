"use client";

import { useState } from "react";

export default function CommentSection() {
  const [comments] = useState([
    {
      id: "1",
      author: "Alex Thompson",
      content: "Great article! Really appreciate the depth of analysis here.",
      timestamp: "2 hours ago",
      likes: 12,
    },
    {
      id: "2",
      author: "Maria Garcia",
      content:
        "This perfectly captures what I've been experiencing. Thanks for sharing!",
      timestamp: "5 hours ago",
      likes: 8,
    },
    {
      id: "3",
      author: "James Wilson",
      content: "Would love to see a follow-up article on this topic.",
      timestamp: "1 day ago",
      likes: 15,
    },
  ]);

  const [showCommentForm, setShowCommentForm] = useState(false);

  return (
    <section className="comment-section">
      <div className="comment-header">
        <h2>Reader Discussions</h2>
        <button
          className="add-comment-btn"
          onClick={() => setShowCommentForm(!showCommentForm)}
        >
          {showCommentForm ? "Dismiss" : "Join the Conversation"}
        </button>
      </div>

      {showCommentForm && (
        <div className="comment-form">
          <textarea
            placeholder="What are your thoughts on this?"
            className="comment-input"
            rows={4}
          />
          <button className="submit-btn">Post Discussion</button>
        </div>
      )}

      <div className="comments-list">
        {comments.map((comment, index) => (
          <div
            key={comment.id}
            className="comment"
            style={{
              "--animation-delay": `${index * 0.1}s`,
            }}
          >
            <div className="comment-avatar">
              {comment.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="comment-content">
              <div className="comment-meta">
                <span className="comment-author">{comment.author}</span>
                <span className="comment-timestamp">{comment.timestamp}</span>
              </div>
              <p className="comment-text">{comment.content}</p>
              <div className="comment-actions">
                <button className="like-btn">♥ {comment.likes}</button>
                <button className="reply-btn">Reply</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .comment-section {
          margin-top: 6rem;
          padding: 4rem;
          background: #f8fafc;
          border-radius: 3rem;
          border: 1px solid #f1f5f9;
        }

        .comment-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
        }

        .comment-header h2 {
          font-family: "Space Grotesk", sans-serif;
          font-size: 2.25rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .add-comment-btn {
          padding: 1rem 2rem;
          background: #0f172a;
          color: white;
          border: none;
          border-radius: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .add-comment-btn:hover {
          background: #334155;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .comment-form {
          background: white;
          padding: 2.5rem;
          border-radius: 2rem;
          margin-bottom: 3rem;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 6px rgba(0,0,0,0.02);
          animation: slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .comment-input {
          width: 100%;
          padding: 1.5rem;
          border: 1px solid #e2e8f0;
          border-radius: 1rem;
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem;
          resize: vertical;
          margin-bottom: 1.5rem;
          transition: all 0.2s;
          background: #f8fafc;
        }

        .comment-input:focus {
          outline: none;
          border-color: #0f172a;
          background: white;
          box-shadow: 0 0 0 4px rgba(15, 23, 42, 0.05);
        }

        .submit-btn {
          padding: 1rem 2.5rem;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }

        .submit-btn:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
        }

        .comments-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .comment {
          display: flex;
          gap: 1.5rem;
          padding: 2rem;
          background: white;
          border-radius: 2rem;
          border: 1px solid #f1f5f9;
          animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) var(--animation-delay) backwards;
        }

        .comment-avatar {
          width: 56px;
          height: 56px;
          border-radius: 1.25rem;
          background: linear-gradient(135deg, #0f172a 0%, #334155 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .comment-content {
          flex: 1;
        }

        .comment-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }

        .comment-author {
          font-weight: 800;
          color: #0f172a;
          font-size: 1.1rem;
        }

        .comment-timestamp {
          font-size: 0.9rem;
          color: #94a3b8;
          font-weight: 500;
        }

        .comment-text {
          color: #475569;
          line-height: 1.7;
          font-size: 1.1rem;
          margin: 0 0 1.25rem;
        }

        .comment-actions {
          display: flex;
          gap: 1.5rem;
        }

        .like-btn,
        .reply-btn {
          padding: 0.5rem 1rem;
          background: #f8fafc;
          border-radius: 0.75rem;
          border: 1px solid #f1f5f9;
          color: #64748b;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.2s;
        }

        .like-btn:hover {
          color: #ef4444;
          background: #fff5f5;
          border-color: #fee2e2;
        }

        .reply-btn:hover {
          color: #2563eb;
          background: #eff6ff;
          border-color: #dbeafe;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .comment-section {
             padding: 2rem 1.5rem;
             margin-top: 4rem;
          }
          
          .comment-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
          }

          .comment {
            padding: 1.5rem;
            gap: 1rem;
          }

          .comment-avatar {
            width: 48px;
            height: 48px;
            border-radius: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
