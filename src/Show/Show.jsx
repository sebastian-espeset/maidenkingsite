import "./show.scss";

export default function Show({ date, time, venue, purchaseUrl }) {
  return (
    <div className="showinfo">
      <div className="showdate">
        <span>{date}</span>
      </div>
      <div className="venueinfo">
        <span>
          {venue}, @{time}
        </span>
      </div>
      <div className="showactions">
        <span>
          <button className="tickers" href={purchaseUrl}>
            Buy tickets
          </button>
        </span>
      </div>
    </div>
  );
}
