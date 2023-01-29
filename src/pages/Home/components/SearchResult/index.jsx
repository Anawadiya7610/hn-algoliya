import { React } from "react";
import "./styles.css";
import moment from "moment";

export default function Searchresult({ results }) {
  if (!results || !results.length) {
    return (
      <div className="searchResult">
        <p>No results found. please search using different query</p>
      </div>
    );
  }

  return (
    <section className="searchResult">
      {results.map((el, index) => {
        if (el._tags.includes("story")) {
          return (
            <article key={el.objectID} target="_blank" className="stroy">
              <div className="storyTitle">
                <a href={el.url} target="_blank">
                  <span className="storySpan" target="_blank">
                    {el.title}
                  </span>
                </a>
                <a href={el.url} target="_blank" className="storyLinks">
                  ({el.url})
                </a>
              </div>

              <div className="storydata">
                <span>
                  <a href={el.url} target="_blank">
                    {el.points} Points
                  </a>
                </span>

                <span className="storySeparator">|</span>

                <span>
                  <a href={el.url} target="_blank">
                    <span>{el.author}</span>
                  </a>
                </span>

                <span className="storySeparator">|</span>

                <span>
                  <a href={el.url} target="_blank">
                    {moment(
                      `${el.created_at.split("T")[0].split("-").join("")}`
                    ).fromNow()}
                  </a>
                </span>

                <span className="storySeparator">|</span>

                <span>
                  <a href={el.url} target="_blank">
                    {el.num_comments} comments
                  </a>
                </span>
              </div>
            </article>
          );
        } else if (el._tags.includes("comment")) {
          console.log(el);
          return (
            <div className="storyComment_common">
              <div className="storydata" key={index}>
                <span>
                  <a href={el.url} target="_blank">
                    {el.points} Points
                  </a>
                </span>

                <span className="storySeparator">|</span>

                <span>
                  <a href={el.url} target="_blank">
                    <span>{el.author}</span>
                  </a>
                </span>

                <span className="storySeparator">|</span>

                <span>
                  <a href={el.url} target="_blank">
                    {moment(
                      `${el.created_at.split("T")[0].split("-").join("")}`
                    ).fromNow()}
                  </a>
                </span>

                <span className="storySeparator">|</span>

                <span>
                  <a href={el.url} target="_blank">
                    {el.comment_text.split("<p>")[0]}
                  </a>
                </span>
              </div>
              <div className="story_comment">
                <span>{el.comment_text.split("<p>")[1]}</span>
              </div>
            </div>
          );
        }
      })}
    </section>
  );
}
