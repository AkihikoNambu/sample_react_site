import React, {Component} from 'react'


export default class LessonItem extends Component {
  render() {
    const {lesson} = this.props
    return(
      <div className="contents-item">
        {/* 画像をクリックしたら説明が表示されるとかで、stateを教える */}
        <img src={lesson.imageUrl} />
        <p>{lesson.languageName}</p>
      </div>
    )
  }
}
