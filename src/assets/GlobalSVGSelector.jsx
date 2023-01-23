import React from 'react'

const GlobalSVGSelector = ({ type }) => {



    switch (type) {
        case "add_file":
            return (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 12.5C12.5 12.7652 12.3946 13.0196 12.2071 13.2071C12.0196 13.3946 11.7652 13.5 11.5 13.5H2.5C2.23478 13.5 1.98043 13.3946 1.79289 13.2071C1.60536 13.0196 1.5 12.7652 1.5 12.5V1.5C1.5 1.23478 1.60536 0.98043 1.79289 0.792893C1.98043 0.605357 2.23478 0.5 2.5 0.5H7.5L12.5 5.5V12.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7 5.50122V9.49866" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5.00128 7.5H8.99872" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            )
        case "add_folder":
            return (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1205_3254)">
                        <path d="M0.5 11.75V2.25C0.5 1.98478 0.605357 1.73043 0.792893 1.54289C0.98043 1.35536 1.23478 1.25 1.5 1.25H5.19C5.41843 1.24335 5.64226 1.31513 5.82421 1.45341C6.00615 1.5917 6.13525 1.78812 6.19 2.01L6.5 3.25H12.5C12.7652 3.25 13.0196 3.35536 13.2071 3.54289C13.3946 3.73043 13.5 3.98478 13.5 4.25V11.75C13.5 12.0152 13.3946 12.2696 13.2071 12.4571C13.0196 12.6446 12.7652 12.75 12.5 12.75H1.5C1.23478 12.75 0.98043 12.6446 0.792893 12.4571C0.605357 12.2696 0.5 12.0152 0.5 11.75Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.13 6.25V9.75" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.38 8H8.88" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1205_3254">
                            <rect width="14" height="14" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

            )
        case "reload":
            return (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1206_777)">
                        <path d="M11 9L13 8.5L13.5 10.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13 8.5C12.5558 9.75861 11.749 10.8576 10.6813 11.6584C9.61353 12.4592 8.33262 12.926 6.99999 13C5.7681 13.0002 4.566 12.6213 3.55697 11.9146C2.54794 11.2079 1.78088 10.2078 1.35999 9.05" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3 5L1 5.5L0.5 3.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1 5.5C1.84 3.2 4.42 1 7 1C8.23789 1.00348 9.4444 1.38976 10.4541 2.10588C11.4639 2.822 12.2274 3.8329 12.64 5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1206_777">
                            <rect width="14" height="14" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

            )
        case "arrow":
            return (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.71002 0.5L11.85 6.65C11.8979 6.69489 11.936 6.74911 11.962 6.80931C11.9881 6.8695 12.0015 6.9344 12.0015 7C12.0015 7.0656 11.9881 7.1305 11.962 7.19069C11.936 7.25089 11.8979 7.30511 11.85 7.35L5.71002 13.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2 0.5V13.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                </svg>


            )
        case "arrowVertical":
            return (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 3.84998L6.65 9.99998C6.69489 10.0478 6.74911 10.0859 6.80931 10.112C6.8695 10.138 6.9344 10.1515 7 10.1515C7.0656 10.1515 7.1305 10.138 7.19069 10.112C7.25089 10.0859 7.30511 10.0478 7.35 9.99998L13.5 3.84998" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            )
        case "close":
            return (
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1206_1621)">
                        <path d="M13.5 1.44287L0.5 14.4429" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M0.5 1.44287L13.5 14.4429" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1206_1621">
                            <rect width="14" height="14" fill="white" transform="translate(0 0.942871)" />
                        </clipPath>
                    </defs>
                </svg>

            )
        case "tree":
            return (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1206_758)">
                        <path d="M2.5 9C3.60457 9 4.5 8.10457 4.5 7C4.5 5.89543 3.60457 5 2.5 5C1.39543 5 0.5 5.89543 0.5 7C0.5 8.10457 1.39543 9 2.5 9Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.5 4.5C12.6046 4.5 13.5 3.60457 13.5 2.5C13.5 1.39543 12.6046 0.5 11.5 0.5C10.3954 0.5 9.5 1.39543 9.5 2.5C9.5 3.60457 10.3954 4.5 11.5 4.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.5 13.5C12.6046 13.5 13.5 12.6046 13.5 11.5C13.5 10.3954 12.6046 9.5 11.5 9.5C10.3954 9.5 9.5 10.3954 9.5 11.5C9.5 12.6046 10.3954 13.5 11.5 13.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3.71002 5.40998L9.56002 2.97998" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3.71002 8.59003L9.56002 11.02" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1206_758">
                            <rect width="14" height="14" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

            )
        default:
            break;
    }

}

export default GlobalSVGSelector