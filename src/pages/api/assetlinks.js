// import fs from "fs";
// import path from "path";
export default function handler(req, res) {
  // const assetlinksPath = path.join(process.cwd(), "data/assetlinks.json");
  // const assetlinksContent = fs.readFileSync(assetlinksPath);
  // Tu contenido JSON que deseas retornar
  const assetlinks = [
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: "com.teamportaty.appdev",
        sha256_cert_fingerprints: [
          "57:DC:1D:A8:56:11:FE:CB:FD:50:C4:82:29:B5:07:8D:A9:50:DA:C3:74:22:89:FA:86:6A:FF:70:25:C4:00:92",
          "7F:A2:2B:A0:42:11:D0:9D:3C:BB:16:FA:1E:98:32:44:E9:CE:16:5A:8D:7A:ED:9E:96:C4:F4:CD:90:9D:97:F8",
        ],
      },
    },
  ];

  // Establece el encabezado Content-Type a application/json
  res.setHeader("Content-Type", "application/json");
  // Envía el contenido JSON
  res.status(200).json(assetlinks);
}
