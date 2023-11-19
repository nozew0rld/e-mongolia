import React from "react";
import logo2 from "../img/logo2.svg";
import theme from "../img/theme.png";
import me from "../img/me.jpeg";
import stamp from "../img/stamp.webp";
const Mainbody = () => {
  return (
    <div className="flex justify-center">
      <div className="pt-10 flex-col">
        <div className="">
          <img
            src={theme}
            alt=""
            className="h-[190px] w-[350px] rounded-t-lg"
          />
        </div>
        <div className="w-[350px] h-[800px] border-solid border-[1px] border-[#EBEBEB] rounded-b-lg">
          <div className="h-[150px] w-[350px] -mt-[50px]">
            <img
              src={me}
              alt=""
              className="w-[140px] h-[140px] rounded-full border-solid border-[3px] border-[#306CE8]"
            />
            <img
              src={stamp}
              alt=""
              className="w-[45px] h-[45px] ml-[100px] -mt-[40px]"
            />
            <img src={logo2} alt="" className="-mt-[140px] ml-[150px]" />
          </div>
          <div className="flex justify-center font-roboto">
            <div className="w-[330px] flex flex-col gap-5">
              <div className="text-[16px]">Үндсэн мэдээлэл</div>
              <div className="flex gap-[95px]">
                <div className="text-[15px]">
                  <div className="text-[#5C72AB]">Ургийн овог:</div>
                  <div className="text-[#002468]">Боржигон</div>
                </div>
                <div className="text-[15px]">
                  <div className="text-[#5C72AB]">Овог:</div>
                  <div className="text-[#002468]">Лхагвадорж</div>
                </div>
              </div>
              <div className="flex gap-[100px]">
                <div className="text-[15px]">
                  <div className="text-[#5C72AB]">Нэр:</div>
                  <div className="text-[#002468]">БАТБААТАР</div>
                </div>
                <div className="text-[15px]">
                  <div className="text-[#5C72AB]">Регистрийн дугаар:</div>
                  <div className="text-[#002468]">тя02322315</div>
                </div>
              </div>
              <div className="flex gap-[130px]">
                <div className="text-[15px]">
                  <div className="text-[#5C72AB]">Хүйс:</div>
                  <div className="text-[#002468]">Эрэгтэй</div>
                </div>
                <div className="text-[15px]">
                  <div className="text-[#5C72AB]">Яс үндэс:</div>
                  <div className="text-[#002468]">Халх</div>
                </div>
              </div>
              <div className="text-[16px]">Иргэний үнэмлэх</div>
              <div className="text-[15px]">
                <div className="text-[#5C72AB]">Бүртгэлийн дугаар:</div>
                <div className="text-[#002468]">298695497759</div>
              </div>
              <div className="text-[15px]">
                <div className="text-[#5C72AB]">Олгосон огноо:</div>
                <div className="text-[#002468]">2018-02-28</div>
              </div>
              <div className="text-[15px]">
                <div className="text-[#5C72AB]">Хүчинтэй хугацаа:</div>
                <div className="text-[#002468]">2026-12-23</div>
              </div>
              <div className="text-[16px]">Иргэний үнэмлэхийн хаяг</div>
              <div className="text-[15px]">
                <div className="text-[#5C72AB]">Хаяг:</div>
                <div className="text-[#002468]">
                  УБ, Баянзүрх, 26-р хороо@санто смарт, хүннү гудамж@213 байр,
                  1104 тоот
                </div>
              </div>
              <div className="text-[16px]">Оршин суугаа хаяг</div>
              <div className="text-[15px]">
                <div className="text-[#5C72AB]">Хаяг:</div>
                <div className="text-[#002468]">Mongolia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainbody;
