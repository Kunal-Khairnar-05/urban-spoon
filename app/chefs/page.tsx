const chefs = [
  {
    name: "Chef Maria Rodriguez",
    role: "Executive Chef",
    bio: "With over 15 years of experience in fine dining, Chef Maria brings her passion for Mediterranean cuisine to Gourmet Delights.",
  },
  {
    name: "Chef John Smith",
    role: "Sous Chef",
    bio: "Specializing in farm-to-table cooking, Chef John ensures that every dish showcases the best local and seasonal ingredients.",
  },
  {
    name: "Chef Akira Tanaka",
    role: "Pastry Chef",
    bio: "Trained in Paris, Chef Akira creates exquisite desserts that are a perfect blend of French technique and Japanese aesthetics.",
  },
]

export default function ChefsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Chefs</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {chefs.map((chef, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{chef.name}</h2>
            <h3 className="text-lg text-gray-600 mb-4">{chef.role}</h3>
            <p>{chef.bio}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

