import React from 'react'

function WorkCardBadges(props) {
    console.log(props.badges);

    const badge = props.badges.map((badge) =>
    <p>{badge}</p>
    )


    return (
        <div className="work-card-badges">
          {badge}
        </div>
    )
}

export default WorkCardBadges
