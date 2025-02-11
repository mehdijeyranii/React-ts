import React from "react";
import Avatar from "./Avatar";
import "./ProfileCard.css";

interface ProfileCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, imageUrl }) => {
  return (
    <div className="profile-card">
      <Avatar imageUrl={imageUrl} altText={name} />
      <h2>Name: {name}</h2>
      <p>Role: {role}</p>
    </div>
  );
};

export default ProfileCard;
