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
        default:
            break;
    }

}

export default GlobalSVGSelector