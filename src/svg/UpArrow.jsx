const UpArrow = () => {
    return (
        <svg id="upArrow" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_53_371)">
                <rect x="12" y="8" width="32" height="32" />
            </g>
            <path d="M27 20.414V30H29V20.414L33.293 24.707L34.707 23.293L28 16.586L21.293 23.293L22.707 24.707L27 20.414Z" />
            <defs>
                <filter id="filter0_d_53_371" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="6"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0.1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_53_371"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_53_371" result="shape"/>
                </filter>
            </defs>
        </svg>
    );
}

export default UpArrow;