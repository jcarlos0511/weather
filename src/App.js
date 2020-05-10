import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  // State in the main component
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });

  // State consult
  const [consult, setConsult] = useState(false);

  // State result

  const [result, setResult] = useState({});

  const { city, country } = search;

  useEffect(() => {
    const consultAPI = async () => {
      if (consult) {
        const appId = "0c0b7d1bcc3e964ca6ef54c3aa586a5d";

        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

        const request = await fetch(url);

        const result = await request.json();

        console.log(result);

        setResult(result);
      }
    };
    consultAPI();
  }, [consult]);

  return (
    <Fragment>
      <Header title="Weather App" />
      <div className="form-container">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                setSearch={setSearch}
                setConsult={setConsult}
              />
            </div>
            <div className="col m6 s12">2</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
