import "./upcomingShows.scss";
import Show from "../Show/Show";
// this object will help to update show info manually. will do for now.
let showList = [
  {
    date: "jul 7",
    time: "8pm",
    venue: "The Void",
    purchaseUrl: "/",
  },
];
export default function UpcompingShows() {
  return (
    <div className="upcomingShows">
      <h1>Upcoming Shows</h1>
      <div className="showWrapper">
        {/* <Show /> */}
        {showList.map((show, index) => {
          return (
            <Show
              date={show.date}
              time={show.time}
              venue={show.venue}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
