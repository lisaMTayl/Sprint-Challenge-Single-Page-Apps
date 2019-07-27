import React from 'react'
import {Card, Image} from "semantic-ui-react";

export default function LocationCard (props) {
  console.log(props);
  return (
    <Card>
      <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>{props.type}</Card.Meta>
      <Card.Description>
        {props.dimension}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
  {`Residents: ${props.residents.length}`}
</Card.Content>
    </Card>

  )
}
