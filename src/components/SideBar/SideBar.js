import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SideBar.css'

const SideBar = () => {
    return (
        <div className='side-bar'>
            <div className='personal-data'>
                <img src="https://scontent.fdac27-2.fna.fbcdn.net/v/t39.30808-6/311022107_832568461262824_5754410814558442546_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jVFQYGlNPdUAX_rh-kr&_nc_ht=scontent.fdac27-2.fna&oh=00_AT8Vc85kqAsS4uXAo6RI7Ys3XuO0TuSeZDcw6q7RO-sGig&oe=634881A1" alt="mahimur" />
                <div className='personal-info'>
                    <h3>Mahimur R. Mahim</h3>
                    <div className='location'>
                        <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                        <p>Sylhet, Bangladesh</p>
                    </div>
                </div>
            </div>
            <div className='physical-info'>
                <div>
                    <div className='weight'>
                        <h2>75</h2>
                        <small>kg</small>
                    </div>
                    <p>Height</p>
                </div>
                <div>
                    <div className='height'>
                        <h2>6.5</h2>
                    </div>
                    <p>Height</p>
                </div>
                <div>
                    <div className='age'>
                        <h2>22</h2>
                        <small>yrs</small>
                    </div>
                    <p>Age</p>
                </div>
            </div>
            <div className='add-break'>
                <p>Add A Break</p>
                <div className='break-time'>
                    <button className='btn-break'>5m</button>
                    <button className='btn-break'>10m</button>
                    <button className='btn-break'>15m</button>
                    <button className='btn-break'>20m</button>
                    <button className='btn-break'>25m</button>
                </div>
            </div>
            <div className='ex-details'>
                <p className='ex-title'>Exercise Details</p>
                <div className='ex-time'>
                    <h3>Exercise time</h3>
                    <p>200 minutes</p>
                </div>
                <div className='br-time'>
                    <h3>Break time</h3>
                    <p>20 minutes</p>
                </div>
            </div>
            <button className='btn-complete'>Activity Completed</button>
        </div>
    );
};

export default SideBar;