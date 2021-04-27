import React, { useState, createContext,useEffect,useContext } from 'react'
import  SearchInput  from '../components/SearchInput';

export const UserContext = createContext({})

export default function UserContextProvider({ children }) {
   
const [searchValue, setSearchValue] = useState("")
const [jobList, setJobList] = useState({})
const newSearchValue = searchValue.replaceAll(" ","+")

const url = 'https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description='+newSearchValue

function getJobList() {
    fetch(url)
    .then(res => res.json())
    .then(data => setJobList(data))
  }

return (
<UserContext.Provider 
value={{ jobList, setJobList,searchValue, setSearchValue,getJobList}}> 
     {children}
 </UserContext.Provider>) 
 }