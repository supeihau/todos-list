import React from 'react'

const InitialPage = (props) => {

    const { setCurrentPage } = props; //接

    return (
        <div className="initial-page">
            <div className="img">
                <img src="https://i.imgur.com/7g5Szro.png"></img>
            </div>
            <div className="initial-page-btn">
                {/* onClick事件發生時setCurrentPage 設置到Form頁面 */}
                <button className="button-plus" onClick={() => setCurrentPage('From')}>
                    <i className="fa fa-plus-circle"></i>
                </button>
            </div>
        </div>
    )
}

export default InitialPage