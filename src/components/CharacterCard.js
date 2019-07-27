import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Card, Icon, Image } from 'semantic-ui-react'


export default function CharacterCard (props) {
  console.log(props);


  return (
    <Card>
      <Card.Content className="content">
    <Image src={props.characters.image} wrapped ui={false} />
        <a className="header">{props.characters.name}</a>
        <div className="meta">
          <span className="date">${props.characters.status}</span>
        </div>
        <div className="description">
          <span className="description">Location: {props.characters.location.name}</span>
          <span className="description">Origin: {props.characters.origin.name}</span>
        </div>
      <div className="extra content">
        <a>
          <i className="episodes icon">Episodes</i>
        </a>
      </div>
      </Card.Content>
      </Card>

  )
}


