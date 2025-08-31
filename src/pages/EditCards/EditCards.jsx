import { useNavigate } from 'react-router-dom'
import { useCards } from '../../context/CardsContext'
import CardItem from '../../components/CardItem'
import styles from './EditCards.module.CSS'

export default function EditCards() {
    const { cards, deleteCard } = useCards()
    const nav = useNavigate()

    return (
        <div className="container">
            <h2>Edit Existing Cards</h2>
            <div className={styles.grid}>
                {cards.length === 0 && <div className="section">No cards yet. Create one from "New Card".</div>}
                {cards.map(c => (
                    <CardItem
                        key={c.id}
                        card={c}
                        onEdit={() => nav(`/cards/view?id=${c.id}#edit`)}
                        onDelete={() => deleteCard(c.id)}
                        />
                ))}
            </div>
        </div>
    )
}