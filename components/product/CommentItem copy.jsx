import { ThumbsUp } from "lucide-react";
import ReplyItem from "./ReplyItem";


export default function CommentItem({ comment, onInteraction }) {
  return (
    <div className="space-y-4 border-b border-gray-100 pb-5">
      <div className="flex gap-4">
        <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">
          {comment.avatar}
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <h3 className="font-bold">{comment.user}</h3>
          </div>
          <p className="text-gray-700 mt-1">{comment.text}</p>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <button className="hover:text-gray-700">Reply</button>
            <button className="hover:text-gray-700">Share</button>
            <span>{comment.time}</span>
            <button
              className="flex items-center gap-1 hover:text-gray-700"
              onClick={() => onInteraction(comment.id, "like")}
            >
              <ThumbsUp className="w-4 h-4" />
              {comment.likes}
            </button>
          </div>
        </div>
      </div>

      {comment.replies.length > 0 && (
        <div className="ml-12 space-y-4">
          {comment.replies.map((reply) => (
            <ReplyItem
              key={reply.id}
              reply={reply}
              onInteraction={onInteraction}
            />
          ))}
        </div>
      )}
    </div>
  );
}
