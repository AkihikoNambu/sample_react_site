import React, {Component} from 'react'
import LessonItem from './lessonItem.js'
import LessonModal from './lessonModal.js'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
      openLessonId: 1,
    }
  }

  handleClickImage(lessonId) {
    this.setState({
      isModalOpen: true,
      openLessonId: lessonId,
    })
  }

  handleClickClose() {
    this.setState({isModalOpen: false})
  }

  render() {
    const {lessons} = this.props
    const {isModalOpen, openLessonId} = this.state
    const openLesson = lessons.find(lesson => lesson.id === openLessonId)

    return(
      <div className='main'>
        <div className='copy-container'>
          <h1>HELLO WORLD<span>.</span></h1>
          <h2>プログラミングの世界へようこそ</h2>
        </div>
        <div className='contents'>
          <h3 className='section-title'>学べるレッスン</h3>
          {lessons.map(lesson => {
            return (
              <LessonItem
                key={lesson.id}
                lesson={lesson}
                handleClickImage={this.handleClickImage.bind(this)}
              />
            )
          })}
        </div>
        {isModalOpen &&
          <LessonModal
            lesson={openLesson}
            handleClickClose={this.handleClickClose.bind(this)}
          />
        }
      </div>
    )
  }
}
