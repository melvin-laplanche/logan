import styles from "./Header.module.scss";
import Melvin from "./svg/melvin.svg";

var React = require("react");

export default function Header() {
  return (
    <header className={styles.root}>
      <h1>
        <span className="simplified-svg-logo">
          <Melvin />
        </span>
        <div className="title-text">
          <span className="text-accent">MELVIN</span> <span>LAPLANCHE</span>
        </div>
      </h1>
      <div className={styles.subtitle}>
        FULL STACK ENGINEER BUILDING COOL STUFF AT
        <a href="www.abstract.com"> ABSTRACT </a>
      </div>
    </header>
  );
}
