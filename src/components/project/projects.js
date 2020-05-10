import React, { Component } from "react";
import ProjectList from "./ProjectList";
import { connect } from "react-redux";
class projects extends Component {
  render() {
    const { designs } = this.props;
    return (
      <div className="container mb-5">
        <div className="row">
          <div className="projectList">
            {designs &&
              designs.map((design) => {
                return <ProjectList design={design} key={design.id} />;
              })}
          </div>
        </div>
      </div>
    );
  }
}
const mapstatetoprops = (state) => {
  return {
    design: state.design.designs,
  };
};
export default connect(mapstatetoprops)(projects);
