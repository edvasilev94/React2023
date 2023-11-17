import "./create.css"

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext";
import * as tracksService from "../../services/tracksService"


export default function Create() {

    const { user } = useAuthContext();
    const navigate = useNavigate();
    const [error, setError] = useState({ message: null });

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let name = formData.get("name");
        let trackLength = formData.get("trackLength");
        let duration = formData.get("duration");
        let img = formData.get("img");
        let difficulty = formData.get("difficulty");
        let mountain = formData.get("mauntain");
        let description = formData.get("description");


        if (name === ""
            || trackLength === ""
            || duration === ""
            || img === ""
            || difficulty === ""
            || mountain === ""
            || description === "") {
            setError(state => ({
                ...state,
                message: "All fileds are required!"
            }))

        } else {
            tracksService.create({
                name,
                trackLength,
                duration,
                img,
                difficulty,
                mountain,
                description
            }, user.accessToken)
                .then(x => {
                    navigate("/tracks");
                })
        }
    }

    return (
        <div className="createSection container-xxl wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="booking p-5 createBooking">
                    <div className="row g-5 align-items-center">
                        <div className="col-md-6">
                            <h1 className="text-white mb-4">Create a track</h1>
                            <form onSubmit={onSubmitHandler}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control bg-transparent" name="name" id="name" placeholder="Track Name" />
                                            <label htmlFor="name">Track Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="number" className="form-control bg-transparent" name="trackLength" id="trackLength" placeholder="Length in kilometers" />
                                            <label htmlFor="trackLength">Length in kilometers</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating date" id="date3" data-target-input="nearest">
                                            <input type="number" className="form-control bg-transparent" name="duration" id="duration" placeholder="Track duration in hours" data-target="duration" data-toggle="duration" />
                                            <label htmlFor="duration">Track duration in hours</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating date" id="date3" data-target-input="nearest">
                                            <input type="text" className="form-control bg-transparent" name="difficulty" id="difficulty"  placeholder="Easy, Medium, Hard" />
                                            <label htmlFor="difficulty">Difficulty</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating date" id="date3" data-target-input="nearest">
                                            <input type="text" className="form-control bg-transparent datetimepicker-input" name="img" id="img" placeholder="Image URL" data-target="img" data-toggle="img" />
                                            <label htmlFor="imageUrl">Image URL</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating date" id="date3" data-target-input="nearest">
                                            <input type="text" className="form-control bg-transparent datetimepicker-input" name="mauntain" id="mauntain" placeholder="Mauntain" data-target="mauntain" data-toggle="mauntain" />
                                            <label htmlFor="mauntain">Mauntain</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control bg-transparent" name="description" placeholder="Describe the track" id="description" style={{ height: "100px" }}></textarea>
                                            <label htmlFor="message">Describe the track</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-outline-light w-100 py-3" type="submit">Create Track</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}