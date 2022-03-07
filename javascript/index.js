// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step2}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step3}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step4) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step4}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step5) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step5}</li>`;
                    getInstruction(
                      "mashedPotatoes",
                      5,
                      (step6) => {
                        document.querySelector(
                          "#mashedPotatoes"
                        ).innerHTML += `<li>${step6}</li>`;
                        getInstruction(
                          "mashedPotatoes",
                          6,
                          (step7) => {
                            document.querySelector(
                              "#mashedPotatoes"
                            ).innerHTML += `<li>${step7}</li>`;
                          },
                          (error) => console.log(error)
                        );
                      },
                      (error) => console.log(error)
                    );
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

//getInstruction("mashedPotatoes", 1, (step2) => {
//document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
//}, (error) => console.log(error));

//getInstruction("mashedPotatoes", 2, (step3) => {
//document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
//}, (error) => console.log(error));

//getInstruction("mashedPotatoes", 3, (step4) => {
//document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
//}, (error) => console.log(error));

//getInstruction("mashedPotatoes", 4, (step5) => {
//document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
//}, (error) => console.log(error));

// Iteration 1 - using callbacks
// ...

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 7);
  })
    .then((step7) => {
      document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
      return obtainInstruction("steak", 8);
    })

// Iteration 3 using async/await
async function makeBroccoli() {
  const result = await obtainInstruction("broccoli", 0);
  document.querySelector("#broccoli").innerHTML += `<li>${result}</li>`;
  const result1 = await obtainInstruction("broccoli", 1);
  document.querySelector("#broccoli").innerHTML += `<li>${result1}</li>`;
  const result2 = await obtainInstruction("broccoli", 2);
  document.querySelector("#broccoli").innerHTML += `<li>${result2}</li>`;
  const result3 = await obtainInstruction("broccoli", 3);
  document.querySelector("#broccoli").innerHTML += `<li>${result3}</li>`;
  const result4 = await obtainInstruction("broccoli", 4);
  document.querySelector("#broccoli").innerHTML += `<li>${result4}</li>`;
  const result5 = await obtainInstruction("broccoli", 5);
  document.querySelector("#broccoli").innerHTML += `<li>${result5}</li>`;
  const result6 = await obtainInstruction("broccoli", 6);
  document.querySelector("#broccoli").innerHTML += `<li>${result6}</li>`;
  const result7 = await obtainInstruction("broccoli", 7);
  document.querySelector("#broccoli").innerHTML += `<li>${result7}</li>`;
}
makeBroccoli();
// Bonus 2 - Promise all
//const allTogether= Promise.all(obtainInstruction('brusselSprouts'))
//document.querySelector("#brusselSprouts").innerHTML += `<li>${allTogether}</li>`
//obtainInstruction('brusselsSprouts').then((result)=>console.log(result));
const array = [];
for (let i = 0; i < 8; i++) {
  array.push(obtainInstruction("brusselsSprouts", i));
}
let mealPromise = Promise.all(array);
mealPromise.then((result) => {
  result.forEach((element)=>{
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${element}</li>`
  })
}).then(()=>{
  document.querySelector("#brusselsSprouts").innerHTML += '<li>Brussels Sprouts are ready!</li>'
});
