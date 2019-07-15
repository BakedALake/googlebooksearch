import React from "react";
import "./style.css";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <h5>Google Books</h5>

          <ul class="mr-auto navbar navbar-expand-lg navbar-light bg-light">
            <li class="nav-item">
              <a class="nav-link" href="/search">Search</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/saved">Saved</a>
            </li>
          </ul>
        </nav>
    );
}

export default Navbar;
