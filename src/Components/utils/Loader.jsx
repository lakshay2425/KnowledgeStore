import React from "react";
import { Progress, Spinner } from "@nextui-org/react";

export default function Loader() {
    const [value, setValue] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setValue((v) => (v >= 300 ? 0 : v + 70));
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <Progress
                aria-label="Downloading..."
                size="md"
                value={value}
                color="success"
                showValueLabel={true}
                className="max-w-md"
            />
            <Spinner label="Success" color="success" labelColor="success" />
        </div>

    );
}
