import React, { useEffect,useState } from "react";
import styles from "./Search.module.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { ReactComponent as SearchImage } from "../../assets/SearchImage.svg";
import { fetchTopAlbums, fetchNewAlbums } from "../../api/api";

const Search = () => {

  const [albums, setAlbums] = useState([])

  useEffect(()=>{
    fetchAlbums()
  },[])

  const fetchAlbums = async() => {
    const topAlbums = await fetchTopAlbums()
    const newAlbums = await fetchNewAlbums()
    // console.log([...topAlbums,...newAlbums])
    setAlbums([...topAlbums,...newAlbums])
  } 

  return (
    <div className={styles.formWrapper}>
      <Autocomplete
        className={styles.search}
        freeSolo
        id={styles.autocomplete}
        disableClearable
        options={albums.map((album) => album.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search a album of your choice"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
      <button className={styles.searchButton}>
        <SearchImage />
      </button>
    </div>
  );
};

export default Search;
