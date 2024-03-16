//დავიჭიროთ ყველა საჭირო ელემენტი რომელზეც გვინდა ზემოქმედება
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

//გადავამოწმოთ
console.log(numberInput);
console.log(convertBtn);
console.log(result);

//შევქმნათ ფუნქცია სადაც ათობითს გადავიყვანთ ორობითშ
function decimalToBinary(input) {
  const inputs = [];
  const quotients = [];
  const remainders = [];
  //while ციკლი აგრძელებს გამეორებას მანამ, სანამ `input`-ის მნიშვნელობა 0-ზე მეტია.
  while (input > 0) {
    // ყოფს ორზე ამრგვალებს რიცხვს უახლოეს მთელ რიცხვამდე და პასუხს ინახავს ცვლადში
    // 5/ 2 = 2.5 არის კოეფიციენტი.
    //მოკლედ quotient არის ის მთელი რიცხვი  თუ რამდენჯერ მოთავსდება გასაყოფში გამყოფი.
    const quotient = Math.floor(input / 2);
    //ინფუთს ყოფს ორზე და აბრუნებს ნაშთს და ინახავს ნაშსთს ცვლადში
    const remainder = input % 2;
    // ინფუთს , კოეფიციენტს და ნაშსთს ვამატებთ შესაბამის მასიში.
    inputs.push(input);
    quotients.push(quotient);
    remainders.push(remainder);

    //ციკლის შიგნით, `input` განახლდება `quotient`-ის მნიშვნელობით ყოველი
    //გამეორების ბოლოს. საბოლოოდ, `input` გახდება 0-ზე ნაკლები ან ტოლი,
    // რა დროსაც ციკლი ბუნებრივად შეწყდება, რადგან პირობა `input > 0` აღარ იქნება
    //ჭეშმარიტი.
    input = quotient;
  }
  console.log("Inputs: ", inputs);
  console.log("Quotients: ", quotients);
  console.log("Remainders: ", remainders);
}

//შევქმნათ ფუნქცია სადაც შევამოწმებთ რა ჩაწერა იუზერმა ინფუთში
function checkUserInput() {
  console.log(numberInput.value);
  //თუ ინფუთი არის ცარიელი ან იყო ჩაწერილი და მერე გახდა ცარიელი ან
  // გამოყენებულია მთელი ან უარყოფითი რიცხვები ან საერთოდ არ არის რიცხვი
  //მაშინ გამოვიდეს გაფრთხილება
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
    window.alert("Please provide a decimal number");
    //ჩემი აზრით return ი აქ აკეთებს ასეთ რამე რომ თუ ინფუთი ცარიელი კვლავ ან რიცხვის
    //მაგვირად სხვა რამე წერია და მოკლედ პირობებში არ ჯდება კოდს არ უშვებს შემდეგ
    //ეტაპზე და ხელახლა აბრუნებს თავიდან ანუ არ გადადის შემდეგ მოქმედებებზე და
    //დაწერილ კოდს აწყებინებს მოქმედებასთავიდან.
    return;
  }
  //ფუნქციას გავატანოთ იუზერის მიერ ჩაწერილი და ჩვენს მიერ გადამოწმებული ინგუთი
  //არგუმნეტად და გავასუფთაოთ ინფუთი
  decimalToBinary(parseInt(numberInput.value));
  numberInput.value = "";
}

//ავამუშაოთ ღილაკი და გამოვიტანოთ კონსოლში ინფუთში შყვანილი მნიშვნელობები
//მეორე არგუმენტად გადავეცით ქოლბექ ფუნქცია
convertBtn.addEventListener("click", checkUserInput);

//ახლა ავამუშაოთ ინფუთი ასევე ენთერის დაწკაპუნებაზეც
//მას გადავცეთ მეორე არგუმენტად ეროუ ფუნქცია
//გადავცეთ ევენთ პარამეტრი და მასზე გამოვიყრნოთ key ფროფერთი
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
