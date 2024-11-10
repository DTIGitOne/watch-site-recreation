import '../css/svg.css';

const NewIcon = ({open}) => {
    return (
        <svg className='NewIcon' width="61" height="31" viewBox="0 0 61 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="61" height="31" fill={open ? "var(--primary-button2-color)" : "var(--primary-homeImageBox-color)"}/>
            <path d="M24.271 20H22.665L18.5454 13.4429V20H16.9395L16.9395 10.7578H18.5454L22.6777 17.3403V10.7578L24.271 10.7578V20ZM31.5708 15.874L27.7749 15.874V18.7178H32.2119V20H26.1689V10.7578L32.1675 10.7578V12.0527L27.7749 12.0527V14.6045L31.5708 14.6045V15.874ZM40.7686 17.7148L42.1904 10.7578H43.7837L41.6509 20H40.1147L38.3564 13.2524L36.5601 20H35.0176L32.8848 10.7578H34.478L35.9126 17.7021L37.6772 10.7578H39.0229L40.7686 17.7148Z" fill="white"/>
        </svg>
    );
}

export default NewIcon;