import React, { useState } from "react";

export function MobileTestComponent(props: React.HTMLAttributes<HTMLDivElement>) {
    const [mobile, setMobile] = useState(false);
    console.log('render');
    return (
        <div className={mobile ? 'mobile' : ''} style={{height: '100%'}}>
            {props.children}
            <button
                style={{position: 'absolute', top: 0, right: 0, zIndex: 2}}
                onClick={() => setMobile(!mobile)}
            >
                Mobile? {mobile ? 'yes' : 'no'}
            </button>
        </div>
    )
}
