import React from 'react'
import { Card } from "semantic-ui-react";

export default function EpisodeCard (props) {
  console.log(props);
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>{props.episodes}</Card.Meta>
        <Card.Description>
          <span>{props.name}</span>
        </Card.Description>
        <Card.Description>
          {props.airDate}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>

      </Card.Content>
    </Card>

  )
}
