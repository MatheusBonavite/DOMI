import { roboto } from '@theme-ui/presets';

const linkButtonTheme = {
    ...roboto,
    containers:{
        linkButton:{
            display: 'inline-block',
            color: '#fff',
            backgroundColor: '#13a4a4',
            padding: '0.5em 2em',
            borderRadius: '0.5em',
            textDecoration: 'none',
            boxShadow: '0.5em 0.25em #ffa500',
            ":hover":{
                backgroundColor: '#ffa500',
                boxShadow: '0.5em 0.25em #13a4a4'
            }
        }
    }
}

export default linkButtonTheme;