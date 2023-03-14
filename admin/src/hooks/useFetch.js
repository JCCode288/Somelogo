import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const BASE_URL = "http://localhost:3001";

export default function useFetch(endpoint, method, headers) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const opt = {};
  opt.method = method || "get";
  if (headers) {
    opt.headers = headers;
  }

  useEffect(() => {
    fetch(`${BASE_URL}/${endpoint}`, opt)
      .then((result) => {
        if (result.ok) {
          return result.json();
        }
      })
      .then((items) => setData(items))
      .catch((err) =>
        toast.error("failed to fetch", {
          pauseOnFocusLoss: false,
          pauseOnHover: false,
          autoClose: 500,
        })
      )
      .finally((_) => setLoading(false));
  }, []);

  return [loading, data];
}
