import { useState } from 'react';
import './TwitterFollowCard.css';
import PropTypes from 'prop-types';
export function TwitterFollowCard({userName, children, initialIsFollowing}) {
    const [isFollowing, setIsFollowing]= useState(initialIsFollowing);
    const text= isFollowing ? 'Following' : 'Follow';
    const buttonClassName= isFollowing ? 'tw-button is-following' : 'tw-button';
    const handleClick= ()=>{
        setIsFollowing(!isFollowing);
    }
    return (
        <article className="tw-cardArticle">
            <header className="tw-cardHeader">
                <img className="tw-avatar" src="https://pbs.twimg.com/profile_images/1504511047192961030/XaO5uOe4_400x400.jpg" alt="" />
                <div className="tw-info">
                    <strong className="tw-name">{children}</strong>
                    <span className="tw-username">@{userName}</span>
                </div>
            </header>
            <aside className="tw-cardAside">
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-follow">{text}</span>
                    <span className="tw-unfollow">Unfollow</span>
                </button>
            </aside>
        </article>
    );
}

TwitterFollowCard.propTypes = {
    userName: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    initialIsFollowing: PropTypes.bool
}