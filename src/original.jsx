import { useState } from 'react'

export default function ExpandableProfileCard() {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className={`profile-card ${expanded ? 'is-expanded' : ''}`}>
      <button
        className="profile-card-toggle"
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((value) => !value)}
      >
        <span className="profile-mark">M</span>
        <span className="profile-summary">
          <span className="profile-name">Mintify</span>
          <span className="profile-role">Money basics for Indian teens</span>
        </span>
        <span className="profile-action">{expanded ? 'Close' : 'Open'}</span>
      </button>
      {expanded && (
        <div className="profile-details">
          <p>Clear, practical lessons on saving, demat accounts, SIPs, stocks, and risk—written without the financial fog.</p>
          <div className="profile-links">
            <a href="#lessons">Browse lessons</a>
            <a href="#calculator">Use the SIP calculator</a>
          </div>
        </div>
      )}
    </article>
  )
}
