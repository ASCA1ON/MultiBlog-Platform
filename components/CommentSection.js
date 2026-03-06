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
        <h2>Comments ({comments.length})</h2>
        <button
          className="add-comment-btn"
          onClick={() => setShowCommentForm(!showCommentForm)}
        >
          {showCommentForm ? "Cancel" : "Add Comment"}
        </button>
      </div>

      {showCommentForm && (
        <div className="comment-form">
          <textarea
            placeholder="Share your thoughts..."
            className="comment-input"
            rows={4}
          />
          <button className="submit-btn">Post Comment</button>
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
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 2px solid #e5e7eb;
          animation: fadeIn 0.5s ease-out;
        }

        .comment-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .comment-header h2 {
          font-family: "Space Grotesk", sans-serif;
          font-size: 1.875rem;
          font-weight: 700;
          color: #111;
          margin: 0;
        }

        .add-comment-btn {
          padding: 0.625rem 1.5rem;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .add-comment-btn:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
        }

        .comment-form {
          background: #f9fafb;
          padding: 1.5rem;
          border-radius: 12px;
          margin-bottom: 2rem;
          animation: slideDown 0.3s ease-out;
        }

        .comment-input {
          width: 100%;
          padding: 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-family: inherit;
          font-size: 1rem;
          resize: vertical;
          margin-bottom: 1rem;
          transition: border-color 0.2s;
        }

        .comment-input:focus {
          outline: none;
          border-color: #2563eb;
        }

        .submit-btn {
          padding: 0.75rem 2rem;
          background: #10b981;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .submit-btn:hover {
          background: #059669;
        }

        .comments-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .comment {
          display: flex;
          gap: 1rem;
          animation: fadeInUp 0.5s ease-out var(--animation-delay) backwards;
        }

        .comment-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.875rem;
          flex-shrink: 0;
        }

        .comment-content {
          flex: 1;
        }

        .comment-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .comment-author {
          font-weight: 600;
          color: #111;
        }

        .comment-timestamp {
          font-size: 0.875rem;
          color: #6b7280;
        }

        .comment-text {
          color: #374151;
          line-height: 1.6;
          margin: 0 0 0.75rem;
        }

        .comment-actions {
          display: flex;
          gap: 1rem;
        }

        .like-btn,
        .reply-btn {
          padding: 0.375rem 0.75rem;
          background: transparent;
          border: none;
          color: #6b7280;
          font-weight: 500;
          font-size: 0.875rem;
          cursor: pointer;
          transition: color 0.2s;
        }

        .like-btn:hover {
          color: #ef4444;
        }

        .reply-btn:hover {
          color: #2563eb;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
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
          .comment-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .comment {
            gap: 0.75rem;
          }

          .comment-avatar {
            width: 40px;
            height: 40px;
            font-size: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
}
