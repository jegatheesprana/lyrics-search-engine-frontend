import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"

import Paper from "@mui/material/Paper"
import IconButton from "@mui/material/IconButton"
import InputBase from "@mui/material/InputBase"
import Divider from "@mui/material/Divider"
import Box from "@mui/material/Box"
import Collapse from "@mui/material/Collapse"
import Autocomplete from "@mui/material/Autocomplete"

import SearchIcon from "@mui/icons-material/Search"
import FilterListIcon from "@mui/icons-material/FilterList"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

import Filter from "./Filter"

const SearchBox = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [query, setQuery] = useState(searchParams.get("query") || "")
    const [metaphor, setMetaphor] = useState(searchParams.get("metaphor") || "")
    const [FilterOpen, setFilterOpen] = useState(false)
    const [showMetaphorInput, setShowMetaphorInput] = useState(false)
    const [fillData, setFillData] = useState([])

    const handleClickOpen = () => {
        setFilterOpen(true)
    }

    const handleClose = () => {
        setFilterOpen(false)
    }

    const handleChange = (e: any, newValue: string) => {
        setQuery(newValue)
    }

    const handleMetaphorChange = (e: any) => {
        setMetaphor(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (metaphor) setSearchParams({ query, metaphor })
        else setSearchParams({ query })
    }

    const openMetaphorInput = () => {
        setShowMetaphorInput(true)
    }

    const closeMetaphorInput = () => {
        setShowMetaphorInput(false)
    }

    useEffect(() => {
        if (!searchParams.get("query")) return
        // @ts-ignore
        setQuery(searchParams.get("query"))
        // @ts-ignore
        setMetaphor(searchParams.get("metaphor"))
    }, [searchParams])

    useEffect(() => {
        if (!query) return
        const controller = new AbortController()
        fetch("http://127.0.0.1:5000/autofill", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query,
            }),
            signal: controller.signal,
        })
            .then((res) => res.json())
            .then((data: any) => {
                setFillData(
                    data.results.map((data: any) => data._source.song_name)
                )
            })
    }, [query])

    return (
        <>
            <Paper
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    p: "2px 4px",
                    width: "100%",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <IconButton
                        sx={{ p: "10px" }}
                        aria-label="menu"
                        onClick={openMetaphorInput}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Autocomplete
                        fullWidth
                        id="free-solo-demo"
                        freeSolo
                        // options={top100Films.map((option) => option.title)}
                        options={fillData}
                        inputValue={query}
                        onInputChange={handleChange}
                        renderInput={(params: any) => (
                            <InputBase
                                {...params}
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search Songs"
                                ref={params.InputProps.ref}
                            />
                        )}
                    />

                    <IconButton
                        type="submit"
                        sx={{ p: "10px" }}
                        aria-label="search"
                    >
                        <SearchIcon />
                    </IconButton>
                    <Divider
                        sx={{ height: 28, m: 0.5 }}
                        orientation="vertical"
                    />
                    <IconButton
                        color="primary"
                        sx={{ p: "10px" }}
                        aria-label="directions"
                        onClick={handleClickOpen}
                    >
                        <FilterListIcon />
                    </IconButton>
                </Box>
                <Collapse in={showMetaphorInput}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <IconButton
                            sx={{ p: "10px" }}
                            aria-label="menu"
                            onClick={closeMetaphorInput}
                        >
                            <CloseIcon />
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search Metaphor"
                            inputProps={{ "aria-label": "search metaphor" }}
                            value={metaphor}
                            onChange={handleMetaphorChange}
                        />
                    </Box>
                </Collapse>
            </Paper>
            <Filter open={FilterOpen} handleClose={handleClose} />
        </>
    )
}

export default SearchBox
