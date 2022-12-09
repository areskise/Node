import { useState, useEffect } from 'react';
import Transaction from '../../components/transaction/Transaction';
import axios from '../../utils/axios';
import './transactions.css';

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const limit = 8;

    useEffect(() => {
        axios.get(`/admin/transactions?limit=${limit}&page=${page}`)
            .then(res => {
                setTransactions(res.data.transactions)
                setTotalPage(Math.ceil(res.data.count/limit))
            })
            .catch(err => console.log(err));
    },[limit, page]);
    
    return (
        <div className="container">
            <div className="transactions__container">
                <div className='transactionsInfo'>
                    <div className="transactionsInfo__board">
                        <div className='transactionsInfo__board-title'>
                        <h2>Transactions List</h2>
                        </div>
                        <div className="transactionsInfo__board-table">
                            <Transaction 
                                transactions={transactions} 
                                page={page}
                                setPage={setPage}
                                totalPage={totalPage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Transactions;