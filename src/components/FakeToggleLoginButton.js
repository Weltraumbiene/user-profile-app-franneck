import { Button } from 'react-bootstrap';

// ToggleButton-Komponente für den Login-Status
function FakeToggleLoginButton({ isLoggedIn, onToggle }) {
    return (
      <Button variant="secondary" onClick={onToggle} style={{position:"absolute", right:100, top:100}}>
        {isLoggedIn ? 'Ausloggen' : 'Einloggen'}
      </Button>
    );
}

export default FakeToggleLoginButton;