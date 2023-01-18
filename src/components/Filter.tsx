import { forwardRef, useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"

import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import DialogTitle from "@mui/material/DialogTitle"
import Slide from "@mui/material/Slide"
import TextField from "@mui/material/TextField"

const Transition = forwardRef(function Transition(props, ref) {
    // @ts-ignore
    return <Slide direction="up" ref={ref} {...props} />
})

export default function Filter({ open, handleClose }: any) {
    const [searchParams, setSearchParams] = useSearchParams()
    const [filters, setFIlters] = useState<any>({})

    const handleSearch = () => {
        setSearchParams({ ...filters, filter: true })
        handleClose()
    }

    const handleChange = (e: any) => {
        setFIlters((filters: any) => {
            const _filters = { ...filters }
            _filters[e.target.name] = e.target.checked
            return _filters
        })
    }

    const handleTextChange = (e: any) => {
        setFIlters((filters: any) => {
            const _filters = { ...filters }
            _filters[e.target.name] = e.target.value
            return _filters
        })
    }

    const handleClearFilter = () => {
        setSearchParams({ query: filters.query })
        handleClose()
    }

    useEffect(() => {
        if (!open) return
        setFIlters(Object.fromEntries([...searchParams]))
    }, [open])

    return (
        <Dialog
            open={open}
            // @ts-ignore
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>Advanced Search</DialogTitle>
            <DialogContent>
                <TextField
                    fullWidth
                    sx={{ mt: 2 }}
                    id="outlined-basic"
                    label="Search name"
                    variant="outlined"
                    value={filters.query || ""}
                    name="query"
                    onChange={handleTextChange}
                />
                <TextField
                    fullWidth
                    sx={{ mt: 2 }}
                    id="outlined-metaphor"
                    label="Metaphor"
                    variant="outlined"
                    value={filters.metaphor || ""}
                    name="metaphor"
                    onChange={handleTextChange}
                />
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={!!filters.year}
                                name="year"
                                onChange={handleChange}
                            />
                        }
                        label="Year"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={!!filters.album}
                                name="album"
                                onChange={handleChange}
                            />
                        }
                        label="Album"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={!!filters.song_name}
                                name="song_name"
                                onChange={handleChange}
                            />
                        }
                        label="Song Name"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={!!filters.lyricist}
                                name="lyricist"
                                onChange={handleChange}
                            />
                        }
                        label="Lyricist"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={!!filters.singers}
                                name="singers"
                                onChange={handleChange}
                            />
                        }
                        label="Singers"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={!!filters.composer}
                                name="composer"
                                onChange={handleChange}
                            />
                        }
                        label="Composer"
                    />
                </FormGroup>
                <Button
                    variant="outlined"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={handleClearFilter}
                >
                    Clear filter
                </Button>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSearch}>Search</Button>
            </DialogActions>
        </Dialog>
    )
}
