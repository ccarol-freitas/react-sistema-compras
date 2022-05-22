import "./style.css";
import { useState } from "react";
import { IProducts } from "../../types/products";
import { v4 as uid } from "uuid";

const Form = () => {
  const [products, setProducts] = useState<IProducts[]>([])
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState<number>(0);
  const [date, setDate] = useState('');

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setProducts((products) => [
      ...products,
      {
        id: uid(),
        name,
        amount,
        price, 
        date
      }, 
    ])
    setName: ("name");
    setAmount: (0);
    setPrice: (0);
    setDate: ('20/10/22');
    console.log("olá", typeof products);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend></legend>
          <input
            type="text"
            value={name}
            id="name"
            placeholder="Informe o produto"
            onChange={(event) => setName(event.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend></legend>
          <input
            type="number"
            value={amount}
            id="amount"
            placeholder="Informe a quantidade"
            onChange={(event) => setAmount(event.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend></legend>
          <input
            type="number"
            value={price}
            id="price"
            placeholder="Informe o preço"
            onChange={(event) => setPrice(event.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend></legend>
          <input
            type="date"
            value={date}
            id="date"
            placeholder="Selecionar data"
            onChange={(event) => setDate(event.target.value)}
          />
        </fieldset>

        
      <div>
        <button type="submit">Adicionar Item</button>
      </div>
      </form>

    </div>
  );
};

export default Form;
