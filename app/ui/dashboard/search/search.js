"use client";
import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
const Search = ({ placeholder }) => {
  const router = useRouter();
  const pathName = usePathname();
  const params = new URLSearchParams();
  const changeHandler = useDebouncedCallback((e) => {
    params.set("page", "1");
    if (e.target.value) {
      if (e.target.value.length >= 2) {
        params.set("q", e.target.value);
      }
    } else {
      params.delete("q");
    }
    router.replace(`${pathName}?${params}`);
  }, 400);
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <MdSearch />
        <input
          type="text"
          className={styles.searchInput}
          placeholder={placeholder}
          onChange={changeHandler}
        />
      </div>
    </div>
  );
};

export default Search;
