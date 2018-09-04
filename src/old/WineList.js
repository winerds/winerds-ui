import React from 'react';
import propTypes from 'prop-types';

class WineList extends React.Component {

  state = {
    email: props.user.email,
    notes: []
  }

  // componentDidMount() {
  // }

  // handleToggle(item) {
  // }

  // handleRemove(itemId) {
  // }

  render() {
    return (
      <section className="section">
        {this.state.notes.map(note => {
          return (
            <div className="box">
              <p>{note.wine}</p>
              <p><small>{note.email === this.state.email ? "you" : note.username}</small></p>
            </div>
          )
        })}

          {/* {this.items.map((item) => {
            return (
              <li key={item.id}>
                <div className="box" >
                  <article className="media">
                    <div className="media-left">
                      <i className={item.completed ? "fa fa-check-square-o fa-2x" : "fa fa-square-o fa-2x"} aria-hidden="true" onClick={() => this.handleToggle(item)}></i>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <p className="title is-4">{item.title}</p>
                        <p className="subtitle is-6">{item.email === this.state.user.email ? "you" : item.displayName}</p>
                      </div>
                    </div>
                    <div className="media-right">
                      <i className="fa fa-times fa-2x" aria-hidden="true" onClick={() => this.handleRemove(item.id)}></i>
                    </div>
                  </article>
                </div>
              </li>
            )
          })} */}
      </section>
    );
  }
}

WineList.propTypes = {
  email: propTypes.string.isRequired,
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      email: propTypes.string.isRequired,
      username: propTypes.string.isRequired,
      wine: propTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  handleRemove: propTypes.func.isRequired,
};

export default WineList;