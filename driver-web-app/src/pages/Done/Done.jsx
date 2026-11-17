// driver-web-app/src/pages/Dashboard/Dashboard.jsx
import "./Done.css"

const Done = () => {
    return (
        <div className="flex min-h-screen justify-center items-center bg-success">
                <svg viewBox="0 0 100 100" className="h-50 w-50" fill="none"
                     stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
                    <g transform="rotate(-90 50 50)">
                        <circle cx="50" cy="50" r="45" pathLength="1" className="draw-ring" />
                    </g>
                    <path d="M30 52 L44 66 L70 36" pathLength="1" className="draw-check" />
                </svg>
        </div>
    )
}

export default Done