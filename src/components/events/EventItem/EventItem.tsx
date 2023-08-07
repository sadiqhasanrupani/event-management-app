"use client"

import React, { HTMLAttributes } from "react";
import Link from "next/link";

interface EventItemProps extends HTMLAttributes<HTMLDivElement> {
  item?: {
    id?: string;
    title?: string;
    description?: string;
    location?: string;
    date?: string;
    image?: string;
    isFeatured?: boolean;
  };
  key?: any;
}

//^ styles
import styles from "./EventItem.module.scss";

//^ components
import AddressIcon from "@/components/icons/AddressIcon";
import DateIcon from "@/components/icons/DateIcon";
import ArrowRightIcon from "@/components/icons/ArrowRighIcon";

const EventItem: React.FC<EventItemProps> = ({ key, item }) => {
  const humanReadableDate = new Date(item?.date as string).toLocaleDateString(
    "en-us",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  const formattedAddress: string = (item?.location as string).replace(
    ",",
    "\n"
  );

  const exploreEvent: string = `/events/${item?.id}`;

  return (
    <li key={item?.id} className={styles["item"]}>
      <img
        style={{ objectFit: "cover" }}
        src={("/" + item?.image) as string}
        alt="events img"
        height={200}
        width={200}
      />
      <div key={item?.id} className={styles.content}>
        <div>
          <div className={styles["summary"]}>
            <h2>{item?.title}</h2>
          </div>
          <div className={styles["date"]}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles["address"]}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles["actions"]}>
          <Link href={exploreEvent} className={styles["link"]}>
            <span>Explore Event</span>
            <span className={styles["icon"]}>
              <ArrowRightIcon />
            </span>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
