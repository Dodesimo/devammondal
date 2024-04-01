import React from 'react'
import './intro.css';
import {Link} from "react-scroll"

const Intro = () => {

    return (

        <section id={"intro"}>

            <div className={"introContent"}>

                <span className={"hello"}>Hi,</span>
                <span className={'introText'}>I'm<span className={"introName"}> Devam!</span><br /></span>
                <p className="introPara">Computer science major interested in software engineering, machine learning, data science, and natural language processing.</p>
                <Link><button className={"btn"}>My resume!</button></Link>

            </div>

        </section>

    )

}

export default Intro