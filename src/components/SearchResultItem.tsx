import { useState } from "react"
import { Link } from "react-router-dom"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"

export default function SearchResultItem({ result: { _source: result } }: any) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                    {result.year}
                </Typography>
                <Link to={`/results/${result.id}`}>
                    <Typography variant="h5" component="div">
                        {result.song_name}
                    </Typography>
                </Link>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {result.album}
                </Typography>
                <Typography variant="body2">{result.lyrics}</Typography>

                <Typography variant="body1">
                    <b>Year</b> {result.year}
                </Typography>
                <Typography variant="body1">
                    <b>Album</b> {result.album}
                </Typography>
                <Typography variant="body1">
                    <b>Song Name</b> {result.song_name}
                </Typography>
                <Typography variant="body1">
                    <b>Lyricist</b> {result.lyricist}
                </Typography>
                <Typography variant="body1">
                    <b>Singers</b> {result.singers}
                </Typography>
                <Typography variant="body1">
                    <b>Composer</b> {result.composer}
                </Typography>
                <Stack sx={{ mt: 2 }} spacing={2}>
                    {result.metaphors.map((metaphor: any, id: any) => (
                        <Card key={id}>
                            <Typography variant="body1">
                                <b>Metaphor</b> {metaphor.metaphor}
                            </Typography>
                            <Typography variant="body1">
                                <b>Target Domain</b> {metaphor.target}
                            </Typography>
                            <Typography variant="body1">
                                <b>Source Domain</b> {metaphor.source}
                            </Typography>
                        </Card>
                    ))}
                </Stack>
            </CardContent>
            <CardActions>
                <Button size="small">View</Button>
            </CardActions>
        </Card>
    )
}
