let expenses = []

const getItems = (req,res) => {
    res.status(200).json(expenses)
}

const addItems = (req,res) => {
    expenses.unshift(req.body)
    res.status(200).json(expenses)
}

const deleteItems = (req,res) => {
    const index = expenses.findIndex(element => element.expense.id == req.params.id)
    expenses.splice(index, 1)
    res.json(expenses)
}





module.exports = {
    getItems,
    addItems,
    deleteItems
}