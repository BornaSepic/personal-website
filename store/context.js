import React, {useState, useEffect} from "react";

export const AnimationStateContext = React.createContext(null);

export const AnimationStateProvider = (props) => {
    const [homepageLoaded, setHomepageLoaded] = useState(false);
    const [homepageLoadedFirst, setHomepageLoadedFirst] = useState(undefined);

    function handleHomepageStatusChange(status) {
        setHomepageLoaded(status);
    }

    function handleHomepageLoadedFirst(status) {
        setHomepageLoadedFirst(status);
    }



    return (
        <AnimationStateContext.Provider value={{
            homepageLoaded,
            handleHomepageStatusChange,
            homepageLoadedFirst,
            handleHomepageLoadedFirst
        }}>
            {props.children}
        </AnimationStateContext.Provider>
    );
};