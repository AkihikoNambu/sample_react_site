import React, {Component} from 'react'
import LessonItem from './lessonItem.js'
import LessonModal from './lessonModal.js'

// フォームのバリデーションであるformErrorsを追加
export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
      openLesson: null,
      email: '',
      inquiry: '',
      emailError: '',
      inquiryError: '',
      emailValid: false,
      inquiryValid: false,
      formValid: false,
      formSubmitted: false,
    }
  }
/*
  get this.initialState() {
    if (emailValid || inquiryValid == false){
      formvalid == false;
    } else {
      formvalid == true;
    }
  }
*/
  handleClickImage(lesson) {
    this.setState({
      isModalOpen: true,
      openLesson: lesson,
    })
  }

  handleClickClose() {
    this.setState({isModalOpen: false})
  }

  // EmailのhandleChange。内容のバリデーションもここでしている
  handleEmailChange(email) {
    // this.setState({emailError : ""})
    // this.setState({ email });
    // バリデーション。バリデーションに引っかかるとエラーメッセージ表示。(バリデーションがうまくできない。setState前の値がバリデーションされている)
    const {inquiryValid} = this.state
    if (email === "") {
      const emailValid = false
      const formValid = emailValid && inquiryValid
      this.setState({
        email: email,
        emailError: '記入必須項目です',
        emailValid: false,
        formValid: formValid,
      })
    } else if (!email.match(/@/)){
      const emailValid = false
      const formValid = emailValid && inquiryValid
      this.setState({
        email: email,
        emailError: "正しいメールアドレスの形式ではありません",
        emailValid: false,
        formValid: formValid,
      })
      // this.setState({formValid: false})
    } else {
      const emailValid = true
      const formValid = emailValid && inquiryValid
      this.setState({
        email: email,
        emailError: null,
        emailValid: true,
        formValid: formValid,
      })
      // this.setState({emailValid: true})
    }
  }

  // Inquiry(お問い合わせinput)のhandleChange。内容のバリデーションもここでしている
  handleInquiryChange(inquiry) {
    const {emailValid} = this.state
    // バリデーション。バリデーションに引っかかるとエラーメッセージ表示。(バリデーションがうまくできない。setState前の値がバリデーションされている)
    if (inquiry == ""){
      const inquiryValid = false
      const formValid = emailValid && inquiryValid
      this.setState({
        inquiry: inquiry,
        inquiryError: '記入必須項目です',
        inquValid: false,
        formValid: formValid,
      })
    } else {
      const inquiryValid = true
      const formValid = emailValid && inquiryValid
      this.setState({
        inquiry: inquiry,
        inquiryError: null,
        inquiryValid: true,
        formValid: formValid,
      })
    }
  }

  // submit時にフォームを隠して、「ご回答ありがとうございました」を表示
  handleSubmit(e) {
    e.preventDefault();
    // document.getElementByClass('contact-form').style.display='none'
    // formSubmittedのstateを変える
    this.setState({formSubmitted: true})
  }

  render() {
    const {lessons} = this.props
    const {isModalOpen, openLesson} = this.state

    let formJSX = null
    if (this.state.formSubmitted) {
      formJSX = (
        <div>ご回答ありがとうございました</div>
      )
    } else {
      formJSX = (
        <form onSubmit={e => this.handleSubmit(e)}>
          <p>メールアドレス（必須）</p>
          <div className='error-message'>
            { this.state.emailError }
          </div>
          <input
            type="email"
            value={this.state.email}
            onChange={e => this.handleEmailChange(e.target.value)}
          />

          <p>お問い合わせ内容（必須）</p>
          <div className='error-message'>
            { this.state.inquiryError }
          </div>
          <textarea
          type="text" value={this.state.inquiry}
          onChange={e => this.handleInquiryChange(e.target.value)} />

          <p>※必須項目は必ずご入力ください</p>
          <input
            className="contact-submit"
            type="submit"
            disabled={!this.state.formValid}
            value="送信"
          />
        </form>
      )
    }

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
        {/* NOTE: 条件分岐なにでやるか */}
        {isModalOpen && openLesson &&
          <LessonModal
            lesson={openLesson}
            handleClickClose={this.handleClickClose.bind(this)}
          />
        }

        <div className="contact-form">
          <h3 className="section-title">お問い合わせ</h3>
          {formJSX}
        </div>
      </div>
    )
  }
}
