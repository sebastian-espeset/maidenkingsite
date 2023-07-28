import "./upcomingShows.scss";
import Show from "../Show/Show";
// this object will help to update show info manually. will do for now.
// component to be used later
let showList = [
  {
    date: "jul 4",
    time: "8pm",
    venue: "The Void",
    purchaseUrl: "/",
  },
  {
    date: "aug 8",
    time: "5pm",
    venue: "Cathedral Basilica",
    purchaseUrl: "/",
  },
  {
    date: "nov 5",
    time: "11pm",
    venue: "The Houses of Par",
    purchaseUrl: "/",
  },
];
export default function UpcompingShows() {
  return (
    <div className="upcomingShows" id="upcomingShows" name="upcomingShows">
      <div className="title">
        <h1>Upcomping shows</h1>
      </div>
      <div className="showWrapper">
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
