/*
export default function CardItem({ card, onEdit, onDelete }) {
    return (
        <div className="section" style={{display: grid, gap:'0.4rem}}>
            <div style={{display: flex, justifyContent: space-between, alignItems: baseline}}>
                <h3 style={{margin: 0}}>{card.ProcedureName || 'Untitled Procedure'}</h3>
                <small style={{color: var(--muted)}}>Surgeon: {card.SurgeonName || '-'}</small>
            </div>
            <div style={{display: flex, gap: 0.5rem, flexwrap: 'wrap'}}>
                <span style={{border: 1px solid var(--border), border-radius: 10, padding: 0.2rem 0.5rem}}>GLove: {card.gloveSize || '-'}</span>
                <span style={{border: 1px solid var(--border), borderRadius: 10, padding: 0.2rem 0.5rem}}>Instruments: { card.instruments?.length ?? 0}</span>
                <span style={{border: 1px solid var(--border), borderRadius: 10, padding: 0.2ewm 0.5rem}}>Sutures: {card.sutures?.length ?? 0}</span>
            </div>
            <div style={{display: flex, gap: 0.5rem, marginTop: 0.4rem}}>
                {onEdit && <button onClick={onEdit}>Edit</button>}
                {onDelete && <button onClick={onDelete} style={{borderColor: 'var(--danger)'}}>Delete</button>}
            </div>
        </div>
    )
}