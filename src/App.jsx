import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchCustomers } from './asyncAction/customers';
import { acyncAddCashAction, acyncGetCashAction, addCashAction, getCashAction } from './store/cashReducer';
import { acyncAddManyCustomersAction, addCustomerAction, removeCustomerAction } from './store/customerReducer';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="app">
      <div>{cash}</div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <button onClick={() => dispatch(acyncAddCashAction())}>Пополнить счет</button>
        <button onClick={() => dispatch(acyncGetCashAction())}>Снять со счета</button>
        <button onClick={() => dispatch(acyncAddManyCustomersAction())}>Получить клиентов из базы</button>
      </div>
        {customers.length > 0 ? 
        <div>
          {customers.map(customer => 
            <div onClick={() => removeCustomer(customer)} style={{fontSize: '2rem', border: '1px solid black', padding: '10px 10px'}}>
              {customer.name}
              </div>
          )}
        </div> : 
        <div style={{fontSize: '2rem'}}>
          Клиенты отсутствуют!
        </div>
        }
    </div>
  );
}

export default App;
