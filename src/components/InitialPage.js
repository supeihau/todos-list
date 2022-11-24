import React from 'react'

const InitialPage = (props) => {

    const { setCurrentPage } = props;

    return (
        <div className="initial-page">
            <div className="img">
                <img src="https://i.imgur.com/7g5Szro.png"></img>
            </div>
            <div className="initial-page-btn">
                <button className="button-plus" onClick={() => setCurrentPage('From')}>
                    <i className="fa fa-plus-circle"></i>
                </button>
            </div>
        </div>
    )
}

export default InitialPage