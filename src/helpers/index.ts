export function getDifferenceYear(year: number)  {
    return new Date().getFullYear() - year;
}

export function calculateBrand(brand: string) {
    let incremet = 0;

    switch (brand) {
        case "1":
            incremet = 1.3;
            break;
        case "2":
            incremet = 1.15;
            break;
        case "3":
            incremet = 1.05;
            break;
        default:
            break;
    }

    return incremet;
};

export function claculatePlan(plan: string | number) {
    return plan === "1" ? 1.2 : 1.5
};

export function formatMoney(amount: string | number) {
    return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}