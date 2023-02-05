
it('should calculate the monthly rate correctly', function (){
  const values ={
  amount: 15000,
  years: 6,
  rate: 7.5,
};
  expect (calculateMonthlyPayment(values)).toEqual('259.35')
});

it("should return a result with 2 decimal places", function() {
const values = {
  amount: 15050,
  years: 6,
  rate: 7.5,
};
  expect (calculateMonthlyPayment(values)).toEqual('261.00')
});

/// etc
