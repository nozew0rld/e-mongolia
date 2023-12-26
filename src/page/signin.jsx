import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const [gender, setGender] = useState();
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col">
          <label for="fname">Цээж зураг:</label>
          <input type="file" name="img" id="img" className="" />
        </div>
        <div className="flex flex-col">
          <label for="fname">Ургийн овог:</label>
          <input
            type="text"
            name="urgiinOwog"
            id="uragiin owog"
            className="border-[1px] border-solid border-black rounded-2xl w-[250px] h-[50px]"
          />
        </div>
        <div className="flex flex-col">
          <label for="fname">Овог:</label>
          <input
            type="text"
            name="owog"
            id="owog"
            className="border-[1px] border-solid border-black rounded-2xl w-[250px] h-[50px]"
          />
        </div>
        <div className="flex flex-col">
          <label for="fname">Нэр:</label>
          <input
            type="text"
            name="name"
            id="name"
            className="border-[1px] border-solid border-black rounded-2xl w-[250px] h-[50px]"
          />
        </div>
        <div className="flex flex-col">
          <label for="fname">Fake Регистрийн дугаар:</label>
          <input
            type="text"
            name="id"
            id="id"
            className="border-[1px] border-solid border-black rounded-2xl w-[250px] h-[50px]"
          />
        </div>
        <div className="">
          <label for="fname">Хүйс:</label>
          <br />
          <input
            type="radio"
            name="gender"
            id="gender"
            value="Эрэгтэй"
            onChange={(e) => setGender(e.target.value)}
          />
          Эрэгтэй
          <input
            type="radio"
            name="gender"
            id="gender"
            value="Эмэгтэй"
            className="ml-5"
            onChange={(e) => setGender(e.target.value)}
          />
          Эмэгтэй
        </div>
        <div className="flex flex-col">
          <label for="fname">Яс үндэс:</label>
          <input
            type="text"
            name="origin"
            id="origin"
            className="border-[1px] border-solid border-black rounded-2xl w-[250px] h-[50px]"
          />
        </div>
        <div className="flex flex-col">
          <label for="fname">your unemlehnii Хаяг:</label>
          <input
            type="text"
            name="address"
            id="address"
            className="border-[1px] border-solid border-black rounded-2xl w-[250px] h-[50px]"
          />
        </div>
        <div className="flex flex-col">
          <label for="fname">
            Нэвтрэх нэр (Dawtagtku bhaar hiigeereii xD):
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="border-[1px] border-solid border-black rounded-2xl w-[250px] h-[50px]"
          />
        </div>
        <div className="flex flex-col">
          <label for="fname">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            className="border-[1px] border-solid border-black rounded-2xl w-[250px] h-[50px]"
          />
        </div>
      </div>
      <button
        className="w-[100px] h-[50px] bg-light-blue-700 mt-10 rounded-xl border-[1px] border-solid border-black"
        // onClick={() => {
        //   navigate("/");
        // }}
      >
        Signin
      </button>
    </div>
  );
};

export default Signin;
