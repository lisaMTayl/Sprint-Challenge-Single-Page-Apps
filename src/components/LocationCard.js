import React from 'react'
import {Card, Image} from "semantic-ui-react";

export default function LocationCard (props) {
  console.log(props);
  return (
    <Card>
      <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Description>
        {props.type} - {props.dimension}
      </Card.Description>
    </Card.Content>
    <Card.Content>
      <div className="ui bottom right attached label">Residents: {props.residents.length}</div>
</Card.Content>
    </Card>

  )
}
