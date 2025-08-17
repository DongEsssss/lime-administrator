import './logo.scss'

function Logo() {
    return (
        <div className="logo"
            onClick={() => window.location.href = '/home'}>
            <svg
                width="40"
                height="40"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* 오른쪽 위 → 왼쪽 아래 대각선 */}
                <line
                    x1="90"
                    y1="25"
                    x2="30"
                    y2="85"
                    stroke="rgb(107 114 128)"
                    strokeWidth="3"
                    strokeLinecap="round"
                />

                {/* 원 3개 */}
                <circle cx="90" cy="25" r="5" fill="rgb(134 239 172)" opacity="0.9" />
                <circle cx="60" cy="55" r="6" fill="rgb(187 247 208)" opacity="0.85" />
                <circle cx="30" cy="85" r="5" fill="rgb(134 239 172)" opacity="0.9" />
            </svg>
        </div >
    );
}

export default Logo;
