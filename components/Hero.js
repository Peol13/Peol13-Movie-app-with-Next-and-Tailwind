import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="text-center bg-white ">
      <div className="w-60 mx-auto">
        <Image
          src={"/movie-logo-or-icon.jpg"}
          width={100}
          height={100}
          alt="Home cinema"
          layout="responsive"
          priority="false"
        />
      </div>
      <h1 className=" text-1xl text-gray-700 uppercase font-bold ">Witaj na Oglądnij mnie ;)</h1>
      <p className=" text-gray-500">Tworzymy FILMY, TELEWIZJĘ i GRY</p>
      <Link href="/contact">
        <button className=" bg-gray-700 text-white py-3 px-6 rounded text-sm mt-4">KONTAKT</button>
      </Link>
      <div className="flex-1 mt-6 mb-8 pt-6 text-center bg-gray-700">
        <Link href="/">
          <span className="text-white text-2xl ml-5   hover:text-blue-600 hover:cursor-pointer">
            Popularne teraz
          </span>
        </Link>
        <Link href="/TopRated">
          <span className="text-white text-2xl ml-5   hover:text-blue-600 hover:cursor-pointer">
            Top wszechczasów
          </span>
        </Link>
        <Link href="/Upcoming">
          <span className="text-white text-2xl ml-5   hover:text-blue-600 hover:cursor-pointer">
            Nadchodzące
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
