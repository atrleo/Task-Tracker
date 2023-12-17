import React from 'react'


function Header({ title }) {
    return (
        <div className='d-flex flex-row'>
             <div className='mr-3'><h1><strong>Task Tracker</strong></h1></div>
            <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                <button onClick={()=>console.log('Clicked')} className='btn btn-success'>Add</button>
            </div>
        </div>

    )
}



export default Header

