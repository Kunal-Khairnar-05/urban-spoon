import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-transparent p-8 rounded-lg shadow-2xl m-10">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-rose-500">About Us</h1>
      <div className="flex flex-col md:flex-row items-center mb-6">
        <Image
          src="/resto.jpeg"
          alt="Restaurant"
          width={500}
          height={300}
          className="rounded-lg shadow-md mb-4 md:mb-0 md:mr-6"
        />
        <p className="text-lg">
          Welcome to Gourmet Delights, where culinary excellence meets warm hospitality. Our restaurant has been serving
          exquisite dishes to food enthusiasts for over two decades.
        </p>
      </div>
      <p className="text-lg mb-4">
        At Gourmet Delights, we believe in using only the freshest, locally-sourced ingredients to create memorable
        dining experiences. Our team of skilled chefs combines traditional techniques with innovative flavors to bring
        you a unique and delightful menu.
      </p>
      <p className="text-lg">
        Whether you're joining us for a romantic dinner, a family celebration, or a business lunch, we strive to provide
        an atmosphere that's both elegant and welcoming. We look forward to serving you and making your visit to Gourmet
        Delights truly special.
      </p>
    </div>
  );
}
