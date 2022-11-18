import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./main.css";
import { Link } from "react-router-dom";
import { faker } from "@faker-js/faker";

const callRestApi = async (id) => {
  console.log("id", id); //123
  const restEndpoint = "http://localhost:3000/api/birds/" + id;
  const response = await fetch(restEndpoint);
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  return JSON.stringify(jsonResponse);
};

function BirdDetails() {
  const { id } = useParams();
  const img = faker.image.animals();

  const [apiResponse, setApiResponse] = useState("");
  const details = apiResponse === "" ? [] : JSON.parse(apiResponse).data;

  useEffect(() => {
    callRestApi(id).then((result) => setApiResponse(result));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">
        {details.name} ({details.latin})
      </h1>
      <div className="card">
        <div className="w-70">
          <h5>Breeding: {details.breeding}</h5>
          <h5>Conservation: {details.conservation}</h5>
          <h5>Diet: {details.diet}</h5>
          <h5>Identification: {details.identification}</h5>
          <h5>Status: {details.status}</h5>
          <h5>Where to See: {details.where_to_see}</h5>
          <h5>Wintering Habits: {details.wintering_habits}</h5>
        </div>
        <div className="w-30">
          <img src={img} className="w-100" />
        </div>
      </div>
      <div className="text-center">
        <Link to="..">Back to List</Link>
      </div>
    </div>
  );
}

export default BirdDetails;
