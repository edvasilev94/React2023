import "./trackDetails.css"


import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as trackService from "../../services/tracksService";


export default function TrackDetails() {

    const { trackId } = useParams();

    const [track, setTrack] = useState([]);

    useEffect(() => {
		trackService.getOne(trackId)
			.then(x => {
				setTrack(x);
			})
			.catch(err => {
				console.log(err);
			})

	}, [trackId]);






    return (
        <div className="trackDetailsContainer container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{minHeight: "400px"}}>
                        <div className="position-relative h-100">
                            <img className="detailsImage img-fluid position-absolute w-100 h-100" src={track.img} alt="" style={{objectFit: "cover"}} />
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                        <h6 className="section-title bg-white text-start text-primary pe-3">About The Track</h6>
                        <h1 className="mb-4">{track.name}</h1>
                        <p className="desc-p mb-4">{track.description}</p>
                        <div className="row gy-2 gx-4 mb-4">
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>The track is located in {track.mountain} mountain</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Length: {track.length} KM</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Duration: {track.duration} Hours</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Difficulty: {track.difficulty}</p>
                            </div>
                            {/* <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>150 Premium City Tours</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>24/7 Service</p>
                            </div> */}
                        </div>
                        <a className="btn btn-primary py-3 px-5 mt-2" href="">FAVOURITE <i class="fa-solid fa-star star"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
};