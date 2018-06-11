import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";

class IconButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCardView: false,
    }
}
  handleClickOutside = () => {
    console.log('onClickOutside() method called')
  }

  render() {
    return (
      <a onClick={()=>this.setState({ isCardView: !this.state.isCardView })}>
        { this.state.isCardView
          ? <i class="far fa-folder-open"></i>
          : <i class="far fa-folder"></i>
        }
      </a>
    );
  }
}

export default onClickOutside(IconButton);
