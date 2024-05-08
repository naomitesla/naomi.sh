import { useState } from 'react';
import { useGlitch } from 'react-powerglitch'
import Panel from '../Panel/Panel';
import './Navbar.scss';



export default function Navbar() {
    const [panelButton, setButtonPanel] = useState(true);
    const [projectButton, setNewPanel] = useState(false);

    const glitch = useGlitch({
        'playMode': 'always',
        'createContainers': true,
        'hideOverflow': false,
        'timing': {
        'duration': 2000
    },
        'glitchTimeSpan': {
        'start': 0.8,
        'end': 1
    },
        'shake': false,
        'slice': {
            'count': 8,
            'velocity': 5,
            'minHeight': 0.05,
            'maxHeight': 0.15,
            'hueRotate': true
        },
        'pulse': false
    });

    return (
        <nav className='nav'>
            <p ref={glitch.ref} className='site-title'>&gt; naomi.sh</p>
            <ul>
                <li>
                    <div id='buttons'>
                        <div className='about-btn'>
                            <button className='header-btn' onClick={() => setButtonPanel(true)}>about me</button>
                        </div>
                        <Panel
                            trigger={panelButton}
                            setTrigger={setButtonPanel}

                            projectButton={projectButton}
                            setNewPanel={setNewPanel}
                        />
                    </div>
                </li>
            </ul>
        </nav>
    );
}
