import React from "react"

export const SpeakerCard = ({name, title, company, imageSource, twitter, linkedin}) => (
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
        <div className="speakers xs-mb30">
            <div className="spk-img">
                <img className="img-fluid" src={imageSource} alt="trainer-img" />
                    <ul>
                        <li><a href={twitter}><i className="fa fa-twitter" /></a></li>
                        <li><a href={linkedin}><i className="fa fa-linkedin" /></a></li>
                    </ul>
                </div>
            <div className="spk-info">
                <a href={twitter} rel="noreferrer noopener" target="_blank">
                    <h3>{name}</h3>
                </a>
                <p>{title}</p>
                <h6>{company}</h6>
            </div>
        </div>
    </div>
)