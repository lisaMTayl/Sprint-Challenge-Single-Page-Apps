import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Card, Icon, Image } from 'semantic-ui-react'


export default function CharacterCard (props) {
  return (
    <Card>
      <Card.Content className="content">
    <Image src={props.character.image} wrapped ui={false} />
        <a className="header">{props.character.name}</a>
        <div className="meta">
          <span className="date">${props.character.status}</span>
        </div>
        <div className="description">
          <span className="description">Location: {props.character.location}</span>
          <span className="description">Origin: {props.character.origin}</span>
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


