import Image from "next/image";
import styles from "../../../ui/dashboard/users/user/SingleUser.module.css";
import {  userFetch } from "@/app/db/data";
import { updateUser } from "@/app/lib/actions";
const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await userFetch(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={user?.img || "/noavatar.png"}
            alt="noavatar"
            layout="fill"
          />
        </div>
        <div>{user?.username}</div>
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user?._id} />
          <label htmlFor="username">username</label>
          <input type="text" name="username" placeholder={user?.username} />
          <label htmlFor="email">email</label>
          <input type="text" name="email" placeholder={user?.email} />
          <label htmlFor="password">password</label>
          <input type="password" name={'password'} />
          <label htmlFor="phone">phone</label>
          <input type="text" name="phone" placeholder={user?.phone} />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={''} defaultChecked>select</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
          <option value={''} defaultChecked>select</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
