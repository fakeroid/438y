import React from "react";
import "../css/Exchange.css";

import Cards from "./Cards";

function Exchange() {
  return (
    <section className="Exchange" id="exchange">
      <div className="container">
        <div className="row">
          <h2 className="col-12 section-title">Биржи</h2>
          <Cards />
        </div>
      </div>
    </section>
  );
}

export default Exchange;
