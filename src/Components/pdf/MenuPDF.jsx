import React, { Component } from "react";

class Pdf extends Component {
  componentDidMount() {
    if (typeof window.orientation !== "undefined") {
      document.getElementById("download-menu-food-pdf").click();
      window.close();
    }
  }
  render() {
    return (
      <div style={{ position: "absolute", width: "100%", height: "100%" }}>
        <object
          data={require("./docs_pdf/menu-surfing-wombats.pdf")}
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <br />
          <a
            href={require("./docs_pdf/menu-surfing-wombats.pdf")}
            rel="noreferrer"
            target="_blank"
            id="download-menu-food-pdf"
            download="menu-surfing-wombats.pdf"
          >
            Click to download file
          </a>
        </object>
      </div>
    );
  }
}

export default Pdf;
