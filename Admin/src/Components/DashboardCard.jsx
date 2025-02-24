function DashboardCard({ title, count, icon, color }) {
    return (
      <div className={`p-6 rounded-lg shadow-md text-white flex items-center justify-between ${color}`}>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-2xl font-bold">{count}</p>
        </div>
        {icon}
      </div>
    );
  }
  
  export default DashboardCard;
  