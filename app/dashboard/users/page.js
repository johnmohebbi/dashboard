import Search from "@/app/ui/dashboard/search/search";
import styles from "../../ui/dashboard/users/users.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { usersFetch } from "@/app/db/data";
import { main } from "@/app/db/database";
import { deleteUser } from "@/app/lib/actions";

const UsersPage = async (props) => {
  const searchParams = props.searchParams;
  const query = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { users, count } = await usersFetch(query, page);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a User" />
        <Link href={"/dashboard/users/add"}>
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <div className={styles.usersTable}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th>name</th>
              <th>email</th>
              <th>createdAt</th>
              <th>role</th>
              <th>status</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {users.length
              ? users.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td>
                        <div className={styles.user}>
                          <Image
                            src={user.img || "/noavatar.png"}
                            alt={`user`}
                            width={40}
                            height={40}
                            className={styles.userImage}
                          />
                          {user.username}
                        </div>
                      </td>
                      <td>{user.email}</td>
                      <td>{user.createdAt.toLocaleString().split(",")[0]}</td>
                      <td>{user.isAdmin ? "admin" : "client"}</td>
                      <td>{user.isActive ? "active" : "passive"}</td>
                      <td>
                        <div className={styles.buttons}>
                          <Link href={`/dashboard/users/${user.id}`}>
                            <button
                              className={`${styles.button} ${styles.view}`}
                            >
                              view
                            </button>
                          </Link>
                          <form action={deleteUser}>
                            <input type="hidden" name="id" value={user.id} />
                            <button
                              type="submit"
                              className={`${styles.button} ${styles.delete}`}
                            >
                              delete
                            </button>
                          </form>
                        </div>
                      </td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </table>
        <Pagination count={count} />
      </div>
    </div>
  );
};

export default UsersPage;
