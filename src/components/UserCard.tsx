import React from "react";

interface UserCardProps {
  name: string;
  age: number;
}

const UserCard: React.FC<UserCardProps> = ({ name, age }) => {
  return (
    <div
      style={{
        border: "2px solid blue",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
      }}
    >
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserCard;
