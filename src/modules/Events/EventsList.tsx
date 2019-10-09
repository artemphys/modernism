import React, { Component } from "react";
import { EventCard } from "./EventCard";

interface Props {
  data: any;
}

export class EventsList extends Component<Props> {
  render() {
    const { data } = this.props;
    return (
      <div>
        {data.map((item: any) => <EventCard key={item.id} item={item} />)}
      </div>
    );
  }
}
