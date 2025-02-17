import "./upcomingShows.scss";
import { useEffect, useState } from "react";

const URL = `https://docs.google.com/spreadsheets/d/e/2PACX-1vTCzuNiBad6EeaA0-EnZko2LGClOQbGwf8q0Re-m7zLmTyixxuF4OCsSQyFFG91HKpW34ZaJplaHP6g/pub?output=csv`;

export default function UpcompingShows() {
  // the data is an array of shows. Each show is an array of length 3, with location, date, time, and website
  // to access info about each show; showList[i].c[0].v is the venue,showList[i].c[1].v is the date,showList[i].c[2].v is the time ,showList[i].c[3].v is the website
  const [showList, setShowList] = useState();
  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch(URL);
        const text = await response.text();

        const rows = text
          .split("\n")
          .slice(1) // Skip header row
          .map((row) => {
            const columns = row.split(",");
            return {
              venue: columns[0].trim(),
              date: columns[1].trim(),
              time: columns[2].trim(),
              city: columns[3].trim(),
              link: columns[4]?.trim(), // Optional in case some rows lack a link
            };
          });

        setShowList(rows);
      } catch (error) {
        console.error("Error fetching show data:", error);
      }
    };

    fetchShows();
  }, []);
  if (showList != undefined) {
    return (
      <div className="upcomingShows" id="upcomingShows">
        <h2 className="title">Upcoming Shows</h2>
        <div className="showWrapper">
          {showList.map((show, index) => (
            <div key={index} className="showCard">
              <p className="showDate">{show.date}</p>
              <p className="showVenue">
                {show.venue}, {show.time}, {show.city}
              </p>
              {show.link && (
                <a
                  href={show.link}
                  className="showLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tickets
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <span>Loading upcoming shows...</span>;
  }
}
