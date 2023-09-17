import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <div id="github" className="max-width">
      <div className="main-text">
        <h2>
          <span>GitHub </span>Statistics
        </h2>
      </div>
      <div id="stat">
        <div>
          <img
            className="ht1"
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=tambeaditya101&count_private=true"
            alt="pic"
          />
        </div>
        <div>
          <img
            className="ht1"
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=tambeaditya101"
            alt="pic"
          />
        </div>
        <div>
          <img
            className="ht1"
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com?user=tambeaditya101&theme=light"
            alt="pic"
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          margin: "auto",
          marginTop: "10px",
          //justifyContent: "center",
          // border: "1px solid white",
        }}
      >
        <img
          src="https://komarev.com/ghpvc/?username=tambeaditya101"
          alt="count"
        />
      </div>
      <div
        className="react-activity-calendar"
        style={{
          margin: "10px auto 20px auto",
          // border: "1px solid white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <GitHubCalendar username="tambeaditya101" />
      </div>
    </div>
  );
};

export default Github;
