import React, { Component } from 'react';
import { connect } from 'react-redux'
import MyText from 'components/myText'
import { changeText } from 'actions/actions'


class ShowState extends Component {
  render() {
    return (
      <div>
        <MyText text={this.props.text}/>
        <button onClick={ e => this.props.onClick('Hoge')}>Hoge</button>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  text : state.text
})

const mapDispatchToProps = (dispatch) => ({
  onClick: (text) => dispatch(changeText(text))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowState)
