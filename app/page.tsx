import SplitText from "@/components/ui/splittext";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center mt-32">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex flex-col items-center">
          {/* Text Content */}
          <div className="md:text-center">
            <h1 className="text-2xl md:text-4xl text-rose-500 font-bold mb-4">
              Delicious Food Is Waiting For You 🍽️
            </h1>

            <SplitText
              text="Urban Spoon!"
              className="text-4xl md:text-8xl font-bold  mb-4"
              delay={150}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            />

            <div className="text-lg md:text-xl mt-5 p-5">
              <p>Experience culinary excellence at Urban Spoon Restaurant.</p>
              <p>
                Our menu is filled with a variety of delicious dishes made with
                fresh ingredients.
              </p>
            </div>
          </div>
          <Link
            href="/menu"
            className="bg-gray-200 text-black inset-3 px-6 py-3 mt-10 border-2 border-yellow-300 shadow-md rounded-lg text-lg hover:bg-slate-300 transition-colors"
          >
            View Our Menu
          </Link>
        </div>

        {/* Image */}
        <div>
          <img
            src={"/3.png"}
            alt="Delicious Food"
            className="animate-spin-slow img-shadow w-[300px] md:w-[400px] mx-auto"
          />
        </div>
      </div>

      <div className="md:absolute left-0 top-1/2 transform -translate-y-1/3 opacity-60">
        <Image
          src="/burger.png"
          alt="Delicious Food"
          width={200}
          height={200}
        />
      </div>

      {/* Testimonials */}
      <div className="container mx-auto my-48">
        <h2 className="text-2xl md:text-4xl font-bold mb-8">
          What Our Customers Say 📌
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-yellow-200 p-4 rounded-lg  shadow-md">
            <p>
              "The food was amazing! I loved the variety of dishes on the menu.
              Specially the desserts. In that price range, it's a steal!" 10/10
              would recommend."
            </p>
            <p className="text-right mt-4">
              <strong>Arjun Patil</strong>
            </p>
          </div>
          <div className="bg-yellow-200 p-4 rounded-lg shadow-md">
            <p>
              "The service was excellent. The staff was friendly and attentive.
              I will definitely be coming back. The ambiance was perfect. I
              enjoyed the music and decor. "
            </p>
            <p className="text-right mt-4">
              <strong>Ramesh Gupta</strong>
            </p>
          </div>
          <div className="bg-yellow-200 p-4 rounded-lg shadow-md">
            <p>
              "The ambiance was perfect. I enjoyed the music and decor. The food
              was delicious and the service was excellent. Its a great place to
              dine with family and friends. "
            </p>
            <p className="text-right mt-4">
              <strong>Vijay Deshmukh</strong>
            </p>
          </div>
        </div>
      </div>

      {/*Our Chefs*/}
      <div className="container mx-auto my-48">
        <SplitText
          text="Meet Our Chefs"
          className="text-2xl md:text-4xl font-bold mb-8"
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-transparent p-4 rounded-lg shadow-lg">
            <img
              src="/chef1.png"
              alt="Chef 1"
              className="w-full h-full object-contain rounded-lg mb-4"
            />
            <p>"~ I love cooking and experimenting with new recipes."</p>
            <p className="text-right text-2xl mt-4">
              <strong>Chef Akash Sen</strong>
            </p>
          </div>
          <div className="bg-transparent p-4 rounded-lg shadow-lg">
            <img
              src="/chef2.png"
              alt="Chef 2"
              className="w-full h-full object-contain rounded-lg mb-4"
            />
            <p>
              "~ I enjoy creating dishes that are both delicious and healthy."
            </p>
            <p className="text-right text-2xl mt-4">
              <strong>Chef James Stark</strong>
            </p>
          </div>
          <div className="bg-transparent p-4 rounded-lg shadow-lg">
            <img
              src="/chef3.png"
              alt="Chef 3"
              className="w-full h-full object-contain rounded-lg mb-4"
            />
            <p>
              "~ I have a passion for food and love sharing my creations with
              others."
            </p>
            <p className="text-right text-2xl mt-4">
              <strong>Chef Anthony Johnson</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-48 bg-transparent backdrop-blur-md p-8 rounded-3xl shadow-lg">
        <h2 className="text-2xl md:text-4xl font-bold mb-8">Book a Table 🍴</h2>
        <p className="text-lg md:text-xl">
          Reserve a table at Urban Spoon Restaurant for a memorable dining
          experience.
        </p>
        <p className="text-lg md:text-4xl my-5">📞 Call us at:</p>

        <SplitText
          text=" 123-456-7890"
          className="text-2xl md:text-5xl font-bold mb-8"
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
      </div>
    </div>
  );
}
