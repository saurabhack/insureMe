import policy from "../models/policies.model.js"

function addPolicies(req,res){
    const policyData = [
         {
          name: "Health Insurance",
          description: "Comprehensive health coverage for medical expenses, hospitalization, and emergency care.",
          coverage: "✔ Hospitalization ✔ Doctor Visits ✔ Prescription Drugs",
          premium: "$200/month",
          terms: "Covers pre-existing conditions after 2 years. No coverage for cosmetic treatments.",
          image: "https://source.unsplash.com/800x500/?hospital,healthcare",
        },
         {
          name: "Car Insurance",
          description: "Protect your vehicle from accidents, theft, and damages.",
          coverage: "✔ Accidental Damage ✔ Theft ✔ Third-Party Liability",
          premium: "$150/month",
          terms: "Covers damages up to $50,000. Deductible of $500 applies.",
          image: "https://source.unsplash.com/800x500/?car,insurance",
        },
         {
          name: "Home Insurance",
          description: "Secure your home from fire, theft, and natural disasters.",
          coverage: "✔ Fire ✔ Flood ✔ Theft ✔ Natural Disasters",
          premium: "$100/month",
          terms: "Does not cover damages due to negligence. Includes temporary accommodation costs.",
          image: "https://source.unsplash.com/800x500/?house,home",
        },
    ]
    const dataSuccess=null
    policyData.map(async(element) => {
        return await policy.create({title:element.name,description:element.description,coverage:element.coverage,cost:element.premium,terms:element.terms})
    })
    if(!dataSuccess){
        console.log("something went wrong !!")
        return res.json({message:"something went wrong"})
    }else{
        return res.json({message:"successfully addedd!!"})
    }
}
export default addPolicies