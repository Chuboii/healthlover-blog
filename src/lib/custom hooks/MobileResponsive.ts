// 'use client'
// import { useEffect, useState } from "react";



// export const useMobileResponsive = (isScreenMobile: boolean) => {
//     const [isMobile, setIsMobile] = useState(isScreenMobile);

//     useEffect(() => {
//         const handleResize = () => {
//             const windowWidth = window.innerWidth;
//             setIsMobile(windowWidth <= 768);
//         };

//         handleResize();

//         window.addEventListener("resize", handleResize);

//         return () => {
//             window.removeEventListener("resize", handleResize);
//         };
//     }, []); 

//     return isMobile;
// };


