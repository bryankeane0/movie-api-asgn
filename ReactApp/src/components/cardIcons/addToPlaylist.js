import React, {useContext} from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

const AddToMustWatchIcon = ({movie}) => {
    const context = useContext(MoviesContext);
    const handleAddMustWatch = (e) => {
        e.preventDefault();
        context.addToMustWatch(movie);
    };
    return (
        <IconButton aria-label="Add to WatchList" onClick={handleAddMustWatch}>
            <PlaylistAddIcon color="primary" fontSize="large"/>
        </IconButton>
    );
};
 
export default AddToMustWatchIcon;