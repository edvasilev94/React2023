import './mytracks.css'

import { useEffect, useState } from "react";
import CardTemplate from "../CardTemplate/CartTemplate";
import { useAuthContext } from "../../contexts/authContext";


import * as tracksService from "../../services/tracksService";


export default function MyTracks() {

    const { user } = useAuthContext();
    const [tracks, settracks] = useState([]);

    useEffect(() => {
        tracksService.getAll()
            .then(result => {
                settracks(result);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);


    return (
        <div className="myTracksContainer container-xxl py-5 ">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Tracks</h6>
                    <h1 className="mb-5">Tracks Created By Me</h1>
                </div>
                <div className='row g-4'>
                {tracks
                    .filter(x => x._ownerId == user._id)
                    .map(x => <CardTemplate key={x._id} track={x} />)}
                </div>
            </div>
        </div>
    )
};