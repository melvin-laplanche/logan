import styles from "./Section.module.scss";

var React = require("react");

export default function Section({
  children,
  fullScreen = false,
}: {
  children: React.ReactNode;
  fullScreen?: boolean;
}) {
  return (
    <section className={`${styles.root} ${fullScreen ? styles.full : ""}`}>
      {children}
    </section>
  );
}
