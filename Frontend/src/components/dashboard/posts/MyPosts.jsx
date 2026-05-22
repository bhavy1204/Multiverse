import React, { useEffect, useState } from "react";
import { getUserTweets } from "@/api/tweet.api";
import { useSelector } from "react-redux";
import { formatDistanceToNow } from "date-fns";
import UserTweetsGrid from "./UserTweetsGrid.jsx";

export default function MyPosts() {
  const user = useSelector((state) => state.auth.user);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    if (!user?.data?._id) return;

    const fetchMyTweets = async () => {
      try {
        const res = await getUserTweets(user?.data?._id);
        setTweets(res.data.data);
      } catch (error) {
        console.log("Comment fetch error >> ", error);
        alert(error);
      }
    };

    fetchMyTweets();
  }, [user]);

  return (
    <div className="my-2">
      <UserTweetsGrid
        tweets={tweets}
        onDelete={(id) => console.log("Delete tweet:", id)}
        onEdit={(id) => console.log("Edit tweet:", id)}
      />
    </div>
  );
}
