import { Link, useLocation } from "react-router-dom";
import { ItemStyle, ListStyle, WrapCardStyle } from "./MoviesList.styled";

const MoviesList = ({ films }) => {
    const location = useLocation();
    
    return <ListStyle>
        {films.map(({ id, title, overview, poster_path }) =>
            <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
                <ItemStyle>
                    <img src={poster_path ?
                        `http://image.tmdb.org/t/p/w154${poster_path}` :
                        'https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg'}
                        alt={title} width="200" height="300" />
                    <WrapCardStyle>
                        <h3>{title}</h3>
                        <p>{overview}</p>
                    </WrapCardStyle>
                </ItemStyle>
            </Link>
        )}
    </ListStyle>
};

export default MoviesList;