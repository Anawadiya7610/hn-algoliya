import React from "react";
import "./styles.css";

export default function index() {
  return (
    <div>
      <div className="footer">
        <ul className="footerUl">
          <li className="footerList">
            <a href="https://hn.algolia.com/about" target="_blank">About</a>
          </li>
          <li className="footerList">
            <a href="https://hn.algolia.com/settings" target="_blank">Setting</a>
          </li>
          <li className="footerList">
            <a href="https://hn.algolia.com/help" target="_blank">Help</a>
          </li>
          <li className="footerList">
            <a href="https://hn.algolia.com/api">Api Documentation</a>
          </li>
          <li className="footerList">
            <a href="/hackernews" target="_blank">Hacker News</a>
          </li>
          <li className="footerList">
            <a href="/contribute" target="_blank">Contribute</a>
          </li>
          <li className="footerList">
            <a href="https://hn.algolia.com/cool_apps" target="_blank">Cool Apps</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
