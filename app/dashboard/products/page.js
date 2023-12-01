import Image from "next/image";
import Link from "next/link";
import styles from "../../ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { productsFetch } from "@/app/db/data";
import { deleteProduct } from "@/app/lib/actions";
const ProductsPage = async (props) => {
  const searchParams = props.searchParams;
  const query = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { products, count } = await productsFetch(query, page);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a Product" />
        <Link href={"/dashboard/products/add"}>
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <div className={styles.productsTable}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <td>Title</td>
              <td>Description</td>
              <td>Price</td>
              <td>Created At</td>
              <td>Stock</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>
                    <div className={styles.product}>
                      <Image
                        src={product.img|| '/noproduct.jpg'}
                        alt={product.title}
                        width={40}
                        height={40}
                        className={styles.productImage}
                      />
                      {product.title}
                    </div>
                  </td>
                  <td>{product.desc}</td>
                  <td>{product.price}</td>
                  <td>{product.createdAt.toString().slice(4, 16)}</td>
                  <td>{product.stock}</td>
                  <td>
                    <div className={styles.buttons}>
                      <Link href={`/dashboard/products/${product.id}`}>
                        <button className={`${styles.button} ${styles.view}`}>
                          view
                        </button>
                      </Link>
                        <form action={deleteProduct}>
                        <input type="hidden" name="id" value={product.id} />
                        <button type="submit" className={`${styles.button} ${styles.delete}`}>
                          delete
                        </button>
                        </form>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination  count={count}/>
      </div>
    </div>
  );
};

export default ProductsPage;
