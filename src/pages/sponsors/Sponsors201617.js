import React, { Component } from 'react';
import Sponsor from '../../components/Sponsor';

export default class Sponsors201617 extends Component {

  render() {
    return (
    <div>
        <h1 className="text-center text-info font-weight-bold"> Gold Sponsors </h1>
        <Sponsor image="Entuitive.png" sponsor="Entuitive" des="Entuitive is a consulting engineering practice with a vision 'to design advanced structures and systems that support a sustainable future." link="http://www.entuitive.com/"/>
        <Sponsor image="rjc.jpg" sponsor="RJC" des="Read Jones Christoffersen Ltd. (RJC) is one of the largest engineering firms in Canada specializing in structural engineering, structural restoration, building science and parking planning services. We are a large but specialized firm, with a national staff of over 450 people in offices across Canada. We've worked on many UofT projects, including the Faculty of Law expansion, the UTSC Environmental Science and Chemistry Building and the UTM North Building Reconstruction." link="http://rjc.ca/"/>
        <h1 className="text-center text-info font-weight-bold"> Silver Sponsors </h1>
        <Sponsor image="CastConnex.png" sponsor="Cast Connex" des="" link="http://www.castconnex.com/"/>
        <h1 className="text-center text-info font-weight-bold"> Bronze Sponsors </h1>
        <Sponsor image="Blackwell.png" sponsor="Blackwell" des="Blackwell offers full consulting engineering services on a broad spectrum of projects, from the new construction of university facilities, offices, retail buildings, medical centres, recreational and visitor centres, schools, libraries and religious institutions, custom homes for private owners, multi-residential and industrial buildings, as well as additions and alterations to existing structures, including those with designated heritage status.Blackwell offers full consulting engineering services on a broad spectrum of projects, from the new construction of university facilities, offices, retail buildings, medical centres, recreational and visitor centres, schools, libraries and religious institutions, custom homes for private owners, multi-residential and industrial buildings, as well as additions and alterations to existing structures, including those with designated heritage status." link="http://blackwell.ca/"/>
        <Sponsor image="associated_engineering.jpg" sponsor="Associated Engineering" des="Associated Engineering is a firm committed to building communities that are vibrant, healthy, and efficient, support economic growth, and improve the environment. They are a uniquely Canadian, employee-owned company that brings global perspectives to their clients from their international experience and technical involvement." link="https://www.ae.ca/"/>
    </div>);
  }
}