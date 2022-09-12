export const getDiscount = (total, discount_amount, discount_type) => {
    if (discount_type === 'percent') {
    const price = total - ((discount_amount / 100) * total)
    return price
    }
    if (discount_type === 'fixed') {
        const price = total - discount_amount
        return price
    }

}
