import React from 'react'
import $ from 'jquery'
import fullpage from 'fullpage.js'

import background1 from './background1.svg'
import background2 from './background2.svg'
import background3 from './background3.svg'
import background4 from './background4.svg'
import background5 from './background.svg'

import mocat from '../resources/mocat.jpg'
import james from '../resources/james.jpg'
import dennis from '../resources/dennis.jpg'
import vik from '../resources/vik.jpg'
import stewie from '../resources/Stewiepolice.png'

import amplfy from '../resources/amplfy.png'
import penguin from '../resources/logo-white.png'
import stiqr from '../resources/stiqr.png'
import hackable from '../resources/hackable.png'
import honeybadger from '../resources/honeyBadger.png'
import startupTabs from '../resources/startupTabs.png'
import darkBoy from '../resources/darkBoy.png'
import grizzly from '../resources/grizzly.png'



const Penguin = function(){

  return (
    <div
      data-anchor="Penguin"
      key="Penguin"
      className="section"
      style={{backgroundSize: 'cover', backgroundImage: 'url(' + background1 + ')'}}>
      <div className="site-container" style={{marginBottom: '120px'}}>
        <img class="site-logo" src={penguin} alt="show me picture"></img>
        <h2 style={{fontSize: '6rem'}}>Penguin Web</h2>
        <p>This is antartica</p>
      </div>
    </div>
  )
}

const Stiqr = function(){

  return (
    <div
      data-anchor="Stiqr"
      key="Stiqr"
      className="section"
      style={{backgroundSize: 'cover', backgroundImage: 'url(' + background3 + ')'}}>
      <div className="site-container">
        <img class="site-logo" src={stiqr} alt="show me picture"></img>
        <h2>Stiqr</h2>
        <p>Just stiq it!</p>
      </div>
    </div>
  )
}

const Startuptabs = function(){

  return (
    <div
      data-anchor="Startuptabs"
      key="Startuptabs"
      className="section"
      style={{backgroundSize: 'cover', backgroundImage: 'url(' + background2 + ')'}}>
      <div className="site-container">
        <img class="site-logo" src={startupTabs} alt="show me picture"></img>
        <h2>Startuptabs</h2>
        <p>Get the word out about your new Start Up!</p>
      </div>
    </div>
  )
}

const Amplfy = function(){
  
  return (
    <div
      data-anchor="Amplfy"
      key="Amplfy"
      className="section"
      style={{backgroundSize: 'cover', backgroundImage: 'url(' + background2 + ')'}}>
      <div className="site-container">
        <img class="site-logo" src={amplfy} alt="show me picture"></img>
        <h2>Amplfy</h2>
        <p>Just another Social Network Platform</p>
      </div>
    </div>
  )
}

const Honeybadger = function(){
  
  return (
    <div
      data-anchor="Honeybadger"
      key="Honeybadger"
      className="section"
      style={{backgroundSize: 'cover', backgroundImage: 'url(' + background3 + ')'}}>
      <div className="site-container">
        <img class="site-logo" src={honeybadger} alt="show me picture"></img>
        <h2>Honeybadger</h2>
        <p>Penguins can fly, in the ocean</p>
      </div>
    </div>
  )
}

const Hackable = function(){

  return (
    <div
      data-anchor="Hackable"
      key="Hackable"
      className="section"
      style={{backgroundSize: 'cover', backgroundImage: 'url(' + background4 + ')'}}>
      <div className="site-container">
        <img class="site-logo" src={hackable} alt="show me picture"></img>
        <h2>Hackable</h2>
        <p>I like big butts and I cannot lie</p>
        <a className="button" href="http://hackable.penguin.ws">Testing</a>
      </div>
    </div>
  )
}

