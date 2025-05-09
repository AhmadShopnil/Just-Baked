import { ThumbsUp } from "lucide-react";

export default function ReplyItem({ reply, onInteraction }) {
  return (
    <div className="flex gap-4">
      <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">
        {reply.avatar || reply.user[0]}
      </div>
      <div className="flex-1">
        <h3 className="font-bold">{reply.user}</h3>
        <p className="text-gray-700 mt-1">{reply.text}</p>
        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
          <button className="hover:text-gray-700">Reply</button>
          <button className="hover:text-gray-700">Share</button>
          <span>{reply.time}</span>
          <button
            className="flex items-center gap-1 hover:text-gray-700"
            onClick={() => onInteraction(reply.id, "like")}
          >
            <ThumbsUp className="w-4 h-4" />
            {reply.likes}
          </button>
        </div>
      </div>
    </div>
  );
}
