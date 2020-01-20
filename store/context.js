import React, {useState, useEffect} from "react";

export const AnimationStateContext = React.createContext(null);

export const AnimationStateProvider = (props) => {
    const [homepageLoaded, setHomepageLoaded] = useState(false);

    function handleHomepageStatusChange(status) {
        setHomepageLoaded(status);
    }

    return (
        <AnimationStateContext.Provider value={{
            homepageLoaded,
            handleHomepageStatusChange
        }}>
            {props.children}
        </AnimationStateContext.Provider>
    );
};