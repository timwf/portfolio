import React from 'react'

function WorkCardBadges(props) {
    console.log(props.badges);

    const badge = props.badges.map((badge) =>
    <p className="badge">{badge}</p>
    )

    const designBadge = props.designBadges.map((badge) =>
    <p className="design-badge">{badge}</p>
    )

    const miscBadge = props.miscBadges.map((badge) =>
    <p className="misc-badge">{badge}</p>
    )




    return (
        <div className="work-card-badges">
          
          {badge}
          {designBadge}
          {miscBadge}
        </div>
    )
}

export default WorkCardBadges
