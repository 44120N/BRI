import { Button as MuiButton } from '@mui/material';

const Button = ({ children, onClick, sx, color, bgcolor, bdcolor, startIcon, disabled }) => {
    return (
        <MuiButton
            onClick={onClick}
            variant="contained"
            disableElevation
            sx={{
                minWidth: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1% 2%',
                fontSize: {sm:'.8em',md:'1em'},
                fontWeight: 600,
                background: `${bgcolor}`,
                color: `${color}`,
                textTransform: 'none',
                border: `2px solid ${bdcolor}`,
                borderRadius: '8px',
                boxShadow: `5px 5px 0px ${bdcolor}`,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                    transform: 'translate(5px, 5px)',
                    boxShadow: 'none',
                },
                '&:active': {
                    transform: 'translate(2px, 2px)',
                },
                ...sx,
                '&.Mui-disabled': {
                    background: '#aaa',
                    color: '#555',
                    boxShadow: 'none',
                    transform: 'none',
                },
            }}
            startIcon={startIcon}
            disabled={disabled}
        >
            {children}
        </MuiButton>
    );
};

export default Button;
