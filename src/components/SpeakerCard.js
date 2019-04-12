import React from "react"

export const SpeakerCard = ({speaker_name, company, role, headshot}) => (
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
        <div className="speakers xs-mb30">
            <div className="spk-img">
                <img className="img-fluid" alt="trainer-img" src={headshot}/>
                    <ul>
                        <li><a ><i className="fa fa-twitter" /></a></li>
                        <li><a ><i className="fa fa-linkedin" /></a></li>
                    </ul>
                </div>
            <div className="spk-info">
                <a  rel="noreferrer noopener" target="_blank">
                    <h3>{speaker_name}</h3>
                </a>
                <p>{role}</p>
                <h6>{company}</h6>
            </div>
        </div>
    </div>
)
