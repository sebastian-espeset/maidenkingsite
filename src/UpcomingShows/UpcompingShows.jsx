import "./upcomingShows.scss";
import Show from "../Show/Show";
import { useEffect, useState } from "react";

const spreadsheet_id = import.meta.env.SPREAD_SHEET_ID;
const URL = `https://docs.google.com/spreadsheets/d/${spreadsheet_id}/gviz/tq?tqx=out:json&tq&gid=1`;

export default function UpcompingShows() {
  // the data is an array of shows. Each show is an array of length 3, with location, date, time, and website
  // to access info about each show; showList[i].c[0].v is the venue,showList[i].c[1].v is the date,showList[i].c[2].v is the time ,showList[i].c[3].v is the website
  const [showList, setShowList] = useState();
  console.log(spreadsheet_id);
  const fetchShowState = async () => {
    await fetch(URL)
      .then((res) => res.text())
      .then((rep) => {
        const jsData = JSON.parse(rep.substring(47).slice(0, -2));
        setShowList(jsData.table.rows);
      });
  };
  useEffect(() => {
    fetchShowState();
  }, []);
  if (showList != undefined) {
    return (
      <div className="upcomingShows" id="upcomingShows" name="upcomingShows">
        <div className="title">
          <h1>Upcomping shows</h1>
        </div>
        <div className="showWrapper">
          {showList.map((show, index) => {
            return (
              <Show
                date={show.c[1].f}
                time={show.c[2].f}
                venue={show.c[0].v}
                purchaseUrl={show.c[3].v}
                key={index}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <span>Loading...</span>;
  }
}
