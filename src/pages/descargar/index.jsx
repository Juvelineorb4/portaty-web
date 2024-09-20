import { useEffect } from "react";
import { useRouter } from "next/router";

const Descargar = () => {
  const router = useRouter();

  useEffect(() => {
    // Detecta si el usuario está en un dispositivo apple
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isIOS) {
      window.location.href =
        "https://apps.apple.com/us/app/portaty/id6497407592";
    } else {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.teamportaty.appdev";
    }
  }, [router]);

  return (
    <div>
      <h1>Redirigiendo...</h1>
    </div>
  );
};

export default Descargar;
