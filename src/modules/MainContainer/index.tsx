import React, { Component, Fragment } from "react";
// import { withRouter } from "react-router";

import { Link } from "react-router-dom";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";
import { Layout, Breadcrumb } from "antd";

import logo from "../../logo.svg";
import "./App.css";

interface Props extends RouteConfigComponentProps {
  route: any;
  location: any;
}

export class App extends Component<Props> {
  get pathItems() {
    const pathItems = this.props.location.pathname.split("/");
    pathItems.splice(0, 1);
    return pathItems;
  }

  renderBreadcrumbs = () => {
    const items = this.pathItems;
    if (!items.length) {
      return null;
    }

    const links = items.map((el: any, i: number) => ({
      name: el,
      path: `/${items.slice(0, i + 1).join("/")}`
    }));

    return (
      <Fragment>
        {links.map((el: any) => (
          <Breadcrumb.Item key={el.name}>
            <Link to={el.path}>{el.name}</Link>
          </Breadcrumb.Item>
        ))}
      </Fragment>
    );
  };

  render() {
    const { route } = this.props;

    return (
      <Layout style={{ minHeight: "100vh" }}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {/*<Breadcrumb style={{ margin: "16px 0" }}>*/}
        {/*{this.renderBreadcrumbs()}*/}
        {/*</Breadcrumb>*/}
        <body>{renderRoutes(route.routes)}</body>
      </Layout>
    );
  }
}

// export default withRouter(App);
