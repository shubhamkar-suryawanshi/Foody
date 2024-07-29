import { useRouteError } from 'react-router-dom';

function Error() {
  const err = useRouteError();
  return (
    <div className="p-10">
      This is error page. You able to see it as you were navigating to wrong
      path or we are having network issue.
      <p className="font-bold text-red-600">
        Status = {err.status} - {err.data}
      </p>
    </div>
  );
}

export default Error;
