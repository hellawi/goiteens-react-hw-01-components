import styles from './FriendListItem.module.css'
function FriendListItem({avatar, name, isOnline}){
    return(
        <li className="item">
            <span className={isOnline ? styles.spanAvailable : styles.spanUnavailable}>{isOnline}</span>
            <img src={avatar} alt="" className={styles.avatar} />
            <p className={styles.name}>{name}</p>
        </li>
    )
}

export default FriendListItem;