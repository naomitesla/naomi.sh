// import Console from './Console';
import './Console.scss'

export default function ConsoleOutput() {

    const ps1 = (<span>user0001<b>@</b>naomi-sh<b>:</b>~<b>$</b></span>);
    const shell_break = (<span>&emsp;&emsp;&emsp;</span>);

    return (
        <div className='console'>
            <div>
                {ps1} source ~/.naomish-rc
            </div>
            <div>
                {ps1} chmod +x naomi.sh
            </div>

            <div>
                {ps1} ./naomi.sh
            </div>
            <div>
                <br />
                <br />
                {shell_break} Initialized web service at: &nbsp;<b>naomi.sh</b>:<b>443</b>&nbsp; c:
                <br />
                <br />
                <br />
            </div>
            <div>
                {ps1} <span className='cursor'>▍</span>
            </div>
        </div>
    );
}
