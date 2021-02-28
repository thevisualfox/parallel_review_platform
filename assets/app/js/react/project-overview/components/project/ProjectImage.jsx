/* Packages */
import React from "react";

export default function ProjectImage({ projectImages }) {
    /* Render */
    return projectImages.slice(0, 1).map(({ image, title }, imageIndex) => (
        <div key={imageIndex} className="card__image has-overlay m-2">
            <img className="card-img-top" src={image} srcSet={`${image} 2x`} alt={title} />
        </div>
    ));
}
