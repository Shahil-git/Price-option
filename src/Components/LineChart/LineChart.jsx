import { LineChart as LChart, Line, CartesianGrid, XAxis, YAxis,Tooltip } from 'recharts';

const LineChart = () => {

    
       const mathMarksData = [
        
              {
                "name": "Emily Johnson",
                "math_marks": 85,
                "accounting_marks": 75,
                "finance_marks": 80
              },
              {
                "name": "DanielS Smith",
                "math_marks": 78,
                "accounting_marks": 80,
                "finance_marks": 70
              },
              {
                "name": "Olivia Brown",
                "math_marks": 92,
                "accounting_marks": 85,
                "finance_marks": 90
              },
              {
                "name": "Michael Davis",
                "math_marks": 65,
                "accounting_marks": 60,
                "finance_marks": 55
              },
              {
                "name": "Emma Wilson",
                "math_marks": 70,
                "accounting_marks": 75,
                "finance_marks": 65
              },
              {
                "name": "Sophia Martinez",
                "math_marks": 88,
                "accounting_marks": 85,
                "finance_marks": 80
              },
              {
                "name": "James Taylor",
                "math_marks": 75,
                "accounting_marks": 70,
                "finance_marks": 75
              },
              {
                "name": "Ava Anderson",
                "math_marks": 82,
                "accounting_marks": 78,
                "finance_marks": 85
              },
              {
                "name": "William Thomas",
                "math_marks": 79,
                "accounting_marks": 80,
                "finance_marks": 75
              },
              {
                "name": "Isabella Jackson",
                "math_marks": 95,
                "accounting_marks": 90,
                "finance_marks": 95
              }
            ]
          
      
     return (
        <div>
            <LChart width={1000} height={600} data={mathMarksData} sm:width={100} sm:height={200}  margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line dataKey="math_marks" stroke='#eb3b5a'></Line>
        <Line dataKey="accounting_marks" stroke='#8854d0'></Line>
        <Line dataKey="finance_marks" stroke='#12CBC4'></Line>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
            </LChart>
        </div>
    );
};

export default LineChart;