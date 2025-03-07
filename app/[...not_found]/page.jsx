import Link from "next/link";
import "./not_found.css";
export default function NotFound() {
  return (
    <div id="not_found bg-[#eeeeee]">
      <div class="circles">
        <p>
          404
          <br />
          <small>
            شما گم شده اید!!
            <br />
            <Link href="/" className="bg-[#2a2a2a] text-[#fff] p-3 rounded-lg text-[18px]">
              بازگشت به خانه
            </Link>
          </small>
        </p>
        <span class="circle big"></span>
        <span class="circle med"></span>
        <span class="circle small"></span>
      </div>
    </div>
  );
}
