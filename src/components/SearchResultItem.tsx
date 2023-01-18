import { useState } from "react"
import { Link } from "react-router-dom"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Collapse from "@mui/material/Collapse"

export default function SearchResultItem({
    result: { _source: result, _id },
}: any) {
    const [show, setShow] = useState(false)

    const handleClickToggle = () => {
        setShow(!show)
    }

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
                <Link to={`/results/${_id}`}>
                    <Typography variant="h5" component="div">
                        {result.song_name}
                    </Typography>
                </Link>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {result.album}
                </Typography>

                <Collapse in={show}>
                    <Box sx={{ mb: 1.5, textAlign: "center" }}>
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
                    </Box>
                </Collapse>

                <Typography variant="body2">
                    {show
                        ? result.lyrics.split("\n").map((line: string) => (
                              <>
                                  {line}
                                  <br />
                              </>
                          ))
                        : result.lyrics.slice(0, 200) + "..."}
                </Typography>

                <Collapse in={show}>
                    <Stack sx={{ mt: 2, mx: 4 }} spacing={2}>
                        {result.metaphors.map((metaphor: any, id: any) => (
                            <Card key={id} sx={{ p: 1 }}>
                                <Typography variant="body2">
                                    <b>Metaphor</b> {metaphor.metaphor}
                                </Typography>
                                <Typography variant="body2">
                                    <b>Target Domain</b> {metaphor.target}
                                </Typography>
                                <Typography variant="body2">
                                    <b>Source Domain</b> {metaphor.source}
                                </Typography>
                            </Card>
                        ))}
                    </Stack>
                </Collapse>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleClickToggle}>
                    {show ? "Show Less" : "Show More"}
                </Button>
            </CardActions>
        </Card>
    )
}
