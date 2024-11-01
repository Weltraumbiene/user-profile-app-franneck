

// ToggleButton-Komponente für den Login-Status
function FakeToggleLoginButton({ isLoggedIn, onToggle }) {
    return (
      <button onClick={onToggle} style={{position:"absolute", right:100, top:100}}>
        {isLoggedIn ? 'Ausloggen' : 'Einloggen'}
      </button>
    );
}

export default FakeToggleLoginButton;