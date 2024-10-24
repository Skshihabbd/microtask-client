import { useNavigate } from "react-router-dom";

const PurchaseCoin = () => {
  const coinPackages = [
    { coins: 10, price: 1 },
    { coins: 100, price: 9 },
    { coins: 500, price: 19 },
    { coins: 1000, price: 39 },
  ];
  const navigate = useNavigate();

  const handleNavigate = (coin, price) => {
    navigate(`/dashboard/paymentroute/${coin}/${price}`);
  };
  return (
    <div className="grid grid-cols-2 gap-4">
      {coinPackages.map((pkg, index) => (
        <div key={index} className="border p-4 rounded shadow-lg text-center">
          <h3>{pkg.coins} Coins</h3>
          <p>${pkg.price}</p>

          <button
            onClick={() => handleNavigate(pkg.coins, pkg.price)}
            className="btn btn-primary"
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default PurchaseCoin;
