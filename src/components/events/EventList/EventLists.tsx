"use client"

import React, { Fragment, HTMLAttributes } from "react";

interface EventListsProps extends HTMLAttributes<HTMLDivElement> {
  items?: Array<any>;
}

//^ styles
import styles from "./EventList.module.scss";

//^ components
import EventItem from "../EventItem/EventItem";

const EventLists: React.FC<EventListsProps> = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items?.map((item) => {
        return (
          <Fragment key={item.id}>
            <EventItem item={item} />
          </Fragment>
        );
      })}
    </ul>
  );
};

export default EventLists;
