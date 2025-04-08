import { BarChart } from "@mui/x-charts/BarChart";

const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

const analyticData = [
  {
    title: "Total Assets",
    amount: "₹500K",
    percent: "+10%",
  },
  {
    title: "Investment Returns",
    amount: "8%",
    percent: "-2%",
  },
  {
    title: "Savings Balance",
    amount: "₹100K",
    percent: "+5%",
  },
];

const Financial = () => {
  return (
    <div className="bg-black text-white w-full h-[620px] space-y-6">
      <h1 className="text-center p-4 text-4xl tracking-wider font-extrabold">
        Financial Performance
      </h1>
      <p className="text-center text-xs">Track your financial progress</p>
      <div className="flex justify-center">
        <button className="bg-blue-700 w-40 h-8 rounded-lg text-sm ">
          View Details
        </button>
      </div>
      <div className="flex justify-around text-white">
        <div className="bg-transparent">
          {analyticData.map((data, index) => (
            <div
              key={index}
              className="text-black p-2 m-8 w-96 rounded shadow-md border-[1px] border-gray-700 rounded-xl"
            >
              <h2 className="text-xs font-light text-white">{data.title}</h2>
              <p className="text-lg font-bold text-yellow-500">{data.amount}</p>
              <p
                className={`text-sm ${
                  data.percent.startsWith("+")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {data.percent}
              </p>
            </div>
          ))}
        </div>
        <div>
          <BarChart
            width={500}
            height={300}
            series={[
              {
                data: pData,
                label: "pv",
                id: "pvId",
                stack: "total",
                color: "#2196F3",
              },
            ]}
            xAxis={[
              {
                data: xLabels,
                scaleType: "band",
                label: "Pages",
                tickLabelStyle: { fill: "white" }, // 👈 change X-axis text color
              },
            ]}
            yAxis={[
              {
                label: "Value",
                tickLabelStyle: { fill: "white" }, // 👈 change Y-axis text color
              },
            ]}
            sx={{
              "& .MuiChartsAxis-tickLabel": {
                fill: "white", // default tick labels
              },
              "& .MuiChartsLegend-root": {
                color: "white", // legend text
              },
              "& .MuiChartsTooltip-root": {
                color: "black", // tooltip text (if tooltip background is light)
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Financial;
