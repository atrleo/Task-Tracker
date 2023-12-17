import React from 'react'


function Header({ title, onShow, showAddTask }) {
    return (
        <div className='d-flex flex-row'>
            <div className='mr-3'><h1><strong>Task Tracker</strong></h1></div>
            <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                <button onClick={onShow} className={`btn ${showAddTask ? 'btn-danger' : 'btn-success'}`}>
                    {showAddTask ? 'CLOSE' : 'ADD'}
                </button>

            </div>
        </div>

    )
}



export default Header

