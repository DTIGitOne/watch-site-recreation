const RightArrow = () => {
    return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_40_218)">
                <rect x="12" y="8" width="32" height="32" fill="white"/>
            </g>
            <path d="M27.293 29.293L28.707 30.707L35.414 24L28.707 17.293L27.293 18.707L31.586 23H22V25H31.586L27.293 29.293Z" fill="#FFB568"/>
        <defs>
            <filter id="filter0_d_40_218" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="6"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0.1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_40_218"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_40_218" result="shape"/>
            </filter>
        </defs>
        </svg>
    )
}

export default RightArrow;