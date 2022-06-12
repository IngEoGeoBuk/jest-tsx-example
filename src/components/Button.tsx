import React, { useState } from 'react'

const Button = () => {
    const [showAnotherButton, setShowAnotherButton] = useState<boolean>(false);

    return (
        <div>
            <button
                data-testid='button-show'
                onClick={() => {
                    setShowAnotherButton(true);
                }}
            >
                CLICK Show
            </button>
            {showAnotherButton && 
                <button 
                    data-testid='button-hide'
                    onClick={() => {
                        setShowAnotherButton(false);
                    }}
                >
                    CLICK hide
                </button>
            }
        </div>
    )

}

export default Button