class About extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      active_profile: {
        name: 'JAMES',
        photo: james,
        title: 'ceo',
        description: 'James employs Lee near her economy. James rockets. James edits Lee beside an' +
        ' inhabitant. The prayer pants above the idiotic husband. Lee mutters across the calculated ' +
        'trend. Lee skips James underneath the several gender.'
      },
      profiles: [
        {
          name: 'JAMES',
          photo: james,
          title: 'CEO',
          description: 'James employs Lee near her economy. James rockets. James edits Lee beside an' +
          ' inhabitant. The prayer pants above the idiotic husband. Lee mutters across the calculated ' +
          'trend. Lee skips James underneath the several gender.'
        },
        {
          name: 'DENNIS',
          photo: dennis,
          title: 'JS DEV',
          description: 'The interim freeway worships davis. Dennis balances this discouraging' +
          ' gulf. Under the ritual yawns the ash. Dennis compacts davis.'
        },
        {
          name: 'CAT',
          photo: mocat,
          title: 'PHP DEV',
          description: 'Cat pinches vik beside the happier cousin. Without a book breaks cat.' +
          ' Why can\'t cat replace its sexist? Cat faints below a worthwhile pedant.?'
        },
        {
          name: 'VIK',
          photo: vik,
          title: 'PROFESSOR of JS/CSS/HTML',
          description: 'vik pushes his car to go to the bernie sander\'s rally in Anaheim.' +
            ' Cuz love is such an old fashion word and love dares you to care for the people' +
            ' on the edge of the night and love dares you to change our ways of caring about' +
            ' ourselves.'
        },
        {
          name: 'STEWIE',
          photo: stewie,
          title: 'World Conquoror',
          description: 'She packed my bags, last night, pre flight... 9 am... and i\'m gonna be' +
            ' as high as a kite by then.'
        }
      ]
    }
  }

  changeProfile(profile){
    this.setState({
      active_profile: profile
    })
  }

  profile(profile){
    return (
      <div id="bio-shot" className="bio-shots-details">
        <div id="bio-image">
          <div className="col-1-5"><img src={profile.photo} alt="image of cat"></img></div>
          <div className="bio-content col-6">
              <h1>{profile.name}</h1>
              <h2>{profile.title}</h2>
              <p>{profile.description}</p>
          </div>
        </div>
      </div>
    )
  }

  render(){
    return (
      <div
        data-anchor="About"
        key="About"
        className="section"
        style={{backgroundSize: 'cover', backgroundImage: `url('${background1}')`}}>
        <div className="grid-container" style={{marginBottom: '120px'}}>

            <div className="row" style={{borderBottomWidth: '1px'}}>
            {this.state.profiles.map( (profile, index) => (
              <div key={index} className="col-1-5">
                <div className="bio-shot" onClick={this.changeProfile.bind(this, profile)}>
                  <img className="bio-photo" src={profile.photo} alt="picture of a cat"></img>
                  <br></br>

                  <br></br>
                  <p>{profile.name}</p>
                  <br></br>
                  <p>{profile.title}</p>

                </div>
              </div>
            ))}
            </div>


          <div className="row">
            {this.profile(this.state.active_profile)}
          </div>
        </div>
      </div>
    )
  }
}


const Contact = function(){
  return (
    <div
      data-anchor="Contact"
      key="Contact"
      className="section"
      style={{backgroundSize: 'cover', backgroundImage: 'url(' + background1 + ')'}}>
      <iframe id="typeform-full" width="100%" height="100%" frameborder="0" src="https://startuptabs.typeform.com/to/Ls52J1"></iframe>
    </div>
  )
}

class Pages extends React.Component {
  
  componentDidMount(){
    $(this.refs.fullpage).fullpage({
      menu: '#menu',
      afterLoad: function(link, index){
        $('#menu a').removeClass('active')

        if(index == 1) return false

        var menuItems = $('#menu .sub-menu li a')
        var menuItem = menuItems[index-2]
        $(menuItem).addClass('active')

        if(link == 'Contact'){
          $('#menu').addClass('contact')
          $('[href="#Contact"]').addClass('active')
        }else{
          $('#menu').removeClass('contact')
        }

        if(link == 'About'){
          $('[href="#About"]').addClass('active')
        }

      }
    })
  }
  
  render() {
    return (
      <div ref="fullpage">
        <Penguin />
        <Stiqr />
        <Startuptabs />
        <Amplfy />
        <Honeybadger />
        <Hackable />
        <About />
        <Contact />
      </div>
    )
  }
}

export default Pages