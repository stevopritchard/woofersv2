import React from 'react'
import ImageGrid from '../../components/imagegrid/ImageGrid'
import './Gallery.css'

function Gallery() {
    return(
        <div className="container">
          <div className="preScrollable" id="contGallery">
            <ImageGrid />
          </div>
        </div>
    )
}

export default Gallery

