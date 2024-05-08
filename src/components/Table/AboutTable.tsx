import './Table.scss';
import { isBrowser } from 'react-device-detect';
import Parser from 'html-react-parser';

export default function AboutTable() {
    const location = 'I live in the <b>US</b>.';
    const gayyyyy = '<b>L</b>GB<b>T</b>';
    const computerrss = 'I’m a <b>full-stack software engineer</b> and <b>offensive cyber security expert</b>.';
    const aaahhhhh = 'I like <b>computers</b>, <b>engineering</b>, and <b>learning new things</b>! c:';

    if (isBrowser) {
        return (
            <div className='browser'>
                <table>
                    <tbody>
                        <tr>
                            <td><span>🌎</span>{Parser(location)}</td>
                            <td><span>🏳️‍🌈</span>{Parser(gayyyyy)}</td>
                            <td><span>🖥️</span>{Parser(computerrss)}</td>
                            <td><span>❤️</span>{Parser(aaahhhhh)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    } else {
        return (
            <div className='mobile'>
                <table className='mobile-about'>
                    <tbody>
                        <tr>
                            <th>🌎</th>
                            <td>{Parser(location)}</td>
                        </tr>
                        <tr>
                            <th>🏳️‍🌈</th>
                            <td>{Parser(gayyyyy)}</td>
                        </tr>
                        <tr>
                            <th>🖥️</th>
                            <td>{Parser(computerrss)}</td>
                        </tr>
                        <tr>
                            <th>❤️</th>
                            <td>{Parser(aaahhhhh)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
