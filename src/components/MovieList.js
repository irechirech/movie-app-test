import React from 'react'

export default function MovieList(props) {
    return (
        <div>
            {props.movies.map((movie, index) => (
                <div className='d-flex justify-content-start m3'>
                    <img src={movie.poster} alt="poster" ></img>
                </div>))}
        </div>
    )
}
