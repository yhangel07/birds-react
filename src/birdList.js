import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./main.css";
import { faker } from "@faker-js/faker";

const restEndpoint = "http://localhost:3000/api/birds";

const callRestApi = async () => {
  const response = await fetch(restEndpoint);
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  return JSON.stringify(jsonResponse);
};

const getRandomImg = () => {
    return faker.image.imageUrl(640, 480, 'bird', true)
}

function BirdsList(props) {
  const [apiResponse, setApiResponse] = useState("");
  const list = apiResponse === "" ? [] : JSON.parse(apiResponse).data.birds;
  const navigate = useNavigate();

  useEffect(() => {
    callRestApi().then((result) => setApiResponse(result));
  }, []);

  return (
    <div className="body">
      <h1>BIRDS</h1>
      {list.length > 0 ? (
        <div className="container d-flex cursor-pointer flex-wrap">
          {list.map((bird, index) => (
            <div
              className="card max-20"
              onClick={() => navigate(`/${index + 1}`)}
            >
              <img src={getRandomImg()} className="w-100" />

              <h5 className="text-center">{bird.name}</h5>
              <p className="desc-limit">{bird.identification}</p>
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
