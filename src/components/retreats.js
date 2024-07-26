import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";
import Cards from "./cards";
import Grid from "@mui/material/Grid";

export default function Retreats() {
  const [retreats, setRetreats] = React.useState([]);
  const [searchquery, setSearchQuery] = React.useState("");
  const [pagination, setPagination] = React.useState(1);
  const [type, setType] = React.useState(retreats);
  const [getType, setGetType] = React.useState("");
  const [date, setDate] = React.useState("");
  const [getDate, setGetDate] = React.useState("");
  let list = "";

  React.useEffect(() => {
    getRetreats();
  }, [pagination, searchquery, getType, getDate]);

  const getRetreats = async () => {
    let apiURL = "https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats";
    list = await fetch(
      `${apiURL}?page=${pagination}&limit=3&search=${searchquery}&filter=${getType}${getDate}`
    )
      .then((res) => res.json())
      .then((data) => setRetreats(data || []));

    let typeFilter = await fetch(`${apiURL}`).then((res) => res.json());
    typeFilter = typeFilter.filter(
      (obj1, i, arr) =>
        arr.findIndex((obj2) =>
          ["type"].every((key) => obj2[key] === obj1[key])
        ) === i
    );
    let dateFilter = await fetch(`${apiURL}`).then((res) => res.json());
    typeFilter = typeFilter.filter(
      (obj1, i, arr) =>
        arr.findIndex((obj2) =>
          ["date"].every((key) => obj2[key] === obj1[key])
        ) === i
    );
    setDate(dateFilter);
    setType(typeFilter);
    console.log(
      `${apiURL}?page=${pagination}&limit=3&search=${searchquery}&type=${getType}${getDate}`
    );
  };

  const nextPagination = () => {
    if (retreats.length > 0) {
      setPagination(pagination + 1);
    }
  };
  const previousPagination = () => {
    if (pagination > 1) {
      setPagination(pagination - 1);
    }
  };

  const handleDateChange = (e) => {
    let dateobject = e.target.value;
    if (dateobject == "") {
      setGetDate("");
    } else {
      setGetDate(`&date=${Math.floor(new Date(dateobject).getTime() / 1000)}`);
    }
  };
  console.log(retreats);
  return (
    <Box sx={{ m: 3 }}>
      <Box sx={{ m: 0 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={2}>
            <select onChange={(e) => handleDateChange(e)} className="select">
              <option className="option" value="" selected>
                Filter by Date
              </option>
              {date &&
                date.map((retreat) => {
                  let date = new Date(retreat.date * 1000);
                  date = date.toLocaleString();
                  return (
                    <option className="option" value={date}>
                      {date}
                    </option>
                  );
                })}
            </select>
          </Grid>
          <Grid item xs={12} md={12} lg={2}>
            <select
              onChange={(e) => {
                setGetType(e.target.value);
              }}
              className="select"
            >
              <option className="option" value="" selected>
                Filter by Type
              </option>
              {type.map((retreat) => {
                return (
                  <option className="option" value={retreat.type || ""}>
                    {retreat.type}
                  </option>
                );
              })}
            </select>
          </Grid>
          <Grid item xs={12} md={12} lg={5}></Grid>
          <Grid item xs={12} md={12} lg={3}>
            <input
              value={searchquery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              className=" search"
              placeholder="Search retreats by title"
            />
          </Grid>
        </Grid>
      </Box>

      <br />
      <br />
      <Box>
        <Grid container spacing={2}>
          {retreats != "Not found" &&
            retreats.map((retreat) => {
              return (
                <Grid item xs={12} md={6} lg={4}>
                  <Cards retreat={retreat} />
                </Grid>
              );
            })}
        </Grid>
        <pre></pre>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={previousPagination} className="paagination_button">
            Previous
          </button>
          <button onClick={nextPagination} className="paagination_button">
            Next
          </button>
        </div>
      </Box>
    </Box>
  );
}
