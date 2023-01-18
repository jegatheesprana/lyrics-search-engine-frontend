import Box from "@mui/material/Box"
import SearchBox from "./SearchBox"
import SearchResultItem from "./SearchResultItem"

const SeachResults = ({ results = [] }: any) => {
    return (
        <>
            <Box
                sx={{
                    width: "100vw",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <SearchBox />
            </Box>
            <Box p={2}>
                {results.map((result: any, id: number) => (
                    <SearchResultItem result={result} key={id} />
                ))}
            </Box>
        </>
    )
}

export default SeachResults
