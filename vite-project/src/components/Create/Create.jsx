import "./create.css"

export default function Create () {
    return(
        <div className="createSection container-xxl wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="createBooking booking p-5">
                <div className="row g-5 align-items-center">
                    <div className="col-md-6">
                        <h1 className="text-white mb-4">Create a track</h1>
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control bg-transparent" id="trackName" placeholder="Track Name" />
                                        <label htmlFor="trackName">Track Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="trackLength" className="form-control bg-transparent" id="trackLength" placeholder="Length in kilometers" />
                                        <label htmlFor="trackLength">Length in kilometers</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating date" id="date3" data-target-input="nearest">
                                        <input type="text" className="form-control bg-transparent datetimepicker-input" id="trackDuration" placeholder="Track duration in hours" data-target="trackDuration" data-toggle="trackDuration" />
                                        <label htmlFor="trackDuration">Track duration in hours</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <select className="form-select bg-transparent" id="select1">
                                            <option value="1">Easy</option>
                                            <option value="2">Medium</option>
                                            <option value="3">Hard</option>
                                        </select>
                                        <label htmlFor="select1">Difficulty</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating date" id="date3" data-target-input="nearest">
                                        <input type="text" className="form-control bg-transparent datetimepicker-input" id="imgUrl" placeholder="Image URL" data-target="imgUrl" data-toggle="imgUrl" />
                                        <label htmlFor="imageUrl">Image URL</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating date" id="date3" data-target-input="nearest">
                                        <input type="text" className="form-control bg-transparent datetimepicker-input" id="mauntain" placeholder="Mauntain" data-target="mauntain" data-toggle="mauntain" />
                                        <label htmlFor="mauntain">Mauntain</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control bg-transparent" placeholder="Describe the track" id="message" style={{height: "100px"}}></textarea>
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