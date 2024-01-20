import React from "react";
import img from "../Images/user 1.png";
import "./LeaderBoard.css";
function LeaderBoard() {
  const data = {
    Name: "username",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imgurl: img,
    followedCommunity: [1, 2, 3, 4, 5, 6],
    eventsAttended: [1, 2, 3, 4, 5, 6],
    pointsEarned: 45,
  };
  return (
    <div id="LeaderBoard">
      <div id="lhs">
        <img src={data.imgurl} alt="" />
        <h2>UserName : {data.Name}</h2>
        <h2>Bio : </h2>
        <p>{data.bio}</p>
        <button>Edit Profil</button>
        <h2 id="communityStatus">Community Status</h2>
        <h3>Communities followed : {data.followedCommunity.length}</h3>
        <h3>Drive Done : {data.eventsAttended.length}</h3>
      </div>
      <div id="rhs">
        <div id="upperhalf">Badges Collected : 6</div>
        <div id="lowerhalf">
          <div id="myrecentevent"></div>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
