import React, { Component } from 'react';
import fire from '../config/fire';
import Link from 'next/link';
import Head from 'next/head';

export default class Header extends Component {
    constructor(props) {
        super(props);
        //this.logout = this.logout.bind(this);
    }

    /*logout() {
        console.log("test");
        //fire.auth().signOut();
    }*/

    render() {
        return(<HeaderHtml />)
    }
}

const HeaderHtml = () => (
    <div>
        <Head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

            <link rel="stylesheet" href="https://cdn.rtlcss.com/bootstrap/v4.2.1/css/bootstrap.min.css"
                integrity="sha384-vus3nQHTD+5mpDiZ4rkEPlnkcyTP+49BhJ4wJeJunw06ZAp+wzzeBPUXr42fi8If" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />

            <title>LeketGo</title>
        </Head>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-sticky sticky-top">
            <Link href="/"><a className="navbar-brand">LeketGo</a></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link href="/"><a className="nav-link">שיבוץ לאיסופים</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/assigned-tasks"><a className="nav-link">איסופים קרובים <span
                            className="badge badge-secondary">2</span></a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/task-reports"><a className="nav-link">מילוי משוב <span
                            className="badge badge-secondary">2</span></a></Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            אלון קגן
                                </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <Link href="/personal-information"><a className="dropdown-item">פרטים אישיים</a></Link>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item">התנתקות</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link"><i className="fas fa-map-marker-alt"></i> רעננה</span>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
)