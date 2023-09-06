import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../Context/Context";
import Layout from "../../Components/Layout";
import LayoutTamplate from "../../Components/LayoutTamplate";

const Pengabdian = () => {
  const { dispatch } = useContext(GlobalState);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://knowledgeable-painted-guarantee.glitch.me/pengabdian"
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
      payload: { page: "Download", subPage: "Pengabdian" },
    });
  }, []);
  return (
    <Layout>
      <LayoutTamplate titleHeader={"Download Pengabdian"}>
        <div className="overflow-x-auto w-full md:w-[calc(100% - 300px)]">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 w-[50px]">No</th>
                <th className="px-4 py-2 w-[400px]">Deskripsi</th>
                <th className="px-4 py-2 w-[100px]">Link</th>
              </tr>
            </thead>
            <tbody>
              {!data
                ? "Data Kosong"
                : data.map((b, i) => {
                    return (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}
                      >
                        <th className="border px-4 py-2">{i + 1}</th>
                        <td className="border px-4 py-2">{b.deskripsi}</td>
                        <td className="border px-4 py-2 text-center">
                          <a
                            href={b.link}
                            target="_blank"
                            className="text-red-500"
                          >
                            Download
                          </a>
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </LayoutTamplate>
    </Layout>
  );
};

export default Pengabdian;
