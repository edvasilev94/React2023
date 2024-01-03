import "./trackDetails.css"


import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import * as tracksService from "../../services/tracksService";
import { useAuthContext } from "../../contexts/authContext";


export default function TrackDetails() {

    const { trackId } = useParams();
    const navigate = useNavigate();
    const { user } = useAuthContext();

    const [track, setTrack] = useState([]);
    const [userExists, setUserExists] = useState(false);


    useEffect(() => {
        tracksService.getOne(trackId)
            .then(x => {
                setTrack(x);
            })
            .catch(err => {
                console.log(err);
                alert('Oops! Something went wrong on our end. Please try again later.');
                navigate("/");
            })

    }, [trackId]);



    useEffect(() => {
        tracksService.getAllLikes(trackId)
        .then(likesArr => {
            if(likesArr.some(obj => Object.values(obj).includes(user._id))){
                setUserExists(true);
            }

            if(likesArr.length === 0){
                setTrack(state => ({...state, likes: 0}))
            } else {
                setTrack(state => ({...state, likes: likesArr.length}))
            }
        })
    }, [track])

    const deleteHandler = (e) => {
        e.preventDefault();

        tracksService.del(trackId, user.accessToken)
            .then(x => {
                navigate("/mytracks")
            })
            .catch(err => {
                console.log(err);
                alert('Oops! Something went wrong on our end. Please try again later.');
                navigate("/mytracks");
            })
    }


    const likeButtonClick = () => {
        

        tracksService.like(user._id, trackId, user.accessToken)
            .then((result) => {
                if(result._ownerId === user._id){
                    setUserExists(true)
                }
                setTrack(state => ({ ...state, likes: state.likes + 1 }))
            })
            
    }


    let ownerButtons = (
        <div className="ownerButtons">
            <Link to={`/track/edit/${track._id}`} className="editButton btn btn-primary py-3 px-5 mt-2" href="">Edit</Link>
            <Link to={`/track/delete/${track._id}`} className="deleteButton btn btn-primary py-3 px-5 mt-2" onClick={deleteHandler} href="">Delete</Link>
        </div>
    )

        let favButtonClasses = " btn btn-primary py-3 px-5 mt-2";

    let favButton = (
        <Link to={`#`} className={`${userExists ? 'disabledButton' : 'favButton'}${favButtonClasses}`} href="" onClick={likeButtonClick}><i className="fa-solid fa-heart"></i>Like</Link>
    )

    return (
        <div className="trackDetailsContainer container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: "400px" }}>
                        <div className="position-relative h-100">
                            <img className="detailsImage img-fluid position-absolute w-100 h-100" src={track.img} alt="" style={{ objectFit: "cover" }} />
                        </div>
                    </div>
                    <div className="infoPart col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                        <h6 className="section-title bg-white text-start text-primary pe-3">About The Track</h6>
                        <h1 className="mb-4">{track.name}</h1>
                        <p className="desc-p mb-4">{track.description}</p>
                        <div className="row gy-2 gx-4 mb-4">
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>The track is located in {track.mountain} mountain</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Length: {track.trackLength} KM</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Duration: {track.duration} Hours</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Difficulty: {track.difficulty}</p>
                            </div>
                        </div>
                        {
                            user._id === track._ownerId
                                ? ownerButtons
                                : null
                        }
                        {
                            user.email && user._id !== track._ownerId
                                ? favButton
                                : null
                        }
                        <div>
                            Likes: {track?.likes}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};