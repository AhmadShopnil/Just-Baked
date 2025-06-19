"use client";
import { useContext, useEffect, useState } from "react";
import axiosInstance from "@/helpers/axiosInstance";
import { UserContext } from "@/context/UserContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CommentSection({ productId }) {
  const { state: userState } = useContext(UserContext);
  const user = userState?.user;
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [userName, setUserName] = useState(user?.full_name || "");
  const [userMobile, setUserMobile] = useState(user?.phone || "");
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(4);
  const [error, setError] = useState("");

  const fetchComments = async (pageNumber = 1) => {
    try {
      setLoading(true);
      const res = await axiosInstance.get(
        `comments/${productId}?per_page=${perPage}&page=${pageNumber}`
      );
      setComments(res.data.comment.data);
      setPage(res.data.comment.current_page);
      setLastPage(res.data.comment.last_page);
    } catch (err) {
      console.error("Failed to load comments:", err);
    } finally {
      setLoading(false);
    }
  };

  const handlePostComment = async () => {
    if (!commentText.trim() || !userName.trim() || !userMobile.trim()) {
      setError("Name, Phone are required.");
      return;
    }

    try {
      await axiosInstance.post("comments", {
        prent_id: null,
        product_id: productId,
        name: userName,
        mobile: userMobile,
        comment: commentText,
      });
setError('')
      setCommentText("");
      if (!user) {
        setUserName("");
        setUserMobile("");
      }
      fetchComments(1);
    } catch (err) {
      console.error("Comment post failed:", err);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [productId, perPage]);

  // const handleLoadMore = () => {
  //   setPerPage(perPage + 2);

  // };
  // const handleLoadLess = () => {
  //   setPerPage(perPage-2);

  // };

  return (
    <div className="py-8 bg-white rounded-lg">
      {/* Input Header */}
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Leave a Comment
      </h2>
      <p className="text-red-500 text-xs pb-2">{error}</p>
      {/* Input Fields */}
      <div className="mb-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            required
            type="text"
            placeholder="Your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            disabled={!!user}
            className="p-2 text-xs sm:text-sm border rounded-md w-full focus:ring-1 focus:ring-blue-500"
          />
          <input
            required
            type="text"
            placeholder="Your phone"
            value={userMobile}
            onChange={(e) => setUserMobile(e.target.value)}
            disabled={!!user}
            className="p-2 text-xs sm:text-sm border rounded-md w-full focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-2 sm:gap-4 items-start">
          <div className="w-9 h-9 px-2 flex items-center justify-center bg-blue-100 text-blue-800 font-semibold rounded-full">
            {user?.full_name?.[0] || "U"}
          </div>
          <input
            type="text"
            placeholder="Write your comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="flex-1 text-xs sm:text-sm p-2 border rounded-md focus:ring-1 focus:ring-blue-500"
          />
          <button
            onClick={handlePostComment}
            className="bg-primary-strong text-white px-2 sm:px-4 py-2 rounded-md cursor-pointer
             text-xs sm:text-sm transition"
          >
            Post
          </button>
        </div>
      </div>

      {/* Comments */}
      <div className="divide-y divide-gray-200">
        {loading && (
          <p className="text-sm text-gray-500">Loading comments...</p>
        )}

        {!loading && comments.length === 0 && (
          <p className="text-sm text-gray-500 pb-4">
            No comments yet. Be the first to comment.
          </p>
        )}

        {!loading &&
          comments?.map((comment) => (
            <div key={comment.id} className="py-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 flex items-center justify-center bg-gray-200 rounded-full text-gray-700 font-medium">
                  {comment.name?.[0]?.toUpperCase() || "U"}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-semibold text-gray-800 text-sm">
                      {comment.name}
                    </h4>
                    <span className="text-xs text-gray-400">
                      {new Date(comment.created_at).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">{comment.comment}</p>
                </div>
              </div>
            </div>
          ))}
      </div>


      {/* Pagination */}
      <div className="flex justify-center gap-3 mt-8">
        <button
          onClick={() => fetchComments(page - 1)}
          disabled={page === 1}
          className={`flex items-center gap-2 text-sm px-4 py-1.5 rounded-md border transition 
      ${
        page === 1
          ? "cursor-not-allowed opacity-40 border-gray-200 bg-gray-50 text-gray-400"
          : "hover:bg-gray-100 text-gray-700 border-gray-300"
      }`}
        >
          <ChevronLeft size={16} />
          <span>Previous</span>
        </button>

        <button
          onClick={() => fetchComments(page + 1)}
          disabled={page >= lastPage}
          className={`flex items-center gap-2 text-sm px-4 py-1.5 rounded-md border transition 
      ${
        page >= lastPage
          ? "cursor-not-allowed opacity-40 border-gray-200 bg-gray-50 text-gray-400"
          : "hover:bg-gray-100 text-gray-700 border-gray-300"
      }`}
        >
          <span>Next</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
