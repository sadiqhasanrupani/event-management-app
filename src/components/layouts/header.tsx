"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./header.module.scss";

const MainHeader = () => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <header className={styles["header"]}>
      <div className={styles["home-link"]}>
        <Link
          href={"/"}
          className={pathname === "/" ? styles["active"] : "undefined"}
        >
          Next Events
        </Link>
      </div>

      <nav className={styles["nav-items"]}>
        <ul>
          <li>
            <Link
              href={"/events"}
              className={
                pathname === "/events" ? styles["active"] : "undefined"
              }
            >
              Browse All Events
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
