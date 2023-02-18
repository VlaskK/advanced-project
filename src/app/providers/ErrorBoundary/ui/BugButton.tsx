import { Button } from 'shared/ui/Button/Button';
import { useState, useEffect } from 'react';

// test component
export const BugButton = () => {
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    const onThrow = () => setError(true);
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Button onClick={onThrow}>
            throw error
        </Button>
    );
};
