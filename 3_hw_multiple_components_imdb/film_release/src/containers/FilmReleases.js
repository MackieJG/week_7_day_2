import React, {useState} from 'react';
import FilmList from '../components/FilmList';



const FilmReleases = () => {

    const [films, setFilms] = useState([
        {
            id: 1,
            title: 'Parasite',
            url: 'https://www.imdb.com/title/tt6751668/?ref_=fn_al_tt_1'
        },
        {
            id: 2,
            title: 'Billy Elliot',
            url: 'https://www.imdb.com/title/tt0249462/?ref_=ttls_li_tt'
        },
        {
            id: 3,
            title: 'Dr Strangelove or: How I learned to Stop worrying and love the Bomb',
            url: 'https://www.imdb.com/title/tt0057012/?ref_=fn_al_tt_1'
        },
        {
            id: 4,
            title: 'Fahrenheit 9/11',
            url: 'https://www.imdb.com/title/tt0361596/?ref_=nv_sr_srsg_5'
        },
        {
            id: 5,
            title: 'Nae Parasan',
            url: 'https://www.imdb.com/title/tt4489624/?ref_=fn_al_tt_2'
        }
    ]);

    return (
        <div class="FilmListCss">
            <FilmList films={films}></FilmList>
            <a href='https://www.imdb.com/calendar/?region=gb'>Future Film Releases >></a>
        </div>
    );


    }

    export default FilmReleases;

