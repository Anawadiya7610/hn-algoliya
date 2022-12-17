import React, { useState, useEffect } from "react";
import "./styles.css";

import Dropdown from "react-bootstrap/Dropdown";

export default function Searchfilter(props) {
  const {
    processTime,
    totalResults,
    tags,
    setTags,
    sort,
    setSort,
    dateRange,
    setRange,

  } = props;

  const tagsMap = {
    all: "All",
    comment: "Comments",
    story: "Stories",
  };

  const sortMap = {
    relevance: "Popularity",
    date: "Date",
  };

  const dateRangeMap = {
    all_time: "All Time",
    last_24h: "Last 24h",
    past_week: "Past Week",
    past_month: "Past Month",
    past_year: "Past Year",
    custom_range: "Custom Range",
  };

  const handleTags = (e) => {
    const { dataset } = e.target; // const dataset = e.target.dataset
    setTags(dataset.tag);
  };

  const handleSort = (e) => {
    const { dataset } = e.target;
    setSort(dataset.sort);
  };

  const handleDate = (e) => {
    const { dataset } = e.target;
    setRange(dataset.date);
  };

  return (
    <div className="filterContainer">
      <div className="filterSearch-Left">
        <div className="filterSearch">
          <p className="searchFilter-text">Search</p>
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className="dropdown-btn"
            >
              {tagsMap[tags] || tagsMap.all}  {/*here tag will be (all story and comment)*/}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item data-tag="all" onClick={handleTags}>
                {tagsMap.all}
              </Dropdown.Item>
              <Dropdown.Item data-tag="story" onClick={handleTags}>
                {tagsMap.story}
              </Dropdown.Item>
              <Dropdown.Item data-tag="comment" onClick={handleTags}>
                {tagsMap.comment}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="filterSearch">
          <p className="searchFilter-text">By</p>
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className="dropdown-btn"
            >
              {sortMap[sort] || sortMap.relevance}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item data-sort="relevance" onClick={handleSort}>
                {sortMap.relevance}
              </Dropdown.Item>
              <Dropdown.Item data-sort="date" onClick={handleSort}>
                {sortMap.date}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="filterSearch">
          <p className="searchFilter-text">For</p>
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className="dropdown-btn"
            >
              {dateRangeMap[dateRange] || dateRangeMap.all_time} {/*dateRange  state se 
             value ko set karega*/}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item data-date="all_time" onClick={handleDate}>
                {dateRangeMap.all_time}
              </Dropdown.Item>
              <Dropdown.Item data-date="last_24h" onClick={handleDate}>
                {dateRangeMap.last_24h}
              </Dropdown.Item>
              <Dropdown.Item data-date="past_week" onClick={handleDate}>
                {dateRangeMap.past_week}
              </Dropdown.Item>
              <Dropdown.Item data-date="past_month" onClick={handleDate}>
                {dateRangeMap.past_month}
              </Dropdown.Item>
              <Dropdown.Item data-date="past_year" onClick={handleDate}>
                {dateRangeMap.past_year}
              </Dropdown.Item>
              <Dropdown.Item data-date="custom_range" onClick={handleDate}>
                {dateRangeMap.custom_range}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div className="filterTimer-icon">
        <div className="filterTimer">
          <p>
            {totalResults} results ({processTime / 1000} seconds){" "}
          </p>
        </div>
        <div className="filterIcon">
          <i className="fa-solid fa-square-share-nodes iconShare"></i>
        </div>
      </div>
    </div>
  );
}
