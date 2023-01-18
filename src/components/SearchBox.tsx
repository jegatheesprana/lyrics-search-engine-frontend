import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"

import Paper from "@mui/material/Paper"
import IconButton from "@mui/material/IconButton"
import InputBase from "@mui/material/InputBase"
import Divider from "@mui/material/Divider"

import SearchIcon from "@mui/icons-material/Search"
import FilterListIcon from "@mui/icons-material/FilterList"
import MenuIcon from "@mui/icons-material/Menu"
import Filter from "./Filter"

const SearchBox = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [query, setQuery] = useState(searchParams.get("query") || "")
    const [FilterOpen, setFilterOpen] = useState(false)

    const handleClickOpen = () => {
        setFilterOpen(true)
    }

    const handleClose = () => {
        setFilterOpen(false)
    }

    const handleChange = (e: any) => {
        setQuery(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setSearchParams({ query })
    }

    useEffect(() => {
        if (!searchParams.get("query")) return
        // @ts-ignore
        setQuery(searchParams.get("query"))
    }, [searchParams])

    return (
        <>
            <Paper
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <IconButton sx={{ p: "10px" }} aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Songs"
                    inputProps={{ "aria-label": "search google maps" }}
                    value={query}
                    onChange={handleChange}
                />
                <IconButton
                    type="submit"
                    sx={{ p: "10px" }}
                    aria-label="search"
                >
                    <SearchIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton
                    color="primary"
                    sx={{ p: "10px" }}
                    aria-label="directions"
                    onClick={handleClickOpen}
                >
                    <FilterListIcon />
                </IconButton>
            </Paper>
            <Filter open={FilterOpen} handleClose={handleClose} />
        </>
    )
}

export default SearchBox
