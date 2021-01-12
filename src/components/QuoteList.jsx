import React from "react";

export default function QuoteList({ quotes }) {
  return (
    <ol>
      {quotes.map((quote, idx) => (
        <li key={idx} style={{ listStyleType: "none" }}>
          {quote}
        </li>
      ))}
    </ol>
  );
}
