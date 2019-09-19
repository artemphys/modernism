import React, { Component } from "react";
import { EventCard } from "./EventCard";

interface Props {
  data: any;
}

export class EventsList extends Component<Props> {
  render() {
    return (
      <div>
        {this.props.data.map((item: any) => (
          <EventCard key={item.id} item={item} />
        ))}
      </div>
    );
  }
}
