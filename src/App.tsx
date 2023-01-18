import { useSearchParams } from "react-router-dom"
import "./App.css"
import EmptyQuery from "./components/EmptyQuery"
import SeachResults from "./components/SearchResults"

function App() {
    const [searchParams] = useSearchParams()

    return (
        <>
            {searchParams.get("query") || searchParams.get("metaphor") ? (
                <SeachResults />
            ) : (
                <EmptyQuery />
            )}
        </>
    )
}

export default App
