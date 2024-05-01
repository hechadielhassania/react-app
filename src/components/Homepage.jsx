import React from 'react'
import Header from "./Header";
import SearchBar from "./searchbar";
import ImployeeList from './EmployeeList'

function Homepage({title}) {
  return (
    <div className="homepage">
      <Header topic={title} />
      <SearchBar />
      <ImployeeList />
    </div>
  )
}

export default Homepage