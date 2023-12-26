import React from "react";
import logo2 from "../img/logo2.svg";
import theme from "../img/theme.png";
import me from "../img/me.jpeg";
import stamp from "../img/stamp.webp";
import family from "../img/family.svg";
import car from "../img/car.svg";
import company from "../img/building.svg";
import blood from "../img/blood.svg";

import { IoIosInformationCircleOutline } from "react-icons/io";
const Mainbody = () => {
  return (
    <div className="flex justify-center mt-[100px]">
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
        <div className="w-[350px] h-[200px] border-solid border-[1px] bg-[#F9FCFE] border-[#EBEBEB] rounded-lg mt-5">
          <div className="flex gap-3 mt-4 ml-5">
            <img src={family} alt="" className="h-7 w-7" />
            <div className="font-roboto font-lightbold">
              Өрхийн гишүүдийн мэдээлэл
            </div>
          </div>
          <div className="flex gap-2 ml-5 mt-3">
            <div className="font-roboto text-sm">Ам бүлийн тоо: </div>
            <div className="font-roboto text-sm text-[#4986FF]">3</div>
          </div>
          <div className="font-roboto flex-col ml-5">
            <div className="flex gap-2 mt-3">
              <div>ЧУЛУУНБААТАР</div>
              <div className="text-[#4986FF]">СОДБАЯР</div>
            </div>
            <div className="flex gap-2 mt-3">
              <div>ЭРДЭНЭБИЛЭГ</div>
              <div className="text-[#4986FF]">УНДРАХ</div>
            </div>
            <div className="flex gap-2 mt-3">
              <div>БАТМӨНХ</div>
              <div className="text-[#4986FF]">ОРГИЛ</div>
            </div>
          </div>
        </div>
        <div className="w-[350px] h-[150px] border-solid border-[1px] bg-[#F9FCFE] border-[#EBEBEB] rounded-lg mt-5">
          <div className="flex gap-3 mt-4 ml-5">
            <img src={car} alt="" className="h-7 w-7" />
            <div className="font-roboto font-lightbold">Тээврийн хэрэгсэл</div>
          </div>
          <div className="flex">
            <div className="h-[80px] w-[50px] rounded-lg bg-[#387CFF] mt-3 ml-3"></div>
            <div className="w-[320px] h-[80px] bg-[#EBF3FF] rounded-r-[10px] rounded-l-[5px] mt-3 -ml-[46px]">
              <IoIosInformationCircleOutline className="h-[30px] w-[30px] text-[#4986FF] mt-5 ml-4" />
              <div className="w-[250px] font-roboto text-sm ml-16 -mt-7">
                Таны нэр дээр тээврийн хэрэгсэл бүртгэлгүй байна.
              </div>
            </div>
          </div>
        </div>
        <div className="w-[350px] h-[150px] border-solid border-[1px] bg-[#F9FCFE] border-[#EBEBEB] rounded-lg mt-5">
          <div className="flex gap-3 mt-4 ml-5">
            <img src={company} alt="" className="h-7 w-7" />
            <div className="font-roboto font-lightbold">Компаниуд</div>
          </div>
          <div className="flex">
            <div className="h-[80px] w-[50px] rounded-lg bg-[#387CFF] mt-3 ml-3"></div>
            <div className="w-[320px] h-[80px] bg-[#EBF3FF] rounded-r-[10px] rounded-l-[5px] mt-3 -ml-[46px]">
              <IoIosInformationCircleOutline className="h-[30px] w-[30px] text-[#4986FF] mt-5 ml-4" />
              <div className="w-[250px] font-roboto text-sm ml-16 -mt-7">
                Таны нэр дээр компани бүртгэлгүй байна.
              </div>
            </div>
          </div>
        </div>
        <div className="w-[350px] h-[130px] border-solid border-[1px] bg-[#F9FCFE] border-[#EBEBEB] rounded-lg mt-5">
          <div className="flex gap-3 mt-4 ml-5">
            <img src={blood} alt="" className="h-7 w-7" />
            <div className="font-roboto font-lightbold">
              Цусны бүлгийн мэдээлэл
            </div>
          </div>
          <div className="font-roboto ml-5 mt-4">Цусны бүлэг (ABO):</div>
          <div className="font-roboto ml-5 mt-3">Келл (K):</div>
        </div>
      </div>
    </div>
  );
};

export default Mainbody;
