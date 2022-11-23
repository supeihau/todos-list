import React from 'react'

const InitialPage = (props) => {

    const { setCurrentPage } = props;

    return (
        <div className="initial-page">
            <div className="img">
                <img src="https://fakeimg.pl/200x200/"></img>
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