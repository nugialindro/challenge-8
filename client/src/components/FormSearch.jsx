import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import cn from "classnames";
import "./Form.css";
import "../App.css";
import BackButton from "./BackButton";

function CreateForm() {
  const [searchData, setSearchData] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  function handleKeyword(event) {
    const value = event.target.value;
    setKeyword(value);
  }

  function handleSearchKeyword() {
    setSearchData([...searchData, { keyword }]);
  }

  const handleSubmit = (event) => {
    console.log(searchData);
    setIsSubmit(true);
    event.preventDefault();
  };

  return (
    <div className="search-page">
      <BackButton />
      <div className="search-container">
        <h2 className="mb-3">Search player . . .</h2>
        <Form className="search-form mb-4" onSubmit={handleSubmit}>
          <Form.Control type="search" onChange={handleKeyword} placeholder="Search" className="me-2" aria-label="Search" />
          <Button variant="outline-success" type="submit" onClick={handleSearchKeyword}>
            Search
          </Button>
        </Form>
        <div className="search-filer">
          <Form.Group>
            <p>Search by :</p>
            <Form.Check inline label="username" id="username" type="checkbox" />
            <Form.Check inline label="email" id="email" type="checkbox" />
            <Form.Check inline label="exp" id="exp" type="checkbox" />
            <Form.Check inline label="lvl" id="lvl" type="checkbox" />
          </Form.Group>
        </div>
        <div className={cn(isSubmit && "search-details")}>
          {searchData.map((data, index) => (
            <div key={index}>
              <p>Result for "{data.keyword}" </p>
            </div>
          ))}
        </div>
      </div>

      <></>
    </div>
  );
}

export default CreateForm;
