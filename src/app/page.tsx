"use client"

import styles from "./HomePage.module.scss";

import { getFeaturedEvents } from "../../dummy-file";

//^ components
import EventLists from "@/components/events/EventList/EventLists";

export default function Home() {
  const items = getFeaturedEvents();

  return (
    <>
      <section className={styles["section"]}>
        <EventLists items={items} />
      </section>
    </>
  );
}
