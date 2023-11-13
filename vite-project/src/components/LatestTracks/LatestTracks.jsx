import { useEffect, useState } from "react";
import CardTemplate from "../CardTemplate/CartTemplate";

import * as trackService from "../../services/tracksService";


export default function LatestTracks() {


    let [tracks, setTracks] = useState([]);

    useEffect(() => {
        trackService.getAll()
            .then(result => {

                setTracks(result);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);


    tracks - tracks.reverse();
	tracks = tracks.slice(0, 3);


    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Tracks</h6>
                    <h1 className="mb-5">Latest Tracks</h1>
                </div>
                <div className="row g-4">
                    {tracks.map(x => <CardTemplate key={x._id} track={x} />)}
                </div>
            </div>
        </div>
    )
}