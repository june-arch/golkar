import React, { useEffect, useState } from 'react'
import ReactPlayer from "react-player/youtube";
import { VideoItem } from "../lib/types"

type Props = {
    payload : VideoItem;
}

export default function Video ({payload} : Props){
    return(
        <div className='flex m-0.5 w-full'>
            <ReactPlayer url={payload.path} />
        </div>
    )
}
