import React from 'react'
import classes from './TeamMember.module.css'

type TeamMemberProps = {
    id: number
    image: string
    memberName: string
    memberPos: string
} 

const TeamMember = ({id, image, memberName, memberPos}:TeamMemberProps) => {
  return (
    <div className={classes.team_member}>
        <div><img src={image} alt="team_member" /></div>
        <div className={classes.team_member_details}>
            <h4 className={classes.team_member_name}>{memberName}</h4>
            <div className="d-f jc-sb">
                <div className={classes.team_member_pos}>{memberPos}</div>
                <div className={classes.team_member_social}>
                    <div><img src="/images/insta.png" alt="insta" /></div>
                    <div><img src="/images/fb.png" alt="fb" /></div>
                    <div><img src="/images/twiter.png" alt="twiter" /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeamMember