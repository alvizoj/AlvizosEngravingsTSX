import { useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

function ScrollToTop({ history }: RouteComponentProps) {
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
}

export default withRouter(ScrollToTop);
