import { React } from "react";
import "./styles.css";
import moment from 'moment';

export default function Searchresult({ results }) {
  if (!results || !results.length) {
    return (
      <div className="searchResult">
        <p>No results found. please search using different query</p>
      </div>
    );
  }

  // let year = results[0].created_at.split("T")[0].split("-").join("");
  // console.log(year);
  // console.log(typeof(year));


  return (
    <section className="searchResult">
      {results.map((el) => (
        <article key={el.objectID} target="_blank" className="stroy">
          <div className="storyTitle">
            <a href={el.url} target="_blank">
              <span className="storySpan" target="_blank">{el.title}</span>
            </a>
            <a href={el.url} target="_blank" className="storyLinks">
              ({el.url})
            </a>
          </div>

          <div className="storydata">
            <span>
              <a href={el.url} target="_blank">{el.points} Points</a>
            </span>

            <span className="storySeparator">|</span>

            <span>
              <a href={el.url} target="_blank">
                <span>{el.author}</span>
              </a>
            </span>

            <span className="storySeparator">|</span>

            <span>
              <a href={el.url} target="_blank">{moment(`${el.created_at.split("T")[0].split("-").join("")}`).fromNow()}</a>
            </span>

            <span className="storySeparator">|</span>

            <span>
              <a href={el.url} target="_blank">{el.num_comments} comments</a>
            </span>
          </div>
        </article>
      ))}
    </section>
  );
}
