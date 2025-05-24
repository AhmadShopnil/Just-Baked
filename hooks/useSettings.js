// import { useEffect, useState } from "react";
// import { BASE_URL } from "@/helpers/baseUrl";

// export const useSettings = () => {
//   const [settings, setSettings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchSettings = async () => {
//       try {
//         const url = `${BASE_URL}/frontend/settings`;
//         const res = await fetch(url, { cache: "no-store" });

//         if (!res.ok) {
//           throw new Error(`Failed to fetch settings. Status: ${res.status}`);
//         }

//         const data = await res.json();

//         console.log("data from useSetting hook: ", data);

//         setSettings(data?.data || []);
//       } catch (err) {
//         setError(err.message);
//         console.error("Error fetching settings:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSettings();
//   }, []);

//   return { settings, loading, error };
// };



import { BASE_URL } from "@/helpers/baseUrl";

export const useSettigs = async () => {
  const url = `${BASE_URL}/frontend/settings`;
  let settings = [];

  try {
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      throw new Error(`Failed to fetch products. Status: ${res.status}`);
    }

    const data = await res.json();
    settings = data?.data || [];
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return settings;
};
