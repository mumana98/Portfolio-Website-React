import React, { useEffect } from 'react'
import skrollr from 'skrollr'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'

const SectionBody = () => {
    useEffect(() => {
        let s = skrollr.init({          
            mobileCheck: function() {
                return false;
            },
            forceHeight: false
        })
    },[])

    return(
        <div id="skrollr-body" class="shadow">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
        </div>
    )
}

export default SectionBody