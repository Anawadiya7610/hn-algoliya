import React, { useState, useEffect } from "react";
import Navbar from "../../Componets/Navbar";
import Footer from "../../Componets/Footer";
import Pagination from "./components/Pagination";
import SearchFilter from "./components/SearchFilter";
import SearchResult from "./components/SearchResult";
import "./styles.css";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  let [tags, setTags] = useState("all");
  const [sort, setSort] = useState("relevance");
  const [dateRange, setRange] = useState("all_time");
  const [searchResponse, setResponse] = useState(null);
  let [page, setPages] = useState(1);

  const onChange = (value) => {
    setSearchQuery(value);
  };

  const getSearchResults = async () => {
    try {
      setResponse(null);
    
      // if(tags==='comment'){
      //   tags = 'comment';
      // }else if(tags ==='story'){
      //   tags = 'story';
      // }
      
      // let apiPathname = '';
      // if(tags==='story'){
      //   tags = "story";
      // }else if(tags==='comment'){
      //   tags = 'comment'
      // }
      
      let filterTags = tags === "all" ? "" : tags;
      let numericFilters = "";


      // const baseApiuUrl = "https://hn.algolia.com/";
      // let apiPathname = '';
      // if(sort==='relevance'){
      //   apiPathname = "/api/v1/search"
      // }else if(sort === 'date'){
      //   apiPathname = "/api/v1/search_by_date"
      // }
      // let url = `${baseApiuUrl}${apiPathname}`

      if (dateRange === "last_24h") {
        // let date = new Date();
        let timestampInSec = Math.floor(Date.now() / 1000) - 24 * 3600;
        numericFilters = `created_at_i>${timestampInSec}`;
      } else if (dateRange === "past_week") {
        let timestampInWeek = Math.floor(Date.now() / 1000) - 24 * 7 * 3600;
        numericFilters = `created_at_i>${timestampInWeek}`;
      } else if (dateRange === "past_month") {
        let timestampInMonth = Math.floor(Date.now() / 1000) - 24 * 30 * 3600;
        numericFilters = `created_at_i>${timestampInMonth}`;
      } else if (dateRange === "past_year") {
        let timestampInYear = Math.floor(Date.now() / 1000) - 24 * 365 * 3600;
        numericFilters = `created_at_i>${timestampInYear}`;
      } 
        // numericFilters =  `created_at_i>${customTime}`;
     

      let apiUrl = `https://hn.algolia.com/api/v1/${
        sort === "date" ? "search_by_date" : "search"
      }`;

      const res = await fetch(
        `${apiUrl}?query=${searchQuery}&tags=${filterTags}&numericFilters=${numericFilters}&page=${page}`
      );
      const fatchdata = await res.json();
      setResponse(fatchdata); // api response
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearchResults();
  }, [searchQuery, tags, sort, dateRange, page]);

  return (
    <div>
      <Navbar searchQuery={searchQuery} onChange={onChange} />
      {searchResponse ? (
        <div>
          <SearchFilter
            searchQuery={searchQuery}
            processTime={searchResponse.processingTimeMS}
            totalResults={searchResponse.nbHits}
            sort={sort}
            dateRange={dateRange}
            tags={tags}
            setTags={setTags}
            setRange={setRange}
            setSort={setSort}
          />
          <SearchResult results={searchResponse.hits} />

          <Pagination
            searchQuery={searchQuery}
            currentPage={page}
            setPages={setPages}
            totalPage={searchResponse.nbPages}
          />
        </div>
      ) : (
        <div className="setloadingdiv">It's Loading....</div>
      )}
      <Footer />
    </div>
  );
}
