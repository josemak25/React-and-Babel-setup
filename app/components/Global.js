import React, { Component } from 'react';
import { InputGroup, Glyphicon } from 'react-bootstrap';

class Global extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    search () {
        console.log('search', this.state.query)
    }
    render() {
        return (
            <div className="Global">
                <h2>
                    Pockect Books
                </h2>
                <div className="row">
                    <div className="col sm-12">
                        <form className="form-group">
                            <input className="input-block" type="text" placeholder=" Search for a book"
                                id="paperInputs1"
                                onChange={event => this.setState({query: event.target.value})}
                                onKeyPress={event => {
                                    if (event.key === 'Enter') {
                                        this.search();
                                            }
                                        }}/>
                            <input type="button" className="paper-btn btn-primary" value="search"/>                         
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Global;