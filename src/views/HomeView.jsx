import React from "react";

import KanyeQuoteView from "./KanyeQuoteView";
import PersonalQuoteView from "./PersonalQuoteView";

export default function HomeView() {
  return (
    <main style={{ marginLeft: "100px", marginTop: "100px" }}>
      <a href="https://kanye.rest">API SITE</a>
      <KanyeQuoteView />
      <PersonalQuoteView />
    </main>
  );
}
