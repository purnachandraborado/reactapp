import React from 'react'

function Contact() {
    return (
        <contactform>
            <div className="contain">
                <div className="row">

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div style={{ width: '100%' }}><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.maps.ie/map-my-route/">Measure walking route distance</a></div>

                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 my-5">
                        <form action="/action_page.php">
                            <div class="form-group">
                                <label for="name">Name:</label>
                                <input type="text" class="form-control" placeholder="Enter name" id="name" />
                            </div>

                            <div class="form-group">
                                <label for="email">Email address:</label>
                                <input type="email" class="form-control" placeholder="Enter email" id="email" />
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone:</label>
                                <input type="text" class="form-control" placeholder="Enter phone" id="phone" />
                            </div>
                            <div class="form-group">
                                <label for="sel1">Select gender:</label>
                                <select class="form-control" id="sel1">
                                    <option value="" disabled>Choose</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>others</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="pwd">Password:</label>
                                <input type="password" class="form-control" placeholder="Enter password" id="pwd" />
                            </div>
                            <center><button type="submit" class="btn btn-primary">Submit</button></center>

                        </form>
                    </div>
                </div>
            </div>
        </contactform>
    )
}

export default Contact
