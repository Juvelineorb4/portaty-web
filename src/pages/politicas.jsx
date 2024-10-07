// Importa los módulos necesarios de React
import React from "react";

// Componente de Política de Privacidad
const PrivacyPolicy = () => {
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "auto",
        backgroundColor: "#f4f4f4",
      }}
    >
      <h1>Política de Privacidad de Portaty</h1>
      <p style={{ fontSize: "0.9em", color: "#666" }}>
        Última actualización: 07/10/2024
      </p>

      <p>
        En <strong>Portaty</strong>, nos comprometemos a proteger la privacidad
        de nuestros usuarios. Esta política de privacidad describe cómo
        recopilamos, utilizamos, almacenamos y compartimos la información
        personal que usted nos proporciona a través de nuestra aplicación móvil
        cuando se registra o inicia sesión usando <strong>Google</strong> o{" "}
        <strong>Apple</strong>.
      </p>

      <h2>Información que recopilamos</h2>
      <p>
        Al utilizar los servicios de inicio de sesión de <strong>Google</strong>{" "}
        o <strong>Apple</strong>, recopilamos la siguiente información:
      </p>
      <ul>
        <li>
          <strong>Información Básica de Identidad</strong>:
          <ul>
            <li>
              <strong>Google</strong>: Nombre, apellido, dirección de correo
              electrónico, género (opcional) y fecha de nacimiento (opcional).
            </li>
            <li>
              <strong>Apple</strong>: Nombre, apellido, dirección de correo
              electrónico, género (opcional) y fecha de nacimiento (opcional).
            </li>
          </ul>
        </li>
        <li>
          <strong>Información de Uso</strong>: Datos de interacción con la
          aplicación, como la fecha y hora de inicio de sesión.
        </li>
      </ul>

      <h2>Cómo utilizamos su información</h2>
      <p>
        Utilizamos la información recopilada para los siguientes propósitos:
      </p>
      <ul>
        <li>
          <strong>Autenticación y Gestión de Cuentas</strong>: Para permitirle
          registrarse y autenticarse de forma segura en nuestra aplicación
          utilizando su cuenta de <strong>Google</strong> o{" "}
          <strong>Apple</strong>. También para completar y gestionar su perfil
          en la aplicación de manera automática.
        </li>
        <li>
          <strong>Personalización del Servicio</strong>: Adaptar el contenido y
          las funciones de la aplicación según sus intereses y preferencias,
          basándonos en la información proporcionada.
        </li>
        <li>
          <strong>Comunicación</strong>: Enviar notificaciones importantes
          relacionadas con su cuenta o la seguridad de la aplicación.
        </li>
      </ul>

      <h2>Almacenamiento y seguridad de la información</h2>
      <p>
        La información recopilada se almacena en servidores seguros y se protege
        mediante medidas de seguridad estándar de la industria, como
        encriptación y controles de acceso restringidos. Nos comprometemos a
        conservar la información únicamente durante el tiempo necesario para
        cumplir con los fines descritos en esta política o según lo exija la
        ley.
      </p>

      <h2>Cómo compartimos su información</h2>
      <p>
        No compartimos la información personal obtenida a través de{" "}
        <strong>Google</strong> o <strong>Apple</strong> con terceros sin su
        consentimiento, salvo en los siguientes casos:
      </p>
      <ul>
        <li>
          <strong>Cumplimiento legal</strong>: Cuando sea necesario para cumplir
          con requisitos legales o regulatorios.
        </li>
        <li>
          <strong>Proveedores de servicios</strong>: Con proveedores que nos
          ayudan en el desarrollo y mantenimiento de la aplicación, siempre bajo
          acuerdos que garantizan la confidencialidad y seguridad de sus datos.
        </li>
      </ul>

      <h2>Opciones y control del usuario</h2>
      <p>
        Los usuarios pueden gestionar sus permisos y revocar el acceso a sus
        cuentas de <strong>Google</strong> o <strong>Apple</strong> en cualquier
        momento a través de las configuraciones de sus cuentas:
      </p>
      <ul>
        <li>
          <strong>Google</strong>: Los usuarios pueden gestionar o revocar el
          acceso desde la configuración de seguridad de su cuenta de Google.
        </li>
        <li>
          <strong>Apple</strong>: Los usuarios pueden gestionar el inicio de
          sesión con Apple desde las configuraciones de iCloud en sus
          dispositivos o visitando{" "}
          <a
            href="https://account.apple.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            account.apple.com
          </a>
          .
        </li>
      </ul>

      <h2>Cumplimiento con las Políticas de Google y Apple</h2>
      <p>
        Cumplimos con las <strong>políticas de uso limitado</strong> de{" "}
        <strong>Google</strong> y las <strong>pautas de privacidad</strong> de{" "}
        <strong>Apple</strong> para el uso de sus botones de inicio de sesión.
        Nuestro uso de la información proporcionada se limita a los fines
        específicos descritos en esta política, garantizando la privacidad y
        seguridad de sus datos en todo momento.
      </p>

      <h2>Cambios en esta política</h2>
      <p>
        Podemos actualizar esta política de privacidad para reflejar cambios en
        la forma en que tratamos su información personal o para cumplir con
        nuevas regulaciones. Le notificaremos sobre cualquier cambio
        significativo y actualizaremos la fecha de la última modificación.
      </p>

      <h2>Contacto</h2>
      <p>
        Si tiene alguna pregunta sobre esta política de privacidad o desea
        ejercer sus derechos de privacidad, puede contactarnos en:{" "}
        <a href="mailto:soporte@portaty.com">soporte@portaty.com</a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
