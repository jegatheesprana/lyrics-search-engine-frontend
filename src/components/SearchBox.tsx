import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import IconButton from "@mui/material/IconButton"
import OutlinedInput from "@mui/material/OutlinedInput"
import InputLabel from "@mui/material/InputLabel"
import InputAdornment from "@mui/material/InputAdornment"
import FormControl from "@mui/material/FormControl"
import Search from "@mui/icons-material/Search"

const SearchBox = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [query, setQuery] = useState(searchParams.get("query") || "")

    const handleChange = (e: any) => {
        setQuery(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setSearchParams({ query })
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormControl
                sx={{ m: 1, width: "25ch" }}
                variant="outlined"
                fullWidth
            >
                <InputLabel htmlFor="outlined-adornment-password">
                    Search Lyrics
                </InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type="text"
                    value={query}
                    onChange={handleChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                edge="end"
                                type="submit"
                            >
                                <Search />
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>
        </form>
    )
}

export default SearchBox
