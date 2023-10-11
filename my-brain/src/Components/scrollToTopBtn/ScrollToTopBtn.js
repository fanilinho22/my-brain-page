import React, { Component } from 'react';
import './scrollToTopBtnStyles.css';

class ScrollToTopBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrollVisible: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 100) {
      this.setState({ isScrollVisible: true });
    } else {
      this.setState({ isScrollVisible: false });
    }
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  render() {
    const { isScrollVisible } = this.state;

    return (
      <div className={`scroll-to-top ${isScrollVisible ? 'visible' : 'hidden'}`}>
        <button onClick={this.scrollToTop} id='btn'></button>
      </div>
    );
  }
}

export default ScrollToTopBtn;
