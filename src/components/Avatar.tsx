import React from "react";

interface AvatarProps {
  imageUrl: string;
  altText?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  imageUrl,
  altText = "User Avatar",
}) => {
  return <img src={imageUrl} alt={altText} className="avatar" />;
};

export default Avatar;
