import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGreetingApi } from "../redux/greetings/greetings";

const Greeting = () => {
  const greeting = useSelector((state) => state.greetingsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetingApi());
  }, [dispatch]);

  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    <div className="mt-20 flex flex-col items-center">
      <h1 className=" font-bold">{greeting}</h1>
      <button
        onClick={refreshPage}
        className="bg-teal-500 py-3 px-6 mt-4 rounded text-white"
      >
        Get a greeting
      </button>
    </div>
  );
};

export default Greeting;
