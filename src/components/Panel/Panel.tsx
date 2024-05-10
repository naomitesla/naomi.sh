import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGlitch } from 'react-powerglitch';
import { isBrowser, isMobile } from 'react-device-detect';
import DestroyPanel from './DestroyPanel/DestroyPanel';
import AboutTable from '../Table/AboutTable';
import ProjectsTable from '../Table/ProjectsTable';
import './Panel.scss';



interface Props {
    trigger: boolean;
    setTrigger: (arg0: boolean) => void;

    projectButton: boolean;
    setNewPanel: (arg0: boolean) => void;
}


declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    fetchpriority?: 'high' | 'low' | 'auto';
  }
};

export default function Panel(props: Props) {
    const [isAbout, setAbout] = useState(true);
    const glitch = useGlitch({
        'playMode': 'always',
        'createContainers': true,
        'hideOverflow': false,
        'timing': {
            'duration': 2000
        },
        'glitchTimeSpan': {
            'start': 0.80,
            'end': 3
        },
        'shake': {
            'velocity': 3,
            'amplitudeX': 0.15,
            'amplitudeY': 0.15
        },
        'slice': {
            'count': 5,
            'velocity': 10,
            'minHeight': 0.02,
            'maxHeight': 0.15,
            'hueRotate': true
        },
        'pulse': false
    });


    const pics = new String('/piccyysss/');
    const me = `${pics}mee.webp`;
    const socials = [
        [
            'https://app.hackthebox.com/profile/645009',
            'https://tryhackme.com/p/naymi',
            'https://github.com/naomitesla',
            'mailto:contact@naomi.sh',
        ],
        [
            `${pics}socials/htb_glow.webp`,
            `${pics}socials/thm_glow.webp`,
            `${pics}socials/gth_glow.webp`,
            `${pics}socials/eml_glow.webp`,
        ],
    ]


    return (props.trigger) ? (
        <div id={isBrowser ? 'panel' : 'panel-mobile'}>
            <div className='title-bar'>
                {isAbout ?
                    <div className='flexcontainer'>
                        <div className='panel-title'>about-me</div>
                        <button className='exit' onClick={() => { DestroyPanel(props) }}>x</button>
                    </div> :
                    <div className='flexcontainer'>
                        <button className='back' onClick={() => { setAbout(true) }}>&lt;-</button>
                        <div className='panel-title'>my-projects</div>
                    </div>
                }
            </div>
            {!isAbout && isMobile ? '' :
            <div className='img-container'>
                <img rel='preload' fetchpriority='high' ref={glitch.ref} className='headshot' src={me} alt='naomi c:' unselectable='on' />
                <p className='name'>naomi tesla</p>
                <div className='button-container'>
                    <Link to={socials[0][0]} target='_blank' rel='noopener noreferrer'>
                        <div className='neon-btn'>
                            <img src={socials[1][0]} alt='hackthebox' unselectable='on'/>
                        </div>
                    </Link>
                    <Link to={socials[0][1]} target='_blank' rel='noopener noreferrer'>
                        <div className='neon-btn'>
                            <img src={socials[1][1]} alt='tryhackme' unselectable='on'/>
                        </div>
                    </Link>
                    <Link to={socials[0][2]} target='_blank' rel='noopener noreferrer'>
                        <div className='neon-btn'>
                            <img src={socials[1][2]} alt='github' unselectable='on'/>
                        </div>
                    </Link>
                    <Link to={socials[0][3]} target='_blank' rel='noopener noreferrer'>
                        <div className='neon-btn'>
                            <img src={socials[1][3]} alt='email' unselectable='on'/>
                        </div>
                    </Link>
                </div>
            </div>}
                {isAbout ?
                    <div className='about'>
                        <p className='header'>ƪ(`<span>▿▿▿▿</span> ´ ƪ)</p>
                        <hr />
                        <AboutTable />
                        <hr />
                        <button className='projects-btn' onClick={() => { setAbout(false); }}>
                            my projects!
                        </button>
                    </div> :
                    <div className={isBrowser ? 'about' : 'about-mobile'}>
                        <p className='header'>my projects!</p>
                        <hr />
                        <ProjectsTable />
                        <hr />
                    </div>
                }
        </div>
    ) : '';
}
