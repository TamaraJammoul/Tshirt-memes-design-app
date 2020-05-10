import React, { Component } from "react";
import Display from "./../design/Display";
import Setting from "./../design/Setting";
import { storage } from "./../../config/fierbaseConfig";
import { savedesign } from "./../store/actions/savedesignAction";
import { connect } from "react-redux";
class Dashboard extends Component {
  state = {
    upperText: "this is upper text",
    lowerText: "this is lower text",
    tshirtColor: "black",
    memImg: "",
    url: "",
    textSize: 40,
    textColor: "",
  };
  handelUpperText = (e) => {
    this.setState({ upperText: e.target.value });
  };
  handelTextcolor = (e) => {
    this.setState({ textColor: e.target.value });
  };
  handelTextsize = (e) => {
    this.setState({ textSize: e.target.value });
  };
  handelowerText = (e) => {
    this.setState({ lowerText: e.target.value });
  };
  handelmemimg = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state change",
        (snapshot) => {
          console.log(snapshot);
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              this.setState({ url });
            });
        }
      );
    }
  };
  handelsavedesign = (e) => {
    if (e.target.id === "save") {
      this.props.createDesign(this.state);
    }
  };
  handelTshirtColor = (e) => {
    this.setState({ tshirtColor: e.target.id });
  };
  formatSize(e) {
    const size = this.state.textSize;
    return parseInt(size);
  }
  render() {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            {" "}
            <Display display={this.state} textFormat={this.formatSize()} />
          </div>
          <div className="col-lg-4">
            {" "}
            <Setting
              color={this.handelTshirtColor}
              handeUpperText={this.handelUpperText}
              handelowerText={this.handelowerText}
              handelmemimg={this.handelmemimg}
              handelTextsize={this.handelTextsize}
              handelTextcolor={this.handelTextcolor}
              save={this.handelsavedesign}
            />
          </div>
        </div>
      </div>
    );
  }
}
const dispatchmaptoprop = (dispatch) => {
  return {
    savedesign: (design) => {
      dispatch(savedesign(design));
    },
  };
};

export default connect(null, dispatchmaptoprop)(Dashboard);
