import { useState } from "react";
import CommentItem from "./CommentItem";

const sampleComments = [
  {
    id: 1,
    user: "Alice",
    avatar: "A",
    text: "This product is really helpful!",
    likes: 10,
    time: "2 hours ago",
    replies: [],
  },
  {
    id: 2,
    user: "Bob",
    avatar: "B",
    text: "Great quality and fast shipping!",
    likes: 23,
    time: "1 day ago",
    replies: [
      {
        id: 21,
        user: "Charlie",
        avatar: "C",
        text: "Agreed, had the same experience.",
        likes: 3,
        time: "5 hours ago",
      },
    ],
  },
  {
    id: 3,
    user: "David",
    avatar: "D",
    text: "Satisfied with the purchase.",
    likes: 7,
    time: "3 days ago",
    replies: [],
  },
  {
    id: 4,
    user: "Eva",
    avatar: "E",
    text: "Can I return if it doesn’t fit?",
    likes: 1,
    time: "1 week ago",
    replies: [],
  },
  {
    id: 5,
    user: "Frank",
    avatar: "F",
    text: "Five stars!",
    likes: 15,
    time: "2 weeks ago",
    replies: [],
  },
  {
    id: 6,
    user: "Grace",
    avatar: "G",
    text: "Is this waterproof?",
    likes: 4,
    time: "1 month ago",
    replies: [],
  },
];

export default function CommentSection() {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(sampleComments);
  const [visibleCount, setVisibleCount] = useState(3);

  const handlePostComment = () => {
    if (!commentText.trim()) return;
    const newComment = {
      id: comments.length + 1,
      user: "K",
      avatar: "K",
      text: commentText,
      likes: 0,
      time: "Just now",
      replies: [],
    };
    setComments([newComment, ...comments]);
    setCommentText("");
    setVisibleCount((prev) => prev + 1);
  };

  const handleInteraction = (id, type) => {
    setComments((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          if (type === "like") return { ...c, likes: c.likes + 1 };
        } else {
          const updatedReplies = c.replies.map((r) =>
            r.id === id && type === "like" ? { ...r, likes: r.likes + 1 } : r
          );
          if (updatedReplies !== c.replies)
            return { ...c, replies: updatedReplies };
        }
        return c;
      })
    );
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };
  const showLess = () => {
    setVisibleCount((prev) => prev - 3);
  };

  return (
    <>
      {/* Input */}
      <div className="flex items-start gap-4 mb-6">
        <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">
          K
        </div>
        <input
          type="text"
          placeholder="Add a comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="flex-1 text-[13px] p-1 pl-4 border rounded-md"
        />
        <button
          onClick={handlePostComment}
          className="bg-gray-200 text-gray-800 px-4 py-1 rounded-md"
        >
          Post
        </button>
      </div>

      {/* Comments */}
      <div className="space-y-6">
        {comments.slice(0, visibleCount).map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            onInteraction={handleInteraction}
          />
        ))}
      </div>

      {/* Load more */}
      {visibleCount < comments.length && (
        <div className="mt-8 text-center">
          <button
            onClick={loadMore}
            className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-50"
          >
            Show more comments
          </button>
        </div>
      )}

      {visibleCount > 3 && (
        <div className="mt-8 text-center">
          <button
            onClick={showLess}
            className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-50"
          >
            Show Less comments
          </button>
        </div>
      )}
    </>
  );
}
