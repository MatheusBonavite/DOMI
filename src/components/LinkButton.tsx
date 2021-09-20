/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ThemeProvider } from 'theme-ui';
import linkButtonTheme from '../themes/linkButtonTheme';

const LinkButton = () => {
    return (
        <ThemeProvider theme={linkButtonTheme}>
            <button sx={{variant:'containers.linkButton'}}>
                Click Me!
            </button>
        </ThemeProvider>
    );
}

export default LinkButton;