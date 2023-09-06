import { useContext, useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import { GlobalState } from "../../Context/Context";

import "react-calendar/dist/Calendar.css";
import LayoutTamplate from "../../Components/LayoutTamplate";

const Kurikulum = () => {
  const { dispatch } = useContext(GlobalState);

   const [data, setData] = useState(null);

   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await fetch(
           "https://knowledgeable-painted-guarantee.glitch.me/kurikulums"
         );
         if (!response.ok) {
           throw new Error("Network response was not ok");
         }

         const data = await response.json();

         setData(data);
       } catch (error) {
         console.error("Fetch error:", error);
       }
     };

     fetchData();
   }, []);

  useEffect(() => {
    dispatch({
      type: "UPDATE_PAGE",
      payload: { page: "Dokumentasi Jurusan", subPage: "Kurikulum" },
    });
  }, []);

  return (
    <Layout>
      <LayoutTamplate titleHeader={"Kurikulum D3 Manajemen Informatika"}>
        <div className="overflow-x-auto w-full md:w-[calc(100% - 300px)]">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-[12px]">
                <th className="w-[40px] px-4 py-2">No</th>
                <th className="text-center px-4 py-2">ID</th>
                <th className="py-3">Mata Kuliah</th>
                <th className="text-center px-4 py-2">SKS</th>
                <th className="text-center px-4 py-2">T/P</th>
                <th className="text-center px-4 py-2">Semester</th>
              </tr>
            </thead>
            <tbody>
              {!data ? (
                <tr>
                  <td>
                    <p>Loading....</p>
                  </td>
                </tr>
              ) : (
                data?.map((kurikulum, i) => {
                  console.log(kurikulum);
                  return (
                    <tr
                      key={i}
                      className={`${
                        i % 2 === 0 ? "bg-white" : "bg-gray-100"
                      } text-[]`}
                    >
                      <td className="text-center border px-4 py-2">{i + 1}</td>
                      <td className="text-center border px-4 py-2">
                        {kurikulum.id}
                      </td>
                      <td className="border px-4 py-2">{kurikulum.matkul}</td>
                      <td className="text-center border px-4 py-2">
                        {kurikulum.sks}
                      </td>
                      <td className="text-center border px-4 py-2">
                        {kurikulum.tp ? "T" : "P"}
                      </td>
                      <td className="text-center border px-4 py-2">
                        {kurikulum.semester}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
          <div className="w-full text-center py-5 text-sm text-gray-400">
            <p>*T/P : Teori/Praktek</p>
          </div>
        </div>
      </LayoutTamplate>
    </Layout>
  );
};

export default Kurikulum;
