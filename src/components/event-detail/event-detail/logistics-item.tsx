import { ReactNode } from "react";
import classes from "./logistics-item.module.scss";

function LogisticsItem(props: { icon: any; children?: ReactNode }) {
  const { icon: Icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
