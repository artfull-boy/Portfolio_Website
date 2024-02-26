import React, {useEffect, useRef} from 'react'
import { gsap } from "gsap-trial";
import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin";
import './LoadingPage.css'
gsap.registerPlugin(DrawSVGPlugin);

function LoadingPage() {
    return (
     <>Hello</>
    )
}

export default LoadingPage