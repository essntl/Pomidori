function TimerCircle() {
    return (
        <>
            <div>
                <svg viewBox="0 0 300 300">
                    <circle
                        class="progress-ring__circle"
                        stroke="rgb(251, 195, 24)"
                        stroke-width="8"
                        fill="rgb(255, 255, 255, 0.7)"
                        r="120"
                        cx="150"
                        cy="150"
                    />

                    <g class="candle" transform="translate(200, 280)">
                        <rect
                            x="-65"
                            y="-180"
                            width="30"
                            height="60"
                            fill="#f8e5d5"
                            rx="3"
                        />
                        <rect
                            x="-62"
                            y="-180"
                            width="24"
                            height="60"
                            fill="#ffe8d6"
                            rx="2"
                        />
                        <rect x="-51.5" y="-185" width="3" height="8" fill="#2c2c2c" />

                        <g class="flame">
                            <ellipse
                                cx="-50"
                                cy="-185"
                                rx="8"
                                ry="12"
                                fill="#ff6b35"
                                opacity="0.8"
                            />
                            <ellipse
                                cx="-50"
                                cy="-185"
                                rx="5"
                                ry="9"
                                fill="#ffaa00"
                                opacity="0.9"
                            />
                            <ellipse cx="-50" cy="-185" rx="3" ry="6" fill="#fff4a3" />
                            <ellipse
                                cx="-50"
                                cy="-185"
                                rx="12"
                                ry="16"
                                fill="#ff6b35"
                                opacity="0.2"
                            />
                        </g>
                    </g>

                    <text
                        x="150"
                        y="190"
                        class="timer-text"
                        text-anchor="middle"
                        dominant-baseline="middle"
                    >
                        <tspan class="hours">00</tspan>
                        :
                        <tspan class="minutes">25</tspan>
                        :
                        <tspan class="seconds">00</tspan>
                    </text>
                    <text
                        x="150"
                        y="220"
                        text-anchor="middle"
                        dominant-baseline="middle"
                    >
                        <tspan class="timer-status">Idle</tspan>
                        -
                        <tspan class="loop-count">Loop 1/2</tspan>
                    </text>
                </svg>
            </div>

        </>
    );
}

export default TimerCircle;