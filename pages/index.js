import React, { Component } from 'react';
import "../statics/styles.scss";
import Header from '../components/Header.js';
import fire from '../config/fire';
import Login from './Login';

export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: this.props.user
        }
        this.authListener = this.authListener.bind(this);
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                this.setState({ user });
                //localStorage.setItem('user', user.uid);
            } else {
                this.setState({ user: null });
                //localStorage.removeItem('user');
            }
        });
    }

    render() {
        if (!this.state.user) {
            return (<Login />);
        } else {
            return (
                <div>
                    <Header />
                    <main className="m-2" style={{ paddingBottom: '3rem' }}>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">הצלחה</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        האיסופים שובצו בהצלחה! ניתן לראות את כל השיבוצים שלך בעמוד <a href="volunteer-track.html">איסופים קרובים</a>.
                </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">סגירה</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="alert alert-warning" role="alert">
                            היי אלון, יש לך <a href="volunteer-track.html"><strong>2</strong> איסופים קרובים</a> ועוד <a
                                href="volunteer-report.html"><strong>2</strong> איסופים הממתינים למשוב</a>.
        </div>
                        <div className="alert alert-info" role="alert">
                            הוראות לחלון זה
        </div>
                        <div className="mb-4 mt-4">
                            <h2>שיבוץ לאיסופים </h2>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">פעולות</th>
                                        <th scope="col">מועד</th>
                                        <th scope="col">עיר</th>
                                        <th scope="col">מקום</th>
                                        <th scope="col">קייטרינג</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1"></label>
                                            </div>
                                        </th>
                                        <td>יום ה' 2/5/19 12:30</td>
                                        <td>כפר סבא</td>
                                        <td>אלכס צמיגים</td>
                                        <td>קייטרינג מאמא</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                <label className="custom-control-label" htmlFor="customCheck2"></label>
                                            </div>
                                        </th>
                                        <td>יום ה' 2/5/19 12:30</td>
                                        <td>רמת השרון</td>
                                        <td>סימה אופנה אופנתית</td>
                                        <td>הבוסתן</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                                <label className="custom-control-label" htmlFor="customCheck3"></label>
                                            </div>
                                        </th>
                                        <td>יום ה' 2/5/19 12:30</td>
                                        <td>נתניה</td>
                                        <td>המכולת השכונתית של יעקב</td>
                                        <td>שיפמן קייטרינג לאירועים</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck4" />
                                                <label className="custom-control-label" htmlFor="customCheck4"></label>
                                            </div>
                                        </th>
                                        <td>יום ה' 2/5/19 12:30</td>
                                        <td>נתניה</td>
                                        <td>המכולת השכונתית של יעקב</td>
                                        <td>שיפמן קייטרינג לאירועים</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck5" />
                                                <label className="custom-control-label" htmlFor="customCheck5"></label>
                                            </div>
                                        </th>
                                        <td>יום ה' 2/5/19 12:30</td>
                                        <td>נתניה</td>
                                        <td>המכולת השכונתית של יעקב</td>
                                        <td>שיפמן קייטרינג לאירועים</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck6" />
                                                <label className="custom-control-label" htmlFor="customCheck6"></label>
                                            </div>
                                        </th>
                                        <td>יום ה' 2/5/19 12:30</td>
                                        <td>נתניה</td>
                                        <td>המכולת השכונתית של יעקב</td>
                                        <td>שיפמן קייטרינג לאירועים</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck7" />
                                                <label className="custom-control-label" htmlFor="customCheck7"></label>
                                            </div>
                                        </th>
                                        <td>יום ה' 2/5/19 12:30</td>
                                        <td>נתניה</td>
                                        <td>המכולת השכונתית של יעקב</td>
                                        <td>שיפמן קייטרינג לאירועים</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck8" />
                                                <label className="custom-control-label" htmlFor="customCheck8"></label>
                                            </div>
                                        </th>
                                        <td>יום ה' 2/5/19 12:30</td>
                                        <td>נתניה</td>
                                        <td>המכולת השכונתית של יעקב</td>
                                        <td>שיפמן קייטרינג לאירועים</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck9" />
                                                <label className="custom-control-label" htmlFor="customCheck9"></label>
                                            </div>
                                        </th>
                                        <td>יום ה' 2/5/19 12:30</td>
                                        <td>נתניה</td>
                                        <td>המכולת השכונתית של יעקב</td>
                                        <td>שיפמן קייטרינג לאירועים</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck10" />
                                                <label className="custom-control-label" htmlFor="customCheck10"></label>
                                            </div>
                                        </th>
                                        <td>יום ה' 2/5/19 12:30</td>
                                        <td>נתניה</td>
                                        <td>המכולת השכונתית של יעקב</td>
                                        <td>שיפמן קייטרינג לאירועים</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck11" />
                                                <label className="custom-control-label" htmlFor="customCheck11"></label>
                                            </div>
                                        </th>
                                        <td>יום ה' 2/5/19 12:30</td>
                                        <td>נתניה</td>
                                        <td>המכולת השכונתית של יעקב</td>
                                        <td>שיפמן קייטרינג לאירועים</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="p-2 position-fixed fixed-bottom bg-light">
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">שיבוץ איסופים</button>
                                <button type="button" className="btn btn-secondary">ביטול</button>
                            </div>
                        </div>
                    </main>
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                        crossOrigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"
                        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
                        crossOrigin="anonymous"></script>
                    <script src="https://cdn.rtlcss.com/bootstrap/v4.2.1/js/bootstrap.min.js"
                        integrity="sha384-a9xOd0rz8w0J8zqj1qJic7GPFfyMfoiuDjC9rqXlVOcGO/dmRqzMn34gZYDTel8k"
                        crossOrigin="anonymous"></script>
                </div>
            ) 
        }        
    }

}

const Tasks = () => (
    <div></div>
)
       