import Box from "@mui/material/Box"
import SearchBox from "./SearchBox"

const EmptyQuery = () => {
    return (
        <Box
            sx={{
                height: "100vh",
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <SearchBox />
        </Box>
    )
}

export default EmptyQuery
