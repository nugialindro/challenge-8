import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import cn from "classnames";
import "./FormSearch.css";
import "../App.css";

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
      <h2>Search player . . .</h2>
      <Form className="search-form" onSubmit={handleSubmit}>
        <Form.Control type="search" onChange={handleKeyword} placeholder="Search" className="me-2" aria-label="Search" />
        <Button variant="outline-success" type="submit" onClick={handleSearchKeyword}>
          Search
        </Button>
      </Form>

      <>
        <div className={cn(isSubmit && "new-user-details")}>
          {searchData.map((data, index) => (
            <div key={index}>
              <p>Result for "{data.keyword}" </p>
            </div>
          ))}
        </div>
      </>
    </div>
  );
}

export default CreateForm;
