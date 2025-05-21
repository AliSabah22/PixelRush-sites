import { motion } from 'framer-motion';
import { useState } from 'react';

const loanTerms = [36, 48, 60, 72, 84];
const interestRates = {
  36: 4.9,
  48: 5.2,
  60: 5.5,
  72: 5.8,
  84: 6.1
};

export default function AutoDealershipFinancing() {
  const [vehiclePrice, setVehiclePrice] = useState(50000);
  const [downPayment, setDownPayment] = useState(10000);
  const [selectedTerm, setSelectedTerm] = useState(60);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculatePayment = () => {
    const principal = vehiclePrice - downPayment;
    const monthlyRate = interestRates[selectedTerm] / 100 / 12;
    const numberOfPayments = selectedTerm;
    
    const payment = principal * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    setMonthlyPayment(Math.round(payment));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Financing Options</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Calculate your monthly payments and explore our flexible financing solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Payment Calculator</h3>
            
            <div className="space-y-6">
              {/* Vehicle Price */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Vehicle Price ($)
                </label>
                <input
                  type="number"
                  value={vehiclePrice}
                  onChange={(e) => setVehiclePrice(Number(e.target.value))}
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
                />
              </div>

              {/* Down Payment */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Down Payment ($)
                </label>
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
                />
              </div>

              {/* Loan Term */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Loan Term (months)
                </label>
                <div className="flex gap-2">
                  {loanTerms.map((term) => (
                    <button
                      key={term}
                      onClick={() => setSelectedTerm(term)}
                      className={`flex-1 px-4 py-2 rounded-lg border transition-colors ${
                        selectedTerm === term
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'border-slate-200 hover:border-emerald-500'
                      }`}
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              {/* Calculate Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={calculatePayment}
                className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Calculate Payment
              </motion.button>

              {/* Results */}
              {monthlyPayment > 0 && (
                <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                  <div className="text-center">
                    <p className="text-sm text-slate-600">Estimated Monthly Payment</p>
                    <p className="text-3xl font-bold text-emerald-600">${monthlyPayment}</p>
                    <p className="text-sm text-slate-500 mt-2">
                      Interest Rate: {interestRates[selectedTerm]}% APR
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Financing Options */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Why Finance With Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 text-xl">✓</span>
                  <div>
                    <h4 className="font-medium text-slate-800">Competitive Rates</h4>
                    <p className="text-slate-600">Get the best financing rates in the market</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 text-xl">✓</span>
                  <div>
                    <h4 className="font-medium text-slate-800">Quick Approval</h4>
                    <p className="text-slate-600">Fast and easy approval process</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 text-xl">✓</span>
                  <div>
                    <h4 className="font-medium text-slate-800">Flexible Terms</h4>
                    <p className="text-slate-600">Choose the payment plan that works for you</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Ready to Get Started?</h3>
              <p className="text-slate-600 mb-6">
                Our financing experts are here to help you find the perfect payment plan for your dream car.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Apply for Financing
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 