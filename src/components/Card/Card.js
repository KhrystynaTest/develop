import React from "react";
import styles from "./card.module.css";
import Table from "../Table/Table";

const Card = () => {
  return (
    <div className="card">
      <div className={styles.avatarBlock}>
        <img
          src="https://t4.ftcdn.net/jpg/00/65/10/47/360_F_65104718_x17a76wzWKIm3BlhA6uyYVkDs9982c6q.jpg"
          alt="Avatar"
          style={{ width: "100% " }}
          className={styles.avatarImage}
        />
      </div>
      <div>
        <h4>
          <b>John Smith</b>
        </h4>
        <p>Architect & Engineer</p>
        <p>Project: App Profile</p>
        <p>email@gmail.com</p>
        <p>304 Oak | Ferandale | Randburg</p>
        <p>Active since 01.05.2021</p>
      </div>
    </div>
  );
};

export default Card;
