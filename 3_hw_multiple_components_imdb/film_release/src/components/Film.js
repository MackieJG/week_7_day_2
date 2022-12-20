import React from 'react';

const Film = ({title, url}) => {
    return (
        <div class='FilmListLi'>
            <li>
                <a href={url}>{title}</a>
            </li>
        </div>

    )
}

export default Film;