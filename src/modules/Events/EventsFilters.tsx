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
        <div style={{ width: "300px" }} className="filter-block">
          <div>
            <Checkbox
              name="isPast"
              onChange={e => onChange("isPast", e.target.checked)}
            />
            Past
          </div>
          <div>
            <Checkbox
              name="isCurrent"
              onChange={e => onChange("isCurrent", e.target.checked)}
            />
            Current
          </div>
          <div>
            <Checkbox
              name="isFuture"
              onChange={e => onChange("isFuture", e.target.checked)}
            />
            Future
          </div>
        </div>
        <div style={{ width: "300px" }} className="filter-block">
          <div>
            <Checkbox
              name="isCharge"
              onChange={e => onChange("isCharge", e.target.checked)}
            />
            Free
          </div>
          <div>
            <Checkbox
              name="isPaid"
              onChange={e => onChange("isPaid", e.target.checked)}
            />
            Paid
          </div>
        </div>
      </div>
    );
  }
}
