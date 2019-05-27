let expenses = []

let totalAmt = 0

const getItems = (req,res) => {
    res.status(200).json(expenses)
}

const addItems = (req,res) => {
    expenses.unshift(req.body)
    totalAmt += totalAmt
    res.status(200).json(expenses)
}

const deleteItems = (req,res) => {
    const index = expenses.findIndex(element => element.expense.id == req.params.id)
    expenses.splice(index, 1)
    res.json(expenses)
}

const updateItems = (req,res) => {
expenses.expense[+req.params.id].category = req.body.category;
res.json(expenses);
}




module.exports = {
    getItems,
    addItems,
    deleteItems,
    updateItems
}