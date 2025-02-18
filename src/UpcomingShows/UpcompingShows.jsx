import "./upcomingShows.scss";
import { useEffect, useState } from "react";

const URL = `https://docs.google.com/spreadsheets/d/e/2PACX-1vTCzuNiBad6EeaA0-EnZko2LGClOQbGwf8q0Re-m7zLmTyixxuF4OCsSQyFFG91HKpW34ZaJplaHP6g/pub?output=csv`;

export default function UpcomingShows() {
  const [showList, setShowList] = useState([]);

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

  return (
    <div className="upcomingShows" id="upcomingShows">
      <h1 className="title">Upcoming Shows</h1>
      <div className="showWrapper">
        {showList.length > 0 ? (
          showList.map((show, index) => (
            <div key={index} className="showRow">
              <div className="showDetails">
                <p className="showDate">{show.date}</p>
                <p className="showTime">{show.time}</p>
                <p className="showVenue">{show.venue}</p>
              </div>
              <div className="showCity">{show.city}</div>
              <div className="showAction">
                {show.link && (
                  <a
                    href={show.link}
                    className="showButton"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tickets
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <span>Loading upcoming shows...</span>
        )}
      </div>
    </div>
  );
}
