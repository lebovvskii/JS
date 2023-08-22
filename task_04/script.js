const salesData = [
    { month: "Январь", sales: 1000 },
    { month: "Февраль", sales: 2000 },
    { month: "Март", sales: 3000 },
    { month: "Январь", sales: 1500 },
    { month: "Февраль", sales: 2500 },
    { month: "Март", sales: 3500 },
    { month: "Январь", sales: 2000 },
    { month: "Февраль", sales: 3000 },
    { month: "Март", sales: 4000 },
];

const salesCount = (salesData) => {
    const count = {};
    for (sale of salesData) {
        const month = sale.month;
        if (count[month]) {
            count[month] += sale.sales;
        } else {
            count[month] = sale.sales;
        }
    }
    return count
}

salesCount(salesData)