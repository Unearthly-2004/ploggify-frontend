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
          <div className="myrecentevent">
            <div className="one-event-list">
              <div>Sr.no</div>
              <div>Event</div>
              <div>Time ago</div>
            </div>
            <div className="one-event-list">
              <div>1</div>
              <div>Event1</div>
              <div>one day ago</div>
            </div>
            <div className="one-event-list">
              <div>2</div>
              <div>Event2</div>
              <div>one week ago</div>
            </div>
            <div className="one-event-list">
              <div>3</div>
              <div>Event3</div>
              <div>one week ago</div>
            </div>
            <div className="one-event-list">
              <div>4</div>
              <div>Event4</div>
              <div>one month ago</div>
            </div>
            <div className="one-event-list">
              <div>5</div>
              <div>Event5</div>
              <div>one month ago</div>
            </div>
          </div>
          <div className="myrecentevent">
            <div className="one-event-list">
              <div>Sr.no</div>
              <div>User</div>
              <div>points</div>
            </div>
            <div className="one-event-list">
              <div>1</div>
              <div>User1</div>
              <div>900</div>
            </div>
            <div className="one-event-list">
              <div>2</div>
              <div>User2</div>
              <div>800</div>
            </div>
            <div className="one-event-list">
              <div>3</div>
              <div>User3</div>
              <div>700</div>
            </div>
            <div className="one-event-list">
              <div>4</div>
              <div>User4</div>
              <div>600</div>
            </div>
            <div className="one-event-list">
              <div>5</div>
              <div>User5</div>
              <div>500</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
