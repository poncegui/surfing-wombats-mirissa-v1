import React, { Component } from "react";

class Pdf extends Component {
  componentDidMount() {
    if (typeof window.orientation !== "undefined") {
      document.getElementById("download-kids-menu-pdf").click();
      window.close();
    }
  }
  render() {
    return (
      <div style={{ position: "absolute", width: "100%", height: "100%" }}>
        <object
          data={require("./docs_pdf/kids-menu-surfing-wombats.pdf")}
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <br />
          <a
            href={require("./docs_pdf/kids-menu-surfing-wombats.pdf")}
            rel="noreferrer"
            target="_blank"
            id="download-kids-menu-pdf"
            download="kids-menu-surfing-wombats.pdf"
          >
            jelou
          </a>
        </object>
      </div>
    );
  }
}

export default Pdf;
