// Search Bar 
import React from "react";
import Button from "react-bootstrap/Button";
import "./style.css"

function Search(props) {
    return (
        <section>
            <div className ="col-md-10 col-sm-10">
                <div>
                    <h1>Books</h1>
                    <div className ="input-group">
                        <input
                         className="form-control mr-sm-2"
                         onChange={props.handleInputChange}
                         value={props.value}
                         type="search"
                         placeholder=" Google Search books..."
                         aria-label="Search"
                       />
                        <Button
                       onClick={props.handleFormSubmit}
                         className="submit-btn"
                          type="submit" ></Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Search;