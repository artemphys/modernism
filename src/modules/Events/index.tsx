import React, { Component } from "react";
import { MainTabs } from "../MainTabs";
import { RouteComponentProps } from "react-router";
import { EventsFilters } from "./EventsFilters";
import { EventsList } from "./EventsList";
import { EVENTS_DATA } from "../../mock";

interface Props extends RouteComponentProps {
  history: any;
}
interface Props {
  data: any;
}

export class EventsPage extends Component<Props> {
  state = {
    filters: {},
    filteredData: EVENTS_DATA,
    search: ""
  };

  onFilterChange = (field: any, value: any) => {
    const filters = { ...this.state.filters, [field]: value };
    const filteredData = Object.keys(filters).reduce(
      (prevValue: any, filter) => {
        return this.getFilteredData(filter, prevValue);
      },
      EVENTS_DATA
    );

    this.setState({
      filters,
      filteredData
    });
  };

  getFilteredData = (filter: any, data: any) => {
    const nowDate: any = new Date();
    let result = [];

    switch (filter) {
      case "isPast":
        result = data.filter(
          (item: any) => new Date(item.eventDates[1]) < nowDate
        );
        break;
      case "isCurrent":
        result = data.filter(
          (item: any) =>
            new Date(item.eventDates[0]) < nowDate &&
            nowDate < new Date(item.eventDates[1])
        );
        break;
      case "isFuture":
        result = data.filter(
          (item: any) => new Date(item.eventDates[0]) > nowDate
        );
        break;
      case "isCharge":
        result = data.filter((item: any) => item.isCharge === true);
        break;
      case "isPaid":
        result = data.filter((item: any) => item.isCharge === false);
        break;
      default:
        result = data;
    }
    return result;
  };

  getCheckboxValue = (obj: any, field: any) => {
    for (let key in obj) {
      if (key === field) return obj[key];
    }
  };

  resetFilters = () => {
    this.setState({
      filteredData: EVENTS_DATA,
      filters: {}
    });
  };

  onSearchChange = (value: any) => {
    let filtered = EVENTS_DATA.filter(
      (item: any) =>
        item.museumAdress.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
        item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    );

    this.setState({
      search: value,
      filteredData: filtered
    });
  };

  resetSearch = () => {
    this.setState({
      filteredData: EVENTS_DATA,
      search: ""
    });
  };

  render() {
    const { filteredData } = this.state;

    return (
      <div>
        <MainTabs history={this.props.history} />
        <div style={{ display: "flex", width: "900px" }}>
          <EventsFilters
            onChange={this.onFilterChange}
            filters={this.state.filters}
            getCheckedValue={this.getCheckboxValue}
            resetFilters={this.resetFilters}
            search={this.state.search}
            onSearchChange={this.onSearchChange}
            resetSearch={this.resetSearch}
          />
          <EventsList data={filteredData} search={this.state.search} />
        </div>
      </div>
    );
  }
}
