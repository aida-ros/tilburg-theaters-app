import React, { Component } from 'react';
import { connect } from 'react-redux'

class Pagination extends Component {
  
  prevPage = () => {
    if (this.props.offset !== 0) {
      this.props.dispatch({
        type: 'PREV_PAGE'
      })
    }
  }

  nextPage = () => {
    this.props.dispatch({
      type: 'NEXT_PAGE'
    })
  }

  render () {
    return (
      <div className="Pagination">
          <button 
            onClick={this.prevPage}
          >Vorige</button>
          
          <button 
            onClick={this.nextPage}
          >Volgende</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    offset: state.pagination.offset,
    limit: state.pagination.limit
  }
}


export default connect(mapStateToProps)(Pagination);
