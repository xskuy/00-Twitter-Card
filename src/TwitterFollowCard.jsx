
import PropTypes from 'prop-types';
import { useState } from 'react';


export function TwitterFollowCard({ formatUsarName, userName = 'unkmnow', name, initIsFollow }) {
  const [isFollow, setIsFollow] = useState(initIsFollow)
  const text = isFollow ? 'Following' : 'Follow'
  const buttonClass = isFollow ? 'tw-follow-card-button is-following' : 'tw-follow-card-button'

  const handleClick = () => {
    setIsFollow(!isFollow)
  }
  return (
    <article className="tw-follow-card">
      <header className="tw-follow-card-header">
        <img
          className="tw-follow-card-avartar"
          src={`https://unavatar.io/${userName}`} alt="imagen1" />
        <div className="tw-follow-card-info">
          <strong>{name}</strong>
          <span className="tw-follow-card-usuari">{formatUsarName(userName)}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClass} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Unfollow</span>
        </button>
      </aside>
    </article>
  )
}


TwitterFollowCard.propTypes = {
  formatUsarName: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  initIsFollow: PropTypes.bool
};

export default TwitterFollowCard;

