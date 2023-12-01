import Image from "next/image";
import styles from "../../../ui/dashboard/products/product/SingleProduct.module.css";
import { productFetch } from "@/app/db/data";
import { updateProduct } from "@/app/lib/actions";
const SingleUserPage = async ({ params }) => {
  const product = await productFetch(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src={product.img || "/noavatar.png"} alt="a" layout="fill" />
        </div>
        <div>Iphone</div>
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product?._id} />
          <label htmlFor="title">title</label>
          <input type="text" name="title" placeholder={product?.title} />
          <label htmlFor="price">price</label>
          <input type="number" name="price" placeholder={product?.price} />
          <label htmlFor="stock">stock</label>
          <input type="text" name="stock" placeholder={product?.stock} />
          {/* <label htmlFor="color">color</label>
          <input type="text" name="color" placeholder={product?.color}/> */}
          {/* <label htmlFor="size">size</label>
          <textarea type="text" name="size" placeholder={product?.size}/> */}
          <label>category</label>
          <select name="category" id="category">
            <option value={""} defaultChecked>
              Select Computer
            </option>
            <option value={"computer"}>Computer</option>
            <option value={"kitchen"}>Kitchen</option>
          </select>
          <label>description</label>
          <textarea type="text" name="desc" placeholder={product?.desc} />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
