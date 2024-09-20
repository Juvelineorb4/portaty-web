import { useEffect } from "react";
import { useRouter } from "next/router";

const Share = () => {
  const router = useRouter();

  useEffect(() => {
    // Detecta si el usuario está en un dispositivo móvil
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    console.log("HOLAAA: ", isMobile);

    if (isMobile) {
      // Detecta si el usuario está en un dispositivo Android o iOS
      const isAndroid = /Android/i.test(navigator.userAgent);
      const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

      if (isAndroid) {
        // Redirige al usuario a la tienda de aplicaciones de Google Play
        window.location.href =
          "https://play.google.com/store/apps/details?id=com.teamportaty.appdev"; // Cambia esto por la URL de tu aplicación en Google Play
      } else if (isIOS) {
        // Redirige al usuario a la App Store
        window.location.href =
          "https://apps.apple.com/us/app/portaty/id6497407592"; // Cambia esto por la URL de tu aplicación en la App Store
      }
    } else {
      // Si el usuario no está en un dispositivo móvil, puedes redirigirlo a otra página o hacer algo más
      router.push("/");
    }
  }, [router]);

  return (
    <div>
      <h1>Redirigiendo...</h1>
    </div>
  );
};

export default Share;
