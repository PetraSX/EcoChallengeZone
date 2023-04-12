import { MDBFooter } from 'mdb-react-ui-kit';

import insta from '../img/insta.svg'
import facebook from '../img/facebook.svg'

export default function Footer() {
    return (
        <MDBFooter className='text-center text-lg-left'>

            <div className='text-center p-3 text-light' style={{ backgroundColor: 'rgba(0, 86, 0, 1)' }}>
                <div>
                    <a className="mx-2" href="https://www.instagram.com/eco_challenge_zone/">
                        <img margin="auto" src={insta}></img>
                    </a>
                    <a className="mx-2" href="https://www.facebook.com/eco_challenge_zone/">
                        <img margin="auto" src={facebook}></img>
                    </a>

                </div>
                Copyright 2023 | Recycle for people, earn for yourself

            </div>
        </MDBFooter>
    );
}