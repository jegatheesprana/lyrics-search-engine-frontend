import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"

function Sidebar(props: any) {
    const [meta, setMeta] = useState<any>({ years: [], singers: [] })

    useEffect(() => {
        const controller = new AbortController()
        fetch("http://127.0.0.1:5000/unique", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                field: "year",
            }),
            signal: controller.signal,
        })
            .then((res) => res.json())
            .then((data: any) => {
                const _meta = { ...meta }
                _meta.years = data
                setMeta(_meta)
            })

        fetch("http://127.0.0.1:5000/unique", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                field: "singers",
            }),
            signal: controller.signal,
        })
            .then((res) => res.json())
            .then((data: any) => {
                const _meta = { ...meta }
                _meta.singers = data
                setMeta(_meta)
            })

        return () => {
            controller.abort()
        }
    }, [])

    return (
        <>
            <Paper elevation={0} sx={{ p: 2, bgcolor: "grey.200" }}>
                <Typography variant="h6" gutterBottom>
                    Filter
                </Typography>
                <Typography>Filter by year</Typography>
            </Paper>
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Year
            </Typography>
            {meta.years.map((year: any, id: number) => (
                <Link
                    to={`?year=${year.key_as_string}`}
                    key={id}
                    style={{ display: "block" }}
                >
                    {year.key_as_string} ({year.doc_count})
                </Link>
            ))}

            {/* <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Singers
            </Typography>
            {meta.singers.map((network: any) => (
                <Link
                    display="block"
                    variant="body1"
                    href="#"
                    key={network.name}
                    sx={{ mb: 0.5 }}
                >
                    <Stack direction="row" spacing={1} alignItems="center">
                        <network.icon />
                        <span>{network.name}</span>
                    </Stack>
                </Link>
            ))} */}
        </>
    )
}

export default Sidebar
