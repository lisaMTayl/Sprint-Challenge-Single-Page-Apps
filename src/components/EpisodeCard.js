import React from 'react'
import { Card } from "semantic-ui-react";

export default function EpisodeCard (props) {
  console.log(props);
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Description>
          Air Date: {props.date}
        </Card.Description>
      </Card.Content>

    </Card>

  )
}
