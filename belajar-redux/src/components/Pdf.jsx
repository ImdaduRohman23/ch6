import React from 'react'
import { Viewer } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'

const Pdf = () => {
    return (
        <div>
            <Viewer fileUrl='/sapa.pdf' />
        </div>
    )
}

export default Pdf
