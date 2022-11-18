import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./main.css";

const restEndpoint = "http://localhost:3000/api/birds";

const callRestApi = async () => {
  const response = await fetch(restEndpoint);
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  return JSON.stringify(jsonResponse);
};

function BirdsList(props) {
  const [apiResponse, setApiResponse] = useState("");
  const list = apiResponse === "" ? [] : JSON.parse(apiResponse).data.birds;

  useEffect(() => {
    callRestApi().then((result) => setApiResponse(result));
  }, []);

  return (
    <div>
      {list.length > 0 ? (
        <div className="container">
          {list.map((bird, index) => (
            <div className="{styles.card}">
              <Link to={"/" + (index + 1)} relative="path">
                {bird.name}
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty">
          <p>No List found</p>
        </div>
      )}
    </div>
  );
}

export default BirdsList;
