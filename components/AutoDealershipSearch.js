import { motion } from 'framer-motion';
import { useState } from 'react';

const bodyTypes = ["Sedan", "SUV", "Coupe", "Convertible", "Wagon", "Hatchback"];
const fuelTypes = ["Gasoline", "Diesel", "Hybrid", "Electric"];
const transmissions = ["Automatic", "Manual", "CVT"];

export default function AutoDealershipSearch() {
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [selectedBodyType, setSelectedBodyType] = useState("");
  const [selectedFuelType, setSelectedFuelType] = useState("");
  const [selectedTransmission, setSelectedTransmission] = useState("");
  const [sortBy, setSortBy] = useState("price-asc");

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Find Your Perfect Vehicle</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Use our advanced search to find the exact vehicle that matches your preferences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6"
        >
          {/* Search Bar */}
          <div className="mb-8">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Make"
                className="flex-1 px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
              />
              <input
                type="text"
                placeholder="Model"
                className="flex-1 px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
              />
              <input
                type="number"
                placeholder="Year"
                className="w-32 px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Price Range
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="0"
                  max="200000"
                  step="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
                <span className="text-sm text-slate-600">
                  ${priceRange[1].toLocaleString()}
                </span>
              </div>
            </div>

            {/* Body Type */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Body Type
              </label>
              <select
                value={selectedBodyType}
                onChange={(e) => setSelectedBodyType(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
              >
                <option value="">All Types</option>
                {bodyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Fuel Type */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Fuel Type
              </label>
              <select
                value={selectedFuelType}
                onChange={(e) => setSelectedFuelType(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
              >
                <option value="">All Types</option>
                {fuelTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Transmission */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Transmission
              </label>
              <select
                value={selectedTransmission}
                onChange={(e) => setSelectedTransmission(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
              >
                <option value="">All Types</option>
                {transmissions.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Sort & Search Button */}
          <div className="flex justify-between items-center mt-8">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="year-desc">Year: Newest First</option>
              <option value="year-asc">Year: Oldest First</option>
              <option value="mileage-asc">Mileage: Low to High</option>
              <option value="mileage-desc">Mileage: High to Low</option>
            </select>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Search Vehicles
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 