import React from 'react'
import Tippy from '@tippy.js/react'

function Popover(props) {
    return (
        <Tippy
            animateFill={false}
            interactive={true}
            interactiveBorder={10}
            animation="scale"
            theme="light-border"
            trigger="click"
            {...props}
        />
    )
}

export default Popover