import { useRouteError } from "react-router-dom";
import './ErrorPage.css'
export default function ErrorPage() {
  const error = useRouteError();
  // console.error(error);

  return (
    <div id="error-page">
      <div className="icone-sad">
      <i className="bi bi-emoji-frown"></i>
      </div>
      <div className="text">
      <h4 className="h4-errorPage">SERVICE UNAVAILABLE</h4>
      <h1 className="h1-errorPage">503</h1>
      <p className="p-errorPage mt-4">Estamos em manutenção. Em breve voltaremos!</p>
      <p className="p-errorPage mb-4">Aguarde...</p>
      <p>
        {/* <i>{error.statusText || error.message}</i> */}
      </p>
      <button className="a-errorPage"><a href="/" >Voltar para o inicío</a></button>
      </div>
      
    </div>
  );
}