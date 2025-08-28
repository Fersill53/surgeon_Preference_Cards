/*
import {NavLink} from 'react-router-dom'

const linkstyle = ({ isActive }) => ({
    padding: '0.5rem 0.9rem',
    borderradius: '10px', 
    border: '1px solid var(--border)',
    background: isActive ? 'var(--accent)' : 'var(--surface),
    color: isActive ? 'white' : 'var(--text)',
    fontWeight: 600
    })

    export default function Navbar() {
    return (
        <nav style={{
            position: 'sticky', top: 0, zIndex: 50,
            background: 'rgba(9, 13, 26, 0.7)', backdropFilter: 'blur(12px)',
            borderBottom: '1px solid var(--border)
        }}>
            <div className="container" style={{display:'flex', gap: '0.6rem', alignItems:'center', paddingTop: '0.75rem', paddingBottom: '0.75rem'}}>
                <div style={{fontweight:800, marginRight: '1rem'}}>ScrubStack cards</div>
                <NavLink to="/" style={linkStyle} end>Home</NavLink>
                <NavLink to="/cards/edit" style={linkStyle}>Edit Cards</navLink>
                repeat for add, view, and quickview
            </div>
        </nav>
        )
    }
        */