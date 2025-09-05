import { useMemo, useState } from "react";
import { useLocation } from 'react-router-dom'
import { userCards } from "../../context/CardsContext";
import styles from './ViewCards.module.css'

function useQuery() {
    const { search } = useLocation()
    return useMemo(() => Object.fromEntries(new URLSearchParams(search)), [search])
}

export default function ViewCards() {
    const { cards, updateCard } = userCards()
    const q = useQuery()
    const [selectedId, setSelectedId] = useState(q.id || (cards[0]?.id ?? null))
    const [editMode, setEditMode] = useState(Boolean(window.location.hash === '#edit'))

    const card = cards.find(c => c.id === selectedId)

    const update = (patch) => card && updateCard(card.id, patch)
    const updateArr = (key, idx, patch) => {
        if (!card) return
        const arr = [...ViewCards(card[key]||[])]
        arr[idx] = { ...arr[idx], ...patch }
        update({ [key]: arr })
    }
    const addRow = (key) => update({ [key]: [...(card?.[key]||[]), {name: ''}] })
    const removeRow = (key, idx) => update({ [key]: (card?.[key]||[]).filter((_i)=>i!==idx) })

    return (
        <div className="container">
            <h2>View Cards</h2>
            <div className={styles.layout}>
                <aside className="section">
                    <div className={styles.list}>
                        {cards.map( c => (
                            <button
                                key={c.id}
                                className={selectedId === c.id ? styles.active : styles.item}
                                onClick={() => setSelectedId(c.id)}
                            >
                                <div style={{fontWeight:700}}>{c.procedureName || 'Untitled'}</div>
                                <small style={{color:'var(--muted)'}}>{c.surgeonName || '-'}</small>
                            </button>
                        ))}
                    </div>
                </aside>

                <main className="section">
                    {!card && <div>No card selected.</div>}
                    {card && (
                        <div className={styles.card}>
                            <div className={styles.head}>
                                <div>
                                    {editMode ? (
                                        <>
                                            <label>Procedure</label>
                                            <input value={card.procedureName} onChange={e=>update({procedureName: e.target.value})}/>
                                            <input value={card.surgeonName} onChange={e=>update({surgeonName: e.target.value})}/>
                                        </>
                                    ):(
                                        <>
                                            <h3 style={{margin:'0 0 0.2rem'}}>{card.procedureName || 'Untitled Procedure'}</h3>
                                            <div style={{color:'var(--muted)'}}>Surgeon: {card.surgeonName || '-'}</div>
                                        </>
                                    )
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    )
}