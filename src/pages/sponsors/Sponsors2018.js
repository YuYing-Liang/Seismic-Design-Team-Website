import React, { Component } from 'react';
import Sponsor from '../../components/Sponsor';

export default class Sponsors2018 extends Component {

  render() {
    return (
    <div>
        <h1 className="text-center text-info font-weight-bold"> Gold Sponsors </h1>
        <Sponsor image="Entuitive.png" sponsor="Entuitive" des="Entuitive is a consulting engineering practice with a vision 'to design advanced structures and systems that support a sustainable future." link="http://www.entuitive.com/"/>
        <Sponsor image="rjc.jpg" sponsor="RJC" des="Read Jones Christoffersen Ltd. (RJC) is one of the largest engineering firms in Canada specializing in structural engineering, structural restoration, building science and parking planning services. We are a large but specialized firm, with a national staff of over 450 people in offices across Canada. We've worked on many UofT projects, including the Faculty of Law expansion, the UTSC Environmental Science and Chemistry Building and the UTM North Building Reconstruction." link="http://rjc.ca/"/>
        <h1 className="text-center text-info font-weight-bold"> Silver Sponsors </h1>
        <Sponsor image="CastConnex.png" sponsor="Cast Connex" des="" link="http://www.castconnex.com/"/>
        <Sponsor image="sframe.jpg" sponsor="S-Frame" des="Since its founding in 1981, S-FRAME Software is a leading innovator in the structural engineering software field, beginning with its first 2-D P-FRAME analysis program up to today: An integrated 9-product structural analysis and design product suite for steel, concrete, and timber structures." link="http://s-frame.com/"/>
        <Sponsor image="WPM.jpg" sponsor="Walter P Moore" des="We are an international company of engineers, architects, innovators, and creative people who solve some of the world’s most complex structural and infrastructure challenges. Providing structural, diagnostics, civil, traffic, parking, transportation, enclosure, and construction engineering services, we design solutions that are cost- and resource-efficient, forward-thinking, and help support and shape communities worldwide. Founded in 1931 and headquartered in Houston, Texas, our 600+ professionals work across 18 U.S. offices and five international locations." link="https://www.walterpmoore.com/challenge-us"/>
        <h1 className="text-center text-info font-weight-bold"> Bronze Sponsors </h1>
        <Sponsor image="Blackwell.png" sponsor="Blackwell" des="Blackwell offers full consulting engineering services on a broad spectrum of projects, from the new construction of university facilities, offices, retail buildings, medical centres, recreational and visitor centres, schools, libraries and religious institutions, custom homes for private owners, multi-residential and industrial buildings, as well as additions and alterations to existing structures, including those with designated heritage status.Blackwell offers full consulting engineering services on a broad spectrum of projects, from the new construction of university facilities, offices, retail buildings, medical centres, recreational and visitor centres, schools, libraries and religious institutions, custom homes for private owners, multi-residential and industrial buildings, as well as additions and alterations to existing structures, including those with designated heritage status." link="http://blackwell.ca/"/>
        <Sponsor image="associated_engineering.jpg" sponsor="Associated Engineering" des="Associated Engineering is a firm committed to building communities that are vibrant, healthy, and efficient, support economic growth, and improve the environment. They are a uniquely Canadian, employee-owned company that brings global perspectives to their clients from their international experience and technical involvement." link="https://www.ae.ca/"/>
    </div>);
  }
}