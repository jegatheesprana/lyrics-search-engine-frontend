import { Link } from "react-router-dom"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

const bull = (
    <Box
        component="span"
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
        •
    </Box>
)

export default function SearchResultItem({ result: { _source: result } }: any) {
    return (
        <Link to={`/results/${result.id}`}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                    >
                        {result.year}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {result.song_name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {result.album}
                    </Typography>
                    <Typography variant="body2">{result.lyrics}</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">View</Button>
                </CardActions>
            </Card>
        </Link>
    )
}
