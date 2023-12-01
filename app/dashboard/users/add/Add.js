import { addUser } from "@/app/lib/actions";
import styles from "../../../ui/dashboard/users/addUser/addUser.module.css";
const Add = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input
          type="text"
          autoComplete="off"
          name="username"
          placeholder="username"
          required
        />

        <input
          type="email"
          autoComplete="off"
          name="email"
          placeholder="email"
          required
        />

        <input
          type="password"
          autoComplete="off"
          name="password"
          placeholder="password"
          required
        />

        <input
          type="phone"
          autoComplete="off"
          name="phone"
          placeholder="phone"
        />

        <select name="isAdmin" autoComplete="off" id="isAdmin">
          <option value={false} selected>
            isAdmin
          </option>
          <option value={true}>yes</option>
          <option value={false}>no</option>
        </select>

        <select name="isActive" id="isActive">
          <option value={true} selected>
            isActive
          </option>
          <option value={false}>no</option>
        </select>

        <textarea name="address" rows="10" placeholder="Address">
          Address
        </textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Add;
