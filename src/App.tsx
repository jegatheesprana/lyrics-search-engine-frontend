import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import "./App.css"
import SearchBox from "./components/SearchBox"
import EmptyQuery from "./components/EmptyQuery"
import SeachResults from "./components/SearchResults"

function App() {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)

    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        if (!searchParams.get("query")) return
        setLoading(true)
        fetch("http://127.0.0.1:5000/search", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: searchParams.get("query"),
            }),
        })
            .then((res) => res.json())
            .then((data: any) => {
                setResults(data.hits)
                setLoading(false)
            })
    }, [searchParams])

    return (
        <>
            {searchParams.get("query") ? (
                <SeachResults results={results} />
            ) : (
                <EmptyQuery />
            )}
        </>
    )
}

export default App
