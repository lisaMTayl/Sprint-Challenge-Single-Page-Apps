import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";


export default function CharacterCard (props) {
  console.log(props);


  return (
    <Card className="ui card">
      <div className="image">
        <Image src={props.characters.image} wrapped ui={true}/>
      </div>
      <div className="content">
        <h2 className="header">{props.characters.name}</h2>
        <div className="meta">
          <span className="date">{props.characters.status}</span>
        </div>
        <div className="description">Location:  {props.characters.location.name}</div>
        <div className="description">Origin: {props.characters.origin.name}</div>
      </div>

      <div className="extra content">
        <div className="ui large transparent right icon">
          <Link to={props.characters.episodes}><i className="user icon">{props.characters.episodes}</i> Episodes</Link>
        </div>
      </div>
    </Card>
  )
}









