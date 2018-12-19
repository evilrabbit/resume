import { useState, useRef, useMutationEffect, useLayoutEffect } from 'react'
import Logotype from '../components/logotype'
import DarkToggle from '../components/dark-toggle'
import Head from 'next/head'

const themes = {
  light: {
    bodyBg: 'white',
    main: 'black',
    gray: '#999',
    darkGray: '#444',
    link: '#0076FF',
    skill: '#e3e5e7',
    border: '#eaeaea'
  },
  dark: {
    bodyBg: 'black',
    main: 'white',
    gray: '#ccc',
    darkGray: '#999',
    link: '#fff',
    skill: '#333',
    border: '#333'
  }
}

const useRaf = callback => {
  const callbackRef = useRef(callback);
  useMutationEffect(
    () => {
      callbackRef.current = callback;
    },
    [callback]
  );

  const loop = () => {
    frameRef.current = requestAnimationFrame(
      loop
    );
    const cb = callbackRef.current;
    cb();
  };

  const frameRef = useRef();
  useLayoutEffect(() => {
    frameRef.current = requestAnimationFrame(
      loop
    );
    return () =>
      cancelAnimationFrame(frameRef.current);
  }, []);
};

export default () => {
  const [activeTheme, setTheme] = useState('light')
  const [activeSection, setActiveSection] = useState('#experience')
  const experience = useRef(null)
  const oss = useRef(null)
  const press = useRef(null)
  const education = useRef(null)
  const information = useRef(null) 
  
  useRaf(() => {
    if (typeof window !== 'undefined') {
      const { innerHeight, scrollY } = window
      const scrollOffset = innerHeight + scrollY

      if (information.current && scrollOffset > information.current.offsetTop) {
        window.history.pushState(null, null, '#information')
      } else if (education.current && scrollOffset > education.current.offsetTop) {
        window.history.pushState(null, null, '#education')
      } else if (press.current && scrollOffset > press.current.offsetTop) {
        window.history.pushState(null, null, '#press')
      } else if (oss.current && scrollOffset > oss.current.offsetTop) {
        window.history.pushState(null, null, '#oss')
      } else if (experience.current && scrollOffset > experience.current.offsetTop) {
        window.history.pushState(null, null, '#experience')
      }
  
      setActiveSection(window.location.hash.length > 0 ? window.location.hash : '#experience')
    }
  })

  const theme = themes[activeTheme]

  return (
  <div>
  <Head>
    <title>Evil Rabbit —  Resume</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="shortcut icon" href="/static/favicon.png"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
  </Head>
  <div className="wrapper">
    <div className="sidebar">
      <div className="logotype">
        <Logotype/>
      </div>
      <div className="navigation">
        <a href="#experience" className={activeSection === '#experience' ? 'active' : ''}>
          Experience
        </a>
        <a href="#oss" className={activeSection === '#oss' ? 'active' : ''}>
          OSS Contributions
        </a>
        <a href="#press" className={activeSection === '#press' ? 'active' : ''}>
          Press
        </a>
        <a href="#education" className={activeSection === '#education' ? 'active' : ''}>
          Education
        </a>
        <a href="#information" className={activeSection === '#information' ? 'active' : ''}>
          Information
        </a>
      </div>
    </div>
    <DarkToggle
      onClick={() => activeTheme === 'light' ? setTheme('dark') : setTheme('light')}
      activeTheme={activeTheme}
    />
    <div className="content">
      <div id="experience" ref={experience}>
        <div className="work">
          <h3>Jun 2016-Present</h3>
          <h2>Head of Design at ZEIT</h2>
          <p>
            As the design team lead, I am responsible for curating the visual
            experience of our brand and products. Being the first designer of
            the company, I was enabled to develop the design system that we
            are currently using. We have a growing team of designers and
            developers which I am now guiding daily in the creative process.
            <br/>
            <br/>
            I’m responsible for:
            <ul>
              <li>Brand Identity System</li>
              <li>Wireframing</li>
              <li>Release Videos / Announcements</li>
              <li>Continually scaling the graphic system of <a href="https://zeit.co/" target="_blank">ZEIT</a>, <a href="https://nextjs.org/" target="_blank">Next.js</a> and <a href="https://hyper.is/" target="_blank">Hyper</a> — among others</li>
              <li>Improving the user experience and the graphic interface of the platform</li>
              <li>Maintaining a positive culture within the design team</li>
              <li>Recruiting and hiring for the design team</li>
            </ul>
          </p>
        </div>
        <div className="work">
          <h3>Feb 2015 - Apr 2016</h3>
          <h2>UI Designer at Auth0</h2>
          <p>
          My first task was to design <a href="https://sharelock.io/" target="_blank">Sharelock.io</a> (Web / Android App that allows you to share data easily and securely). After releasing the app and its website,
          I had the opportunity to re-design many important front-facing pages
          for the company (About, Why Auth0?, Jobs and marketing pages <a href="https://auth0.com/passwordless" target="_blank">Passwordless</a>, AWS Reinvent and <a href="https://auth0.com/guardian" target="_blank">Guardian</a>, to name a few).
          <br/>
          <br/>
          My final responsibility at Auth0 was to lead the project <b>Guardian</b> as a Product Designer, giving me full creative control over the
          experience, from the blueprints to the final polished app.
          <br/>
          <br/>
          I was responsible for:
          <ul>
            <li>Creating Blueprints</li>
            <li>User Experience Design</li>
            <li>User Interface Design</li>
            <li>Product Design</li>
            <li>Marketing Design</li>
          </ul>
          </p>
        </div>
        <div className="work">
          <h3>Dec 2014 - Feb 2015</h3>
          <h2>Freelance</h2>
        </div>
        <div className="work">
          <h3>Jun 2014 - Dec 2014</h3>
          <h2>UX/UI Designer at Aerolab</h2>
          <p>After 4 years designing for an entertainment company I decided to switch back to an agency. I started working at <a href="https://aerolab.co/" target="_blank">Aerolab</a> as a Product Designer.
          I took care of the following projects: <a href="https://www.lifelock.com/" target="_blank">LifeLock</a>, <a href="https://xapo.com/" target="_blank">Xapo</a> and <a href="https://dribbble.com/shots/1708940-Android-App" target="_blank">Grabbit</a>.</p>
        </div>
        <div className="work">
          <h3>Aug 2012 - Jun 2014</h3>
          <h2>Head of Design at VIACOM</h2>
          <p>
            After the first two years as a designer I was promoted to leader of
            the design team.  During that period we had two <a href="http://miaw.mtvla.com" target="_blank">MTV Awards</a> and two <a href="http://www.kidschoiceawards.com/" target="_blank">Kids Choice Awards</a> for all of Latin America. It was one of the most important
            experiences in my career. I worked directly with all the departments
            involved: marketing, production and sales.
            <br/>
            <br/>
            I was responsible for:
            <ul>
              <li>Brand Identity System</li>
              <li>Sales Presentations</li>
              <li>Wireframing</li>
              <li>Training</li>
              <li>Recruiting</li>
            </ul>
          </p>
        </div>
        <div className="work">
          <h3>Aug 2010 - Aug 2012</h3>
          <h2>Web Designer at VIACOM</h2>
          <p>I started working as a full-time designer for <a href="http://mtvla.com" target="_blank">MTV</a>, VH1, <a href="http://mundonick.com" target="_blank">Nickelodeon</a> and <a href="http://comedycentral.la" target="_blank">Comedy Central</a> — developing
          all kinds of digital projects such as standalone websites,
          marketing pages and social network assets for all the shows.</p>
        </div>
        <div className="work">
          <h3>Jul 2009 - Aug 2010</h3>
          <h2>Freelance</h2>
        </div>
        <div className="work">
          <h3>Dec 2006 - Jul 2009</h3>
          <h2>Designer at IDENTIDAD DG</h2>
          <p>
            For two and a half years I worked for the studio doing a variety of
            projects, including brochures, photo edition and also some digital
            presentations and websites. I am very proud of my work in 2008, when
            I had the honor of designing the album <a href="https://www.discogs.com/John-Legend-Legend-Network-John-Legend-2008/release/11682137" target="_blank">The Legend Network</a> by <a href="https://www.johnlegend.com/" target="_blank">John Legend</a>.
          </p>
        </div>
        <div className="work">
          <h3>Oct 2006 - Jul 2008</h3>
          <h2>Designer at TSYA</h2>
        </div>
      </div>
      <div id="oss" ref={oss}>
        <h3>OSS Contributions</h3>
        <div className="project">
          <h2>Tipbox</h2>
          <p><a href="https://tipbox.is" target="_blank">tipbox.is</a></p>
          <p>Share a URL to collect anonymous feedback</p>
        </div>
        <div className="project">
          <h2>Passport.js</h2>
          <p><a href="http://passportjs.org" target="_blank">passportjs.org</a></p>
          <p>Simple, unobtrusive authentication for Node.js</p>
        </div>
        <div className="project">
          <h2>JWT.io</h2>
          <p><a href="https://jwt.io" target="_blank">jwt.io</a></p>
          <p>Allows you to decode, verify and generate JWT</p>
        </div>
        <div className="project">
          <h2>MDX</h2>
          <p><a href="https://mdxjs.com/" target="_blank">mdxjs.com</a></p>
          <p>JSX in Markdown for ambitious projects</p>
        </div>
      </div>
      <div id="press" ref={press}>
        <h3>Press</h3>
        <div className="article">
          <h2>!important</h2>
          <p><a href="https://xotv.me/channels/22-important/vod_videos/896-important-slash-slash-zeit-dot-co" target="_blank">https://xotv.me/channels/22-important/vod_videos/896-important-slash-slash-zeit-dot-co</a></p>
        </div>
        <div className="article">
          <h2>1stWebDesigner</h2>
          <p><a href="https://1stwebdesigner.com/material-design-guide/" target="_blank">1stwebdesigner.com/material-design-guide/</a></p>
        </div>
        <div className="article">
          <h2>Beebom</h2>
          <p><a href="https://beebom.com/best-material-design-apps-website/" target="_blank">beebom.com/best-material-design-apps-website/</a></p>
        </div>
        <div className="article">
          <h2>DesignsHack</h2>
          <p><a href="https://designshack.net/articles/ux-design/google-material-design-everything-you-need-to-know/" target="_blank">designshack.net/articles/ux-design/google-material-design-everything-you-need-to-know/</a></p>
        </div>
      </div>
      <div id="education" ref={education}>
        <h3>Education</h3>
        <div className="degree">
          <h2>Design</h2>
          <p>Art, Design and Communication</p>
        </div>
        <div className="degree">
          <h2>English</h2>
          <p>First Certificate in English (Cambridge Essol Examinations)</p>
        </div>
      </div>
      <div id="information" ref={information}>
        <h3>Information</h3>
        <h2>Skills</h2>
        <div className="skills">
          <div className="skill">
            <p>Branding</p>
          </div>
          <div className="skill">
            <p>Marketing Design</p>
          </div>
          <div className="skill">
            <p>User Experience</p>
          </div>
          <div className="skill">
            <p>User Interface</p>
          </div>
          <div className="skill">
            <p>Product Design</p>
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
      a {
        cursor: pointer;
        color: ${theme.gray};
        line-height: 2.5em;
        text-decoration: none;
        transition: all .2s ease;
        transition: color 0.2s ease;
      }

      a:hover,
      a.active {
        color: ${theme.main};
      }

      .article {
        margin-bottom: 50px;
      }

      .article p {
        margin: 0;
      }

      .content {
        width: 700px;
      }

      .degree {
        margin-bottom: 50px;
      }

      .degree p {
        margin: 0;
      }

      h2 {
        font-size: 3em;
        margin: 0;
      }

      h3 {
        margin: 0;
        text-transform: uppercase;
      }

      #education {
        border-bottom: 1px solid ${theme.border};
        margin-bottom: 100px;
        padding-bottom: 50px;
        transition: border-bottom 0.2s ease;
      }

      #experience {
        border-bottom: 1px solid ${theme.border};
        margin-top: 150px;
        margin-bottom: 100px;
        transition: border-bottom 0.2s ease;
      }

      #information {
        margin-bottom: 100px;
        padding-bottom: 50px;
      }

      li {
        margin-bottom: 10px;
      }

      li:before {
        content: '–';
        display: inline-block;
        color: ${theme.gray};
        position: absolute;
        margin-left: -15px;
        transition: color 0.2s ease;
      }

      .logotype {
        margin-bottom: 50px;
        position: sticky;
        top: 60px;
      }

      .navigation {
        display: flex;
        flex-direction: column;
        position: sticky;
        top: 150px;
      }

      #oss {
        border-bottom: 1px solid ${theme.border};
        margin-bottom: 100px;
        padding-bottom: 50px;
        transition: border-bottom 0.2s ease;
      }

      p {
        line-height: 2em;
        color: ${theme.darkGray};
        transition: color 0.2s ease;
      }

      p a {
        border-bottom: 1px solid ${theme.white};
        color: ${theme.link};
        line-height: 2em;
        transition: color 0.2s ease;
      }

      p a:hover {
        border-bottom: 1px solid ${theme.link};
      }

      #press {
        border-bottom: 1px solid ${theme.border};
        margin-bottom: 100px;
        padding-bottom: 50px;
        transition: border-bottom 0.2s ease;
      }

      .project {
        margin-bottom: 50px;
      }

      .project p {
        margin: 0;
      }

      .sidebar {
        padding: 50px;
        width: 200px;
      }

      .skills {
        display: flex;
      }

      .skill {
        padding: 2px 10px;
        border: 1px solid ${theme.skill};
        border-radius: 5px;
        margin-right: 10px;
        margin-top: 10px;
        transition: border 0.2s ease;
      }

      .skill p {
        margin: 0;
      }

      ul {
        padding: 0;
        list-style-type: none;
        margin-left: 15px;
      }

      .work {
        margin-bottom: 100px;
      }

      .wrapper {
        margin: 0 auto;
        max-width: 1000px;
        display: flex;
        justify-content: center;
      }

      @media (max-width: 1200px) {
        .content {
          width: 100%;
        }
        h2 {
          font-size: 2em;
        }
        .logotype {
          margin-bottom: 0;
          position: relative;
          top: none;
        }
        .navigation {
          margin-bottom: 100px;
          position: relative;
          top: none;
        }
        .sidebar {
          padding: 0px;
          width: 100%;
        }
        .skills {
          flex-direction: column;
        }
        .skill {
          margin-bottom: 12px;
        }
        .wrapper {
          flex-direction: column;
        }

      }
    `}</style>
    <style global jsx>{`
      body {
        background-color: ${theme.bodyBg};
        color: ${theme.main};
        font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
        font-size: 1em;
        font-style: normal;
        font-weight: 400;
        margin: 0 20px 0 20px;
        line-height: 1.47059;
        letter-spacing: -.022em;
        transition: background-color 0.2s ease, color 0.2s ease;
      }
    `}</style>
    </div>
  </div>
  )
}
