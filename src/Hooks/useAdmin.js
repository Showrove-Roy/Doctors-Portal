import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [iSAdmin, setISAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setISAdmin(data.isAdmin);
          setAdminLoading(false);
        })
        .catch((err) => console.error(err));
    }
  }, [email]);
  return [iSAdmin, adminLoading];
};

export default useAdmin;
