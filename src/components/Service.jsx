import React from 'react'

function Service() {
    return (
        <div className="servicelist">

            <div>
                <h2>HTML</h2>
                <div className="progress">
                    <div className="progress-bar progress-bar-animated progress-bar-striped" style={{ width: '40%' }}></div>
                </div>
            </div>
            <div>
                <h2>CSS</h2>
                <div className="progress">
                    <div className="progress-bar progress-bar-animated progress-bar-striped bg-info" style={{ width: '50%' }}></div>
                </div>
            </div>

            <div>
                <h2>JAVASCRIPT</h2>
                <div className="progress">
                    <div className="progress-bar progress-bar-animated progress-bar-striped bg-success" style={{ width: '60%' }}></div>
                </div>
            </div>

            <div>
                <h2>JQUERY</h2>
                <div className="progress">
                    <div className="progress-bar progress-bar-animated progress-bar-striped bg-warning" style={{ width: '50%' }}></div>
                </div>
            </div>

            <div>
                <h2>BOOTSTRAP</h2>
                <div className="progress">
                    <div className="progress-bar progress-bar-animated progress-bar-striped bg-danger" style={{ width: '70%' }}></div>
                </div>
            </div>

            <div>
                <h2>REACT JS</h2>
                <div className="progress">
                    <div className="progress-bar progress-bar-animated progress-bar-striped bg-dark" style={{ width: '45%' }}></div>
                </div>
            </div>

            <div>
                <h2>PYTHON</h2>
                <div className="progress">
                    <div className="progress-bar progress-bar-animated progress-bar-striped bg-blue" style={{ width: '75%' }}></div>
                </div>
            </div>


            <div>
                <h2>MACHINE LEARNING</h2>
                <div className="progress">
                    <div className="progress-bar progress-bar-animated progress-bar-striped bg-warning" style={{ width: '80%' }}></div>
                </div>
            </div>
        </div>
    )
}

export default Service
