import React, { Component } from "react";
import { Typography, Checkbox, Button, Input } from "antd";

interface Props {
  onChange: any;
  getCheckedValue: any;
  filters: any;
  resetFilters: any;
  handleSearch: any;
  resetSearch: any;
}

const { Title } = Typography;
const Search = Input.Search;

export class EventsFilters extends Component<Props> {
  render() {
    const {
      onChange,
      getCheckedValue,
      filters,
      resetFilters,
      handleSearch,
      resetSearch
    } = this.props;

    return (
      <div>
        <Title>Select filters</Title>
        <Search
          placeholder="Search"
          onSearch={handleSearch}
          style={{ width: 200, marginBottom: 20 }}
          onChange={resetSearch}
          allowClear
        />
        <Button onClick={resetFilters} className="filters__btn">
          Reset all filters
        </Button>
        <div style={{ width: "300px" }} className="filter-block">
          <div>
            <Checkbox
              name="isPast"
              onChange={e => onChange("isPast", e.target.checked, e)}
              checked={getCheckedValue(filters, "isPast")}
            />
            Past
          </div>
          <div>
            <Checkbox
              name="isCurrent"
              onChange={e => onChange("isCurrent", e.target.checked, e)}
              checked={getCheckedValue(filters, "isCurrent")}
            />
            Current
          </div>
          <div>
            <Checkbox
              name="isFuture"
              onChange={e => onChange("isFuture", e.target.checked)}
              checked={getCheckedValue(filters, "isFuture")}
            />
            Future
          </div>
        </div>
        <div style={{ width: "300px" }} className="filter-block">
          <div>
            <Checkbox
              name="isCharge"
              onChange={e => onChange("isCharge", e.target.checked)}
              checked={getCheckedValue(filters, "isCharge")}
            />
            Free
          </div>
          <div>
            <Checkbox
              name="isPaid"
              onChange={e => onChange("isPaid", e.target.checked)}
              checked={getCheckedValue(filters, "isPaid")}
            />
            Paid
          </div>
        </div>
      </div>
    );
  }
}
