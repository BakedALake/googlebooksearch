import React from "react";
import "./style.css";

function Search() {
    return (
        <div>
            <form>
                <div class="form-group">
                    <h3>Book Search</h3>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter a book" />
                </div>
                <button type="submit" class="btn btn-primary">Search</button>
            </form>

            <div class="resultsDiv">

            </div>
        </div>

    );
};

function doSearch() {

};

function displayResults() {

};

export default Search;


