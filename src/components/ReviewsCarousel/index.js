import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    isActiveReview: 0,
  }

  onclickLeft = () => {
    const {isActiveReview} = this.state
    // const {reviewsList} = this.props
    if (isActiveReview > 0) {
      this.setState(prevState => ({
        isActiveReview: prevState.isActiveReview - 1,
      }))
    }
  }

  onclickRight = () => {
    const {isActiveReview} = this.state
    const {reviewsList} = this.props
    if (isActiveReview < reviewsList.length - 1) {
      this.setState(prevState => ({
        isActiveReview: prevState.isActiveReview + 1,
      }))
    }
  }

  getCurrentReview = currentReview => {
    // const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = currentReview
    return (
      <div className="review-detail">
        <img src={imgUrl} alt={username} />
        <p className="heading1">{username}</p>
        <p className="discription">{companyName}</p>
        <p className="discription1">{description}</p>
      </div>
    )
  }

  render() {
    const {isActiveReview} = this.state
    const {reviewsList} = this.props
    const currentReview = reviewsList[isActiveReview]

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="review-container">
          <button
            type="button"
            onClick={this.onclickLeft}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.getCurrentReview(currentReview)}
          <button
            type="button"
            onClick={this.onclickRight}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
