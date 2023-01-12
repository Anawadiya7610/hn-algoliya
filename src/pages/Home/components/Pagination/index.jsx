import React from "react";
import "./styles.css";
export default function Pagination(props) {
  let { currentPage, setPages, totalPage } = props;

  let startNum = currentPage - 2;
  let endNum = currentPage + 2;
  let margin = 0;

  if (startNum < 1) {
    margin = Math.abs(startNum - 1);
  } else if (endNum > totalPage) {
    margin = totalPage - endNum;
  }

  if (margin > 0) {
    endNum = endNum + margin;
    startNum = 1;
  } else {
    startNum = startNum + margin;
    endNum = totalPage;
  }

  const numArray = new Array(5).fill("").map((_, idx) => idx + startNum);

  var handleClick = (e) => {
    const { dataset } = e.target; // const dataset = e.target.dataset
    setPages(Number(dataset.id));
    console.log(dataset.id);
  };

  const handleNext = () => {
   setPages(currentPage + 1);
  };

  const handlePrev = () => {
    setPages(currentPage - 1);
  };

  return (
    <div>
      <div className="paginations">
        <ul className="paginationUl">
          <li className="paginationList">
            <button onClick={handlePrev}>
              <i className="fa-sharp fa-solid fa-backward"></i>
            </button>
          </li>

          {numArray.map((page) => (
            <li key={page} className="paginationList">
              <button data-id={page} onClick={handleClick}>
                {page}
              </button>
            </li>
          ))}

          <li className="paginationList">
            <button onClick={handleNext}>
              <i className="fa-solid fa-forward"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
