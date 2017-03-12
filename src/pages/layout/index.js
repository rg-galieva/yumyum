import React from 'react'
require('../../assets/styles/common.gcss')
require('../../assets/styles/material.indigo-pink.min.gcss')
import s from './_styles.css'
import {Link} from 'react-router'
import ProfilePrevContainer from '../../containers/profile-prev-container'
import logo from './logo.svg'

export default function (props) {
    return (
        <div className={s.wrap}>
            <header className={s.head}>
                <div className={s.head_cont}>
                    <Link to="/"><div className={s.logo} dangerouslySetInnerHTML={{__html: logo}}></div></Link>

                    <ProfilePrevContainer/>
                </div>
            </header>

            <main className={s.body}>
                {props.children}
            </main>

            <footer className={s.footer}>
                <div className={s.foot_cont}>
                    <nav>
                        <a href="https://www.opentable.com" target="_blank">OpenTable</a>
                        <a href="https://netlify.com" target="_blank">Netlify</a>
                    </nav>
                </div>
            </footer>
        </div>
    );
}

