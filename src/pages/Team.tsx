import React from 'react'
import './css/Team.css'
import Newsletter from '../components/Newsletter/Newsletter'
import TeamMembersList from '../components/TeamMembersList/TeamMembersList'
import TeamMember from '../components/TeamMember/TeamMember'

const Team = () => {
    return (
        <>
            <main className='team-main'>
                <h1 className="team-title">Portfolio Standart</h1>
            </main>
            <div className="team-box d-f jc-sb">
                {
                    TeamMembersList.map((member) => {
                        return (
                            <TeamMember
                                id={member.id}
                                image={member.image}
                                memberName={member.memberName}
                                memberPos={member.memberPos}
                            />
                        )
                    })
                }
            </div>
            <Newsletter />
            <div style={{ marginBottom: "120px" }}></div>
        </>
    )
}

export default Team
