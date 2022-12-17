import React, { useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";

export default function Index(props) {
  const { searchQuery, onChange } = props;

  

  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value);

    // if(value.length >= 3 && !value.includes('shit')){
    // }
    // const value = e.target.value
    // const { value: value2} = e.target;
    // const value2 = e.target.value
  };

  return (
    <Navbar bg="light" expand="lg" className="navmain m-auto">
      <Container fluid className="whnav position-relative">
        <Navbar.Brand href="#" className="logospan">
          <img
            className="imagelogo"
            src="	https://d1sz9gun5ag95e.cloudfront.net/packs/media/images/logo-hn-search-a822432b.png"
            alt="Image Not Found"
          />

          <span className="spanclass">
            <p className="para1"> Search </p>
            <p className="para2"> Heacker News</p>
          </span>
        </Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Form className="w-100  d-flex position-relative">
            <i className="fa-solid fa-magnifying-glass icons left-search-icon"></i>

            <Form.Control
              type="search"
              placeholder="Search stories by title, url or author"
              className="me-2 frominput"
              aria-label="Search"
              value={searchQuery}
              onChange={handleChange}
            />

            <div className="right-search-text">
              <p className="right-search-font">Search By</p>
              <div className="d-inline">
                <img src="https://d1sz9gun5ag95e.cloudfront.net/packs/media/images/logo-algolia-blue-35c461b6.svg" />
              </div>
            </div>
          </Form>
        </Navbar.Collapse>
        <div className="searcHeader-setting">
          <a href="/settings">
            <i className="fa-solid fa-gear setting-icon"></i>
            <span className="headerSetting-text">Setting</span>
          </a>
        </div>
      </Container>
    </Navbar>
  );
}
