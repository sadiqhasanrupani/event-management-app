import classes from "./event-summary.module.css";

function EventSummary({ title }: any) {
  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;
