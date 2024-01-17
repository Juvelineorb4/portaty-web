import React from "react";
import Menu from "@/components/Menu";
import styles from "@/styles/Home.module.css";
import useExcel from "@/hooks/useExcel";
const ShopPanel = () => {
  const [upload, uploadExcel] = useExcel();

  const ArrayJson = async (e) => {
    const result = await uploadExcel(e);
    // console.log("DATOS:  ", result);

    const newArray = result.map((item, index) => {
      const arrayTags = item.tags.split(",").map((i) => {
        return { S: i.trim() };
      });
      return {
        id: {
          S: item.id.toString(),
        },
        activity: {
          S: item.activity,
        },
        coordinates: {
          M: {
            lat: {
              N: item.lat.toString(),
            },
            lon: {
              N: item.lon.toString(),
            },
          },
        },
        createdAt: {
          S: new Date().toISOString(),
        },
        email: {
          S: `business${item.id}@example.com`,
        },
        image: {
          S: `business_testing/business${item.id}.jpg`,
        },
        name: {
          S: `business${item.id}`,
        },
        owner: {
          S: item.id.toString(),
        },
        phone: {
          S: "+58123456789",
        },
        tags: {
          L: arrayTags,
        },
        updatedAt: {
          S: new Date().toISOString(),
        },
        userID: {
          S: item.id.toString(),
        },
        whatsapp: {
          S: "es.link.ws",
        },
        __typename: {
          S: "Business",
        },
      };
    });

    const txtContent = JSON.stringify(newArray, null, 2); // Convierte el arreglo a formato JSON
    const txtContent2 = JSON.stringify(txtContent);
    console.log(txtContent2);

    downloadTxtFile(txtContent, "data.json");
  };

  function downloadTxtFile(content, filename) {
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });

    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
  }

  return (
    <div className={styles.content}>
      <Menu />
      <div className={styles.input}>
        <input
          type="file"
          name="Carga Masiva"
          id="cargamasiva"
          accept=".xls,.xlsx"
          onChange={(e) => ArrayJson(e)}
        />
      </div>
    </div>
  );
};

export default ShopPanel;
