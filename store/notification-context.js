import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { createContext, useState } from "react";

const NotificationContext = createContext({
    Notification: null, // { title, message, status}
    showNotification: function() {},
    hideNotification: function() {}
});

export function NotificationContextProvider(props) {
    
    
    return (
        <NotificationContext.Provider>
            {props.children}
        </NotificationContext.Provider>
    )
}

export default NotificationContext;