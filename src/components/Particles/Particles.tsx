import { useEffect } from 'react';
import { isBrowser } from 'react-device-detect';
import { loadSlim } from '@tsparticles/slim';
import Particles, { initParticlesEngine } from '@tsparticles/react';

export default function FooterParticles() {
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        })
    }, []);

    return (
        <Particles
            id='tsparticles'
            url={'/assets/tsparticles/tsparticles-' + (isBrowser ? 'browser' : 'mobile') + '.json'}
        />
    );
}

