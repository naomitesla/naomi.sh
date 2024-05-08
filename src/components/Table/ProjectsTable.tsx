import './Table.scss';
import { isBrowser } from 'react-device-detect';
import Parser from 'html-react-parser';

const projects = new String('/piccyysss/projects');
const lesh_img = `${projects}/lesh.gif`;
const av_img = `${projects}/av.gif`;

// i rlly don't like the array method for this at *alllllllllll*, will def fix later, v ugly

export default function ProjectsTable() {
        const lesh = ['<b>lesh</b> is a ubiquitous reverse shell generator/encoder, shell upgrader, and session manager written in Python and currently being ported to Go.',
                    'Ultimately making gaining an initial foothold and maintaining that access as painless as possible, no matter what system you\'re attacking c:'];
        const malware = ['This tool is currently under development and still <b>nameless.</b>',
                        'Mainly aimed at sensitive forensic operations and malware development, utilizing both a full virtual image and lighter docker image to run files through every major AV, similarly to VirusTotal, but completely offline—incorporating limited dynamic analysis and full static analysis.',
                        'A seamless offline solution for forensic investigators, malware analysts, and red team malware devs alike c:'];

        return (
            <div className={isBrowser ? 'browser' : 'mobile'}>
                <table className={isBrowser ? '' : 'mobile-projects'}>
                    <tbody>
                        <tr>
                            <td>
                                <span>
                                    <b>lesh</b>
                                </span>
                            </td>
                            <td>
                                <img className='table-img' src={lesh_img} alt='lesh' unselectable='on' />
                            </td>
                        </tr>
                        <tr>
                            <th><span className='emoji'>📰</span></th>
                            <td>
                                <p>{Parser(lesh[0])}</p>
                                <p>{Parser(lesh[1])}</p>
                            </td>
                        </tr>
                        <tr><td><p></p></td></tr>
                        <tr>
                            <td>
                                <span>
                                    <b>Offline Malware Scanner</b>
                                </span>
                            </td>
                            <td>
                                <img className='table-img' src={av_img} alt='Unnamed AV' unselectable='on' />
                            </td>
                        </tr>
                        <tr>
                            <th><span className='emoji'>📰</span></th>
                            <td>
                                <p>{Parser(malware[0])}</p>
                                <p>{Parser(malware[1])}</p>
                                <p>{Parser(malware[2])}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
}
