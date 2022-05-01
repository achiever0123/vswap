import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';

export const Timeline = (props) => {
    return (
        <div id='timeline' className='text-center'>
            <div className='row text-center logo'>
                <h1>Roadmap</h1>
            </div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Strategy 1"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Give 50% of every royalty generated by the NFTs, back to the holders. So the more you HOLD the more you EARN!</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                    <p>
                    
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Strategy 2"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Create another 5 sources of income independent of the NFTs, so we don't have to rely on the Sale-Purchase of our assets.</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
                    <p>
                    
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Strategy 3"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<StarIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Give 20% of the total benefits generated by the other 5 sources of income.</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}
                    <p>
                    
                    </p>
                </VerticalTimelineElement>
                
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<StarIcon />}
                />
            </VerticalTimeline>

        </div>
    )
}
