const KEY = 'scrubstack_cards'

export function saveCards(cards) {
    localStorage.setItem(KEY, JSON.stringify(cards))
}

export function loadCards() {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : []
}