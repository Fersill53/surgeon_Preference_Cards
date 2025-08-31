import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useCards } from './../context/CardsContext'
import styles from './AddCard.module.css'

export default function AddCard() {
    const nav = useNavigate()
    const { createCard } = useCards()
    const [form, setForm] = useState({
        surgeonName: '',
        procedureName: '',
        gloveSize: '',
        notes: '',
        instruments: [{ name: '' }],
        sutures: [{ name: '' }]
    })

    const update = (key, value) => setForm(prev => ({ ...prev, [key]: value }))

    const updateArray = (key, idx, patch) => {
        setForm(prev => {
            const arr = [...prev[key]]
            arr[idx] = { ...arr[idx], ...patch }
            return { ...prev, [key]: arr}
        })
    }

    const addRow = (key) => setForm(prev => ({ ...prev, [key]: [...prev[key], {name: ''}] }))
    const removeRow = (key, idx) => setForm(prev => ({ ...prev, [key]: prev[key].filter((_,i) => i!==idx)}))

    const onSubmit = (e) => {
        e.preventDefault()
        const id = createCard(form)
        nav('/cards/view')
    }

    return (
        <div className="container">
            <form className={`section ${styles.form}`} onSubmit={{onSubmit}}>
                <h2>New Preference Card</h2>

                <div className={styles.grid}>
                    <div>
                        <label>Surgeon Name</label>
                        <input value={form.surgeonName} onChange={e=>update('surgeonName', e.target.value)} />
                    </div>
                    <div>
                        <label>Procedure Name</label>
                        <input value={form.procedureName} onChange={e=>update('procedureName', e.target.value)} />
                    </div>
                    <div>
                        <label>Glove Size</label>
                        <input value={form.gloveSize} onChange={e=>update('gloveSize', e.target.value)} />
                    </div>
                </div>

                <div>
                    <label>Instruments</label>
                    <div className={styles.rows}>
                        {form.instruments.map((it, idx) => (
                            <div key={idx} className={styles.row}>
                                <input placeholder="Name" value={it.name} onChange={e=>updateArray('instruments', idx, { name: e.target.value })} />
                                <button type="button" onClick={()=>removeRow('instruments', idx)}>Remove</button>
                            </div>
                        ))}
                        <button type="button" onClick={()=>addRow('instruments')}>+ Add Instruments</button>
                    </div>
                </div>

                <div>
                    <label>Sutures</label>
                    <div className={styles.row}>
                        {form.sutures.map((it, idx) => (
                            <div key={idx} className={styles.row}>
                                <input placeholder="Name" value={it.name} onChange={e=>updateArray('sutures', idx, { name: e.target.value })} />
                                <button type="button" onClick={()=>removeRow('sutures', idx)}>Remove</button>
                            </div>
                        ))}
                        <button type="button" onClick={()=> addRow('sutures')}>+ Add Suture</button>
                    </div>
                </div>

                <div>
                    <label>Special Notes</label>
                    <textarea rows="4" value={form.notes} onChange={e=>update('notes', e.target.value)} />
                </div>

                <div style={{display:'flex', gap:'0.6rem'}}>
                    <button type="submit">Save Card</button>
                    <button type="button" onClick={()=>nav(-1)}>Cancel</button>
                </div>

            </form>
        </div>
    )
}