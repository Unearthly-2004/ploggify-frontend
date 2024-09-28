import React from "react";
import "./Home.css";
import BanayanTree from "../Images/Banyan Tree Vector Illustration with Roots Stock Vector - Illustration of forest, plant_ 167015262 1.png";
import LandingPageCircle from "../Images/Ellipse 1.png";
import feature1 from "../Images/Teamwork PNG Transparent, Teamwork, Teamwork Clipart, 3d Villain, Team PNG Image For Free Download 1.png";
import feature2 from "../Images/Free Photo _ Bell reminder notification alert or alarm icon sign or symbol for application website ui on white background 3d rendering illustration 1.png";
import feature3 from "../Images/Money Clipart Vector, Money, Money Clipart, Fund, Transfer PNG Image For Free Download 1.png";

function Home() {
  return (
    <div>
      <div id="landing-page">
        <img src={BanayanTree} alt="Banyan Tree Illustration" />
        <img src={LandingPageCircle} id="ellipse1" alt="Decorative Circle" />
        <p>
          Ploggify connects communities with each other and with society to work
          collaboratively. It allows communities to create profiles, showcase
          their work, share their stories, and update their progress. It also
          allows citizens to discover, follow, join, participate, or volunteer
          in various community events and their activities. It also enables
          citizens to report issues or problems that need the attention or
          intervention of communities. Ploggify is designed to be user-friendly,
          accessible, and secure.
        </p>
      </div>
      <div id="features">
        <div className="feature1">
          <img src={feature1} alt="Teamwork Illustration" />
          <p>Networking and collaboration</p>
        </div>
        <div className="feature2">
          <img src={feature2} alt="Notification Bell Icon" />
          <p>Get Notification for upcoming events.</p>
        </div>
        <div className="feature3">
          <img src={feature3} alt="Money and Fundraising Illustration" />
          <p>Fundraising and resource mobilization:</p>
        </div>
      </div>
    </div>
  );
}

export default Home;