import {connect} from "react-redux";

import React, {useEffect, useState} from 'react'

import {Jutsu} from "react-jutsu";

const VideoCalls = (props) => {
    const [room, setRoom] = useState( props.match.params.room)
    const [name, setName] = useState(props.match.params.fullName)
    const [password, setPassword] = useState(props.match.params.password)


    return (
        <div style={{marginTop:"5em"}}>
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


        </div>
    );
}

const mapDispatchToProps=dispatch=>{
    return {}

}
export default connect(mapDispatchToProps)(VideoCalls)