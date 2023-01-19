import Box from "@mui/material/Box"
import SearchBox from "./SearchBox"
import Container from "@mui/material/Container"

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
            <Container maxWidth="md">
                <SearchBox />
            </Container>
        </Box>
    )
}

export default EmptyQuery
