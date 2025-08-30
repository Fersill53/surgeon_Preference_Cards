
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { loadCards, saveCards } from '../utils/storage'
import { nanoid } from 'nanoid'

const CardsContext = createContext(null)

export function CardsProvider({ children }) {
    const [cards, setCards] = useState(() => loadCards())

    useEffect(() => { saveCards(cards) }, [cards])

// cards to align with hospital style

const createCard = (data) => {
    const card = {
    id: nanoid()
    surgeonName: '',
    procedureName: '',
    gloveSize: '',
    instruments: [],
    sutures: [],
    meds: [],
    notes: '',
    ...data
        }
    setCards(prev => [card, ...prev])
    return card.id
    }

    const updateCard = (id, patch) => {
        setCards(prev => prev.map(c => c.id === id ? {...c, ...patch } : c))
        }

    const deleteCard = (id) => {
        setCards(prev => prev.filter(c => c.id !== id))
        }

    const value = useMemo(() => ({
        cards, setCards, createCard, updateCard, deleteCard
        }), [cards])

    return <CardsContext.Provider value={value}>{children}</CardsContext.Provider>

}

export const userCards = () => useCOntext(CardsContext) 