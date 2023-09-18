import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
  const error = useRouteError();
  const errorMessage = error?.statusText || "Something went wrong";
  return (
  <div className="flex gap-2 flex-col items-center mt-40" >
    <h1 className="text-32">Oops!</h1>
    <p className="text-center text-20" >An unexpected error has occurred, sorry</p>
    <span className="mt-5 font-light italic" >{ <p>{errorMessage}</p>}</span>
  </div>
  )
}

export default ErrorPage;