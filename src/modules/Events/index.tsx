import React, { Component } from "react";
import { MainTabs } from "../MainTabs";
import { RouteComponentProps } from "react-router";
import { EventsFilters } from "./EventsFilters";
import { EventsList } from "./EventsList";
import { EVENTS_DATA } from "../../mock";

interface Props extends RouteComponentProps {
  history: any;
}

export class EventsPage extends Component<Props> {
  state = {
    isPast: false,
    isCurrent: false,
    isFuture: false
  };

  handlerEventChange = (event: any) => {
    const { name, checked } = event.target;
    this.setState({ [name]: checked });
  };

  getFilteredData = () => {
    const { isPast, isCurrent, isFuture } = this.state;
    let event1: any = [];
    let event2: any = [];
    let event3: any = [];
    const nowDate: any = new Date();

    if (isPast) {
      event1 = EVENTS_DATA.filter(
        (item: any) => new Date(item.eventDates[1]) < nowDate
      );
    }
    if (isCurrent) {
      event2 = EVENTS_DATA.filter(
        (item: any) =>
          new Date(item.eventDates[0]) < nowDate &&
          nowDate < new Date(item.eventDates[1])
      );
    }
    if (isFuture) {
      event3 = EVENTS_DATA.filter(
        (item: any) => new Date(item.eventDates[0]) > nowDate
      );
    }
    return [...event1, ...event2, ...event3];
  };

  render() {
    return (
      <div>
        <MainTabs history={this.props.history} />
        <div style={{ display: "flex", width: "900px" }}>
          <EventsFilters onChange={this.handlerEventChange} />
          <EventsList data={this.getFilteredData()} />
        </div>
      </div>
    );
  }
}
