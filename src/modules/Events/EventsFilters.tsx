import React, { Component } from "react";
import { Typography, Checkbox } from "antd";

interface Props {
  onChange: any;
}

const { Title } = Typography;

export class EventsFilters extends Component<Props> {
  render() {
    const { onChange } = this.props;

    return (
      <div>
        <Title>select filters</Title>
        <div style={{ width: "300px" }}>
          <div>
            <Checkbox name="isPast" onChange={onChange} />
            Past
          </div>
          <div>
            <Checkbox name="isCurrent" onChange={onChange} />
            Current
          </div>
          <div>
            <Checkbox name="isFuture" onChange={onChange} />
            Future
          </div>
        </div>
      </div>
    );
  }
}
