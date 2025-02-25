import React, { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button className="like-button" onClick={toggleLike}>
      {liked ? "❤️Liked!" : "👍Like"}
    </button>
  );
};

export default LikeButton;
