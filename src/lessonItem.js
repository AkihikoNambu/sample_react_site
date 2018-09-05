import React, {Component} from 'react'


export default class LessonItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
    }
  }

  handleClickImage() {
    this.setState({isModalOpen: true})
  }

  handleClickClose() {
    this.setState({isModalOpen: false})
  }

  render() {
    const {lesson} = this.props
    return(
      <div>
        <div className='contents-item'>
          {/* 画像をクリックしたら説明が表示されるとかで、stateを教える */}
          <img
            src={lesson.imageUrl}
            onClick={this.handleClickImage.bind(this)}
          />
          <p>{lesson.languageName}</p>
        </div>
        {this.state.isModalOpen &&
          <div className='modal-wrapper'>
            <div className='modal'>
              <i
                className='modal-close fas fa-times'
                onClick={this.handleClickClose.bind(this)}
              />
              <div className='modal-description'>
                <h2>{lesson.languageName}</h2>
                <div>{lesson.description}</div>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}
