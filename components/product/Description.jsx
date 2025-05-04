"use client";
import { useState } from "react";
import { ThumbsUp } from "lucide-react";

export default function Description() {
  const [activeTab, setActiveTab] = useState("questions"); // Default to questions tab as shown in image
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "Lorem Ipsum",
      avatar: "L",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      likes: 101,
      time: "101 likes ago",
      replies: [],
    },
    {
      id: 2,
      user: "Lorem Ipsum",
      avatar: "L",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      likes: 53,
      time: "53 likes ago",
      replies: [
        {
          id: 21,
          user: "Lorem Ipsum",
          avatar: "L",
          text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
          likes: 11,
          time: "11 likes ago",
        },
      ],
    },
    {
      id: 3,
      user: "Lorem Ipsum",
      avatar: "L",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      likes: 101,
      time: "101 likes ago",
      replies: [],
    },
    {
      id: 4,
      user: "Lorem Ipsum",
      avatar: "L",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      likes: 101,
      time: "101 likes ago",
      replies: [],
    },
  ]);

  const handlePostComment = () => {
    if (!commentText.trim()) return;

    const newComment = {
      id: comments.length + 1,
      user: "K", // Using K as shown in the input field in the image
      avatar: "K",
      text: commentText,
      likes: 0,
      time: "Just now",
      replies: [],
    };

    setComments([newComment, ...comments]);
    setCommentText("");
  };

  const handleReply = (commentId) => {
    // In a real app, this would open a reply form
    console.log(`Reply to comment ${commentId}`);
  };

  const handleLike = (commentId) => {
    setComments(
      comments.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, likes: comment.likes + 1 };
        }

        // Check if the comment is in replies
        const updatedReplies = comment.replies.map((reply) => {
          if (reply.id === commentId) {
            return { ...reply, likes: reply.likes + 1 };
          }
          return reply;
        });

        if (updatedReplies !== comment.replies) {
          return { ...comment, replies: updatedReplies };
        }

        return comment;
      })
    );
  };

  const handleShare = (commentId) => {
    // In a real app, this would open a share dialog
    console.log(`Share comment ${commentId}`);
  };

  const loadMoreComments = () => {
    // In a real app, this would fetch more comments from an API
    console.log("Loading more comments...");
  };

  return (
    <div className=" ">
      {/* Tabs */}
      <div className="flex rounded-t-lg ">
        <button
          className={`py-2 px-4 rounded-tl-xl  ${
            activeTab === "description" ? "bg-[#724B00] text-white" : "bg-gray-100"
          } font-medium`}
          onClick={() => setActiveTab("description")}
        >
          DESCRIPTION
        </button>
        <button
          className={`py-2 px-4 rounded-tr-xl  ${
            activeTab === "questions" ? "bg-[#724B00] text-white" : "bg-gray-100"
          } font-medium`}
          onClick={() => setActiveTab("questions")}
        >
          QUESTIONS ABOUT THIS PRODUCT
        </button>
      </div>

      {/* Tab Content */}
      <div className="rounded-md overflow-hidden shadow-2xl">
        <div className="p-4">
          {activeTab === "description" ? (
            <div className="prose max-w-none">
              <h2>Product Description</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          ) : (
            <div>
              {/* Comment Input */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">
                  K
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Add a comment"
                    className="w-full p-2 border rounded-md"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                  />
                </div>
                <button
                  className="bg-gray-200 text-gray-800 px-4 py-1 rounded-md"
                  onClick={handlePostComment}
                >
                  Post
                </button>
              </div>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="space-y-4">
                    {/* Main Comment */}
                    <div className="flex gap-4">
                      <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">
                        {comment.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-bold">{comment.user}</h3>
                          {comment.id === 2 && (
                            <button className="text-gray-500 text-sm flex items-center">
                              Top Comment <span className="ml-1">↑</span>
                            </button>
                          )}
                        </div>
                        <p className="text-gray-700 mt-1">{comment.text}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                          <button
                            className="hover:text-gray-700"
                            onClick={() => handleReply(comment.id)}
                          >
                            Reply
                          </button>
                          <span>•</span>
                          <button
                            className="hover:text-gray-700"
                            onClick={() => handleShare(comment.id)}
                          >
                            Share
                          </button>
                          <span>•</span>
                          <span>{comment.time}</span>
                          <span>•</span>
                          <button
                            className="flex items-center gap-1 hover:text-gray-700"
                            onClick={() => handleLike(comment.id)}
                          >
                            <ThumbsUp className="w-4 h-4" />
                            {comment.likes}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Replies */}
                    {comment.replies.length > 0 && (
                      <div className="ml-12 space-y-4">
                        {comment.replies.map((reply) => (
                          <div key={reply.id} className="flex gap-4">
                            <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">
                              {reply.avatar}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold">{reply.user}</h3>
                              <p className="text-gray-700 mt-1">{reply.text}</p>
                              <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                                <button
                                  className="hover:text-gray-700"
                                  onClick={() => handleReply(reply.id)}
                                >
                                  Reply
                                </button>
                                <span>•</span>
                                <button
                                  className="hover:text-gray-700"
                                  onClick={() => handleShare(reply.id)}
                                >
                                  Share
                                </button>
                                <span>•</span>
                                <span>{reply.time}</span>
                                <span>•</span>
                                <button
                                  className="flex items-center gap-1 hover:text-gray-700"
                                  onClick={() => handleLike(reply.id)}
                                >
                                  <ThumbsUp className="w-4 h-4" />
                                  {reply.likes}
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Show more replies button */}
                    {comment.id === 2 && (
                      <div className="ml-12">
                        <button className="text-gray-500 text-sm flex items-center">
                          Show 5 more <span className="ml-1">↓</span>
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Load More Comments */}
              <div className="mt-8 text-center">
                <button
                  className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-50"
                  onClick={loadMoreComments}
                >
                  Load more comments
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
