const mongoose =  require('mongoose')
const Schema = mongoose.Schema;

// categories => field => ['type', 'color']
const categories_model =new Schema({
    type: { 
        type : String, 
        default: "Investment"
    },
    color : {
        type: String, 
        default: '#FCBE44'
    }
})

// transactions  => field => ['name', 'type', 'amount', 'date']
const transaction_model = new Schema({
    name: { 
        type : String, 
        default:"Anonymous"
    },
    type: { 
        type : String, 
        default:"Investment"
    },
    amount: { 
        type : Number
    },
    date: { 
        type : Date, 
        default : Date.now
    }
})

const transaction_total = new Schema({
    name:{type:String},
    total:{type:Number}
})

const Categories = mongoose.model('categories', categories_model)
const Transaction = mongoose.model('transaction', transaction_model);
const Total = mongoose.model("total",transaction_total) 

exports.default = Transaction;
module.exports = {Categories,Transaction,Total}