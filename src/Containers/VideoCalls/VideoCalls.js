import {connect} from "react-redux";

import React, {useEffect, useState} from 'react'

import {Jutsu} from "react-jutsu";

const VideoCalls = () => {
    const [room, setRoom] = useState('')
    const [name, setName] = useState('')
    const [call, setCall] = useState(false)
    const [password, setPassword] = useState('')

    const handleClick = event => {
        event.preventDefault()
        if (room && name) setCall(true)
    }
    return (
        <div style={{marginTop:"5em"}}>

            {call?
                <div style={{width:"10000px",marginLeft:"5em"}}>
                    <Jutsu
                        // jitsiContainerStyles={{width:"100%",height:"100%"}}
                        roomName={room}
                        displayName={name}
                        password={password}
                        onMeetingEnd={() => console.log('Meeting has ended')}
                        loadingComponent={<p>loading ...</p>}
                        errorComponent={<p>Oops, something went wrong</p>} />
                </div>

                 :
                <form>
                <input id='room' type='text' placeholder='Room' value={room} onChange={(e) => setRoom(e.target.value)} />
                <input id='name' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input id='password' type='text' placeholder='Password (optional)' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleClick} type='submit'>
                Start / Join
                </button>
                </form>
            }
        </div>
    );
}

const mapDispatchToProps=dispatch=>{
    return {}

}
export default connect(mapDispatchToProps)(VideoCalls)