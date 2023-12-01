import { addProduct } from "@/app/lib/actions";
import styles from "../../../ui/dashboard/products/addProduct/addProduct.module.css";
const Add = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input autoComplete="off" type="text" name="title" placeholder="title" required />
        <select name="category" id="category" >
          <option value="general">selec a item</option>
          <option value="kitchen">kitchen</option>
          <option value="phone">phone</option>
          <option value="computer">computer</option>
        </select>
        <input type="number" name="price" placeholder="price" />
        <input type="number" name="stock" placeholder="stock" />
        <input type="text" name="color" placeholder="color" />
        <input type="number" name="size" placeholder="size" step={.1} />
        <textarea name="desc"  rows="10" placeholder="description">
          description
        </textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Add;
