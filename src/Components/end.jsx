import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsArrowUpSquare } from "react-icons/bs";
const End = () => {
  return (
    <>
      <section className="end">
        <div className="last" style={{ display: "flex" }}>
          <AiOutlineCopyrightCircle color=" #42b2e6" />
          <p>Created by Aditya Tambe 2023 All Rights Reserved.</p>
        </div>
        <div className="top">
          <a href="#home">
            <BsArrowUpSquare style={{ color: " #42b2e6" }} />
          </a>
        </div>
      </section>
    </>
  );
};

export default End;
