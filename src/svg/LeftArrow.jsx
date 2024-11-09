const LeftArrow = () => {
    return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_40_214)">
                <rect x="12" y="8" width="32" height="32" fill="white"/>
            </g>
            <path d="M29.121 29L24.828 24.707H34.414V22.707H24.828L29.121 18.414L27.707 17L21 23.707L27.707 30.414L29.121 29Z" fill="#FFB568"/>
        <defs>
            <filter id="filter0_d_40_214" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="6"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0.1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_40_214"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_40_214" result="shape"/>
            </filter>
        </defs>
        </svg>
    )
}

export default LeftArrow;